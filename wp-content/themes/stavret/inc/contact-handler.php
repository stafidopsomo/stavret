<?php
/**
 * Stavret Theme — Contact form submission handler
 */

defined('ABSPATH') || exit;

add_action('admin_post_stavret_contact', 'stavret_handle_contact_submission');
add_action('admin_post_nopriv_stavret_contact', 'stavret_handle_contact_submission');

const STAVRET_CONTACT_MAX_NAME    = 150;
const STAVRET_CONTACT_MAX_EMAIL   = 200;
const STAVRET_CONTACT_MAX_SUBJECT = 200;
const STAVRET_CONTACT_MAX_MESSAGE = 5000;

/**
 * mb_substr() requires the mbstring extension, which is not guaranteed on
 * every PHP build. Fall back to substr() when it's unavailable so the
 * handler never fatals on a misconfigured host.
 */
function stavret_safe_substr($string, $length) {
    if (function_exists('mb_substr')) {
        return mb_substr($string, 0, $length);
    }

    return substr($string, 0, $length);
}

/**
 * Private lead CPT — stores every enquiry so it's recoverable even if
 * SMTP is unconfigured or wp_mail() fails. Admin-only: not public, not in
 * REST, not searchable.
 */
add_action('init', function () {
    register_post_type('stavret_lead', [
        'labels' => [
            'name'          => __('Leads', 'stavret'),
            'singular_name' => __('Lead', 'stavret'),
            'all_items'     => __('Contact Leads', 'stavret'),
            'view_item'     => __('View Lead', 'stavret'),
            'search_items'  => __('Search Leads', 'stavret'),
            'not_found'     => __('No leads found', 'stavret'),
        ],
        'public'          => false,
        'publicly_queryable' => false,
        'exclude_from_search' => true,
        'show_ui'         => true,
        'show_in_menu'    => true,
        'show_in_rest'    => false,
        'has_archive'     => false,
        'rewrite'         => false,
        'query_var'       => false,
        'capability_type' => 'page',
        'map_meta_cap'    => true,
        'supports'        => ['title', 'editor'],
        'menu_icon'       => 'dashicons-email-alt',
    ]);
});

/**
 * Recipient address for contact form submissions.
 * Filterable via 'stavret_contact_recipient'; falls back to the site admin email.
 */
function stavret_contact_recipient() {
    return apply_filters('stavret_contact_recipient', get_option('admin_email'));
}

function stavret_contact_redirect($args) {
    $url = add_query_arg($args, home_url('/contact/'));
    wp_safe_redirect($url);
    exit;
}

/**
 * Persists a sanitized submission as a private stavret_lead post so the
 * enquiry survives even if mail delivery fails or SMTP is misconfigured.
 */
function stavret_store_lead($name, $email, $subject, $message) {
    $lead_id = wp_insert_post([
        'post_type'    => 'stavret_lead',
        'post_status'  => 'private',
        'post_title'   => sprintf('%s — %s', $name !== '' ? $name : 'Unknown', $subject !== '' ? $subject : 'Enquiry'),
        'post_content' => $message,
        'post_excerpt' => $email,
    ], true);

    if (is_wp_error($lead_id)) {
        return 0;
    }

    update_post_meta($lead_id, '_stavret_lead_name', $name);
    update_post_meta($lead_id, '_stavret_lead_email', $email);
    update_post_meta($lead_id, '_stavret_lead_subject', $subject);
    update_post_meta($lead_id, '_stavret_lead_message', $message);
    update_post_meta($lead_id, '_stavret_lead_mail_status', 'pending');

    return $lead_id;
}

function stavret_update_lead_mail_status($lead_id, $status, $error = '') {
    if (! $lead_id) {
        return;
    }

    update_post_meta($lead_id, '_stavret_lead_mail_status', $status);

    if ($error !== '') {
        update_post_meta($lead_id, '_stavret_lead_mail_error', $error);
    }
}

function stavret_handle_contact_submission() {
    if (
        ! isset($_POST['stavret_contact_nonce']) ||
        ! wp_verify_nonce(wp_unslash($_POST['stavret_contact_nonce']), 'stavret_contact')
    ) {
        stavret_contact_redirect(['contact_error' => 'nonce']);
    }

    // Honeypot: a hidden field real visitors never fill in. Bots that
    // populate every input trip this and get silently discarded — no
    // lead is stored, no mail is sent.
    if (! empty($_POST['contact_hp'])) {
        stavret_contact_redirect(['sent' => '1']);
    }

    $name    = isset($_POST['contact_name']) ? sanitize_text_field(wp_unslash($_POST['contact_name'])) : '';
    $email   = isset($_POST['contact_email']) ? sanitize_email(wp_unslash($_POST['contact_email'])) : '';
    $subject = isset($_POST['contact_subject']) ? sanitize_text_field(wp_unslash($_POST['contact_subject'])) : '';
    $message = isset($_POST['contact_message']) ? sanitize_textarea_field(wp_unslash($_POST['contact_message'])) : '';

    // Defense-in-depth for mail headers: make CR/LF stripping explicit before
    // using visitor-controlled values in the Reply-To header or subject line.
    $name    = str_replace(["\r", "\n"], '', $name);
    $email   = str_replace(["\r", "\n"], '', $email);
    $subject = str_replace(["\r", "\n"], '', $subject);

    // Server-side length caps, independent of any client-side maxlength.
    $name    = stavret_safe_substr($name, STAVRET_CONTACT_MAX_NAME);
    $email   = stavret_safe_substr($email, STAVRET_CONTACT_MAX_EMAIL);
    $subject = stavret_safe_substr($subject, STAVRET_CONTACT_MAX_SUBJECT);
    $message = stavret_safe_substr($message, STAVRET_CONTACT_MAX_MESSAGE);

    if ('' === $name || '' === $message || '' === $email || ! is_email($email)) {
        stavret_contact_redirect(['contact_error' => 'fields']);
    }

    $lead_id = stavret_store_lead($name, $email, $subject, $message);

    $to = stavret_contact_recipient();

    $mail_subject = $subject !== ''
        ? sprintf('[Stavret Contact] %s', $subject)
        : '[Stavret Contact] New enquiry';

    $body = sprintf(
        "Name: %s\nEmail: %s\nSubject: %s\n\nMessage:\n%s",
        $name,
        $email,
        $subject !== '' ? $subject : '(none)',
        $message
    );

    // Reply-To carries the visitor's address; From stays on the site's own domain
    // to avoid header injection and SPF/DMARC failures from spoofing arbitrary senders.
    $reply_to_name = addcslashes($name, '"\\');
    $headers = [
        sprintf('Reply-To: "%s" <%s>', $reply_to_name, $email),
    ];

    $mail_error = '';
    add_action('wp_mail_failed', function ($error) use (&$mail_error) {
        $mail_error = $error->get_error_message();
    });

    $sent = wp_mail($to, $mail_subject, $body, $headers);

    stavret_update_lead_mail_status($lead_id, $sent ? 'sent' : 'failed', $mail_error);

    if (! $sent) {
        stavret_contact_redirect(['contact_error' => 'mail']);
    }

    stavret_contact_redirect(['sent' => '1']);
}

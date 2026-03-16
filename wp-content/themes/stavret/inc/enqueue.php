<?php
/**
 * Stavret — Script & Style Enqueuing
 */

defined('ABSPATH') || exit;

add_action('wp_enqueue_scripts', function () {
    $dist     = get_template_directory() . '/assets/dist';
    $dist_uri = get_template_directory_uri() . '/assets/dist';
    $manifest = $dist . '/.vite/manifest.json';

    if (!file_exists($manifest)) {
        return;
    }

    $m = json_decode(file_get_contents($manifest), true);

    // ── Shared vendor/runtime chunk ──────────────────────────────
    // Vite splits a shared chunk (_index-*.js) that both entries import.
    // Enqueue it first so the entry scripts can depend on it.
    $shared_handle = null;
    foreach ($m as $key => $entry) {
        if (!isset($entry['isEntry']) && str_ends_with($entry['file'], '.js')) {
            $shared_handle = 'stavret-vendor';
            wp_enqueue_script(
                $shared_handle,
                $dist_uri . '/' . $entry['file'],
                [],
                null,
                true
            );
            break;
        }
    }

    // ── CSS ──────────────────────────────────────────────────────
    foreach ($m as $key => $entry) {
        if (str_ends_with($entry['file'], '.css')) {
            wp_enqueue_style('stavret-main', $dist_uri . '/' . $entry['file'], [], null);
            break;
        }
    }

    // ── Main entry (all pages) ───────────────────────────────────
    if (isset($m['js/main.tsx'])) {
        $deps = $shared_handle ? [$shared_handle] : [];
        wp_enqueue_script('stavret-main', $dist_uri . '/' . $m['js/main.tsx']['file'], $deps, null, true);
    }

    // ── Gallery entry (gallery page only) ───────────────────────
    if (is_page('gallery') && isset($m['js/gallery.tsx'])) {
        $deps = $shared_handle ? [$shared_handle] : [];
        wp_enqueue_script('stavret-gallery', $dist_uri . '/' . $m['js/gallery.tsx']['file'], $deps, null, true);
    }
});

// Add type="module" to all stavret scripts (required for Vite ESM)
add_filter('script_loader_tag', function ($tag, $handle) {
    if (str_starts_with($handle, 'stavret-')) {
        $tag = str_replace(' type="text/javascript"', '', $tag);
        return str_replace(' src=', ' type="module" src=', $tag);
    }
    return $tag;
}, 10, 2);

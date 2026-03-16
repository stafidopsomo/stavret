<?php
/**
 * Stavret — Meta Boxes for Project CPT
 */

defined('ABSPATH') || exit;

add_action('add_meta_boxes', function () {
    add_meta_box(
        'stavret_project_details',
        __('Project Details', 'stavret'),
        'stavret_project_details_cb',
        'project',
        'normal',
        'high'
    );
});

function stavret_project_details_cb(WP_Post $post): void {
    wp_nonce_field('stavret_project_details_nonce', 'stavret_nonce');

    $client      = get_post_meta($post->ID, '_project_client', true);
    $year        = get_post_meta($post->ID, '_project_year', true);
    $location    = get_post_meta($post->ID, '_project_location', true);
    $description = get_post_meta($post->ID, '_project_description', true);

    ?>
    <table class="form-table">
        <tr>
            <th><label for="project_client"><?php _e('Client', 'stavret'); ?></label></th>
            <td><input type="text" id="project_client" name="project_client" value="<?php echo esc_attr($client); ?>" class="regular-text" /></td>
        </tr>
        <tr>
            <th><label for="project_year"><?php _e('Year', 'stavret'); ?></label></th>
            <td><input type="number" id="project_year" name="project_year" value="<?php echo esc_attr($year); ?>" min="1990" max="2099" style="width:100px" /></td>
        </tr>
        <tr>
            <th><label for="project_location"><?php _e('Location', 'stavret'); ?></label></th>
            <td><input type="text" id="project_location" name="project_location" value="<?php echo esc_attr($location); ?>" class="regular-text" /></td>
        </tr>
        <tr>
            <th><label for="project_description"><?php _e('Description', 'stavret'); ?></label></th>
            <td><textarea id="project_description" name="project_description" rows="4" class="large-text"><?php echo esc_textarea($description); ?></textarea></td>
        </tr>
    </table>
    <?php
}

add_action('save_post_project', function (int $post_id): void {
    if (!isset($_POST['stavret_nonce']) || !wp_verify_nonce($_POST['stavret_nonce'], 'stavret_project_details_nonce')) return;
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) return;
    if (!current_user_can('edit_post', $post_id)) return;

    $fields = [
        '_project_client'      => 'project_client',
        '_project_year'        => 'project_year',
        '_project_location'    => 'project_location',
        '_project_description' => 'project_description',
    ];

    foreach ($fields as $meta_key => $post_key) {
        if (isset($_POST[$post_key])) {
            update_post_meta($post_id, $meta_key, sanitize_text_field($_POST[$post_key]));
        }
    }
});

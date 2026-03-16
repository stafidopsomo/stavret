<?php
/**
 * Stavret — Dev Data Seeder
 * Guard: option stavret_data_seeded
 * To re-seed: ddev exec wp option delete stavret_data_seeded && ddev exec wp eval 'do_action("init");'
 */

defined('ABSPATH') || exit;

add_action('init', function () {
    if (get_option('stavret_data_seeded')) return;

    // Create taxonomy terms
    $categories = [
        'Residential' => 'residential',
        'Commercial'  => 'commercial',
        'Cultural'    => 'cultural',
        'Interior'    => 'interior',
    ];

    $term_ids = [];
    foreach ($categories as $name => $slug) {
        $term = wp_insert_term($name, 'project_category', ['slug' => $slug]);
        if (!is_wp_error($term)) {
            $term_ids[$slug] = $term['term_id'];
        }
    }

    // Sample projects
    $projects = [
        [
            'title'    => 'Karaiskaki Residence',
            'category' => 'residential',
            'client'   => 'Private Client',
            'year'     => '2023',
            'location' => 'Piraeus, Greece',
            'desc'     => 'A minimalist private residence that balances open living spaces with private retreats, using raw concrete and natural light as primary materials.',
            'image'    => 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&auto=format&fit=crop',
        ],
        [
            'title'    => 'Stavros Office Tower',
            'category' => 'commercial',
            'client'   => 'Stavros Holdings',
            'year'     => '2022',
            'location' => 'Athens, Greece',
            'desc'     => 'A six-storey commercial building designed around a central light well, creating a dynamic interplay between solid and void.',
            'image'    => 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&auto=format&fit=crop',
        ],
        [
            'title'    => 'Nikaia Community Centre',
            'category' => 'cultural',
            'client'   => 'Municipality of Nikaia',
            'year'     => '2024',
            'location' => 'Nikaia, Greece',
            'desc'     => 'A civic building designed to serve as a gathering place for the local community, emphasizing transparency and public accessibility.',
            'image'    => 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop',
        ],
        [
            'title'    => 'Aegean Loft Interior',
            'category' => 'interior',
            'client'   => 'Private Client',
            'year'     => '2023',
            'location' => 'Syros, Greece',
            'desc'     => 'Interior renovation of a traditional island building, reinterpreting Cycladic architecture through a contemporary lens.',
            'image'    => 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop',
        ],
        [
            'title'    => 'Plateia House',
            'category' => 'residential',
            'client'   => 'Private Client',
            'year'     => '2021',
            'location' => 'Nikaia, Greece',
            'desc'     => 'Urban infill housing project that responds to the existing city fabric while introducing a new typology for compact living.',
            'image'    => 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&auto=format&fit=crop',
        ],
        [
            'title'    => 'Elliniko Cultural Hub',
            'category' => 'cultural',
            'client'   => 'Cultural Foundation',
            'year'     => '2024',
            'location' => 'Athens, Greece',
            'desc'     => 'An adaptive reuse project transforming a former industrial building into a multi-disciplinary cultural centre.',
            'image'    => 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&auto=format&fit=crop',
        ],
    ];

    foreach ($projects as $p) {
        $post_id = wp_insert_post([
            'post_title'   => $p['title'],
            'post_status'  => 'publish',
            'post_type'    => 'project',
            'post_excerpt' => $p['desc'],
        ]);

        if (is_wp_error($post_id)) continue;

        if (isset($term_ids[$p['category']])) {
            wp_set_object_terms($post_id, $term_ids[$p['category']], 'project_category');
        }

        update_post_meta($post_id, '_project_client',      $p['client']);
        update_post_meta($post_id, '_project_year',        $p['year']);
        update_post_meta($post_id, '_project_location',    $p['location']);
        update_post_meta($post_id, '_project_description', $p['desc']);

        // Set featured image from external URL
        $image_id = stavret_sideload_image($p['image'], $post_id, $p['title']);
        if ($image_id && !is_wp_error($image_id)) {
            set_post_thumbnail($post_id, $image_id);
        }
    }

    update_option('stavret_data_seeded', '1');
});

function stavret_sideload_image(string $url, int $post_id, string $desc): int|WP_Error {
    require_once ABSPATH . 'wp-admin/includes/media.php';
    require_once ABSPATH . 'wp-admin/includes/file.php';
    require_once ABSPATH . 'wp-admin/includes/image.php';
    return media_sideload_image($url, $post_id, $desc, 'id');
}

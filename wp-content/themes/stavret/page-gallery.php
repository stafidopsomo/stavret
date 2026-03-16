<?php
/**
 * Template Name: Gallery
 * Template Post Type: page
 */

// Build project images array from CPT
$projects = new WP_Query([
    'post_type'      => 'project',
    'posts_per_page' => -1,
    'orderby'        => 'date',
    'order'          => 'DESC',
]);

$all_images = [];
if ($projects->have_posts()) {
    while ($projects->have_posts()) {
        $projects->the_post();
        if (has_post_thumbnail()) {
            $all_images[] = [
                'src' => get_the_post_thumbnail_url(get_the_ID(), 'large'),
                'alt' => get_the_title(),
            ];
        }
    }
    wp_reset_postdata();
}

// Distribute across 3 columns (fallback to defaults if no images)
$left   = array_values(array_filter($all_images, fn($k) => $k % 3 === 0, ARRAY_FILTER_USE_KEY));
$center = array_values(array_filter($all_images, fn($k) => $k % 3 === 1, ARRAY_FILTER_USE_KEY));
$right  = array_values(array_filter($all_images, fn($k) => $k % 3 === 2, ARRAY_FILTER_USE_KEY));

// Only include keys with data — omitting lets React use its built-in defaults
$config_data = [];
if (!empty($left))   $config_data['leftImages']   = $left;
if (!empty($center)) $config_data['centerImages'] = $center;
if (!empty($right))  $config_data['rightImages']  = $right;
$config = wp_json_encode($config_data);

get_header();
?>

<main id="main-content">
    <div
        id="stavret-gallery"
        data-config="<?php echo esc_attr($config); ?>"
        style="min-height:100vh"
    ></div>
</main>

<?php get_footer(); ?>

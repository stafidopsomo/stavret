<?php
/**
 * Stavret Theme — functions.php
 */

defined('ABSPATH') || exit;

// Theme setup
add_action('after_setup_theme', function () {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', ['search-form', 'comment-form', 'comment-list', 'gallery', 'caption']);
    load_theme_textdomain('stavret', get_template_directory() . '/languages');

    register_nav_menus([
        'primary' => __('Primary Navigation', 'stavret'),
    ]);
});

// Includes
require_once get_template_directory() . '/inc/enqueue.php';
require_once get_template_directory() . '/inc/cpt.php';
require_once get_template_directory() . '/inc/meta-boxes.php';
require_once get_template_directory() . '/inc/seeder.php';

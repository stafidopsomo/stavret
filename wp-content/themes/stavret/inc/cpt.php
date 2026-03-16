<?php
/**
 * Stavret — Custom Post Types & Taxonomies
 */

defined('ABSPATH') || exit;

add_action('init', function () {

    // CPT: Project
    register_post_type('project', [
        'labels' => [
            'name'               => __('Projects', 'stavret'),
            'singular_name'      => __('Project', 'stavret'),
            'add_new'            => __('Add New', 'stavret'),
            'add_new_item'       => __('Add New Project', 'stavret'),
            'edit_item'          => __('Edit Project', 'stavret'),
            'all_items'          => __('All Projects', 'stavret'),
            'view_item'          => __('View Project', 'stavret'),
            'search_items'       => __('Search Projects', 'stavret'),
            'not_found'          => __('No projects found', 'stavret'),
        ],
        'public'             => true,
        'has_archive'        => false,
        'show_in_rest'       => true,
        'supports'           => ['title', 'thumbnail', 'excerpt'],
        'menu_icon'          => 'dashicons-building',
        'rewrite'            => ['slug' => 'projects'],
    ]);

    // Taxonomy: Project Category
    register_taxonomy('project_category', 'project', [
        'labels' => [
            'name'              => __('Project Categories', 'stavret'),
            'singular_name'     => __('Project Category', 'stavret'),
            'search_items'      => __('Search Categories', 'stavret'),
            'all_items'         => __('All Categories', 'stavret'),
            'edit_item'         => __('Edit Category', 'stavret'),
            'update_item'       => __('Update Category', 'stavret'),
            'add_new_item'      => __('Add New Category', 'stavret'),
            'new_item_name'     => __('New Category Name', 'stavret'),
            'menu_name'         => __('Categories', 'stavret'),
        ],
        'hierarchical'      => true,
        'show_in_rest'      => true,
        'rewrite'           => ['slug' => 'project-category'],
    ]);

    flush_rewrite_rules(false);
});

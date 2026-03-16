<?php
/**
 * Template: Homepage / Front Page
 */
get_header();

$config = wp_json_encode([
    'contactUrl' => get_permalink(get_page_by_path('contact')),
    'aboutUrl'   => get_permalink(get_page_by_path('about')),
]);
?>

<main id="main-content">
    <!-- Hero: React island -->
    <div
        id="stavret-hero"
        data-config="<?php echo esc_attr($config); ?>"
        style="min-height:100vh"
    ></div>

    <!-- Featured projects strip -->
    <?php
    $featured = new WP_Query([
        'post_type'      => 'project',
        'posts_per_page' => 3,
        'orderby'        => 'date',
        'order'          => 'DESC',
    ]);
    if ($featured->have_posts()) : ?>
    <section class="stavret-featured">
        <div class="stavret-featured__inner">
            <header class="stavret-section-header" data-reveal>
                <p class="stavret-section-label">Selected Work</p>
                <h2 class="stavret-section-title">Recent Projects</h2>
                <a href="<?php echo esc_url(home_url('/gallery')); ?>" class="stavret-section-link">
                    View all <span aria-hidden="true">→</span>
                </a>
            </header>

            <div class="stavret-project-grid">
                <?php $reveal_index = 1; while ($featured->have_posts()) : $featured->the_post(); ?>
                <?php
                $year     = get_post_meta(get_the_ID(), '_project_year', true);
                $location = get_post_meta(get_the_ID(), '_project_location', true);
                ?>
                <article class="stavret-project-card" data-reveal data-delay="<?php echo $reveal_index++; ?>">
                    <div class="stavret-project-card__image<?php echo !has_post_thumbnail() ? ' stavret-project-card__image--empty' : ''; ?>">
                        <?php if (has_post_thumbnail()) : ?>
                            <?php the_post_thumbnail('large', ['alt' => get_the_title(), 'loading' => 'lazy']); ?>
                        <?php endif; ?>
                    </div>
                    <div class="stavret-project-card__body">
                        <p class="stavret-project-card__meta">
                            <?php echo esc_html($year); ?>
                            <?php if ($location) : ?>
                            <span aria-hidden="true"> · </span><?php echo esc_html($location); ?>
                            <?php endif; ?>
                        </p>
                        <h3 class="stavret-project-card__title"><?php the_title(); ?></h3>
                        <p class="stavret-project-card__excerpt"><?php echo esc_html(get_the_excerpt()); ?></p>
                    </div>
                </article>
                <?php endwhile; wp_reset_postdata(); ?>
            </div>
        </div>
    </section>
    <?php endif; ?>
</main>

<style>
/* Featured section
   .stavret-section-label is defined globally in main.css */
.stavret-featured {
    padding: 8rem 2rem;
    background: var(--color-black);
}
.stavret-featured__inner {
    max-width: 1440px;
    margin: 0 auto;
}
.stavret-section-header {
    display: flex;
    align-items: baseline;
    gap: 1.5rem;
    margin-bottom: 4rem;
    flex-wrap: wrap;
}
.stavret-section-title {
    font-family: var(--font-heading);
    font-size: 2rem;
    font-weight: 400;
    color: var(--color-white);
    margin: 0;
    flex: 1;
}
.stavret-section-link {
    font-family: var(--font-sans);
    font-size: 0.75rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--color-gray-400);
    text-decoration: none;
    transition: color 200ms ease;
}
.stavret-section-link:hover { color: var(--color-white); }

/* Project grid */
.stavret-project-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2px;
}
@media (max-width: 900px) {
    .stavret-project-grid { grid-template-columns: 1fr; }
}
.stavret-project-card { overflow: hidden; }
.stavret-project-card__image {
    overflow: hidden;
    aspect-ratio: 4/5;
}
.stavret-project-card__image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 600ms cubic-bezier(0.19,1,0.22,1);
    filter: grayscale(15%);
}
.stavret-project-card:hover .stavret-project-card__image img {
    transform: scale(1.04);
}
/* Placeholder when no featured image is set */
.stavret-project-card__image--empty {
    background-color: var(--color-gray-900);
    background-image:
        linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px);
    background-size: 40px 40px;
    border: 1px solid rgba(255,255,255,0.05);
}
.stavret-project-card__body {
    padding: 1.5rem 0;
}
.stavret-project-card__meta {
    font-family: var(--font-sans);
    font-size: 0.7rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--color-gray-500);
    margin: 0 0 0.5rem;
}
.stavret-project-card__title {
    font-family: var(--font-heading);
    font-size: 1.5rem;
    font-weight: 400;
    color: var(--color-white);
    margin: 0 0 0.75rem;
}
.stavret-project-card__excerpt {
    font-family: var(--font-sans);
    font-size: 0.8125rem;
    line-height: 1.7;
    color: var(--color-gray-400);
    margin: 0;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>

<?php get_footer(); ?>

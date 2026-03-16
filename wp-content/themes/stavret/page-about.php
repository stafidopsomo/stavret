<?php
/**
 * Template Name: About
 * Template Post Type: page
 */
get_header();
?>

<main id="main-content">
    <section class="stavret-about">
        <div class="stavret-about__inner">

            <!-- Page header -->
            <header class="stavret-page-header" data-reveal>
                <p class="stavret-section-label">The Studio</p>
                <h1 class="stavret-page-title">Stavret</h1>
            </header>

            <!-- Two-column layout -->
            <div class="stavret-about__grid">
                <div class="stavret-about__lead" data-reveal data-delay="1">
                    <p class="stavret-lead-text">
                        We design spaces that endure — architecture rooted in material honesty,
                        structural clarity, and a deep respect for the people who inhabit them.
                    </p>
                </div>

                <div class="stavret-about__details">
                    <div class="stavret-about__block" data-reveal data-delay="2">
                        <h2 class="stavret-block-heading">Practice</h2>
                        <p class="stavret-about__text">
                            Founded by Stavros in Nikaia, the studio operates across residential,
                            commercial, and cultural typologies. Each project begins from first
                            principles: site, light, programme, and the lived experience of space.
                        </p>
                    </div>

                    <div class="stavret-about__block" data-reveal data-delay="3">
                        <h2 class="stavret-block-heading">Approach</h2>
                        <p class="stavret-about__text">
                            We believe good architecture is inseparable from its context. Our work
                            draws on the tectonic traditions of the Mediterranean while engaging
                            contemporary construction methods and sustainability requirements.
                        </p>
                    </div>

                    <div class="stavret-about__block" data-reveal data-delay="4">
                        <h2 class="stavret-block-heading">Contact</h2>
                        <address class="stavret-about__address">
                            <p>Πλατεία Δημοκρατίας 5</p>
                            <p>Νίκαια, Αττική</p>
                            <p><a href="<?php echo esc_url(home_url('/contact')); ?>">Send a message</a></p>
                        </address>
                    </div>
                </div>
            </div>

        </div>
    </section>
</main>

<style>
/* ── About page layout ──────────────────────────────────────
   .stavret-page-header, .stavret-section-label, .stavret-page-title,
   and .stavret-block-heading are defined globally in main.css */
.stavret-about {
    padding: 10rem 2rem 8rem;
    background: var(--color-black);
    min-height: 100vh;
}
.stavret-about__inner {
    max-width: 1440px;
    margin: 0 auto;
}
.stavret-about__grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6rem;
    align-items: start;
}
@media (max-width: 900px) {
    .stavret-about__grid { grid-template-columns: 1fr; gap: 3rem; }
}
.stavret-lead-text {
    font-family: var(--font-heading);
    font-size: clamp(1.25rem, 2.5vw, 1.875rem);
    font-weight: 300;
    line-height: 1.5;
    color: var(--color-white);
    margin: 0;
    position: sticky;
    top: 7rem;
}
.stavret-about__details {
    display: flex;
    flex-direction: column;
    gap: 3rem;
}
.stavret-about__block {
    padding-top: 2rem;
    border-top: 1px solid rgba(255,255,255,0.08);
}
.stavret-about__text {
    font-family: var(--font-sans);
    font-size: 0.9375rem;
    line-height: 1.8;
    color: var(--color-gray-300);
    margin: 0;
}
.stavret-about__address {
    font-family: var(--font-sans);
    font-size: 0.9375rem;
    line-height: 1.9;
    color: var(--color-gray-300);
    font-style: normal;
}
.stavret-about__address p { margin: 0; }
.stavret-about__address a {
    color: var(--color-white);
    text-decoration: none;
    border-bottom: 1px solid rgba(255,255,255,0.2);
    transition: border-color 200ms ease;
}
.stavret-about__address a:hover { border-color: var(--color-white); }
</style>

<?php get_footer(); ?>

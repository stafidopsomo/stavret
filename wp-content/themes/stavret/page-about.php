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
                <p class="stavret-section-label">Το Γραφείο</p>
                <h1 class="stavret-page-title">Βρεττάκος &amp; Καλιοτζίδου</h1>
            </header>

            <!-- Two-column layout -->
            <div class="stavret-about__grid">
                <div class="stavret-about__lead" data-reveal data-delay="1">
                    <p class="stavret-lead-text">
                        Σχεδιάζουμε χώρους που αντέχουν στο χρόνο — αρχιτεκτονική ριζωμένη στην υλική ειλικρίνεια,
                        τη δομική σαφήνεια και το βαθύ σεβασμό για τους ανθρώπους που τους κατοικούν.
                    </p>
                </div>

                <div class="stavret-about__details">
                    <div class="stavret-about__block" data-reveal data-delay="2">
                        <h2 class="stavret-block-heading">Μελέτη</h2>
                        <p class="stavret-about__text">
                            Το γραφείο ιδρύθηκε από τους αρχιτέκτονες μηχανικούς ΕΜΠ
                            <strong>Βρεττάκο Σταύρο</strong> &amp; <strong>Καλιοτζίδου Μαρία</strong>
                            στη Νίκαια. Δραστηριοποιούμαστε σε κατοικίες, εμπορικά κτίρια
                            και πολιτιστικά έργα. Κάθε μελέτη ξεκινά από τις βασικές αρχές:
                            τόπος, φως, πρόγραμμα και η βιωμένη εμπειρία του χώρου.
                        </p>
                    </div>

                    <div class="stavret-about__block" data-reveal data-delay="3">
                        <h2 class="stavret-block-heading">Προσέγγιση</h2>
                        <p class="stavret-about__text">
                            Πιστεύουμε ότι η καλή αρχιτεκτονική είναι αδιαχώριστη από το περιβάλλον της.
                            Η δουλειά μας αντλεί από τις τεκτονικές παραδόσεις της Μεσογείου,
                            αξιοποιώντας σύγχρονες κατασκευαστικές μεθόδους και απαιτήσεις βιωσιμότητας.
                        </p>
                    </div>

                    <div class="stavret-about__block" data-reveal data-delay="4">
                        <h2 class="stavret-block-heading">Επικοινωνία</h2>
                        <address class="stavret-about__address">
                            <p>Πλ. Δημοκρατίας 5, Νίκαια 184 51</p>
                            <p><a href="tel:+302104936704">210 493 6704</a></p>
                            <p><a href="<?php echo esc_url(home_url('/contact')); ?>">Επικοινωνήστε μαζί μας</a></p>
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

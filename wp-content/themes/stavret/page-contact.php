<?php
/**
 * Template Name: Contact
 * Template Post Type: page
 */
get_header();
?>

<main id="main-content">
    <section class="stavret-contact">
        <div class="stavret-contact__inner">

            <!-- Page header -->
            <header class="stavret-page-header" data-reveal>
                <p class="stavret-section-label">Get in Touch</p>
                <h1 class="stavret-page-title">Contact</h1>
            </header>

            <div class="stavret-contact__grid">
                <!-- Form -->
                <div class="stavret-contact__form-wrap" data-reveal data-delay="1">
                    <form class="stavret-contact__form" method="post" action="<?php echo esc_url(admin_url('admin-post.php')); ?>" novalidate>
                        <?php wp_nonce_field('stavret_contact', 'stavret_contact_nonce'); ?>
                        <input type="hidden" name="action" value="stavret_contact">

                        <div class="stavret-field">
                            <label for="contact-name">Name</label>
                            <input type="text" id="contact-name" name="contact_name" placeholder="Your name" required autocomplete="name">
                        </div>

                        <div class="stavret-field">
                            <label for="contact-email">Email</label>
                            <input type="email" id="contact-email" name="contact_email" placeholder="your@email.com" required autocomplete="email">
                        </div>

                        <div class="stavret-field">
                            <label for="contact-subject">Subject</label>
                            <input type="text" id="contact-subject" name="contact_subject" placeholder="Project enquiry">
                        </div>

                        <div class="stavret-field">
                            <label for="contact-message">Message</label>
                            <textarea id="contact-message" name="contact_message" rows="6" placeholder="Tell us about your project..." required></textarea>
                        </div>

                        <button type="submit" class="btn btn-primary" style="margin-top:0.5rem">
                            Send Message
                        </button>
                    </form>
                </div>

                <!-- Info sidebar -->
                <div class="stavret-contact__info" data-reveal data-delay="2">
                    <div class="stavret-contact__info-block">
                        <h2 class="stavret-block-heading">Studio</h2>
                        <address>
                            <p>Πλ. Δημοκρατίας 5</p>
                            <p>Νίκαια 184 51</p>
                        </address>
                    </div>

                    <div class="stavret-contact__info-block">
                        <h2 class="stavret-block-heading">Τηλέφωνα</h2>
                        <a href="tel:+302104936704" class="stavret-contact__link">210 493 6704</a><br>
                        <a href="tel:+306932168849" class="stavret-contact__link">693 216 8849</a><br>
                        <a href="tel:+306982340977" class="stavret-contact__link">698 234 0977</a>
                    </div>

                    <div class="stavret-contact__info-block">
                        <h2 class="stavret-block-heading">Αρχιτέκτονες</h2>
                        <p class="stavret-contact__meta">Βρεττάκος Σταύρος</p>
                        <p class="stavret-contact__meta">Καλιοτζίδου Μαρία</p>
                        <p class="stavret-contact__meta stavret-contact__meta--dim">Αρχιτέκτονες Μηχανικοί ΕΜΠ</p>
                    </div>

                    <!-- Map placeholder — Nikaia, Attica -->
                    <div class="stavret-map">
                        <iframe
                            title="<?php esc_attr_e('Stavret Studio Location', 'stavret'); ?>"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3145.0!2d23.6421!3d37.9669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDU4JzAwLjgiTiAyM8KwMzgnMzEuNiJF!5e0!3m2!1sel!2sgr!4v1"
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>

        </div>
    </section>
</main>

<style>
.stavret-contact {
    padding: 10rem 2rem 8rem;
    background: var(--color-black);
    min-height: 100vh;
}
.stavret-contact__inner {
    max-width: 1440px;
    margin: 0 auto;
}
.stavret-contact__grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6rem;
    align-items: start;
}
@media (max-width: 900px) {
    .stavret-contact__grid { grid-template-columns: 1fr; gap: 3rem; }
}
/* Form */
.stavret-contact__form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}
.stavret-field {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}
.stavret-field label {
    font-family: var(--font-sans);
    font-size: 0.7rem;
    font-weight: 500;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--color-gray-400);
}
.stavret-field input,
.stavret-field textarea {
    background: transparent;
    border: none;
    border-bottom: 1px solid rgba(255,255,255,0.12);
    color: var(--color-white);
    font-family: var(--font-sans);
    font-size: 0.9375rem;
    padding: 0.75rem 0;
    outline: none;
    transition: border-color 200ms ease;
    resize: none;
    width: 100%;
}
.stavret-field input::placeholder,
.stavret-field textarea::placeholder {
    color: var(--color-gray-600);
}
.stavret-field input:focus,
.stavret-field textarea:focus {
    border-bottom-color: var(--color-white);
}
/* Info sidebar */
.stavret-contact__info {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
}
.stavret-contact__info-block {
    border-top: 1px solid rgba(255,255,255,0.08);
    padding-top: 1.5rem;
}
.stavret-contact__info-block address {
    font-family: var(--font-sans);
    font-size: 0.9375rem;
    line-height: 1.8;
    color: var(--color-gray-300);
    font-style: normal;
}
.stavret-contact__info-block address p { margin: 0; }
.stavret-contact__link {
    font-family: var(--font-sans);
    font-size: 0.9375rem;
    color: var(--color-gray-300);
    text-decoration: none;
    border-bottom: 1px solid rgba(255,255,255,0.15);
    transition: color 200ms ease, border-color 200ms ease;
}
.stavret-contact__link:hover {
    color: var(--color-white);
    border-color: var(--color-white);
}
/* Architect names */
.stavret-contact__meta {
    font-family: var(--font-sans);
    font-size: 0.9375rem;
    color: var(--color-gray-300);
    margin: 0;
    line-height: 1.8;
}
.stavret-contact__meta--dim {
    font-size: 0.8125rem;
    color: var(--color-gray-500);
    margin-top: 0.25rem;
}
/* Map */
.stavret-map {
    width: 100%;
    aspect-ratio: 4/3;
    overflow: hidden;
    filter: grayscale(100%) invert(95%) contrast(80%);
    border: 1px solid rgba(255,255,255,0.06);
}
.stavret-map iframe {
    width: 100%;
    height: 100%;
    border: none;
    display: block;
}
</style>

<?php get_footer(); ?>

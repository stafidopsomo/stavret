<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php wp_head(); ?>
</head>
<body <?php body_class('bg-black text-white'); ?>>
<?php wp_body_open(); ?>

<header id="site-header" class="stavret-header">
    <nav class="stavret-nav" role="navigation" aria-label="<?php esc_attr_e('Primary Navigation', 'stavret'); ?>">
        <!-- Logo -->
        <a href="<?php echo esc_url(home_url('/')); ?>" class="stavret-logo" aria-label="<?php esc_attr_e('Stavret — Home', 'stavret'); ?>">
            Stavret
        </a>

        <!-- Nav links -->
        <ul class="stavret-nav__links" role="list">
            <li>
                <a href="<?php echo esc_url(home_url('/gallery')); ?>"
                   class="nav-link <?php echo is_page('gallery') ? 'active' : ''; ?>">
                    <?php esc_html_e('Projects', 'stavret'); ?>
                </a>
            </li>
            <li>
                <a href="<?php echo esc_url(home_url('/about')); ?>"
                   class="nav-link <?php echo is_page('about') ? 'active' : ''; ?>">
                    <?php esc_html_e('Info', 'stavret'); ?>
                </a>
            </li>
            <li>
                <a href="<?php echo esc_url(home_url('/contact')); ?>"
                   class="nav-link <?php echo is_page('contact') ? 'active' : ''; ?>">
                    <?php esc_html_e('Contact', 'stavret'); ?>
                </a>
            </li>
        </ul>

        <!-- Mobile toggle -->
        <button class="stavret-nav__toggle" aria-label="<?php esc_attr_e('Toggle menu', 'stavret'); ?>" aria-expanded="false">
            <span></span>
            <span></span>
        </button>
    </nav>
</header>

<style>
.stavret-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    padding: 0 2rem;
    height: 72px;
    display: flex;
    align-items: center;
    background: linear-gradient(to bottom, rgba(10,10,10,0.9), transparent);
    backdrop-filter: blur(0px);
    transition: background 300ms ease, backdrop-filter 300ms ease;
}
.stavret-header.scrolled {
    background: rgba(10,10,10,0.92);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid rgba(255,255,255,0.05);
}
.stavret-nav {
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.stavret-logo {
    font-family: var(--font-heading);
    font-size: 1.375rem;
    font-weight: 400;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--color-white);
    text-decoration: none;
}
.stavret-nav__links {
    display: flex;
    align-items: center;
    gap: 2.5rem;
    list-style: none;
    margin: 0;
    padding: 0;
}
.stavret-nav__toggle {
    display: none;
    flex-direction: column;
    gap: 5px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px;
}
.stavret-nav__toggle span {
    display: block;
    width: 22px;
    height: 1px;
    background: var(--color-white);
    transition: transform 250ms ease, opacity 250ms ease;
}
@media (max-width: 768px) {
    .stavret-nav__links {
        display: none;
        position: fixed;
        inset: 0;
        background: var(--color-black);
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2rem;
        z-index: 99;
    }
    .stavret-nav__links.open {
        display: flex;
    }
    .stavret-nav__links .nav-link {
        font-size: 0.875rem;
    }
    .stavret-nav__toggle {
        display: flex;
        position: relative;
        z-index: 100;
    }
}
</style>

<script>
(function() {
    const header = document.getElementById('site-header');
    const toggle = header.querySelector('.stavret-nav__toggle');
    const links  = header.querySelector('.stavret-nav__links');

    window.addEventListener('scroll', function() {
        header.classList.toggle('scrolled', window.scrollY > 40);
    }, { passive: true });

    toggle.addEventListener('click', function() {
        const open = links.classList.toggle('open');
        toggle.setAttribute('aria-expanded', open);
        document.body.style.overflow = open ? 'hidden' : '';
    });

    links.querySelectorAll('a').forEach(function(a) {
        a.addEventListener('click', function() {
            links.classList.remove('open');
            toggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        });
    });
})();
</script>

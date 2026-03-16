<footer id="site-footer">
    <div class="stavret-footer__inner">
        <div class="stavret-footer__top">
            <div class="stavret-footer__brand">
                <a href="<?php echo esc_url(home_url('/')); ?>" class="stavret-logo">Stavret</a>
                <p class="stavret-footer__tagline">Architecture Studio</p>
            </div>

            <nav class="stavret-footer__nav" aria-label="<?php esc_attr_e('Footer Navigation', 'stavret'); ?>">
                <a href="<?php echo esc_url(home_url('/gallery')); ?>" class="nav-link">Projects</a>
                <a href="<?php echo esc_url(home_url('/about')); ?>" class="nav-link">Info</a>
                <a href="<?php echo esc_url(home_url('/contact')); ?>" class="nav-link">Contact</a>
            </nav>
        </div>

        <div class="stavret-footer__divider"></div>

        <div class="stavret-footer__bottom">
            <p class="stavret-footer__address">
                Πλατεία Δημοκρατίας 5, Νίκαια
            </p>
            <p class="stavret-footer__copy">
                &copy; <?php echo esc_html(date('Y')); ?> Stavret. All rights reserved.
            </p>
        </div>
    </div>
</footer>

<style>
#site-footer {
    background: var(--color-black);
    border-top: 1px solid rgba(255,255,255,0.06);
    padding: 4rem 2rem 2rem;
}
.stavret-footer__inner {
    max-width: 1440px;
    margin: 0 auto;
}
.stavret-footer__top {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 2rem;
    padding-bottom: 3rem;
}
.stavret-footer__tagline {
    font-family: var(--font-sans);
    font-size: 0.75rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--color-gray-500);
    margin: 0.5rem 0 0;
}
.stavret-footer__nav {
    display: flex;
    gap: 2rem;
    align-items: center;
}
.stavret-footer__divider {
    height: 1px;
    background: rgba(255,255,255,0.06);
    margin-bottom: 2rem;
}
.stavret-footer__bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
}
.stavret-footer__address,
.stavret-footer__copy {
    font-family: var(--font-sans);
    font-size: 0.75rem;
    color: var(--color-gray-500);
    margin: 0;
    letter-spacing: 0.05em;
}
@media (max-width: 640px) {
    .stavret-footer__top { flex-direction: column; }
    .stavret-footer__bottom { flex-direction: column; align-items: flex-start; }
}
</style>

<?php wp_footer(); ?>

<script>
// Scroll reveal — IntersectionObserver for [data-reveal] elements
(function () {
  if (!('IntersectionObserver' in window)) {
    // Fallback: reveal immediately
    document.querySelectorAll('[data-reveal]').forEach(function (el) {
      el.classList.add('is-visible');
    });
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('[data-reveal]').forEach(function (el) {
    observer.observe(el);
  });
})();
</script>
</body>
</html>

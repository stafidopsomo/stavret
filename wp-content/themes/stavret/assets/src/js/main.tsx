import '../css/main.css';
import { createRoot } from 'react-dom/client';
import { HeroSection } from './components/ui/hero-section';
import { CookieNotice } from './components/ui/cookie-notice';

// Mount: Hero Section (front page)
const heroEl = document.getElementById('stavret-hero');
if (heroEl) {
  const config = JSON.parse(heroEl.dataset.config || '{}');
  createRoot(heroEl).render(<HeroSection {...config} />);
}

// Mount: Cookie Notice (global — all pages)
const cookieEl = document.createElement('div');
cookieEl.id = 'stavret-cookie';
document.body.appendChild(cookieEl);
createRoot(cookieEl).render(<CookieNotice />);

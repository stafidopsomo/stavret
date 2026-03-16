import '../css/main.css';
import { createRoot } from 'react-dom/client';
import { HeroSection } from './components/ui/hero-section';

// Mount: Hero Section (front page)
const heroEl = document.getElementById('stavret-hero');
if (heroEl) {
  const config = JSON.parse(heroEl.dataset.config || '{}');
  createRoot(heroEl).render(<HeroSection {...config} />);
}

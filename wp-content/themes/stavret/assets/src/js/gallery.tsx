import '../css/main.css';
import { createRoot } from 'react-dom/client';
import { GalleryScroll } from './components/ui/sticky-scroll';

// Mount: Gallery Scroll (gallery page)
const galleryEl = document.getElementById('stavret-gallery');
if (galleryEl) {
  const config = JSON.parse(galleryEl.dataset.config || '{}');
  createRoot(galleryEl).render(<GalleryScroll {...config} />);
}

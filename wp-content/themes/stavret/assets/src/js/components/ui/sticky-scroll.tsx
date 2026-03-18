'use client';

import React, { forwardRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ReactLenis } from 'lenis/react';

const EXPO = [0.16, 1, 0.3, 1] as const;

interface GalleryImage {
  src: string;
  alt: string;
}

interface GalleryScrollProps {
  leftImages?: GalleryImage[];
  centerImages?: GalleryImage[];
  rightImages?: GalleryImage[];
}

const defaultLeft: GalleryImage[] = [
  { src: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&auto=format&fit=crop', alt: 'Architecture 1' },
  { src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&auto=format&fit=crop', alt: 'Architecture 2' },
  { src: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&auto=format&fit=crop', alt: 'Architecture 3' },
  { src: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=600&auto=format&fit=crop', alt: 'Architecture 4' },
  { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&auto=format&fit=crop', alt: 'Architecture 5' },
];

const defaultCenter: GalleryImage[] = [
  { src: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=600&auto=format&fit=crop', alt: 'Architecture Center 1' },
  { src: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=600&auto=format&fit=crop', alt: 'Architecture Center 2' },
  { src: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&auto=format&fit=crop', alt: 'Architecture Center 3' },
];

const defaultRight: GalleryImage[] = [
  { src: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600&auto=format&fit=crop', alt: 'Architecture Right 1' },
  { src: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=600&auto=format&fit=crop', alt: 'Architecture Right 2' },
  { src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&auto=format&fit=crop', alt: 'Architecture Right 3' },
  { src: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?w=600&auto=format&fit=crop', alt: 'Architecture Right 4' },
  { src: 'https://images.unsplash.com/photo-1503174971373-b1f69850bded?w=600&auto=format&fit=crop', alt: 'Architecture Right 5' },
];

export const GalleryScroll = forwardRef<HTMLElement, GalleryScrollProps>(
  ({ leftImages = defaultLeft, centerImages = defaultCenter, rightImages = defaultRight }, ref) => {
    // Null-coalesce: PHP may pass null when no images exist; fall back to defaults
    const left   = leftImages   ?? defaultLeft;
    const center = centerImages ?? defaultCenter;
    const right  = rightImages  ?? defaultRight;
    const reduceMotion = useReducedMotion();

    const fadeUp = {
      hidden: { opacity: 0, y: 16 },
      show: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: EXPO, delay: i * 0.12 },
      }),
    };

    return (
      <ReactLenis root>
        <main ref={ref} style={{ background: 'var(--color-black)' }}>
          {/* Gallery header */}
          <section
            className="h-screen w-full grid place-content-center sticky top-0"
            style={{ background: 'var(--color-black)' }}
          >
            {/* Subtle grid texture */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  'linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)',
                backgroundSize: '60px 60px',
                maskImage: 'radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)',
              }}
            />
            <div className="relative z-10 text-center px-8">
              <motion.p
                variants={reduceMotion ? undefined : fadeUp}
                custom={0}
                initial="hidden"
                animate="show"
                className="text-xs tracking-[0.3em] uppercase mb-6"
                style={{ color: 'var(--color-gray-400)', fontFamily: 'var(--font-sans)' }}
              >
                Selected Works
              </motion.p>
              <motion.h1
                variants={reduceMotion ? undefined : fadeUp}
                custom={1}
                initial="hidden"
                animate="show"
                className="text-5xl md:text-7xl font-light leading-tight"
                style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-white)' }}
              >
                Projects
              </motion.h1>
              <motion.div
                variants={reduceMotion ? undefined : {
                  hidden: { scaleY: 0, opacity: 0 },
                  show: { scaleY: 1, opacity: 1, transition: { duration: 0.6, ease: EXPO, delay: 0.35 } },
                }}
                initial="hidden"
                animate="show"
                className="mt-6 mx-auto"
                style={{ width: '1px', height: '48px', background: 'var(--color-gray-600)', transformOrigin: 'top' }}
              />
              <motion.p
                variants={reduceMotion ? undefined : fadeUp}
                custom={3}
                initial="hidden"
                animate="show"
                className="text-xs mt-4 tracking-widest uppercase"
                style={{ color: 'var(--color-gray-500)', fontFamily: 'var(--font-sans)' }}
              >
                Scroll ↓
              </motion.p>
            </div>
          </section>

          {/* Gallery grid */}
          <section style={{ color: 'var(--color-white)', background: 'var(--color-black)' }}>
            <div className="grid grid-cols-12 gap-2 p-2">
              {/* Left column — scrolls normally */}
              <div className="grid gap-2 col-span-4">
                {left.map((img, i) => (
                  <figure key={i} className="w-full m-0 overflow-hidden group">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-96 object-cover align-bottom transition-transform duration-700 ease-out group-hover:scale-105"
                      style={{ filter: 'grayscale(20%)' }}
                    />
                  </figure>
                ))}
              </div>

              {/* Center column — sticky */}
              <div className="sticky top-0 h-screen col-span-4 gap-2 grid grid-rows-3">
                {center.map((img, i) => (
                  <figure key={i} className="w-full h-full m-0 overflow-hidden group">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="h-full w-full object-cover align-bottom transition-transform duration-700 ease-out group-hover:scale-105"
                      style={{ filter: 'grayscale(20%)' }}
                    />
                  </figure>
                ))}
              </div>

              {/* Right column — scrolls normally */}
              <div className="grid gap-2 col-span-4">
                {right.map((img, i) => (
                  <figure key={i} className="w-full m-0 overflow-hidden group">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-96 object-cover align-bottom transition-transform duration-700 ease-out group-hover:scale-105"
                      style={{ filter: 'grayscale(20%)' }}
                    />
                  </figure>
                ))}
              </div>
            </div>
          </section>

          {/* Gallery footer mark */}
          <footer style={{ background: 'var(--color-black)' }}>
            <div className="h-px mx-16" style={{ background: 'var(--color-gray-800)' }} />
            <div className="py-24 text-center">
              <p
                className="text-xs tracking-[0.3em] uppercase"
                style={{ color: 'var(--color-gray-500)', fontFamily: 'var(--font-sans)' }}
              >
                Βρεττάκος &amp; Καλιοτζίδου · Νίκαια
              </p>
            </div>
          </footer>
        </main>
      </ReactLenis>
    );
  }
);

GalleryScroll.displayName = 'GalleryScroll';

'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { GooeyText } from './gooey-text-morphing';
import { ThreeDMarquee } from './3d-marquee';

interface HeroSectionProps {
  contactUrl?: string;
  aboutUrl?: string;
}

const ARCHITECT_WORDS = ['Design', 'Build', 'Create', 'Vision', 'Space', 'Form'];

// Easing: ease-out-expo — confident, decisive, never bouncy
const EXPO = [0.16, 1, 0.3, 1] as const;

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.11,
      delayChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: EXPO },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.9, ease: 'easeOut' },
  },
};

// Marquee fades in after hero text is visible
const marqueeVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 0.45,
    transition: { duration: 1.4, ease: 'easeOut', delay: 0.05 },
  },
};

export function HeroSection({ contactUrl = '/contact', aboutUrl = '/about' }: HeroSectionProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: 'var(--color-black)',
      }}
    >
      {/* ── Background: 3D architectural drawings — fills full viewport ── */}
      <motion.div
        aria-hidden="true"
        variants={reduceMotion ? undefined : marqueeVariants}
        initial="hidden"
        animate="show"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          opacity: reduceMotion ? 0.45 : undefined,
          // needed so ThreeDMarquee's inner absolute positioning works
          overflow: 'hidden',
        }}
      >
        <ThreeDMarquee />
      </motion.div>

      {/* ── Radial + edge darkening overlays ── */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          background: `
            radial-gradient(ellipse 70% 80% at 50% 50%, transparent 20%, rgba(10,10,10,0.65) 70%, rgba(10,10,10,0.92) 100%),
            linear-gradient(to bottom, rgba(10,10,10,0.7) 0%, transparent 20%, transparent 80%, rgba(10,10,10,0.8) 100%)
          `,
        }}
      />

      {/* ── Top accent line ── */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0, left: 0, right: 0,
          height: '1px',
          zIndex: 2,
          background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.12), transparent)',
        }}
      />

      {/* ── Hero content — staggered entrance ── */}
      <motion.div
        variants={reduceMotion ? undefined : containerVariants}
        initial="hidden"
        animate="show"
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          padding: '0 1.5rem',
        }}
      >
        {/* Backdrop blur glass — text legibility over drawings */}
        <div
          style={{
            position: 'absolute',
            inset: '-3rem -4rem',
            borderRadius: '2px',
            backdropFilter: 'blur(18px) brightness(0.4)',
            WebkitBackdropFilter: 'blur(18px) brightness(0.4)',
            background: 'rgba(10,10,10,0.2)',
            zIndex: -1,
            maskImage: 'radial-gradient(ellipse 85% 90% at 50% 50%, black 40%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 85% 90% at 50% 50%, black 40%, transparent 100%)',
          }}
        />

        {/* Eyebrow */}
        <motion.p
          variants={reduceMotion ? undefined : fadeUp}
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.7rem',
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            color: 'var(--color-gray-500)',
            margin: '0 0 3rem',
          }}
        >
          Architecture Studio · Νίκαια
        </motion.p>

        {/* Wordmark */}
        <motion.h1
          variants={reduceMotion ? undefined : fadeUp}
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(4rem, 10vw, 8rem)',
            fontWeight: 300,
            color: 'var(--color-white)',
            margin: '0 0 0.5rem',
            lineHeight: 0.88,
            letterSpacing: '-0.02em',
          }}
        >
          Stavret
        </motion.h1>

        {/* GooeyText morphing */}
        <motion.div
          variants={reduceMotion ? undefined : fadeIn}
          style={{
            position: 'relative',
            height: 'clamp(4rem, 7vw, 6rem)',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0.75rem 0',
          }}
        >
          <GooeyText
            texts={ARCHITECT_WORDS}
            morphTime={1.2}
            cooldownTime={2}
            textClassName="text-5xl md:text-6xl font-light tracking-tight"
          />
        </motion.div>

        {/* Slogan */}
        <motion.p
          variants={reduceMotion ? undefined : fadeUp}
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.75rem',
            fontWeight: 400,
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            color: 'var(--color-gray-400)',
            margin: '0.5rem 0 3.5rem',
          }}
        >
          Design with us
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={reduceMotion ? undefined : fadeUp}
          style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
        >
          <motion.a
            href={contactUrl}
            className="btn btn-primary"
            whileTap={reduceMotion ? undefined : { scale: 0.96 }}
            transition={{ duration: 0.1 }}
          >
            Contact
          </motion.a>
          <motion.a
            href={aboutUrl}
            className="btn btn-outline"
            whileTap={reduceMotion ? undefined : { scale: 0.96 }}
            transition={{ duration: 0.1 }}
          >
            Info
          </motion.a>
        </motion.div>
      </motion.div>

      {/* ── Scroll hint — gentle pulse ── */}
      <motion.div
        initial={reduceMotion ? undefined : { opacity: 0 }}
        animate={reduceMotion ? undefined : { opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.75rem',
          zIndex: 10,
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.625rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'var(--color-gray-600)',
          }}
        >
          Scroll
        </span>
        <motion.div
          animate={reduceMotion ? undefined : {
            scaleY: [1, 0.6, 1],
            opacity: [0.4, 0.9, 0.4],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1.8,
          }}
          style={{
            width: '1px',
            height: '40px',
            background: 'linear-gradient(to bottom, var(--color-gray-600), transparent)',
            transformOrigin: 'top',
          }}
        />
      </motion.div>

      {/* ── Bottom accent line ── */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: 0, left: 0, right: 0,
          height: '1px',
          zIndex: 2,
          background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.08), transparent)',
        }}
      />
    </section>
  );
}

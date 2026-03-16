'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { BorderRotate } from './animated-gradient-border';

const STORAGE_KEY = 'stavret_cookies_consent';

export function CookieNotice() {
  const [visible, setVisible] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      const t = setTimeout(() => setVisible(true), 2200);
      return () => clearTimeout(t);
    }
  }, []);

  const dismiss = (choice: 'accepted' | 'declined') => {
    localStorage.setItem(STORAGE_KEY, choice);
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={reduceMotion ? {} : { opacity: 0, y: 14 }}
          animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
          exit={reduceMotion ? {} : { opacity: 0, y: 10 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'fixed',
            bottom: '2rem',
            left: '2rem',
            zIndex: 9999,
            maxWidth: '268px',
            width: 'calc(100vw - 4rem)',
          }}
        >
          <BorderRotate
            animationMode="auto-rotate"
            animationSpeed={9}
            gradientColors={{
              primary: '#171717',
              secondary: '#404040',
              accent: '#a3a3a3',
            }}
            backgroundColor="#0a0a0a"
            borderWidth={1}
            borderRadius={2}
          >
            <div style={{ padding: '1.5rem' }}>
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.625rem',
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                  color: 'var(--color-gray-500)',
                  margin: '0 0 0.75rem',
                }}
              >
                Cookies
              </p>

              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.8125rem',
                  lineHeight: 1.65,
                  color: 'var(--color-gray-300)',
                  margin: '0 0 1.375rem',
                }}
              >
                We use cookies to improve your browsing experience on this site.
              </p>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <button
                  onClick={() => dismiss('accepted')}
                  className="btn btn-primary"
                  style={{ padding: '0.5rem 1.25rem', fontSize: '0.6875rem' }}
                >
                  Accept
                </button>
                <button
                  onClick={() => dismiss('declined')}
                  style={{
                    background: 'none',
                    border: 'none',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.6875rem',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'var(--color-gray-500)',
                    cursor: 'pointer',
                    padding: 0,
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-white)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-gray-500)')}
                >
                  Decline
                </button>
              </div>
            </div>
          </BorderRotate>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

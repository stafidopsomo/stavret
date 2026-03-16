'use client';

import { motion } from 'framer-motion';
import { ARCH_DRAWINGS } from './arch-drawings';

interface ThreeDMarqueeProps {
  images?: string[];
}

export function ThreeDMarquee({ images = ARCH_DRAWINGS }: ThreeDMarqueeProps) {
  // 6 columns × 6 rows = 36 tiles — repeat source images to fill
  const NUM_COLS = 6;
  const ROWS_PER_COL = 6;

  const chunks = Array.from({ length: NUM_COLS }, (_, col) =>
    Array.from({ length: ROWS_PER_COL }, (_, row) =>
      images[(col * ROWS_PER_COL + row) % images.length]
    )
  );

  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
      {/*
       * Stage: large enough that after rotateX(45°) + rotateZ(45°)
       * the grid covers the full viewport on every screen size.
       * Centred so it overflows equally on all sides.
       * Each tile stays small because we use many columns.
       */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '220vmin',
          height: '220vmin',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            transform: 'rotateX(45deg) rotateZ(45deg)',
            transformStyle: 'preserve-3d',
            display: 'grid',
            gridTemplateColumns: `repeat(${NUM_COLS}, 1fr)`,
            gap: '14px',
          }}
        >
          {chunks.map((col, colIndex) => (
            <motion.figure
              key={colIndex}
              animate={{ y: colIndex % 2 === 0 ? 30 : -30 }}
              transition={{
                duration: colIndex % 2 === 0 ? 8 : 11,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
              }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
                margin: 0,
                padding: 0,
              }}
            >
              {col.map((src, i) => (
                <div
                  key={i}
                  style={{
                    overflow: 'hidden',
                    borderRadius: '2px',
                    border: '1px solid rgba(255,255,255,0.05)',
                    flexShrink: 0,
                  }}
                >
                  <img
                    src={src}
                    draggable={false}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    style={{
                      aspectRatio: '4/3',
                      width: '100%',
                      display: 'block',
                      objectFit: 'cover',
                      userSelect: 'none',
                    }}
                  />
                </div>
              ))}
            </motion.figure>
          ))}
        </div>
      </div>
    </div>
  );
}

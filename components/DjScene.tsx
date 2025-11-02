"use client";

import { motion } from "framer-motion";

const pulse = {
  animate: {
    scale: [1, 1.1, 1],
    opacity: [0.7, 1, 0.7]
  },
  transition: {
    repeat: Infinity,
    duration: 2
  }
};

const wave = {
  animate: {
    y: [0, -12, 0]
  },
  transition: {
    repeat: Infinity,
    duration: 3,
    ease: "easeInOut"
  }
};

const lightSweep = {
  animate: {
    x: ["-120%", "120%"]
  },
  transition: {
    repeat: Infinity,
    duration: 4,
    ease: "linear"
  }
};

const waveformHeights = [
  78, 42, 64, 90, 52, 80, 36, 72, 56, 88, 44, 68, 40, 84, 48, 76
];

export default function DjScene() {
  return (
    <div className="scene">
      <div className="scene__halo" />
      <motion.div className="scene__laser scene__laser--left" {...pulse} />
      <motion.div className="scene__laser scene__laser--right" {...pulse} />
      <motion.div className="scene__beam" {...lightSweep} />

      <motion.div className="scene__table" {...wave}>
        <div className="scene__deck">
          <div className="scene__deck-led scene__deck-led--pink" />
          <div className="scene__deck-led scene__deck-led--cyan" />
          <motion.div className="scene__deck-display" animate={{ opacity: [0.8, 1, 0.9, 1] }} transition={{ repeat: Infinity, duration: 4 }}>
            <div className="scene__waveform">
              {waveformHeights.map((height, index) => (
                <span key={index} style={{ height: `${height}%` }} />
              ))}
            </div>
          </motion.div>
          <div className="scene__deck-controls">
            <div className="scene__knob" />
            <div className="scene__knob scene__knob--secondary" />
            <div className="scene__slider">
              <div className="scene__slider-thumb" />
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div className="scene__dj" {...wave} transition={{ delay: 0.2 }}>
        <div className="scene__dj-body" />
        <div className="scene__dj-arm scene__dj-arm--left" />
        <div className="scene__dj-arm scene__dj-arm--right" />
        <div className="scene__dj-headphones" />
        <div className="scene__dj-glow" />
      </motion.div>

      <div className="scene__crowd">
        {Array.from({ length: 14 }).map((_, index) => (
          <motion.span
            key={index}
            className="scene__crowd-member"
            animate={{
              y: index % 2 === 0 ? [0, -10, 0] : [0, -6, 0],
              scale: index % 3 === 0 ? [1, 1.1, 1] : [1, 1.05, 1]
            }}
            transition={{
              repeat: Infinity,
              duration: 2 + index * 0.1,
              delay: index * 0.07,
              ease: "easeInOut"
            }}
            style={{
              background:
                index % 2 === 0 ? "linear-gradient(180deg, #19fb9b, #0bffcd)" : "linear-gradient(180deg, #ff71e6, #ff3cac)",
              opacity: 0.8
            }}
          />
        ))}
      </div>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";

const bands = Array.from({ length: 24 }, (_, index) => ({
  id: index,
  delay: index * 0.08
}));

export default function Equalizer() {
  return (
    <div className="equalizer__wrap">
      {bands.map((band) => (
        <motion.span
          key={band.id}
          className="equalizer__band"
          animate={{
            height: ["18%", "92%", "32%", "70%", "22%", "80%", "40%"]
          }}
          transition={{
            repeat: Infinity,
            duration: 2.6,
            delay: band.delay,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}

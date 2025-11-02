"use client";

import { motion } from "framer-motion";

type NeonCardProps = {
  title: string;
  description: string;
};

export default function NeonCard({ title, description }: NeonCardProps) {
  return (
    <motion.article
      className="neon-card"
      whileHover={{ y: -10, boxShadow: "0 20px 60px rgba(26, 255, 179, 0.2)" }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      <div className="neon-card__glow" />
      <h3>{title}</h3>
      <p>{description}</p>
    </motion.article>
  );
}

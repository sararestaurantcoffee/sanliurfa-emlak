"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  dark = false,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`max-w-2xl ${alignClass}`}
    >
      {eyebrow && (
        <p
          className={`mb-3 text-xs font-semibold uppercase tracking-wide ${
            dark ? "text-white/70" : "text-brand-primary"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-display text-2xl font-bold uppercase tracking-wide md:text-3xl ${
          dark ? "text-white" : "text-brand-black"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 font-sans text-sm leading-relaxed md:text-base ${
            dark ? "text-white/80" : "text-brand-gray"
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}

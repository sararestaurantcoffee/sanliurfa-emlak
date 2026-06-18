"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Instagram } from "lucide-react";
import { HERO_SLIDES } from "@/lib/constants";

export function HeroSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = HERO_SLIDES[active];

  return (
    <section className="relative h-[420px] overflow-hidden bg-brand-black md:h-[520px] lg:h-[580px]">
      {HERO_SLIDES.map((s, i) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === active ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <Image
            src={s.image}
            alt={s.title}
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority={i === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black/85 via-brand-black/55 to-brand-black/25" />
        </div>
      ))}

      <div className="relative mx-auto flex h-full max-w-7xl items-center px-10 md:px-12 lg:px-16">
        <div className="max-w-xl text-white">
          <h2 className="font-display text-2xl font-bold uppercase leading-tight md:text-4xl lg:text-5xl">
            {slide.title}
          </h2>
          <p className="mt-4 font-sans text-sm leading-relaxed text-white/90 md:text-base whitespace-pre-line">
                {slide.text}
              </p>
          <a
            href={slide.href}
            target={slide.href.startsWith("http") ? "_blank" : undefined}
            rel={slide.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="btn-primary mt-6 inline-flex gap-2"
          >
            {slide.id === "instagram" && <Instagram size={16} />}
            {slide.cta}
          </a>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Slayt ${i + 1}`}
            onClick={() => setActive(i)}
            className={`h-2.5 w-2.5 rounded-full transition-colors ${
              i === active ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>

      <button
        type="button"
        aria-label="Önceki slayt"
        onClick={() => setActive((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)}
        className="absolute left-2 bottom-6 flex h-10 w-10 items-center justify-center bg-white/20 text-white backdrop-blur-sm transition-colors hover:bg-white/30 md:left-4 lg:left-6"
      >
        <ChevronLeft size={22} />
      </button>
      <button
        type="button"
        aria-label="Sonraki slayt"
        onClick={() => setActive((prev) => (prev + 1) % HERO_SLIDES.length)}
        className="absolute right-2 bottom-6 flex h-10 w-10 items-center justify-center bg-white/20 text-white backdrop-blur-sm transition-colors hover:bg-white/30 md:right-4 lg:right-6"
      >
        <ChevronRight size={22} />
      </button>
    </section>
  );
}

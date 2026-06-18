import Image from "next/image";
import { INSTAGRAM_URL } from "@/lib/constants";

interface PromoBannerProps {
  fullWidth?: boolean;
  className?: string;
}

export function PromoBanner({ fullWidth = false, className = "" }: PromoBannerProps) {
  const banner = (
    <a
      href={INSTAGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`block overflow-hidden shadow-card transition-transform duration-300 hover:scale-[1.005] ${
        fullWidth ? "rounded-lg" : "rounded-lg"
      }`}
      aria-label="Şanlıurfa Emlak reklam banner — Instagram ilanları"
    >
      <Image
        src="/promo-banner.png"
        alt="Şanlıurfa Emlak — Satılık ve kiralık gayrimenkul ilanları"
        width={1400}
        height={700}
        className="h-auto w-full object-contain"
        sizes="(max-width: 1280px) 100vw, 1280px"
      />
    </a>
  );

  if (fullWidth) {
    return (
      <section className={`bg-brand-snow py-8 md:py-12 ${className}`}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">{banner}</div>
      </section>
    );
  }

  return <div className={className}>{banner}</div>;
}

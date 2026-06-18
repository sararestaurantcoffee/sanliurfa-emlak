import Link from "next/link";
import { type ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "instagram" | "gold";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-black text-brand-white hover:bg-brand-charcoal border border-brand-black",
  secondary:
    "bg-brand-white text-brand-black hover:bg-brand-snow border border-brand-mist",
  outline:
    "bg-transparent text-brand-black border border-brand-black hover:bg-brand-black hover:text-brand-white",
  gold:
    "bg-brand-gold text-brand-black hover:bg-brand-gold-light border border-brand-gold",
  instagram:
    "bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white border-0 hover:opacity-90 shadow-premium",
};

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  external?: boolean;
  className?: string;
  size?: "default" | "large";
}

export function Button({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
  size = "default",
}: ButtonProps) {
  const sizeClass =
    size === "large"
      ? "px-10 py-4 text-[15px]"
      : "px-8 py-3.5 text-sm";

  const baseClass = `inline-flex items-center justify-center gap-2.5 font-sans font-medium tracking-wide transition-all duration-300 rounded-xl ${sizeClass} ${variantStyles[variant]} ${className}`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClass}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={baseClass}>
      {children}
    </Link>
  );
}

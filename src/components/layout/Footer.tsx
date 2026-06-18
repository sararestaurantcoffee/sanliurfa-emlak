import Image from "next/image";
import Link from "next/link";
import { Instagram, Phone, Mail } from "lucide-react";
import {
  EMAIL,
  INSTAGRAM_URL,
  INSTAGRAM_USERNAME,
  NAV_LINKS,
  PHONE,
  PHONE_URL,
  SITE_DESCRIPTION,
  SITE_NAME,
  OWNER_NAME,
} from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-footer text-white">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h5 className="font-display text-sm font-bold uppercase tracking-wide">
              Hakkımızda
            </h5>
            <p className="mt-4 font-sans text-sm leading-relaxed text-white/80">
              {SITE_DESCRIPTION}
            </p>
          </div>

          <div>
            <h5 className="font-display text-sm font-bold uppercase tracking-wide">
              İletişim
            </h5>
            <ul className="mt-4 space-y-3 font-sans text-sm text-white/80">
              <li>
                <a href={PHONE_URL} className="flex items-center gap-2 hover:text-white">
                  <Phone size={15} />
                  {PHONE}
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white"
                >
                  <Instagram size={15} />
                  @{INSTAGRAM_USERNAME}
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 hover:text-white">
                  <Mail size={15} />
                  {EMAIL}
                </a>
              </li>
            </ul>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <div className="relative h-14 w-14 shrink-0 sm:h-16 sm:w-16 md:h-[4.5rem] md:w-[4.5rem]">
              <Image
                src="/logo.png"
                alt={`${SITE_NAME} Logo`}
                fill
                className="object-contain"
                sizes="(max-width: 640px) 56px, 72px"
              />
            </div>
            <div className="min-w-0">
              <p className="font-display text-sm font-bold uppercase leading-tight text-white sm:text-base">
                {SITE_NAME}
              </p>
              <p className="mt-1 text-xs text-white/75 sm:text-sm">{OWNER_NAME}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-5 sm:flex-row lg:px-8">
          <nav className="flex flex-wrap justify-center gap-6">
            {NAV_LINKS.filter((l) => !("external" in l && l.external)).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs uppercase tracking-wide text-white/70 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center">
        <p className="font-sans text-xs text-white/60">
          © {year} {SITE_NAME}. Tüm hakları saklıdır.
        </p>
      </div>
    </footer>
  );
}

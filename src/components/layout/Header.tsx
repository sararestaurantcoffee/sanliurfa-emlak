"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Phone, Instagram } from "lucide-react";
import {
  INSTAGRAM_URL,
  INSTAGRAM_USERNAME,
  NAV_LINKS,
  OWNER_NAME,
  PHONE,
  PHONE_URL,
  SERVICE_AREA,
  SITE_NAME,
} from "@/lib/constants";

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-header">
      {/* Üst satır — emlaktur tarzı iletişim + ilanlar */}
      <div className="border-b border-brand-mist">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-3 lg:px-8">
          <Link href="/" className="flex min-w-0 items-center gap-2.5 sm:gap-3">
            <div className="relative h-10 w-10 shrink-0 sm:h-12 sm:w-12 md:h-14 md:w-14">
              <Image
                src="/logo.png"
                alt={`${SITE_NAME} Logo`}
                fill
                className="object-contain"
                sizes="(max-width: 640px) 40px, 56px"
                priority
              />
            </div>
            <div className="min-w-0">
              <p className="truncate font-display text-sm font-bold leading-tight text-brand-black sm:text-base md:text-lg">
                {SITE_NAME}
              </p>
              <p className="truncate text-[11px] font-medium text-brand-primary sm:text-xs md:text-sm">
                {OWNER_NAME}
              </p>
            </div>
          </Link>

          <div className="hidden items-center gap-6 lg:flex">
            <a
              href={PHONE_URL}
              className="flex items-center gap-2 text-sm text-brand-gray hover:text-brand-primary"
            >
              <Phone size={16} className="text-brand-primary" />
              {PHONE}
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-brand-gray hover:text-brand-primary"
            >
              <Instagram size={16} className="text-brand-primary" />
              {SERVICE_AREA}
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="btn-outline">
              İlanlarımız
            </a>
          </div>

          <button
            type="button"
            aria-label={mobileOpen ? "Menüyü kapat" : "Menüyü aç"}
            className="flex h-10 w-10 items-center justify-center text-brand-black lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Alt satır — navigasyon */}
      <div className="hidden border-b border-brand-mist bg-brand-snow lg:block">
        <nav className="mx-auto flex max-w-7xl items-center justify-center gap-10 px-8 py-3">
          {NAV_LINKS.map((link) =>
            "external" in link && link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium uppercase tracking-wide text-brand-gray transition-colors hover:text-brand-primary"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium uppercase tracking-wide transition-colors hover:text-brand-primary ${
                  pathname === link.href ? "text-brand-primary" : "text-brand-gray"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>
      </div>

      {/* Mobil menü */}
      {mobileOpen && (
        <div className="border-b border-brand-mist bg-white px-6 py-4 lg:hidden">
          <div className="mb-4 flex flex-col gap-2 border-b border-brand-mist pb-4">
            <a href={PHONE_URL} className="flex items-center gap-2 text-sm text-brand-gray">
              <Phone size={15} className="text-brand-primary" />
              {PHONE}
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-brand-gray"
            >
              <Instagram size={15} className="text-brand-primary" />
              @{INSTAGRAM_USERNAME}
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline mt-2 text-center"
            >
              İlanlarımız
            </a>
          </div>
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) =>
              "external" in link && link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 text-sm font-medium uppercase text-brand-gray"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`py-2.5 text-sm font-medium uppercase ${
                    pathname === link.href ? "text-brand-primary" : "text-brand-gray"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>
        </div>
      )}
    </header>
  );
}

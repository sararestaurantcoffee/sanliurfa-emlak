import type { Metadata } from "next";
import { Instagram, Mail, Phone, ArrowUpRight } from "lucide-react";
import { PromoBanner } from "@/components/shared/PromoBanner";
import {
  EMAIL,
  INSTAGRAM_URL,
  INSTAGRAM_USERNAME,
  PHONE,
  PHONE_URL,
} from "@/lib/constants";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "İletişim",
  "Instagram, telefon ve e-posta üzerinden Şanlıurfa Emlak ile iletişime geçin."
);

const contactLinkClass =
  "group flex items-center gap-4 border border-brand-mist bg-white p-5 shadow-card transition-shadow hover:shadow-md md:gap-5";

export default function ContactPage() {
  return (
    <section className="bg-brand-snow py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h1 className="section-title text-center">İletişim</h1>
        <p className="mx-auto mt-4 max-w-xl text-center font-sans text-sm text-brand-gray md:text-base">
          Güncel ilanlar için Instagram hesabımızı takip edin veya telefon ve e-posta ile bize ulaşın.
        </p>

        <div className="mx-auto mt-10 max-w-2xl">
          <PromoBanner className="mb-8" />

          <div className="grid gap-4">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={contactLinkClass}
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737]">
                <Instagram size={20} className="text-white" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-semibold uppercase text-brand-primary">Instagram</p>
                <p className="mt-1 font-sans text-base font-medium text-brand-black">
                  @{INSTAGRAM_USERNAME}
                </p>
                <p className="mt-1 text-sm text-brand-gray">Satılık ve kiralık tüm ilanlarımız</p>
              </div>
              <ArrowUpRight size={18} className="text-brand-gray group-hover:text-brand-primary" />
            </a>

            <a href={PHONE_URL} className={contactLinkClass}>
              <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-brand-primary">
                <Phone size={20} className="text-white" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-semibold uppercase text-brand-primary">Telefon</p>
                <p className="mt-1 font-sans text-base font-medium text-brand-black">{PHONE}</p>
                <p className="mt-1 text-sm text-brand-gray">Hemen arayın, size yardımcı olalım</p>
              </div>
              <ArrowUpRight size={18} className="text-brand-gray group-hover:text-brand-primary" />
            </a>

            <a href={`mailto:${EMAIL}`} className={contactLinkClass}>
              <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-brand-primary">
                <Mail size={20} className="text-white" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-semibold uppercase text-brand-primary">E-posta</p>
                <p className="mt-1 break-words font-sans text-base font-medium text-brand-black">
                  {EMAIL}
                </p>
                <p className="mt-1 text-sm text-brand-gray">Danışmanlık ve sorularınız için</p>
              </div>
              <ArrowUpRight size={18} className="text-brand-gray group-hover:text-brand-primary" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

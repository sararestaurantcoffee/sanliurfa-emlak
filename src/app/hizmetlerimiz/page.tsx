import type { Metadata } from "next";
import { ServiceCard } from "@/components/services/ServiceCard";
import { SERVICES } from "@/lib/constants";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "Hizmetlerimiz",
  "Gayrimenkul danışmanlığı, yatırım danışmanlığı, kiralama danışmanlığı ve gayrimenkul değerleme hizmetleri."
);

export default function ServicesPage() {
  return (
    <>
      <section className="bg-brand-primary py-14 md:py-16">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <h1 className="font-display text-2xl font-bold uppercase tracking-wide text-white md:text-3xl">
            Hizmetlerimiz
          </h1>
          <p className="mx-auto mt-4 max-w-xl font-sans text-sm text-white/85 md:text-base">
            Her adımda yanınızda olan profesyonel emlak danışmanlığı çözümleri.
          </p>
        </div>
      </section>

      <section className="bg-brand-snow py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {SERVICES.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

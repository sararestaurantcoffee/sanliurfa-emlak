import Image from "next/image";
import { INSTAGRAM_URL, PROPERTY_CATEGORIES } from "@/lib/constants";

export function PropertyCategories() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="section-title text-center">Emlak Kategorileri</h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROPERTY_CATEGORIES.map((category) => (
            <article key={category.id} className="thumbnail-card">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="relative aspect-[9/10] w-full overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.label}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 270px"
                  />
                </div>
                <h4 className="border-t border-brand-mist py-4 text-center font-display text-base font-semibold text-brand-black transition-colors hover:text-brand-primary">
                  {category.label}
                </h4>
              </a>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Tüm Portföyü Görüntüle
          </a>
        </div>
      </div>
    </section>
  );
}

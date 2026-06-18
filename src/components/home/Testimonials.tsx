import { TESTIMONIALS } from "@/lib/constants";

export function Testimonials() {
  return (
    <section className="bg-brand-snow py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="section-title text-center">Müşterilerimizin Görüşleri</h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((item) => (
            <blockquote
              key={item.name}
              className="bg-white p-8 shadow-card"
            >
              <p className="font-sans text-sm leading-relaxed text-brand-gray">
                &ldquo;{item.text}&rdquo;
              </p>
              <footer className="mt-5 font-display text-sm font-semibold text-brand-primary">
                {item.name}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

import { EMAIL, INSTAGRAM_URL, PHONE, SITE_NAME, SITE_DESCRIPTION } from "@/lib/constants";

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://sanliurfaemlak.com",
    email: EMAIL,
    telephone: PHONE,
    sameAs: [INSTAGRAM_URL],
    areaServed: {
      "@type": "City",
      name: "Şanlıurfa",
    },
    serviceType: [
      "Gayrimenkul Danışmanlığı",
      "Yatırım Danışmanlığı",
      "Kiralama Danışmanlığı",
      "Gayrimenkul Değerleme",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

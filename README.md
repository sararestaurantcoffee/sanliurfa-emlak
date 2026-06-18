# Şanlıurfa Emlak — Kurumsal Web Sitesi

Modern, minimalist ve premium görünümlü emlak danışmanlığı marka sitesi. İlan platformu değildir; ziyaretçiler Instagram ve e-posta üzerinden yönlendirilir.

## Teknolojiler

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion

## Sayfalar

- **Ana Sayfa** — Hero slider, emlak kategorileri, müşteri yorumları, Instagram CTA
- **Hizmetlerimiz** — 4 danışmanlık hizmeti kartları
- **İletişim** — Instagram, telefon ve e-posta bağlantıları

## Kurulum

```bash
npm install
npm run dev
```

Tarayıcıda [http://localhost:3456](http://localhost:3456) adresini açın.

## Production

```bash
npm run build
npm start
```

## Ortam Değişkenleri

`.env.local` dosyasına ekleyin:

```
NEXT_PUBLIC_SITE_URL=https://alanadiniz.com
```

## Profil ve Logo

Logo ve görseller `public/` dizininde bulunmaktadır.

## İletişim Bilgileri

- Instagram: [@sanliurfa.emlak](https://www.instagram.com/sanliurfa.emlak)
- Telefon: 0531 653 51 75
- E-posta: sanliurfaemlakk@gmail.com

# Şanlıurfa Emlak — Kurumsal Web Sitesi

Modern, minimalist ve premium görünümlü emlak danışmanlığı marka sitesi. İlan platformu değildir; ziyaretçiler Instagram ve e-posta üzerinden yönlendirilir.

## Teknolojiler

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion

## Sayfalar

- **Ana Sayfa** — Hero, hizmetler önizleme, Instagram CTA
- **Hizmetlerimiz** — 4 danışmanlık hizmeti kartları
- **İletişim** — Instagram ve e-posta bağlantıları

## Kurulum

```bash
npm install
npm run dev
```

Tarayıcıda [http://localhost:3000](http://localhost:3000) adresini açın.

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

Instagram profil görseli ve logo eklenecek. Profil için `src/components/home/InstagramCTA.tsx` içindeki placeholder alanını güncelleyin.

## İletişim Bilgileri

- Instagram: [@sanliurfaemlak633](https://www.instagram.com/sanliurfaemlak633)
- E-posta: sanliurfaemlak633@gmail.com

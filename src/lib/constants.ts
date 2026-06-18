export const SITE_NAME = "Şanlıurfa Emlak";
export const OWNER_NAME = "Ahmet Badıllıbey";
export const SITE_SLOGAN = "Güvenin Yeni Adresi";
export const SITE_TAGLINE = "Evrensel Değer, Yerel Güven";
export const SERVICE_AREA = "Şanlıurfa Geneli Hizmet";
export const SITE_DESCRIPTION =
  "Şanlıurfa genelinde güvenilir emlak danışmanlığı. Satılık ve kiralık daire, arsa, işyeri ve villa ilanlarımızı Instagram hesabımızdan takip edin.";

export const INSTAGRAM_URL = "https://www.instagram.com/sanliurfa.emlak";
export const INSTAGRAM_USERNAME = "sanliurfa.emlak";
export const EMAIL = "sanliurfaemlakk@gmail.com";
export const PHONE = "0531 653 51 75";
export const PHONE_URL = "tel:+905316535175";

export const NAV_LINKS = [
  { href: "/", label: "Ana Sayfa" },
  { href: INSTAGRAM_URL, label: "İlanlar", external: true },
  { href: "/hizmetlerimiz", label: "Hizmetlerimiz" },
  { href: "/iletisim", label: "İletişim" },
] as const;

export const HERO_SLIDES = [
  {
    id: "satilik-kiralik",
    title: SITE_NAME,
    text: `${SITE_SLOGAN}
Satılık ve kiralık daire, arsa, işyeri ve villa ilanlarımızı Instagram hesabımızdan takip edin.`,
    cta: "İlanları Görüntüle",
    href: INSTAGRAM_URL,
    image: "/hero/slide-1.jpg",
  },
  {
    id: "instagram",
    title: "Instagram'da Bizi Takip Edin",
    text: `Güncel gayrimenkul ilanlarımız @${INSTAGRAM_USERNAME} hesabında paylaşılıyor.`,
    cta: "Instagram'a Git",
    href: INSTAGRAM_URL,
    image: "/hero/slide-2.jpg",
  },
  {
    id: "service",
    title: SERVICE_AREA,
    text: "Güvenilir hizmet, doğru yatırım ve müşteri memnuniyeti odaklı emlak danışmanlığı.",
    cta: "Bize Ulaşın",
    href: "/iletisim",
    image: "/hero/slide-3.jpg",
  },
] as const;

export const PROPERTY_CATEGORIES = [
  {
    id: "satilik-daire",
    label: "Satılık Daire",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=540&h=600&fit=crop",
  },
  {
    id: "kiralik-daire",
    label: "Kiralık Daire",
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=540&h=600&fit=crop",
  },
  {
    id: "satilik-arsa",
    label: "Satılık Arsa",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=540&h=600&fit=crop",
  },
  {
    id: "satilik-isyeri",
    label: "Satılık İşyeri",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=540&h=600&fit=crop",
  },
] as const;

export const TESTIMONIALS = [
  {
    name: "Elif A.",
    text: "Gereken ilgi, alaka ve samimiyeti gösterdiler. Şanlıurfa Emlak ile çalışmaktan memnun kaldık, teşekkür ederiz.",
  },
  {
    name: "Erol Ö.",
    text: "Samimi ve güven verici bir danışmanlık hizmeti aldık. Süreç boyunca her adımda yanımızda oldular.",
  },
  {
    name: "Yakup A.",
    text: "Profesyonel yaklaşım, dürüstlük ve iş disipliniyle doğru bir tercih yaptığımızı kanıtladılar.",
  },
] as const;

export const SERVICES = [
  {
    id: "gayrimenkul-danismanligi",
    title: "Gayrimenkul Danışmanlığı",
    description:
      "Alım ve satım süreçlerinizde profesyonel rehberlik ile doğru kararlar almanızı sağlıyoruz.",
    icon: "building" as const,
  },
  {
    id: "yatirim-danismanligi",
    title: "Yatırım Danışmanlığı",
    description:
      "Gayrimenkul yatırımlarınızda uzun vadeli değer yaratacak stratejiler sunuyoruz.",
    icon: "trending" as const,
  },
  {
    id: "kiralama-danismanligi",
    title: "Kiralama Danışmanlığı",
    description:
      "Kiracı ve mal sahibi için şeffaf, güvenilir kiralama süreçleri yönetiyoruz.",
    icon: "key" as const,
  },
  {
    id: "gayrimenkul-degerleme",
    title: "Gayrimenkul Değerleme",
    description:
      "Piyasa analizi ve uzman değerlendirmesi ile gayrimenkulünüzün gerçek değerini belirliyoruz.",
    icon: "chart" as const,
  },
] as const;

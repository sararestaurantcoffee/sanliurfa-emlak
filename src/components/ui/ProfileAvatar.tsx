import Image from "next/image";
import { InstagramLogo } from "@/components/ui/InstagramLogo";

interface ProfileAvatarProps {
  src?: string;
  alt?: string;
  size?: "md" | "lg";
}

const sizeClasses = {
  md: "h-28 w-28",
  lg: "h-36 w-36",
};

const logoSizes = {
  md: 88,
  lg: 112,
};

export function ProfileAvatar({
  src,
  alt = "Şanlıurfa Emlak Instagram profili",
  size = "lg",
}: ProfileAvatarProps) {
  const dim = size === "lg" ? 144 : 112;

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden rounded-2xl bg-brand-charcoal/40 p-3 shadow-premium-lg backdrop-blur-sm ${sizeClasses[size]}`}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          width={dim}
          height={dim}
          className="h-full w-full rounded-xl object-cover"
          priority
        />
      ) : (
        <InstagramLogo size={logoSizes[size]} />
      )}
    </div>
  );
}

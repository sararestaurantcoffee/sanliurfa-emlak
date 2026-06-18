"use client";

import { Building2, TrendingUp, KeyRound, BarChart3 } from "lucide-react";
import type { SERVICES } from "@/lib/constants";

type Service = (typeof SERVICES)[number];

const iconMap = {
  building: Building2,
  trending: TrendingUp,
  key: KeyRound,
  chart: BarChart3,
} as const;

interface ServiceCardProps {
  service: Service;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = iconMap[service.icon];

  return (
    <article className="flex gap-4 border border-brand-mist bg-white p-6 shadow-card md:gap-6 md:p-8">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center bg-brand-primary">
        <Icon size={26} className="text-white" strokeWidth={1.5} />
      </div>
      <div>
        <p className="text-xs font-semibold uppercase text-brand-primary">
          {String(index + 1).padStart(2, "0")}
        </p>
        <h2 className="mt-1 font-display text-lg font-semibold text-brand-black md:text-xl">
          {service.title}
        </h2>
        <p className="mt-2 font-sans text-sm leading-relaxed text-brand-gray">
          {service.description}
        </p>
      </div>
    </article>
  );
}

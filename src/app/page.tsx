import { HeroSlider } from "@/components/home/HeroSlider";
import { PromoBanner } from "@/components/shared/PromoBanner";
import { PropertyCategories } from "@/components/home/PropertyCategories";
import { Testimonials } from "@/components/home/Testimonials";

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <PromoBanner fullWidth />
      <PropertyCategories />
      <Testimonials />
    </>
  );
}

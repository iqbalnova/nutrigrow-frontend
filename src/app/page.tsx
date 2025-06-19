import BlogSection from "@/components/sections/BlogSection";
import Hero from "@/components/sections/Hero";
import MelonsSection from "@/components/sections/MelonsSection";
import NutriBotSection from "@/components/sections/NutriBotSection";

export default function HomePage() {
  return (
    <main className="space-y-24">
      <Hero />
      <MelonsSection />
      <NutriBotSection />
      <BlogSection />
    </main>
  );
}

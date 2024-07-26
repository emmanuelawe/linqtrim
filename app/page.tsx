import BriefDescription from "@/components/BriefDescription";
import HeroSection from "@/components/HeroSection";
import InputURL from "@/components/InputURL";
import LinqFeatures from "@/components/LinqFeatures";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection />
      <InputURL />
      <BriefDescription />
      <LinqFeatures />
    </main>
  );
}

import BriefDescription from "@/components/BriefDescription";
import HeroSection from "@/components/HeroSection";
import InputURL from "@/components/InputURL";
import LinqFeatures from "@/components/LinqFeatures";

export default function Home() {
  return (
    <main className="flex flex-col w-full ">
      <HeroSection />
      <InputURL />
      <BriefDescription />
      <LinqFeatures />
    </main>
  );
}

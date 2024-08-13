import BriefDescription from "@/components/BriefDescription";
import HeroSection from "@/components/HeroSection";
import InputURL from "@/components/InputURL";
import FAQs from "@/components/FAQs";

export default function Home() {
  return (
    <main className="flex flex-col gap-20 md:gap-40 w-full ">
      <HeroSection />
      <InputURL />
      <BriefDescription />
      <FAQs />
    </main>
  );
}

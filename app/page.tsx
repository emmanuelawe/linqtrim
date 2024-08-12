import BriefDescription from "@/components/BriefDescription";
import HeroSection from "@/components/HeroSection";
import InputURL from "@/components/InputURL";
import LinqFeatures from "@/components/LinqFeatures";
import { Suspense } from "react";
import Loading from './loading'
import FAQs from "@/components/FAQs";

export default function Home() {
  return (
    <main className="flex flex-col gap-20 md:gap-40 w-full ">
      <Suspense fallback={<Loading />}>
      <HeroSection />
      <InputURL />
      <BriefDescription />
      {/* <LinqFeatures /> */}
      <FAQs />
      </Suspense>
    </main>
  );
}

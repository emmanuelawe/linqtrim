import BriefDescription from "@/components/BriefDescription";
import HeroSection from "@/components/HeroSection";
import InputURL from "@/components/InputURL";
import FAQs from "@/components/FAQs";
import { createClient } from "@/utils/supabase/server";

export default async function Home() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return (
    <main className="flex flex-col gap-32 md:gap-60 w-full ">
      <HeroSection />
      <InputURL user={user} />
      <BriefDescription />
      <FAQs />
    </main>
  );
}

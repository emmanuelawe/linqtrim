import DashboardPage from "@/components/DashboardPage";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

export default async function Dashboard() {
  const supabase = createClient();

  //ONLY VISIBLE WHEN USER SESSION IS ACTIVE
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  // FETCH USER URLS

  const { data: urls, error } = await supabase
    .from("urls")
    .select("original_url, short_url, qr")
    .eq("user_id", user.id);

    if (error) {
        console.error('Error fetching URLs', error.message)
        return <p>Error fetching URLs</p>
    }

  return <DashboardPage urls={urls} />;
}

import DashboardPage from "@/components/DashboardPage";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

export default async function Dashboard() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const supabase = createClient();

  //ONLY VISIBLE WHEN USER SESSION IS ACTIVE
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  // FETCH URLS

  const { data: urls, error } = await supabase
    .from("urls")
    .select("*")
    .eq("user_id", user.id);

  if (error) {
    console.error("Error fetching URLs", error.message);
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl">
          Error loading your dashboard. Please try again later.
        </p>
      </div>
    );
  }

  // FETCH ANALYTICS OF AUTHENTICATED USER
  const { data: analytics, error: analyticsError } = await supabase
    .from("analytics")
    .select("*");

  if (error) {
    console.error("Error fetching Analytics", analyticsError);
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl">
          Error loading your dashboard. Please try again later.
        </p>
      </div>
    );
  }

  return <DashboardPage urls={urls || []} analytics={analytics || []} />;
}

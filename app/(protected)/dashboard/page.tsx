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

  // FETCH URLS

  const { data: urls, error } = await supabase
    .from("urls")
    .select("id, original_url,custom_url,short_url, qr, created_at")

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
    .select("url_id, created_at, city, country, device");
    console.log(analytics)

    if (error) {
        console.error("Error fetching Analytics",analyticsError);
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
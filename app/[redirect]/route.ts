import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";
// import { redirect } from "next/navigation";

export async function GET(request: Request) {
  const supabase = createClient();
  const url = new URL(request.url); // Parse the request url
  const alias = url.pathname.slice(1);

  // Fetch the original URL from the Supabase database based on the alias
  const { data, error } = await supabase
    .from("urls")
    .select("id, original_url, url_visits")
    .eq("custom_url", alias)
    .single();

  // console.error("Query error:", error);
  if (error || !data) {
    return NextResponse.json({ error: "URL not found" }, { status: 404 });
  }

   // Increment the URL visits count, handling cases where url_visits might be null or undefined
   const newVisitCount = (data.url_visits || 0) + 1;

  const { data: urlVisits, error: urlVisitsError } = await supabase
    .from("urls")
    .update({ url_visits: newVisitCount})
    .eq("id", data.id)
    .single();


  if (urlVisitsError) {
    console.error("Update Error:", urlVisitsError)
    return NextResponse.json(
      { error: "Failed to update visit count" },
      { status: 500 }
    );
  }

  return NextResponse.redirect(data.original_url); // Redirect to the original URL
}

import {NextResponse} from 'next/server'
import { createClient } from "@/utils/supabase/server";
// import { redirect } from "next/navigation";

export async function GET(request: Request) {
  const supabase = createClient();
  const url = new URL(request.url) // Parse the request url
  const alias = url.pathname.split('/')[1]


  // Fetch the original URL from the Supabase database based on the alias
  const { data, error } = await supabase
    .from("urls")
    .select("original_url")
    .eq("custom_url", alias)
    .single();

    console.error("Query error:", error);

  if (error || !data) {
    return NextResponse.json({error: 'URL not found'}, {status: 404})
  }

  return NextResponse.redirect(data.original_url) // Redirect to the original URL
}

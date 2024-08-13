import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

export async function GET() {
  const supabase = createClient();

   // Get authenticated user
   const { data: { user }, error: userError } = await supabase.auth.getUser();

   if (userError || !user) {
     return NextResponse.json({ error: "User not authenticated" }, { status: 401 });
   }

  // Query the 'urls' table to get all URLs
  const { data, error } = await supabase
    .from("urls")
    .select("*")
    .eq("user_id", user.id);

  if (error) {
    console.error("Error fetching URLs:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}

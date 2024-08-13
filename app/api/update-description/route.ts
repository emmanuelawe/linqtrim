import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

export async function POST(request: Request) {
    const supabase = createClient();
    const { id, description } = await request.json();

  
  // Get authenticated user
  const { data: { user }, error: userError } = await supabase.auth.getUser();

  if (userError || !user) {
    return NextResponse.json({ error: "User not authenticated" }, { status: 401 });
  }
  
    const { data, error } = await supabase
      .from("urls")
      .update({ description })
      .eq("id", id)
      .eq("user_id", user.id)
      .single();
  
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
  
    return NextResponse.json({ data });
  }
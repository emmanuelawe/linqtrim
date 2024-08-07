import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

export async function POST(request: Request) {
    const supabase = createClient();
    const { id, description } = await request.json();
  
    const { data, error } = await supabase
      .from("urls")
      .update({ description })
      .eq("id", id)
      .single();
  
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
  
    return NextResponse.json({ data });
  }
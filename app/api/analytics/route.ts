import { NextResponse, type NextRequest } from "next/server";
import { createClient } from "@/utils/supabase/server";


export async function POST(request: Request) {
  const supabase = createClient();
  const { originalUrl, customUrl } = await request.json();

  const user = await supabase.auth.getUser();


 

  const { data, error } = await supabase
    .from("urls")
    .insert([
      {
        original_url: originalUrl,

      },
    ])
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }

  return NextResponse.json({ originalUrl});
}

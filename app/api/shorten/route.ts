import { NextResponse, type NextRequest } from "next/server";
import { createClient } from "@/utils/supabase/server";
import { nanoid } from "nanoid";
import QRCode from 'qrcode'

// const alphanum = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
// const length = 6;

export async function POST(request: Request) {
  const supabase = createClient();
  const { originalUrl, customUrl } = await request.json();
  const alias = customUrl || nanoid(6);
  const url = new URL(request.url) // Parse the request url
  const shortUrl = `${url.origin}/${alias}`
  const user = await supabase.auth.getUser()

  //Generate QR Code

let qrCodeUrl =''
try {
    qrCodeUrl = await QRCode.toDataURL(shortUrl)
} catch (qrError) {
    return NextResponse.json({error: 'Failed to generate QR Code'}, {status: 500})
}

  const { data, error } = await supabase
    .from("urls")
    .insert([{ original_url: originalUrl, custom_url: customUrl, short_url: shortUrl, user_id: user.data.user?.id, qr: qrCodeUrl }])
    .single();

    if(error) {
        return NextResponse.json({error: error.message}, {status: 400})
    }


  return NextResponse.json({shortUrl, qrCodeUrl});
}

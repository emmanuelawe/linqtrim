import { NextResponse, type NextRequest, userAgent } from "next/server";
import { createClient } from "@/utils/supabase/server";
import { nanoid } from "nanoid";
import QRCode from "qrcode";
import { headers } from "next/headers";

// Get Location function
async function getLocation(ip: string) {
  try {
    const response = await fetch(
      `https://ipinfo.io/${ip}/json?token=IPINFO_TOKEN`
    );
    const data = await response.json();
    console.log(data.city);
    console.log(data.country);
    return {
      city: data.city || "unknown",
      country: data.country || "unknown",
    };
  } catch (error) {
    console.error("Error fetching location:", error);
    return {
      city: "unknown",
      country: "unknown",
    };
  }
}

export async function POST(request: Request) {
  const supabase = createClient();
  const { originalUrl, customUrl } = await request.json();
  const alias = customUrl || nanoid(6);
  const url = new URL(request.url); // Parse the request url
  const shortUrl = `${url.origin}/${alias}`;
  const user = await supabase.auth.getUser();

  // Extract IP address from request headers
  const headersList = headers();
  const ip = headersList.get("x-forwarded-for") || "121.0.0.1";
  console.log(ip);

  // Get the Location based on IP address
  const { city, country } = await getLocation(ip);

  // Determine device from useragent
  const { os } = userAgent(request);
  const device = os.name

  //Generate QR Code
  let qrCodeUrl = "";
  try {
    qrCodeUrl = await QRCode.toDataURL(shortUrl);
  } catch (qrError) {
    return NextResponse.json(
      { error: "Failed to generate QR Code" },
      { status: 500 }
    );
  }

  // Insert into 'urls' table in Supabase database
  const { data, error } = await supabase
    .from("urls")
    .insert([
      {
        original_url: originalUrl,
        custom_url: customUrl,
        short_url: shortUrl,
        created_at: new Date().toLocaleString(),
        qr: qrCodeUrl,
        city: city,
        country: country,
        device: device,
      },
    ])
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }

  // Insert into 'analytics' table in Supabase database
  const { data: analyticsData, error: analyticsError } = await supabase
    .from("analytics")
    .insert([
      {
        created_at: new Date().toISOString(),
        city: city,
        country: country,
        device: device,
      },
    ])
    .single();

  if (error) {
    return NextResponse.json({ error: analyticsError }, { status: 400 });
  }

  return NextResponse.json({ shortUrl, qrCodeUrl });
}

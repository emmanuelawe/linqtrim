import { NextResponse, type NextRequest, userAgent } from "next/server";
import { createClient } from "@/utils/supabase/server";
import QRCode from "qrcode";
import { headers } from "next/headers";

// Get Location function
async function getLocation(ip: string) {
  try {
    const response = await fetch(
      `https://ipinfo.io/${ip}/json?token=7ba3386ffc6da2`
    );
    const data = await response.json();
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
  const alias = customUrl;
  const url = new URL(request.url); // Parse the request url
  const shortUrl = `${url.origin}/${alias}`;
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();
  const userId = user?.id;
  const userEmail = user?.email || "Unknown email";

  if (userError || !user) {
    return NextResponse.json(
      { error: "User not authenticated" },
      { status: 401 }
    );
  }

  // Extract IP address from request headers
  const headersList = headers();
  const ip = headersList.get("x-forwarded-for") || "121.0.0.1";

  // Get the Location based on IP address
  const { city, country } = await getLocation(ip);

  // Determine device from useragent
  const { os } = userAgent(request);
  const device = os?.name || "Unknown device";

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
        user_id: userId,
        email: userEmail,
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

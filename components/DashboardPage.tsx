"use client";

import { useState } from "react";
import { QRCode } from "qrcode";
import Image from "next/image";

interface URLData {
  id: number;
  original_url: string;
  created_at: string;
  custom_url: string;
  short_url: string;
  qr: string;
}

interface AnalyticsData {
  url_id: number;
  created_at: string;
  city: string;
  country: string;
  device: string;
}

interface DashboardProps {
  urls: URLData[];
  analytics: AnalyticsData[];
}

const DashboardPage: React.FC<DashboardProps> = ({ urls, analytics }) => {
  const [longUrl, setLongUrl] = useState("");
  const [customUrl, setCustomUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [qrCodeUrl, setQrCodeUrl] = useState("");

  // const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch("/api/shorten", {
      method: "POST",
      body: JSON.stringify({ originalUrl: longUrl, customUrl: customUrl }),
    });
    const data = await response.json();
    if (response.ok) {
      setShortUrl(data.shortUrl);
      setQrCodeUrl(data.qrCodeUrl);
    } else {
      alert(`Error: ${data.error}`);
    }
  };

  return (
    <main>
      <h1 className="text-2xl font-bold">Your Dashboard</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex bg-[#fdfdfd] rounded-xl w-full shadow-md">
          <input
            type="text"
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
            placeholder="Paste long URL"
            required
            className="flex pl-4 py-3 pr-6 md:placeholder:text-base placeholder:text-sm focus:outline-none md:h-16 h-14 w-full rounded-xl bg-transparent"
          />
          <div className="border-l-2 border-[#2EB77A]/50" />
          <input
            type="text"
            value={customUrl}
            onChange={(e) => setCustomUrl(e.target.value)}
            placeholder="Unique ID"
            required
            className="flex pr-4 pl-2 py-3 text-center  md:placeholder:text-base placeholder:italic placeholder:text-xs focus:outline-none md:h-16 h-14 w-[30%] rounded-e-xl bg-gray-100"
          />
        </div>
        <button type="submit" className="button">
          Shorten URL
        </button>
      </form>

      {/* Display shortened URL */}

      {shortUrl && (
        <div className=" flex bg-white h-auto w-full my-4">
          <div>Shortened URL: {shortUrl}</div>
          {qrCodeUrl && (
            <div>
              <Image src={qrCodeUrl} alt="QR Code" width={50} height={50} />
            </div>
          )}
        </div>
      )}

      <section>
        <h2>Your Shortened URLS</h2>
        {urls.length === 0 ? (
          <p>No URLs shortened yet.</p>
        ) : (
          <ul>
            {urls.map((url) => (
              <li key={url.id}>
                <a href={url.short_url}>{url.short_url}</a>
                <Image src={url.qr} alt="QR Code" width={50} height={50} />
                <p>Created at: {new Date(url.created_at).toLocaleString()}</p>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section>
        <h2>Analytics</h2>
        {analytics.length === 0 ? (
          <p>No analytics data available</p>
        ) : (
          <ul>
            {analytics.map((analyticsItem) => (
              <li key={analyticsItem.url_id}>
                <p>URL ID: {analyticsItem.url_id}</p>
                <p>
                  Created at:{" "}
                  {new Date(analyticsItem.created_at).toLocaleString()}
                </p>
                <p>City: {analyticsItem.city}</p>
                <p>Country: {analyticsItem.country}</p>
                <p>Device: {analyticsItem.device}</p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
};

export default DashboardPage;

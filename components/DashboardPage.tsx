"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { saveAs } from "file-saver";
import ReactMarkdown from "react-markdown";

interface URLData {
  id: string;
  original_url: string;
  created_at: string;
  custom_url: string;
  short_url: string;
  qr: string;
  url_visits: number;
  description?: string;
}

interface AnalyticsData {
  url_id: string;
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
  console.log(urls);
  const [longUrl, setLongUrl] = useState("");
  const [customUrl, setCustomUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [qrCodeUrl, setQrCodeUrl] = useState("");
  const [editMode, setEditMode] = useState<Record<string, boolean>>({});
  const [description, setDescription] = useState("");
  const [localUrls, setLocalUrls] = useState<URLData[]>(urls);

  useEffect(() => {
    setLocalUrls(urls);
  }, [urls]);


  // Toggle the Edit Mode
  const handleEditToggle = (id: string, currentDescription: string) => {
    setEditMode((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
    setDescription(currentDescription);
  };

  // Handle description update with the update-description api
  const handleUpdateDescription = async (id: string) => {
    const response = await fetch("/api/update-description", {
      method: "POST",
      body: JSON.stringify({ id, description }),
    });
    const data = await response.json();

    if (response.ok) {
      // Update the local state after successful update
      setEditMode((prevState) => ({ ...prevState, [id]: false }));

      // Update the description in the localUrls state
      setLocalUrls((prevUrls) =>
        prevUrls.map((url) =>
          url.id === id ? { ...url, description: description } : url
        )
      );
    } else {
      alert(`Error: ${data.error}`);
    }
  };

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

  const handleDownloadQRCode = () => {
    if (qrCodeUrl) {
      saveAs(qrCodeUrl, "qrcode.png");
    }
  };

  return (
    <main className="md:mx-auto md:container mt-20">
      <h1 className="text-2xl font-bold">Your Dashboard</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex bg-[#fdfdfd] rounded-xl w-full shadow-md">
          <input
            type="text"
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
            placeholder="Paste long URL"
            required
            className="flex pl-4 py-3 pr-6 border-2 border-gray-700/70 md:placeholder:text-base placeholder:text-sm focus:outline-none md:h-16 h-14 w-full rounded-s-xl bg-transparent"
          />
          <div className="border-l-2 border-gray-700/70" />
          <input
            type="text"
            value={customUrl}
            onChange={(e) => setCustomUrl(e.target.value)}
            placeholder="Custom alias"
            required
            className="flex pr-4 pl-2 py-3 text-center  md:placeholder:text-base placeholder:italic placeholder:text-xs focus:outline-none md:h-16 h-14 w-[40%] md:w-[30%] rounded-e-xl placeholder:text-white text-white bg-gray-700/70"
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
              <button onClick={handleDownloadQRCode} className="button mt-2">
                Download QR Code
              </button>
            </div>
          )}
        </div>
      )}

      <div className="flex w-full justify-between">
        <section className="">
          <h2>Your Shortened URLS</h2>
          {urls.length === 0 ? (
            <p>No URLs shortened yet.</p>
          ) : (
            <ul className="flex flex-col gap-4">
              {localUrls.map((url) => (
                <li key={url.id}>
                  <div>
                    <div className="">
                      {editMode[url.id] ? (
                        <textarea
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                          placeholder="Enter description"
                          className="flex pl-4 py-3 pr-6 md:placeholder:text-base placeholder:text-sm focus:outline-none md:h-16 h-14 w-full rounded-xl bg-transparent"
                        />
                      ) : (
                        <ReactMarkdown>{url.description || ""}</ReactMarkdown>
                      )}
                    </div>
                    <button
                      onClick={() =>
                        editMode[url.id]
                          ? handleUpdateDescription(url.id)
                          : handleEditToggle(url.id, url.description || "")
                      }
                    >
                      {editMode[url.id] ? "Save" : "Add Description"}
                    </button>
                  </div>

                  <a href={url.short_url}>{url.short_url}</a>
                  <Image src={url.qr} alt="QR Code" width={50} height={50} />
                  <button
                    onClick={handleDownloadQRCode}
                    className="button mt-2"
                  >
                    Download QR Code
                  </button>
                  <p>Created at: {new Date(url.created_at).toLocaleString()}</p>
                  <p>Visits: {url.url_visits}</p>
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
      </div>
    </main>
  );
};

export default DashboardPage;

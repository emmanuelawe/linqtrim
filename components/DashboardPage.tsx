"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { saveAs } from "file-saver";
import ReactMarkdown from "react-markdown";
import { ChartLine, DownloadCloudIcon } from "lucide-react";
import { Button } from "./ui/button";
import DashboardSkeleton from "./DashboardSkeleton";

interface URLData {
  id: number;
  original_url: string;
  created_at: string;
  custom_url: string;
  short_url: string;
  qr: string;
  url_visits: number;
  description?: string;
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
  const [editMode, setEditMode] = useState<Record<string, boolean>>({});
  const [description, setDescription] = useState("");
  const [localUrls, setLocalUrls] = useState<URLData[]>(urls);
  const [showAnalytics, setShowAnalytics] = useState<Record<string, boolean>>(
    {}
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <DashboardSkeleton />;
  }

  const handleEditToggle = (id: number, currentDescription: string) => {
    setEditMode((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
    setDescription(currentDescription);
  };

  const handleUpdateDescription = async (id: number) => {
    const response = await fetch("/api/update-description", {
      method: "POST",
      body: JSON.stringify({ id, description }),
    });
    const data = await response.json();

    if (response.ok) {
      setEditMode((prevState) => ({ ...prevState, [id]: false }));
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
    setIsLoading(true);
    const response = await fetch("/api/shorten", {
      method: "POST",
      body: JSON.stringify({ originalUrl: longUrl, customUrl: customUrl }),
    });
    const data = await response.json();
    if (response.ok) {
      setShortUrl(data.shortUrl);
      setQrCodeUrl(data.qrCodeUrl);

      // Update localUrls with the new URL
      setLocalUrls((prevUrls) => [
        ...prevUrls,
        {
          id: data.id,
          original_url: longUrl,
          created_at: data.createdAt,
          custom_url: customUrl,
          short_url: data.shortUrl,
          qr: data.qrCodeUrl,
          url_visits: 0, // Assuming 0 initial visits
          description: "",
        },
      ]);
      setIsLoading(false);
    } else {
      alert("URL already exists. Try a different URL.");
    }
  };

  const handleDownloadQRCode = (qrCodeUrl: string) => {
    if (qrCodeUrl) {
      saveAs(qrCodeUrl, "qrcode.png");
    }
  };

  const toggleAnalytics = (id: number) => {
    setShowAnalytics((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const handleDelete = async (id: number) => {
    setIsLoading(true);
    const response = await fetch("/api/delete-url", {
      method: "POST",
      body: JSON.stringify({ id }),
    });
    const data = await response.json();

    if (response.ok) {
      setLocalUrls((prevUrls) => prevUrls.filter((url) => url.id !== id));
    } else {
      alert(`Error: ${data.error}`);
    }
    setIsLoading(false);
  };

  return (
    <main
      aria-label="Dashboard"
      className="container mx-auto px-4 md:px-0 mt-10"
    >
      <h1 className="text-2xl font-bold mb-6">Your Dashboard</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-10">
        <div className="flex rounded-xl w-full gap-2">
          <label htmlFor="longurl" />
          <input
            id="longurl"
            type="text"
            aria-describedby="paste long url"
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
            placeholder="Paste long URL"
            required
            className="flex -ml-4 pl-4 py-3 pr-6 border-2  shadow-md border-gray-700/70 dark:border-white dark:bg-gray-900 dark:text-white dark:placeholder:text-white md:placeholder:text-base placeholder:text-sm focus:outline-none md:h-16 h-14 w-full rounded-s-xl"
          />
          <label htmlFor="yourlabel" />
          <input
            id="yourlabel"
            type="text"
            aria-describedby="yourlabel"
            value={customUrl}
            onChange={(e) => setCustomUrl(e.target.value)}
            placeholder="yourlabel"
            required
            className="flex pr-4 pl-2 py-3 border-2  shadow-md border-gray-700/70 dark:border-white dark:bg-gray-900 dark:text-white dark:placeholder:text-white text-center md:placeholder:text-base placeholder:italic placeholder:text-xs focus:outline-none md:h-16 h-14 w-[40%] md:w-[30%] rounded-e-xl 4"
          />
        </div>
        <button
          aria-label="Shorten!"
          type="submit"
          className="button w-full md:w-auto"
        >
          Shorten URL
        </button>
      </form>

      {shortUrl && (
        <div className="flex flex-col md:flex-row bg-white w-full mb-10 rounded-xl shadow-sm items-center justify-between px-6 py-4">
          <div className="flex flex-col">
            <span className="font-bold text-xl mb-2 text-[#2EB77A]">
              Shortened URL:
            </span>
            <span className="font-medium bg-gray-50 dark:text-black p-4 rounded-xl">
              {shortUrl}
            </span>
          </div>
          {qrCodeUrl && (
            <div className="flex gap-4 items-center">
              <Image src={qrCodeUrl} alt="QR Code" width={80} height={80} />
              <button
                onClick={() => handleDownloadQRCode(qrCodeUrl)}
                className="button"
              >
                Download QR Code
              </button>
            </div>
          )}
        </div>
      )}

      <section className="flex flex-col gap-12">
        <h2 className="font-bold text-2xl mb-4">Your Shortened URLs</h2>
        {localUrls.length === 0 ? (
          <p>No URLs shortened yet.</p>
        ) : (
          localUrls.map((url) => (
            <div
              key={url.id}
              className="bg-white rounded-xl shadow-md p-6 mb-4 w-full"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4 justify-between  mt-2">
                <div className="flex flex-col w-full md:w-[50%]">
                  {editMode[url.id] ? (
                    <textarea
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Enter description"
                      className="p-4 dark:text-black border-2 border-gray-300 rounded-xl bg-transparent mb-2"
                    />
                  ) : (
                    <div className="flex">
                      <p className="border-l-4 border-black" />
                      <ReactMarkdown className="text-[#2EB77A] ml-2 font-bold">
                        {url.description || ""}
                      </ReactMarkdown>
                    </div>
                  )}
                  <div className="space-x-4 mt-2">
                    <button
                      onClick={() =>
                        editMode[url.id]
                          ? handleUpdateDescription(url.id)
                          : handleEditToggle(url.id, url.description || "")
                      }
                      className="button_borderb self-start"
                    >
                      {editMode[url.id] ? "Save" : "Add Description"}
                    </button>
                    <Button
                      variant="destructive"
                      onClick={() => handleDelete(url.id)}
                      className="p-3 font-semibold rounded-md cursor-pointer bg-red-600 dark:bg-red-600 text-white"
                    >
                      Delete
                    </Button>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <a
                    href={url.short_url}
                    className="text-[#2EB77A] font-medium underline"
                    target="_blank"
                  >
                    {url.short_url}
                  </a>
                  <p className="flex text-gray-500 items-center">
                    <ChartLine size={16} />
                    <span className="text-xl ml-1 font-semibold text-[#2EB77A]">
                      {url.url_visits}
                    </span>{" "}
                  </p>
                  <div className="flex items-center gap-2">
                    <Image
                      src={url.qr}
                      alt="QR Code"
                      width={80}
                      height={80}
                      className="rounded-xl border-2 border-[#2EB77A] "
                    />
                    <button
                      onClick={() => handleDownloadQRCode(url.qr)}
                      className="bg-[#2EB77A] p-1 rounded-md cursor-pointer"
                    >
                      <DownloadCloudIcon color="white" size={20} />
                    </button>
                  </div>
                  <button
                    onClick={() => toggleAnalytics(url.id)}
                    className="button mt-2 md:mt-0"
                  >
                    {showAnalytics[url.id]
                      ? "Hide Analytics"
                      : "Show Analytics"}
                  </button>
                </div>
              </div>

              {showAnalytics[url.id] && (
                <div className="mt-4 dark:text-black">
                  <h3 className="font-bold text-xl text-[#2EB77A]">
                    Analytics
                  </h3>
                  <ul className="flex flex-col gap-4 mt-2">
                    {analytics
                      .filter(
                        (analyticsItem) => analyticsItem.url_id === url.id
                      )
                      .map((analyticsItem) => (
                        <li
                          key={analyticsItem.url_id}
                          className="bg-gray-50 p-4 rounded-xl shadow-sm"
                        >
                          <p>
                            <span className="font-semibold">Date: </span>
                            {new Date(
                              analyticsItem.created_at
                            ).toLocaleString()}
                          </p>
                          <p>
                            <span className="font-semibold">City: </span>
                            {analyticsItem.city}
                          </p>
                          <p>
                            <span className="font-semibold">Country: </span>
                            {analyticsItem.country}
                          </p>
                          <p>
                            <span className="font-semibold">Device: </span>
                            {analyticsItem.device}
                          </p>
                        </li>
                      ))}
                  </ul>
                </div>
              )}
            </div>
          ))
        )}
      </section>
    </main>
  );
};

export default DashboardPage;

"use client";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import ShortenLoader from "./ShortenLoader";
import { saveAs } from "file-saver";
import { User } from "@supabase/supabase-js";
import Link from "next/link";

interface InputProps {
  user: User | null;
}

const InputURL: React.FC<InputProps> = ({ user }) => {
  const router = useRouter();
  const [longUrl, setLongUrl] = useState("");
  const [customUrl, setCustomUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [qrCodeUrl, setQrCodeUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsLoading(true);
    // Simulate a delay (e.g., for navigation or API call)
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    if (!user) {
      setIsLoading(true);
      // Simulate a delay (e.g., for navigation or API call)
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);

      // Redirect to login if user is not authenticated
      router.push("/login");
      return;
    }

    // Proceed with shortening the URL if user is authenticated
    const response = await fetch("/api/shorten", {
      method: "POST",
      body: JSON.stringify({ originalUrl: longUrl, customUrl: customUrl }),
    });
    const data = await response.json();
    if (response.ok) {
      setShortUrl(data.shortUrl);
      setQrCodeUrl(data.qrCodeUrl);
    } else {
      alert("URL already exists. Try a different URL.");
    }
  };

  const handleDownloadQRCode = (qrCodeUrl: string) => {
    if (qrCodeUrl) {
      saveAs(qrCodeUrl, "qrcode.png");
    }
  };

  return (
    <section className="flex flex-col md:mx-auto md:container gap-6">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row rounded-xl justify-between gap-4 md:mx-4 mx-0"
      >
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
            className="flex -ml-2 pl-4 py-3 pr-6 border-2  shadow-md border-gray-700/70 dark:border-white dark:bg-gray-900 dark:text-white dark:placeholder:text-white  md:placeholder:text-base placeholder:text-sm focus:outline-none md:h-16 h-14 w-full rounded-s-xl"
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

        {isLoading ? (
          <ShortenLoader />
        ) : (
          <Button
            aria-label="Shorten!"
            size="lg"
            type="submit"
            className="url_button w-full md:w-auto md:h-16 h-14 shadow-md"
          >
            Shorten!
          </Button>
        )}
      </form>
      <p
        aria-label="Terms and Privacy Policy"
        className="self-center text-xs text-center md:text-base"
      >
        By using our service you accept the{" "}
        <Link href="/tos">
          <span className="font-semibold text-[#2EB77A]">Terms of service</span>
        </Link>{" "}
        and{" "}
        <Link href="/privacy">
          <span className="font-semibold text-[#2EB77A]">Privacy Policy</span>
        </Link>
      </p>

      {shortUrl && (
        <div className="flex flex-col md:flex-row bg-white w-full mb-10 rounded-xl shadow-sm items-center justify-between px-6 py-4">
          <div className="flex flex-col">
            <span className="font-bold text-xl text-[#2EB77A]">
              Shortened URL:
            </span>
            <span className="font-medium bg-gray-50 p-4 dark:text-black rounded-xl">
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
    </section>
  );
};

export default InputURL;

"use client";
import { useState } from "react";
import Image from "next/image";
import { useUser } from "@/context/UserContext";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

const InputURL = () => {
  const {user} = useUser()
  const router = useRouter()
  const [longUrl, setLongUrl] = useState("");
  const [customUrl, setCustomUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [qrCodeUrl, setQrCodeUrl] = useState("");


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user) {
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
      alert(`Error: ${data.error}`);
    }
  };


  return (
    <main className="flex flex-col md:mx-auto md:container gap-6">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row rounded-xl justify-between gap-4 md:mx-4 mx-0"
      >
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
            className="flex pr-4 pl-2 py-3 text-center md:placeholder:text-base placeholder:italic placeholder:text-xs focus:outline-none md:h-16 h-14 w-[40%] md:w-[30%] rounded-e-xl placeholder:text-white text-white bg-gray-700/70"
          />
        </div>
        
        <Button
        size='lg'
          type="submit"
          className="url_button w-full md:w-auto md:h-16 h-14 shadow-md"
        >
          Shorten!
        </Button>
      </form>
      <p className="self-center text-xs text-center md:text-base">
        By using our service you accept the{" "}
        <span className="font-semibold text-[#2EB77A]">Terms of service</span>{" "}
        and <span className="font-semibold text-[#2EB77A]">Privacy Policy</span>
      </p>
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
    </main>
  );
};

export default InputURL;

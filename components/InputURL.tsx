"use client";
import { useState } from "react";
import Image from "next/image";

const InputURL = () => {
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

  // function handleShorten(e: FormEvent<HTMLFormElement>) {
  //   e.preventDefault();
  //   console.log(e)
  //   // Add your URL shortening logic here
  //   if(longUrl)
  //     router.push(`/login/createNew=${longUrl}`)
  // }

  return (
    <main className="flex flex-col gap-5 md:mx-48 md:mt-20 mt-10">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row rounded-xl justify-between gap-4 "
      >
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
            className="flex pr-4 pl-2 py-3 text-center md:placeholder:text-base placeholder:italic placeholder:text-xs focus:outline-none md:h-16 h-14 w-[30%] rounded-e-xl bg-gray-100"
          />
        </div>
        <button
          type="submit"
          className="url_button w-full md:w-auto md:h-16 h-14 shadow-md"
        >
          Shorten!
        </button>
      </form>
      <p className="self-center text-xs text-center md:text-base">
        By using our service you accept the{" "}
        <span className="font-semibold text-[#2EB77A]">Terms of service</span>{" "}
        and <span className="font-semibold text-[#2EB77A]">Privacy Policy</span>
      </p>
{shortUrl && 
      <div className=" flex bg-white h-auto w-full my-4">
      <div>
      Shortened URL: {shortUrl}
        </div>
        {qrCodeUrl && 
        <div>
          <Image src={qrCodeUrl} alt='QR Code' width={50} height={50} />
          </div>}
      </div>
}
    </main>
  );
};

export default InputURL;

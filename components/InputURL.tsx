'use client';
import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";

const InputURL = () => {
  const [longUrl, setLongUrl] = useState<string>();
  const router = useRouter()


  function handleShorten(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(e)
    // Add your URL shortening logic here
    if(longUrl)
      router.push(`/login/createNew=${longUrl}`)
  }

  return (
    <main className="flex flex-col gap-5 md:mx-48 md:mt-20 mt-10">
      <form onSubmit={handleShorten} className="flex flex-col md:flex-row drop-shadow-md rounded-xl gap-4">
        <input
          type="text"
          value={longUrl}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setLongUrl(e.target.value)}
          placeholder="Paste long URL"
          className="relative flex pl-4 py-3 pr-32 md:placeholder:text-base placeholder:text-sm focus:outline-none md:h-20 h-14 w-full rounded-xl bg-[#fdfdfd]"
        />
        <input
          type="text"
          // value={customAlias}
          // onChange={(e: ChangeEvent<HTMLInputElement>) => setCustomAlias(e.target.value)}
          placeholder="Unique ID"
          className="absolute md:right-[9.5rem] right-[0.3rem] top-1 md:top-2 self-end  flex p-2 py-3 text-center  md:placeholder:text-sm md:self-center placeholder:italic placeholder:text-xs focus:outline-none md:h-16 h-12 w-[20%] rounded-e-xl bg-[#2EB77A]/10"
        />
        <button type="submit" className="url_button w-full md:w-auto self-center md:h-20 h-14">
          Shorten!
        </button>
      </form>
      <p className="self-center text-xs text-center md:text-base">
        By using our service you accept the{" "}
        <span className="font-semibold text-[#2EB77A]">Terms of service</span>{" "}
        and <span className="font-semibold text-[#2EB77A]">Privacy Policy</span>
      </p>
    </main>
  );
};

export default InputURL;

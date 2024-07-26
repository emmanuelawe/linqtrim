const InputURL = () => {
  return (
    <main className="flex flex-col gap-5 md:mx-48 md:mt-20 mt-10">
      <div className="relative flex drop-shadow-xl rounded-xl">
        <input
          type="text"
          placeholder="Paste long URL"
          className="flex pl-4 py-3 pr-32 md:placeholder:text-base placeholder:text-sm focus:outline-none md:h-20 h-14 min-w-[100%] rounded-xl bg-[#fdfdfd]"
        />
        <button className="url_button absolute right-2 self-center">
          Shorten
        </button>
      </div>
      <p className="self-center text-xs text-center md:text-base">
        By using our service you accept the{" "}
        <span className="font-semibold text-[#2EB77A]">Terms of service</span>{" "}
        and <span className="font-semibold text-[#2EB77A]">Privacy Policy</span>
      </p>
    </main>
  );
};

export default InputURL;

const InputURL = () => {
  return (
    <main className="flex flex-col gap-5 md:mx-48 md:mt-20 mt-10">
      <form className="flex flex-col md:flex-row drop-shadow-md rounded-xl gap-4">
        <input
          type="text"
          placeholder="Paste long URL"
          className="flex pl-4 py-3 pr-32 md:placeholder:text-base placeholder:text-sm focus:outline-none md:h-20 h-14 w-full rounded-xl bg-[#fdfdfd]"
        />
        <button className="url_button w-full md:w-auto self-center md:h-20 h-14">
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

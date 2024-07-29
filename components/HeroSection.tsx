import Image from "next/image";

const HeroSection = () => {
  return (
    <main
      className="flex flex-col md:flex-row md:pt-20 pt-16 md:mx-32 mx-4"
    >
      <div className="flex items-center justify-between w-full">

      {/* LEFT */}
      <section className="md:max-w-[32rem] w-full items-center md:items-start">
        <h1 className="h1 py-4">
          Shorten links{" "}
          <span className="italic text-[#2EB77A]">effortlessly</span>
          <br /> and stay in control
        </h1>
        <p className="text-justify md:text-base text-sm">
          Ultimate URL Shortening Tool: Simplify link management, analysis, and
          branding. Features include deep links, QR codes, bio links, surveys,
          and more. Effortlessly start shortening and tracking your links.
        </p>

        <div className="my-8 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-x-6 md:space-y-0">
          <button className="hbutton w-full w-1/1 md:w-1/2">Sign up</button>
          <button className="hbutton_border w-full w-1/1 md:w-1/2">Log in</button>
        </div>
      </section>
      {/* RIGHT */}
      <section className="hidden md:flex md:w-1/2">
        <div>
          <Image
            src="/illustration.png"
            alt="Illustration"
            width={800}
            height={800}
            className=" max-w-full"
            // style={{objectFit: 'contain'}}
          />
        </div>
      </section>
      </div>
    </main>
  );
};

export default HeroSection;

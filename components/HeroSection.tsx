import Image from "next/image";

const HeroSection = () => {
  return (
    <main
      className="flex md:pt-20 pt-10 md:mx-20"
    >
      <div className="flex items-center justify-between max-h-[50%]">

      {/* LEFT */}
      <section className="max-w-[32rem] items-center md:items-start">
        <h1 className="h1 py-4">
          Shorten links{" "}
          <span className="italic text-[#FF5757]">effortlessly</span>
          <br /> and stay in control
        </h1>
        <p className="text-justify md:text-base text-sm">
          Ultimate URL Shortening Tool: Simplify link management, analysis, and
          branding. Features include deep links, QR codes, bio links, surveys,
          and more. Effortlessly start shortening and tracking your links.
        </p>

        <div className="space-x-4 my-8">
          <button className="hbutton">Sign up</button>
          <button className="hbutton_border">Sign in</button>
        </div>
      </section>
      {/* RIGHT */}
      <section className="hidden md:flex">
        <div>
          <Image
            src="/illustration.png"
            alt="Illustration"
            width={800}
            height={800}
            className=" max-w-[70%] ml-[30%]"
            // style={{objectFit: 'contain'}}
          />
        </div>
      </section>
      </div>
    </main>
  );
};

export default HeroSection;

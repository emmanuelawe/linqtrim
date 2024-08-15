import Image from "next/image";
import Link from "next/link";
import { createClient } from "@/utils/supabase/server";
import AnimateGif from "./AnimateGif";

const HeroSection = async () => {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <section
      aria-label="Hero section"
      className="flex flex-col md:flex-row mt-20 md:mt-40 md:mx-auto md:container"
    >
      <div className="flex items-center justify-between w-full gap-14">
        {/* LEFT */}
        <section className="md:max-w-[42rem] w-full items-center md:items-start">
          <h1
            aria-label="Hero section heading"
            className="h1 py-4 text-center md:text-start"
          >
            Shorten links{" "}
            <span className="italic text-[#2EB77A]">effortlessly</span>
            <br /> and stay in control
          </h1>
          <p
            aria-label="Hero section description"
            className="md:text-justify text-center md:text-base text-xs"
          >
            Ultimate URL Shortening Tool: Simplify link management, analysis,
            and branding. Features include deep links, QR codes, bio links,
            surveys, and more. Effortlessly start shortening and tracking your
            links.
          </p>

          <div
            aria-label="Action buttons"
            className="mt-8 flex md:justify-between justify-start items-center gap-4"
          >
            {user ? (
              <div className="flex w-full">
                <Link
                  href="/dashboard"
                  className="hbutton w-full md:w-1/2 text-center"
                >
                  <button>Dashboard</button>
                </Link>
              </div>
            ) : (
              <div className="flex flex-col md:flex-row w-full gap-4">
                <Link
                  href="/signup"
                  className="hbutton w-full w-1/1 md:w-1/2 text-center"
                >
                  <button>Sign up</button>
                </Link>
                <Link
                  href="/login"
                  className="hbutton_border w-full w-1/1 md:w-1/2 text-center"
                >
                  <button>Log in</button>
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* RIGHT */}
        <section
          aria-label="Hero illustration"
          className="hidden md:flex md:w-1/2"
        >
          <div>
            <AnimateGif src='https://www.icegif.com/wp-content/uploads/2023/09/icegif-509.gif' alt='Analytics' />
            {/* <Image
              src="/illustration.png"
              alt="Illustration"
              width={800}
              height={800}
              className="max-w-full h-auto"
            /> */}
          </div>
        </section>
      </div>
    </section>
  );
};

export default HeroSection;

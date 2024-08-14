import Image from "next/image";
import Link from "next/link";
import { createClient } from "@/utils/supabase/server";

const HeroSection = async () => {
  const supabase = createClient();
  const {data: {user}} = await supabase.auth.getUser()

  return (
    <main className="flex flex-col md:flex-row mt-20 md:mt-40 md:mx-auto md:container">
      <div className="flex items-center justify-between w-full gap-6">
        {/* LEFT */}
        <section className="md:max-w-[42rem] w-full items-center md:items-start">
          <h1 className="h1 py-4 text-center md:text-start">
            Shorten links{" "}
            <span className="italic text-[#2EB77A]">effortlessly</span>
            <br /> and stay in control
          </h1>
          <p className="text-justify md:text-base text-sm">
            Ultimate URL Shortening Tool: Simplify link management, analysis,
            and branding. Features include deep links, QR codes, bio links,
            surveys, and more. Effortlessly start shortening and tracking your
            links.
          </p>

          <div className="mt-8 flex md:justify-between justify-start items-center gap-4">
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
        <section className="hidden md:flex md:w-1/2">
          <div>
            <Image
              src="/illustration.png"
              alt="Illustration"
              width={800}
              height={800}
              className="max-w-full h-auto"
            />
          </div>
        </section>
      </div>
    </main>
  );
};

export default HeroSection;

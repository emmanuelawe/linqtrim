import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  return (
    <main className="md:px-0 md:mx-20">
      <main className="flex h-24 justify-between items-center">
        {/* LEFT */}
        <Link href="/">
          <section>
            <Image
              src="/Linqtrimlogo.png"
              width={200}
              height={200}
              alt="Linqtrim Logo"
              className="md:w-48 md:h-12 w-24 h-6 md:-ml-[0.4rem] -ml-[0.2rem]"
            />
          </section>
        </Link>

        {/* RIGHT */}
        <section className="">
          <div className="md:hidden flex">
            <MobileMenu />
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/signin">
              <div className="button_stroke">Sign In</div>
            </Link>
            <Link href="/signup">
              <div className="button">Get Started</div>
            </Link>
          </div>
        </section>
      </main>
      <p className="border-b border-gray-200 -mx-96" />
    </main>
  );
};

export default Navbar;

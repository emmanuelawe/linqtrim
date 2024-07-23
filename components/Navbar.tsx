import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  return (
    <main className="md:px-0 h-24">
      <main className="flex md:py-10 py-4 justify-between items-center">
        {/* LEFT */}
        <Link href="/">
          <section>
            <Image
              src="/Linqtrimlogo.png"
              width={200}
              height={200}
              alt="Linqtrim Logo"
              className="md:w-48 md:h-12 w-24 h-6"
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
          <Link href="/signin">
            <div className="button">Get Started</div>
          </Link>
        </div>
        </section>
      </main>
      <section className="border-b border-gray-200 -mx-96" />
    </main>
  );
};

export default Navbar;

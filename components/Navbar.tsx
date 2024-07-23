import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <main className="px-2 md:px-0">
      <main className="flex py-10 justify-between items-center">
        {/* LEFT */}
        <Link href="/">
          <section>
            <Image
              src="/Linqtrimlogo.png"
              width={200}
              height={200}
              alt="Linqtrim Logo"
              className=""
            />
          </section>
        </Link>

        {/* RIGHT */}
        <section className="hidden md:flex space-x-8 items-center">
          <Link href="/signin">
            <div className="button_stroke">Sign In</div>
          </Link>
          <Link href="/signin">
            <div className="button">Get Started</div>
          </Link>
        </section>
      </main>
      <section className="border-b border-gray-200 -mx-96" />
    </main>
  );
};

export default Navbar;

import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import NavDropdown from "./NavDropdown";
import { User } from "@supabase/supabase-js";
import DarkMode from './DarkMode'
import { Button } from "./ui/button";

interface NavbarProps {
  user: User | null;
}

const Navbar: React.FC<NavbarProps> = ({ user }) => {
  return (
    <main className="md:px-0 md:mx-auto md:container mx-4">
      <main className="flex h-24 justify-between items-center">
        {/* LEFT */}
        <Link href="/">
          <section>
            <Image
              src="/Linqtrimlogo.png"
              width={200}
              height={200}
              alt="Linqtrim Logo"
              className="md:w-48 md:h-12 w-24 h-6 md:-ml-[0.4rem] -ml-[0.2rem] hover:scale-105 ease-in-out duration-500"
            />
          </section>
        </Link>

        {/* RIGHT */}
        <section className="flex items-center gap-8">
            <DarkMode />
          <div className="md:hidden flex">
            <MobileMenu user={user} />
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            {!user ? (
              <>
                <Link href="/login">
                  <button className="button_borderb">Log In</button>
                </Link>
                <Link href="/signup">
                  <Button size='lg' className="font-semibold">Get Started</Button>
                </Link>
              </>
            ) : (
              <NavDropdown />
            )}
          </div>
        </section>
      </main>
      <p className="border-b border-gray-200 w-full -mx-4 hidden" />
    </main>
  );
};

export default Navbar;

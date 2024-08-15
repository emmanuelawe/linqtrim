"use client";
import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import NavDropdown from "./NavDropdown";
import DarkMode from "./DarkMode";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { User } from "@supabase/supabase-js";

interface NavbarProps {
  user: User | null;
}

const Navbar: React.FC<NavbarProps> = ({ user }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Show navbar initially
    setShowNavbar(true);

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      aria-label="Main navigation"
      className={`transition-transform duration-300 ${
        showNavbar ? "" : "hidden"
      } ${
        isScrolled
          ? "fixed top-0 left-0 right-0 z-50 bg-[#FAFAFA]/90 dark:bg-[#111212]/90 ease-in-out"
          : "relative"
      }`}
    >
      <main className="md:px-0 md:mx-auto md:container mx-4">
        <div className="flex h-24 justify-between items-center">
          {/* LEFT */}
          <Link href="/">
            <section aria-label="Linqtrim Logo">
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
            <div aria-label="Dark mode toggle">
              <DarkMode />
            </div>
            <div aria-label="Mobile menu" className="md:hidden flex">
              <MobileMenu user={user} />
            </div>
            <ul
              aria-label="Navigation elements"
              className="hidden md:flex space-x-8 items-center"
            >
              {!user ? (
                <>
                  <Link href="/" aria-label="Home">
                    <button className="button_borderb dark:text-white">
                      Home
                    </button>
                  </Link>
                  <Link href="/login" aria-label="Log in">
                    <button className="button_borderb dark:text-white">
                      Log In
                    </button>
                  </Link>
                  <Link href="/signup" aria-label="Get Started">
                    <Button size="lg" className="font-semibold h-12">
                      Get Started
                    </Button>
                  </Link>
                </>
              ) : (
                <NavDropdown user={user} />
              )}
            </ul>
          </section>
        </div>
      </main>
      <p className="border-b border-gray-200 w-full" />
    </nav>
  );
};

export default Navbar;

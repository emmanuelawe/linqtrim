"use client";
import Link from "next/link";
import React, { useState } from "react";
import { User } from "@supabase/supabase-js";
import NavDropdown from "./NavDropdown";

interface MobileProps {
  user: User | null;
}

const MobileMenu: React.FC<MobileProps> = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <section>
      <div className="md:hidden flex items-center gap-4">
        {user ? (
          <>
            <NavDropdown user={user} />
          </>
        ) : (
          <div
            className="flex flex-col gap-[4.5px] cursor-pointer"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <div
              className={`w-6 h-1 bg-[#2EB77A] rounded-sm ${
                isOpen ? "rotate-45" : ""
              } origin-left ease-in-out duration-500`}
            />
            <div
              className={`w-6 h-1 bg-[#2EB77A] rounded-sm ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <div
              className={`w-6 h-1 bg-[#2EB77A] rounded-sm ${
                isOpen ? "-rotate-45" : ""
              } origin-left ease-in-out duration-500`}
            />
          </div>
        )}
      </div>
      {isOpen && (
        <div className="absolute top-24 left-0 w-full h-[calc(100vh-96px)] items-center justify-center gap-6 z-50 ease-in duration-200 bg-[#2EB77A] flex flex-col">
          <Link href="/">
            <button
              onClick={handleMenuClick}
              className="text-white text-lg font-semibold hover:bg-white hover:text-[#2EB77A] px-6 py-2 rounded transition-colors duration-300"
            >
              Home
            </button>
          </Link>
          <div className="border-b border-white w-3/4" />
          <Link href="/login">
            <button
              onClick={handleMenuClick}
              className="text-white text-lg font-semibold hover:bg-white hover:text-[#2EB77A] px-6 py-2 rounded transition-colors duration-300"
            >
              Log In
            </button>
          </Link>
          <div className="border-b border-white w-3/4" />
          <Link href="/signup">
            <button
              onClick={handleMenuClick}
              className="text-white text-lg font-semibold hover:bg-white hover:text-[#2EB77A] px-6 py-2 rounded transition-colors duration-300"
            >
              Get Started
            </button>
          </Link>
        </div>
      )}
    </section>
  );
};

export default MobileMenu;

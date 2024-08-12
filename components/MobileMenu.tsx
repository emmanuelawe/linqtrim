"use client";
import Link from "next/link";
import React, { useState } from "react";
import { User } from "@supabase/supabase-js";
import NavDropdown from "./NavDropdown";


interface MobileProps {
  user: User | null;
}

const MobileMenu: React.FC<MobileProps> = ({user}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <main>
      <div className="md:hidden flex items-center gap-4">
      {user ? (<><NavDropdown /></>) :
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
      </div>}
      </div>
      {isOpen && (
        <div className="absolute top-24 left-0 w-full h-[calc(25vh-96px)] ease-in duration-200 bg-[#2EB77A] flex flex-col justify-center gap-4">
          <Link href="/login">
            <button
              onClick={handleMenuClick}
              className="text-white mx-6 font-semibold hover:text-[#2EB77A]"
            >
              Log In
            </button>
          </Link>

          <div className="border-b border-white" />
          <Link href="/signup">
            <button
              onClick={handleMenuClick}
              className="text-white mx-6 font-semibold hover:text-[#2EB77A]"
            >
              Get Started
            </button>
          </Link>
        </div>
      )}
    </main>
  );
};

export default MobileMenu;

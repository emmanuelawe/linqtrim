"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { signOut } from "@/app/(authentication)/login/actions";
import { DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { LogOut, User2 } from "lucide-react";
import { User } from "@supabase/supabase-js";

interface NavDDProps {
  user: User | null;
}
const NavDropdown: React.FC<NavDDProps> = ({user}) => {

  const [dropdownVisible, setDropdownVisible] = useState(false);
  const avatar = "";

   // Extract the part before '@' in the email
   const getEmailName = (email: string | null) => {
    return email ? email.split('@')[0] : 'Guest';
  };

  return (
    <div className="relative">
      <button
        onClick={() => setDropdownVisible(!dropdownVisible)}
        className="flex items-center space-x-2"
      >
        <Image
          src="/avatar.png"
          width={56}
          height={56}
          alt="User Avatar"
          className=" rounded-full"
        />
      </button>
      {dropdownVisible && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
          <div className="w-full block items-center px-3 py-2 font-semibold text-left text-[#2EB77A]">
            {getEmailName(user?.email || 'Guest')}
          </div>
          <DropdownMenuSeparator />

          <div className="hover:bg-gray-100 px-3">
            <Link
              href="/dashboard"
              onClick={() => setDropdownVisible(!dropdownVisible)}
              className="flex items-center justify-center w-full"
            >
              <User2 className="h-6 w-6 mb-1" />
              <div className="w-full block px-2 py-2 text-gray-700">
                Dashboard
              </div>
            </Link>
          </div>
          <DropdownMenuSeparator />
          <form
            action={signOut}
            method="POST"
            className="flex items-center justify-center w-full hover:bg-gray-100 px-3"
          >
            <LogOut className="h-6 w-6  ml-1 text-red-500" />
            <button className="w-full block px-2 py-2 hover:bg-gray-100 font-medium text-red-500 text-start ">
              Logout
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default NavDropdown;

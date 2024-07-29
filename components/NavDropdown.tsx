// components/DropdownMenu.tsx
'use client'

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const NavDropdown = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const avatar = ""

  return (
    <div className="relative">
        <button
        onClick={() => setDropdownVisible(!dropdownVisible)}
        className="flex items-center space-x-2"
      >
        {avatar ? (
          <Image
            src="/"
            alt="User Avatar"
            className="w-10 h-10 rounded-full"
          />
        ) : (
          <div className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full">
            AI
          </div> )}
      </button>
      {dropdownVisible && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
          <Link href="/my-account">
            <div className="block px-4 py-2 text-gray-700 hover:bg-gray-100 border-b font-semibold border-gray-100">
              Ayo Chase
            </div>
          </Link>
          <Link href="/profile">
            <div className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
              My Links
            </div>
          </Link>
          <Link href="/profile">
            <div className="block px-4 py-2 hover:bg-gray-100 font-medium text-red-500">
              Logout
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavDropdown;

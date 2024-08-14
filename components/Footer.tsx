import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#2EB77A] pt-20 mt-20 md:mt-40 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-12">
          {/* LOGO SECTION */}
          <section className="flex flex-col items-center md:items-start text-center md:text-left">
            <Link href="/">
              <p>
                <Image
                  src="/Linqtrimwhite.png"
                  width={200}
                  height={50}
                  alt="Linqtrim Logo"
                  className="w-24 h-6 md:w-48 md:h-12 mb-4 md:mb-6 transition-transform transform hover:scale-105"
                />
              </p>
            </Link>
            <p className="text-sm md:text-base text-[#F2E3D0] md:w-full w-[80%]">
              Free URL Shortener, Branded Short Links & Analytics | Linqtrim
            </p>
          </section>

          {/* LINKS SECTION */}
          <section className="flex flex-col md:flex-row gap-8 md:gap-12">
            <div className="flex flex-col text-center md:text-left text-sm md:text-base">
              <h2 className="font-semibold text-[#F2E3D0] mb-2">Product</h2>
              <p>URL Shortener</p>
              <p>QR Codes</p>
              <p>Link Analytics</p>
            </div>

            <div className="flex flex-col text-center md:text-left text-sm md:text-base">
              <h2 className="font-semibold text-[#F2E3D0] mb-2">Contact</h2>
              <p>About us</p>
              <p>Support</p>
              <p>Contact us</p>
            </div>

            <div className="flex flex-col text-center md:text-left text-sm md:text-base">
              <h2 className="font-semibold text-[#F2E3D0] mb-2">Legal</h2>
              <Link href="/privacy">
                <p className="hover:underline">Privacy Policy</p>
              </Link>
              <Link href="/cookie">
                <p className="hover:underline">Cookie Policy</p>
              </Link>
              <Link href="/tos">
                <p className="hover:underline">Terms of Service</p>
              </Link>
            </div>
          </section>
        </div>

        {/* COPYRIGHT SECTION */}
        <div className="mt-20 pb-4 text-center text-xs md:text-base">
          <p>© 2024 Chase Ntwk. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

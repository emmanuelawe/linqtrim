import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <main className="bg-[#2EB77A] h-auto md:-mx-[1440px]">
      <div className="flex text-white flex-col space-y-10 mx-4 md:mx-[1440px]">
        <div className="flex flex-col md:flex-row min-h-[50vh] items-center md:justify-around space-y-9 md:space-y-0 pt-16 md:pt-0 md:space-x-20">
          {/*LOGO 2024 */}
          <section className="flex flex-col ">
            <div className="md:mb-6 mb-2 self-center md:self-start">
              <Link href="/">
                <section>
                  <Image
                    src="/Linqtrimwhite.png"
                    width={200}
                    height={200}
                    alt="Linqtrim Logo"
                    className="md:w-48 md:h-12 w-24 h-6 md:-ml-[0.4rem] -ml-[0.2rem] hover:scale-105 ease-in-out duration-500"
                  />
                </section>
              </Link>
            </div>
            <p className="text-xs md:text-sm text-[#F2E3D0] text-center md:text-start max-w-60">
              Free URL Shortener, Branded Short Links & Analytics | Linqtrim{" "}
            </p>
          </section>

          {/* LINKS TO PAGES */}
          <section className="flex flex-wrap max-w-64 md:max-w-full md:justify-between items-center space-x-6 md:space-x-24">
            <div className="text-xs md:text-sm">
              <h2 className="md:text-xl text-base font-semibold text-[#F2E3D0]">
                Products
              </h2>
              <p>URL Shortener</p>
              <p>QR Codes</p>
              <p>Link Analytics</p>
            </div>

            <div className="text-xs md:text-sm">
              <h2 className="md:text-xl text-base  font-semibold text-[#F2E3D0]">
                Products
              </h2>
              <p>URL Shortener</p>
              <p>QR Codes</p>
              <p>Link Analytics</p>
            </div>

            <div className="text-xs md:text-sm">
              <h2 className="md:text-xl text-base  font-semibold text-[#F2E3D0]">
                Legal
              </h2>
              <p>URL Shortener</p>
              <p>QR Codes</p>
              <p>Link Analytics</p>
            </div>

            <div className="text-sm">
              <h2 className="md:text-xl text-base  font-semibold text-[#F2E3D0]">
                Company
              </h2>
              <p>URL Shortener</p>
              <p>QR Codes</p>
              <p>Link Analytics</p>
            </div>
          </section>
        </div>
        {/*Copyright 2024 */}
        <section>
          <p className="text-center text-xs md:text-base">© 2024 Chase Ntwk. All Rights Reserved.</p>
        </section>
      </div>
    </main>
  );
};

export default Footer;

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <main className="bg-[#2EB77A] flex h-[60vh] rounded-xl mt-20 -mx-[15%]">
        <div className="mx-[15%] flex text-white flex-col space-y-10">
    <div className="flex min-h-[50vh] items-center justify-around space-x-20">

     {/*LOGO 2024 */}
     <section className="max-w-[20%] flex md:flex-col">
        <div className="mb-6">
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
        <p className="text-sm text-[#F2E3D0]">Free URL Shortener, Branded Short Links & Analytics | Linqtrim </p>
        
     </section>

        {/* LINKS TO PAGES */}
      <section className="flex justify-between items-center space-x-24">
        <div className="text-sm">
            <h2 className="text-xl font-semibold text-[#F2E3D0]">Products</h2>
            <p>URL Shortener</p>
            <p>QR Codes</p>
            <p>Link Analytics</p>
        </div>

        <div className="text-sm">
            <h2 className="text-xl font-semibold text-[#F2E3D0]">Products</h2>
            <p>URL Shortener</p>
            <p>QR Codes</p>
            <p>Link Analytics</p>
        </div>

        <div className="text-sm">
            <h2 className="text-xl font-semibold text-[#F2E3D0]">Legal</h2>
            <p>URL Shortener</p>
            <p>QR Codes</p>
            <p>Link Analytics</p>
        </div>

        <div className="text-sm">
            <h2 className="text-xl font-semibold text-[#F2E3D0]">Company</h2>
            <p>URL Shortener</p>
            <p>QR Codes</p>
            <p>Link Analytics</p>
        </div>
      </section>
    </div>
      {/*Copyright 2024 */}
      <section>
        <p className="text-center">©  2024 Chase Ntwk. All Rights Reserved.</p>
      </section>
        </div>
    </main>
  );
};

export default Footer;

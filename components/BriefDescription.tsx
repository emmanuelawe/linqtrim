import Image from "next/image";
import Link from "next/link";
import React from "react";
import AnimateGif from "./AnimateGif";

const BriefDescription = () => {
  return (
    <section
      aria-label="Brief Description"
      className="bg-[#2EB77A] h-auto -mx-4"
    >
      <div className=" flex py-16 justify-between items-center md:mx-auto md:container">
        <section className="w-full px-4 md:px-0">
          <h2 className="md:text-4xl text-2xl font-bold text-white mb-6">
            <span className="text-[#F2E3D0]">Advanced</span>
            <br /> Link Management Solutions.
          </h2>
          <p className="text-white text-justify text-sm md:text-base md:w-[80%] w-full">
            Linqtrim goes beyond being a simple URL shortener; it&apos;s a Link
            Shortening and Management Platform. With Linqtrim, you can create
            branded short links using your own custom label. Perfect for
            bloggers, marketers, affiliates, and businesses of any size,
            Linqtrim offers total control over your short links. Its features
            include an advanced URL Shortener, Link Analytics, and QR codes. Use
            Linqtrim to maximize your links&apos; potential and enhance your
            online presence.
          </p>
          <Link href="/" className="self-center md:self-start">
            <button className="bdbutton text-center md:text-left mt-12">
              Linqtrim - All features
            </button>
          </Link>
        </section>

        <section className="hidden md:flex">
          <div>
            <AnimateGif
              src="https://github.com/emmanuelawe/linqtrim/blob/main/public/theo.gif?raw=true"
              alt="Analytics"
            />
          </div>
        </section>
      </div>
    </section>
  );
};

export default BriefDescription;

import React from "react";

const BriefDescription = () => {
  return (
    <main className="bg-[#2EB77A] h-[60vh] rounded-xl my-20 -mx-[15%]">
      <div className="mx-[15%] flex my-16 justify-between items-center ">
        <section className="md:max-w-[50%] w-full">
          <h2 className="md:text-3xl text-xl font-bold text-white mb-6">
            <span className="text-[#F2E3D0] italic">Advanced</span>
            <br /> Link Management Solutions.
          </h2>
          <p className="text-white text-justify text-sm md:text-base">
            Linqtrim goes beyond being a simple URL shortener; it&apos;s a
            full-featured Link Shortening and Management Platform. With
            Linqtrim, you can create branded short links using your own custom
            domain. Perfect for bloggers, marketers, affiliates, and businesses
            of any size, Linqtrim offers total control over your short links.
            Its features include an advanced URL Shortener, Link Analytics, and
            QR codes. Use Linqtrim to maximize your links&apos; potential and enhance
            your online presence.
          </p>
          <button className="bdbutton text-left my-6">Linqtrim - All features</button>
        </section>

        <section className="hidden md:flex">Image here</section>
      </div>
    </main>
  );
};

export default BriefDescription;

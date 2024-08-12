const LinqFeatures = () => {
  return (
    <main className="w-full flex flex-col md:flex-row md:mx-auto md:container  items-center justify-between gap-6">
      {/* REPLACE THESE CARDS BY MAPPING */}
      <section className="bg-[#fdfdfd] flex flex-col items-center drop-shadow-xl h-auto md:w-1/3 rounded-xl p-8">
        <h1 className="text-2xl font-bold py-4">URL Shortener</h1>
        <p className="text-justify">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </section>

      <section className="bg-[#fdfdfd] flex flex-col items-center drop-shadow-xl  h-auto md:w-1/3 rounded-xl p-8">
        <h1 className="text-2xl font-bold py-4">QR Code</h1>
        <p className="text-justify">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </section>

      <section className="bg-[#fdfdfd] flex flex-col items-center drop-shadow-xl  h-auto md:w-1/3 rounded-xl p-8">
        <h1 className="text-2xl font-bold py-4">Link Analytics</h1>
        <p className="text-justify">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </section>
    </main>
  );
};

export default LinqFeatures;

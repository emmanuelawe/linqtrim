import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQs = () => {
  return (
    <section
      aria-label="Frequently Asked Questions"
      className="md:mx-auto md:container"
    >
      <div className="text-center mb-10">
        <h3 className="md:text-4xl text-2xl font-bold">FAQs</h3>
        <p className="md:text-xl text-lg font-semibold text-[#2EB77A]">
          Frequently Asked Questions
        </p>
      </div>
      <div>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>What is a URL shortener? </AccordionTrigger>
            <AccordionContent>
              A URL shortener, also known as a link shortener, is a tool
              designed to transform lengthy URLs into concise, more
              user-friendly links. This not only enhances the visual appeal of
              links but also makes them easier to share and track. Linqtrim is
              an advanced URL shortener that provides features such as branded
              short links, custom aliases, and detailed analytics, empowering
              you to optimize your online presence effectively.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              What are the benefits of using short links?
            </AccordionTrigger>
            <AccordionContent>
              Short links provide several advantages, such as making URLs more
              readable, boosting click-through rates, and offering enhanced
              tracking and analytics. They also create better branding
              opportunities, save space on platforms with character limits, and
              simplify link management. Overall, short links contribute to a
              more professional and accessible presentation of your content,
              leading to improved engagement and outcomes.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>What is a branded short link?</AccordionTrigger>
            <AccordionContent>
              A branded short link features your brand name or a custom alias,
              making it instantly recognizable and more trustworthy. This not
              only increases brand visibility but also builds credibility,
              leading to higher click-through rates and user engagement. With
              Linqtrim, you can effortlessly create branded short links,
              amplifying your marketing impact.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              What is a QR code and how is it used?
            </AccordionTrigger>
            <AccordionContent>
              A QR code is a type of scannable code that leads users to a
              specific URL or other data. It&apos;s widely used in marketing, on
              product packaging, and in advertisements to offer quick access to
              online content. With Linqtrim, you can create and personalize QR
              codes for your shortened links.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default FAQs;

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Linqtrim",
    default: "Linqtrim",
  },
  description: "Keep your URLs short and simple",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`overflow-x-hidden w-full md:mx-auto md:container  ${poppins.className}`}>
        <Navbar />
        <main className="mx-4 my-16 min-h-screen">

        {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

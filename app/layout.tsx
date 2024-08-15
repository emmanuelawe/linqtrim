import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { createClient } from "@/utils/supabase/server";
import { ThemeProvider } from "@/components/ui/theme-provider";

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`overflow-x-hidden  w-full ${poppins.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Skip to Main Link */}
          <a
            href="#main-content"
            className="absolute top-[-3rem] left-2 w-full py-2 px-2 dark:text-white text-black text-center focus:top-4 focus:opacity-100 opacity-0 transition-all duration-300 focus:z-10 focus:relative"
          >
            Skip to Main Content
          </a>
          <Navbar user={user} />
          <main id="main-content" className="mx-4 min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

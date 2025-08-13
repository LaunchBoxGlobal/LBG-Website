import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Global/Navbar";
import HomeFooter from "@/components/Global/HomeFooter";
import GoogleAnalytics from "@/lib/GoogleAnalytics";
import Script from "next/script";
import WhatsappButton from "@/components/Common/WhatsappButton";

const outfit = Outfit({
  subsets: ["latin"],
  // weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-outfit",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`overflow-x-hidden ${outfit.variable}`}>
        <Navbar />
        <GoogleAnalytics />
        {children}
        {/* <Footer /> */}
        <Script
          id="tawkto"
          strategy="afterInteractive"
          src="https://embed.tawk.to/686b6c9988f6eb190d36058e/1ivhq0e5m"
          async
          charSet="UTF-8"
          crossOrigin="*"
        />
        {/* <WhatsappButton /> */}
        <HomeFooter />
      </body>
    </html>
  );
}

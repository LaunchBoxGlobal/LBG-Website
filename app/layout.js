import "./globals.css";
import Navbar from "@/components/Global/Navbar";
import HomeFooter from "@/components/Global/HomeFooter";
import GoogleAnalytics from "@/lib/GoogleAnalytics";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`overflow-x-hidden`}>
        <Navbar />
        <GoogleAnalytics />
        {children}
        {/* <Footer /> */}
        <HomeFooter />
      </body>
    </html>
  );
}

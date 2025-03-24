import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Global/Navbar";
import HomeFooter from "@/components/Global/HomeFooter";

const poppinsFont = Poppins({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "LaunchBox Global",
  description: "Developed by Launchbox",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppinsFont.variable} overflow-x-hidden`}>
        <Navbar />
        {children}
        {/* <Footer /> */}
        <HomeFooter />
      </body>
    </html>
  );
}

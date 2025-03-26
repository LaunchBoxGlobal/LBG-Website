import "./globals.css";
import Navbar from "@/components/Global/Navbar";
import HomeFooter from "@/components/Global/HomeFooter";

export const metadata = {
  title: "LaunchBox Global",
  description: "Developed by Launchbox",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`overflow-x-hidden`}>
        <Navbar />
        {children}
        {/* <Footer /> */}
        <HomeFooter />
      </body>
    </html>
  );
}

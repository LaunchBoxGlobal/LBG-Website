import MobileAppDevelopmentPage from "@/components/services/MobileAppDevelopment/MobileAppDevelopmentPage";
import Script from "next/script";
import React from "react";

export const metadata = {
  title: "Trusted Mobile App Development Company | Custom Apps Built Right",
  description:
    "We’re a hands-on mobile app development company crafting custom apps that users love. Our mobile app development services cover iOS & Android—turning ideas into high-performing apps. ",
  alternates: {
    canonical: "https://launchboxglobal.com/services/mobile-app-development",
  },
};

const page = () => {
  return (
    <>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Mobile App Development Services",
            serviceType:
              "iOS App Development, Android App Development, Cross-Platform App Development",
            provider: {
              "@type": "Organization",
              name: "Launchbox Global",
              url: "https://launchboxglobal.com",
              logo: "https://launchboxglobal.com/logo.png",
            },
            areaServed: [
              { "@type": "Country", name: "United States" },
              { "@type": "Country", name: "United Kingdom" },
              { "@type": "Country", name: "Canada" },
              { "@type": "Country", name: "Australia" },
            ],
            description:
              "Launchbox Global offers end-to-end mobile app development services, including iOS, Android, and cross-platform solutions for businesses in the USA, UK, Canada, and Australia.",
            url: "https://launchboxglobal.com/services/mobile-app-development",
          }),
        }}
      />
      <MobileAppDevelopmentPage />;
    </>
  );
};

export default page;

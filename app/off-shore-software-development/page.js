import OffShoreSoftwareDevelopmentPage from "@/components/OffShoreSoftwareDevelopment/OffShoreSoftwareDevelopmentPage";
import Script from "next/script";
import React from "react";

export const metadata = {
  title: "Offshore Software Development | Cost- Efficient Global Teams",
  description:
    "Cut software costs by 40% with our offshore developers. Get your skilled tech talent to scale your team faster and start with a free consultation today.",
  alternates: {
    canonical: "https://launchboxglobal.com/off-shore-software-development",
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
            "@type": "Organization",
            name: "LaunchBox Global",
            url: "https://launchboxglobal.com/",
            logo: "https://launchboxglobal.com/new-logo.svg",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "(888) 868-8385",
              contactType: "customer service",
              areaServed: "US",
              availableLanguage: "en",
            },
            sameAs: [
              "https://www.facebook.com/LaunchboxGlobal",
              "https://x.com/launchboxglobal/",
              "https://www.instagram.com/launchboxglobal/",
              "https://www.linkedin.com/company/launchboxglobal/",
            ],
          }),
        }}
        strategy="lazyOnload"
      />

      <OffShoreSoftwareDevelopmentPage />
    </>
  );
};

export default page;

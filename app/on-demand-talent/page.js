import OnDemandTalentPage from "@/components/OnDemandTalent/OnDemandTalentPage";
import Script from "next/script";
import React from "react";

export const metadata = {
  title: "Talent Augmentation Solutions for Agile Teams",
  description:
    "Scale your team fast with our talent augmentation services. Get pre-vetted developers, designers & tech experts ready to work in your timezone. Start now!",

  alternates: {
    canonical: "https://launchboxglobal.com/on-demand-talent",
  },
};

const OnDemandTalent = () => {
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

      <OnDemandTalentPage />
    </>
  );
};

export default OnDemandTalent;

import WebDevCompanyInNewJerseyPage from "@/components/Locations/pages/WebDevCompanyInNewJersey/WebDevCompanyInNewJerseyPage";
import Script from "next/script";
import React from "react";

export const metadata = {
  title: "Web Development in New Jersey | Launchbox Global",
  description:
    "Need web development services in New Jersey? We build custom websites for businesses. Reach out to Launchbox Global for a complimentary consultation!",
  alternates: {
    canonical:
      "https://launchboxglobal.com/web-development-company-in-new-jersey",
  },
};

const page = () => {
  return (
    <>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            name: "Web Development Company In New Jersey",
            image: "",
            description:
              "Trusted New Jersey partner delivering cost-effective, custom web solutions.",
            brand: {
              "@type": "Brand",
              name: "LaunchBox Global",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              ratingCount: "50",
            },
          }),
        }}
        strategy="lazyOnload"
      />

      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Location",
                item: "https://launchboxglobal.com/location",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Web Development Company In New Jersey",
                item: "https://launchboxglobal.com/web-development-company-in-new-jersey",
              },
            ],
          }),
        }}
        strategy="lazyOnload"
      />

      <WebDevCompanyInNewJerseyPage />
    </>
  );
};

export default page;

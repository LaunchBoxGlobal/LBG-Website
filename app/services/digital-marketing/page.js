import DigitalMarketingPage from "@/components/services/DigitalMarketing/DigitalMarketingPage";
import React from "react";

export const metadata = {
  title: "Digital Marketing Services That Grow Your Business Online",
  description:
    "Need more customers? Our digital marketing consulting services help small businesses get seen. From SEO to ads, we deliver the best digital marketing services tailored for your growth.",
  alternates: {
    canonical: "https://launchboxglobal.com/services/digital-marketing",
  },
};

const page = () => {
  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: "digital marketing services",
    image: "", // Add a real image URL if available
    description:
      "Launchbox helps brands grow online with smart marketing strategies.",
    brand: {
      "@type": "Brand",
      name: "LaunchBox Global",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      bestRating: "5",
      worstRating: "0",
      ratingCount: "5",
    },
  };
  return (
    <>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
      </head>
      <DigitalMarketingPage />
    </>
  );
};

export default page;

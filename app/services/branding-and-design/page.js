import BrandAndDesignPage from "@/components/services/BrandingAndDesign/BrandAndDesignPage";
import React from "react";

export const metadata = {
  title: "Expert Branding & Design Services | Build an Identity",
  description:
    "Our branding & design team develops reliable visuals that tell your story. From logos to full brand guidelines we create assets that resonate with your audience.",
  alternates: {
    canonical: "https://launchboxglobal.com/services/branding-and-design",
  },
};

const page = () => {
  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: "branding and design",
    image: "", // Optional: Add an image URL
    description:
      "Launchbox offers expert branding and design services that bring your vision to life—crafting memorable brand identities, stunning visuals, and cohesive digital experiences that resonate with your audience.",
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
      <BrandAndDesignPage />
    </>
  );
};

export default page;

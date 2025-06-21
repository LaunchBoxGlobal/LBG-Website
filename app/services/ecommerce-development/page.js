import EcommerceDevelopmentPage from "@/components/services/EcommerceDevelopment/EcommerceDevelopmentPage";
import React from "react";

export const metadata = {
  title: "Ecommerce Development That Boosts Sales, Not Just Traffic",
  description:
    "Our ecommerce development company builds fast, sales-focused online stores. From seamless checkout to mobile-friendly designs, our ecommerce development services turn browsers into buyers. Let’s grow your store.",
  alternates: {
    canonical: "https://launchboxglobal.com/services/ecommerce-development",
  },
};

const page = () => {
  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: "ecommerce development services",
    image: "", // Optional: Add your actual image URL
    description:
      "Launchbox provides end-to-end ecommerce development services that help businesses build powerful, user-friendly online stores—engineered for performance, security, and seamless customer experiences.",
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
      <EcommerceDevelopmentPage />
    </>
  );
};

export default page;

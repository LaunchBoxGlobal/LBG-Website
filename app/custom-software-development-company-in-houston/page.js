import SoftwareDevCompanyHoustonPage from "@/components/Locations/pages/SoftwareDevCompanyHouston/SoftwareDevCompanyHoustonPage";
import Script from "next/script";
import React from "react";

export const metadata = {
  title: "Custom Software Development Company in Houston | LaunchBox",
  description:
    "Partner with a trusted custom software development company in Houston for scalable apps, fast delivery, and industry-specific digital solutions.",
  alternates: {
    canonical:
      "https://launchboxglobal.com/custom-software-development-company-in-houston",
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
            name: "Software Development Company In Houston",
            image: "",
            description:
              "Houston team builds secure, scalable, custom software for businesses.",
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
                name: "Custom Software Development Company In Houston",
                item: "https://launchboxglobal.com/custom-software-development-company-in-houston",
              },
            ],
          }),
        }}
        strategy="lazyOnload"
      />

      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is the cost of custom software development in Houston?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The cost of custom software development in Houston depends on the project’s size, features, and timeline. On average, small applications may start at $15,000, while complex platforms can go beyond $100,000. We provide transparent, fast proposals to help you plan confidently.",
                },
              },
              {
                "@type": "Question",
                name: "What’s the typical timeline for software development projects?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Most software development projects take 3 to 6 months from planning to launch. The exact timeline depends on the project scope, complexity, and required integrations. We offer agile delivery and frequent updates throughout each phase to keep your project on track.",
                },
              },
              {
                "@type": "Question",
                name: "What are the pros and cons of local vs offshore development?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Local development offers easier communication and time zone alignment. Offshore teams often reduce costs but may have delays or communication gaps. At LaunchBox Global, we bridge both by offering U.S.-aligned management with access to global talent for better value.",
                },
              },
              {
                "@type": "Question",
                name: "How does custom software compare to off-the-shelf solutions?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Custom software is built to match your business needs exactly, offering flexibility and scalability. Off-the-shelf tools are quicker to deploy but may lack key features or integration. Businesses looking for long-term efficiency often choose custom development for better results.",
                },
              },
              {
                "@type": "Question",
                name: "Do you offer post-launch support and maintenance?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, we provide full post-launch support, including updates, bug fixes, and feature enhancements. Ongoing maintenance ensures your software stays secure, up to date, and ready to scale with your business needs.",
                },
              },
              {
                "@type": "Question",
                name: "What industries are served by software companies in Houston?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Software companies in Houston serve industries like healthcare, logistics, energy, real estate, and finance. At LaunchBox Global, we build tailored solutions that align with specific business goals across multiple sectors.",
                },
              },
            ],
          }),
        }}
        strategy="lazyOnload"
      />

      <SoftwareDevCompanyHoustonPage />
    </>
  );
};

export default page;

import SoftwareDevelopmentCompanyInNewJerseyPage from "@/components/Locations/pages/SoftwareDevelopmentCompanyInNewJersey/SoftwareDevelopmentCompanyInNewJerseyPage";
import Script from "next/script";
import React from "react";

export const metadata = {
  title: "Software Development in New Jersey | Launchbox Global",
  description:
    "Looking for expert software development in New Jersey? We offer personalized solutions for companies of all sizes. Contact us today for a free consultation.",
  alternates: {
    canonical:
      "https://launchboxglobal.com/software-development-company-in-new-jersey",
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
            name: "Software Development Company In New Jersey",
            image: "",
            description:
              "Looking for expert software development in New Jersey? We offer personalized solutions for companies of all sizes.",
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
                name: "Software Development Company In New Jersey",
                item: "https://launchboxglobal.com/software-development-company-in-new-jersey",
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
                name: "Do you build custom mobile apps for businesses in New Jersey?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes! We specialize in custom software for New Jersey businesses, big or small, new or established. Whatever your needs, we’ll build a solution that works for you.",
                },
              },
              {
                "@type": "Question",
                name: "Do you develop software for both web and desktop?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yep! Whether you need a web-based tool or a desktop application, we’ve got you covered. We’ll make sure it runs smoothly, no matter where you use it.",
                },
              },
              {
                "@type": "Question",
                name: "How do you keep the software secure?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Security is a top priority. We use strong protections like encryption and secure logins to keep your data safe. You can trust that your information won’t fall into the wrong hands",
                },
              },
              {
                "@type": "Question",
                name: "Can you fix or upgrade my current software?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Absolutely. Whether it needs small tweaks, major upgrades, or a full rebuild, we can improve your software to make it faster, easier to use, and more reliable.",
                },
              },
              {
                "@type": "Question",
                name: "What types of industries do you work with?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We’ve worked with all kinds of businesses, including healthcare, real estate, schools, stores, and more. No matter your industry, we’ll build something that fits your unique needs.",
                },
              },
              {
                "@type": "Question",
                name: "Will I be part of the development process?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Of course! We keep you in the loop every step of the way. You’ll get updates, give feedback, and help shape the final product so it’s exactly what you want.",
                },
              },
              {
                "@type": "Question",
                name: "Do you help with launching the software?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. We’ll ensure it’s done correctly. From setup to launch day, we’ll guide you through every step, ensuring your software starts strong.",
                },
              },
              {
                "@type": "Question",
                name: "Is your team located in New Jersey?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yep, we’re local! Our developers and project managers are based right here in NJ, so we’re always nearby when you need us.",
                },
              },
              {
                "@type": "Question",
                name: "Can the software connect with my existing tools or systems?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Definitely. We’ll make sure your new software works seamlessly with your current systems whether it’s your website, database, or other tools.",
                },
              },
            ],
          }),
        }}
        strategy="lazyOnload"
      />

      <SoftwareDevelopmentCompanyInNewJerseyPage />
    </>
  );
};

export default page;

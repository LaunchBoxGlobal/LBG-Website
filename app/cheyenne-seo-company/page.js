import CheyenneCompanyPage from "@/components/Locations/pages/CheyenneCompany/CheyenneCompanyPage";
import Script from "next/script";
import React from "react";

export const metadata = {
  title: "Cheyenne SEO Company | Top-Ranked Local SEO Services",
  description:
    "Leading Cheyenne SEO company helping Wyoming businesses rank higher. Get local SEO, technical fixes & Google Business Profile optimization. Free audit!",
  alternates: {
    canonical: "https://launchboxglobal.com/cheyenne-seo-company",
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
            name: "Cheyenne SEO Company",
            image: "",
            description:
              "Cheyenne team boosts local businesses’ visibility with smart, tailored SEO.",
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
                name: "Cheyenne SEO Company",
                item: "https://launchboxglobal.com/cheyenne-seo-company",
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
                name: "How much do Cheyenne SEO services cost?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Our Cheyenne SEO services start at $1,200/month for small businesses, with custom packages up to $5,000+/month for competitive industries. Pricing depends on your goals—local SEO, e-commerce optimization, or enterprise technical SEO. Get a free quote tailored to your budget.",
                },
              },
              {
                "@type": "Question",
                name: "What’s the best SEO company near me for Wyoming businesses?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We’re a Cheyenne-based SEO company with proven Wyoming results—unlike national agencies. Our local expertise helped 50+ businesses rank #1 for terms like “best restaurants in Cheyenne” and “Wyoming HVAC services.” See our case studies.",
                },
              },
              {
                "@type": "Question",
                name: "How can I improve my Google rankings in Wyoming?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Focus on:\n\n- Local keywords (e.g., “Cheyenne plumber near me”)\n- Google Business Profile optimization\n- Wyoming backlinks (local directories, news sites)\n\nWe include all this in our SEO packages.",
                },
              },
              {
                "@type": "Question",
                name: "Do you offer local SEO for Cheyenne businesses?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes! Our local SEO for Cheyenne includes:\n\n- GBP management\n- Neighborhood-specific content\n- Citation building\n\nOne client saw 3x more foot traffic in 6 months.",
                },
              },
              {
                "@type": "Question",
                name: "Can you manage my Google Business Profile in Wyoming?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Absolutely. Our Google Business Profile management ensures your listing ranks for local searches, with posts, Q&A monitoring, and review responses critical for Cheyenne shops and services.",
                },
              },
            ],
          }),
        }}
        strategy="lazyOnload"
      />

      <CheyenneCompanyPage />
    </>
  );
};

export default page;

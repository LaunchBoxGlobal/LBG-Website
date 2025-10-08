import DigitalMarketingWyomingPage from "@/components/Locations/pages/DigitalMarketingWyoming/DigitalMarketingWyomingPage";
import Script from "next/script";
import React from "react";

export const metadata = {
  title: "Wyoming Digital Marketing Agency | Grow Your Business Online",
  description:
    "Wyoming digital marketing that works: we help local businesses attract the right customers online through smart strategies, customized to your market.",
  alternates: {
    canonical: "https://launchboxglobal.com/wyoming-digital-marketing",
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
            name: "Wyoming Digital Marketing",
            image: "",
            description:
              "Wyoming experts creating tailored, data-driven digital marketing and software solutions.",
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
                name: "Wyoming Digital Marketing",
                item: "https://launchboxglobal.com/wyoming-digital-marketing",
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
                name: "How much does digital marketing cost in Wyoming?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Our Wyoming digital marketing services start at $1,500/month for small businesses, with custom packages scaling to $10,000+/month for enterprise campaigns. Pricing depends on your goals SEO, ads, and content packages vary. Get a free quote tailored to your budget.",
                },
              },
              {
                "@type": "Question",
                name: "What’s the best digital marketing agency near me for Wyoming businesses?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We’re a Wyoming-focused agency with local market expertise, unlike national firms. Serving Casper, Cheyenne, and Jackson Hole, we combine Houston’s tech expertise with Wyoming’s business culture. See our local work.",
                },
              },
              {
                "@type": "Question",
                name: "How do I market my business in Wyoming effectively?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Focus on:\n\n- Local SEO (Wyoming keywords + Google Business Profile)\n- Geo-targeted ads (Facebook/Google ads for Wyoming audiences)\n- Community-driven content (Ranch/farming/tourism themes)\n\nWe tailor strategies for your industry—learn more.",
                },
              },
              {
                "@type": "Question",
                name: "Do you offer SEO services for Wyoming companies?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes! Our Wyoming SEO services include:\n\n- Local keyword optimization (e.g., “best ranch equipment in Sheridan”)\n- Google Business Profile management\n- Backlinks from Wyoming-based sites\n\nTypical results: 50%+ traffic growth in 6–12 months.",
                },
              },
              {
                "@type": "Question",
                name: "Can you handle social media marketing for Wyoming businesses?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Absolutely. We create Wyoming-specific content (ranch life, outdoor tourism, etc.) and run targeted campaigns. One client saw 3x engagement by focusing on regional events like Cheyenne Frontier Days.",
                },
              },
            ],
          }),
        }}
        strategy="lazyOnload"
      />

      <DigitalMarketingWyomingPage />
    </>
  );
};

export default page;

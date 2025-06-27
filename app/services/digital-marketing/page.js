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
        {/* <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        /> */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Digital Marketing Services",
              serviceType:
                "SEO, Social Media Marketing, PPC Advertising, Content Marketing",
              provider: {
                "@type": "Organization",
                name: "Launchbox Global",
                url: "https://launchboxglobal.com",
                logo: "https://launchboxglobal.com/assets/logo.png",
              },
              areaServed: [
                { "@type": "Country", name: "United States" },
                { "@type": "Country", name: "United Kingdom" },
                { "@type": "Country", name: "Canada" },
                { "@type": "Country", name: "Australia" },
              ],
              description:
                "Launchbox Global delivers result-driven digital marketing services, including SEO, social media marketing, PPC, and content marketing for businesses in the USA, UK, Canada, and Australia.",
              url: "https://launchboxglobal.com/services/digital-marketing",
            }),
          }}
        />

        {/* Digital Marketing FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Why should I invest in professional Digital Marketing services instead of doing it myself?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Professional digital marketing services ensure your campaigns are data-driven, targeted, and optimized for the best return on investment (ROI). With experts handling your strategy, you’ll save time and see better results than if you managed it on your own.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How long does it take to see results from Digital Marketing?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Some strategies, like paid ads, can show results quickly—within days or weeks. Others, like SEO or content marketing, take longer to build momentum, usually around 3–6 months. We aim for both short- and long-term wins.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can I track the performance of my campaigns?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, we provide robust tracking and analytics tools to monitor the performance of your campaigns. You can easily analyze key metrics like traffic, conversions, ROI, and customer engagement, helping you optimize your strategies for better results.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How can Social Media Marketing increase my brand visibility and customer loyalty?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Social media allows you to engage with your audience directly, creating a community around your brand. By posting valuable content and interacting with followers, you can increase visibility, build trust, and foster long-term customer loyalty.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How does Social Media Marketing help improve customer loyalty and engagement?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Social media marketing builds relationships by creating a two-way conversation with your audience. By posting relevant content, responding to comments, and engaging with followers, you create a community around your brand, fostering trust and encouraging repeat business.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Why is strong branding & designing essential for successful digital marketing campaigns?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Effective digital marketing goes beyond just traffic and clicks—it’s about building a lasting brand impression. Strong branding & designing ensures your campaigns are visually compelling, emotionally resonant, and instantly recognizable across platforms. From ad creatives to landing pages, consistency in visual identity drives higher engagement and conversion rates. At Launchbox Global, we tightly align digital strategies with our Branding & Designing services to help brands stand out and stay memorable in crowded markets.",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <DigitalMarketingPage />
    </>
  );
};

export default page;

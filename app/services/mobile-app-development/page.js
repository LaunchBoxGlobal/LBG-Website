import MobileAppDevelopmentPage from "@/components/services/MobileAppDevelopment/MobileAppDevelopmentPage";
import React from "react";

export const metadata = {
  title: "Trusted Mobile App Development Company | Custom Apps Built Right",
  description:
    "We’re a hands-on mobile app development company crafting custom apps that users love. Our mobile app development services cover iOS & Android—turning ideas into high-performing apps. ",
  alternates: {
    canonical: "https://launchboxglobal.com/services/mobile-app-development",
  },
};

const productSchema = {
  "@context": "https://schema.org/",
  "@type": "Product",
  name: "Mobile app development company Services",
  image: "", // Optional: add image URL here
  description:
    "Launchbox is a leading mobile app development company in the USA, backed by a team of award-winning app developers dedicated to building innovative and user-focused mobile solutions that drive real results.",
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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How can your mobile app development service help turn my app idea into a fully functional and user-friendly product?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We transform your app idea into a functional, user-friendly product through expert consultation, intuitive UI/UX design, agile development, and thorough testing. Our end-to-end service ensures your app is scalable, secure, and ready for launch on iOS and Android, with ongoing support to help your business grow.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between Native and Cross-Platform App Development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Native apps (built for iOS or Android) offer superior performance and user experience, while cross-platform apps (e.g., React Native) save time and cost by sharing code across platforms. We help you choose the best approach based on your budget and goals.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to build a Mobile App?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Mobile App Development timeline depends on features and complexity. A basic app takes 2–4 months, while advanced apps may require 6–12 months. We follow agile methodologies to ensure timely delivery without compromising quality.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide post-launch App Maintenance and Support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we offer App Maintenance and Support Services to handle updates, bug fixes, performance optimization, and security patches. Regular maintenance ensures your app stays compatible with the latest OS versions and user expectations.",
      },
    },
    {
      "@type": "Question",
      name: "How do you ensure the security of my Mobile App?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We implement secure Mobile App Development practices, including data encryption, secure API integration, penetration testing, and compliance with GDPR/CCPA. Security is prioritized at every stage of development.",
      },
    },
    {
      "@type": "Question",
      name: "Can you help with App Store Optimization (ASO)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely! Our App Store Optimization Services include keyword research, metadata optimization, compelling visuals, and A/B testing to improve your app’s visibility and downloads on the Apple App Store and Google Play Store.",
      },
    },
    {
      "@type": "Question",
      name: "What Industries do you serve for Mobile App Development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We’ve built apps for industries like healthcare, e-commerce, fintech, logistics, education, entertainment, and many more. Our team adapts to your industry-specific requirements and regulations.",
      },
    },
    {
      "@type": "Question",
      name: "Why is UI/UX design critical for Mobile Apps?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A user-friendly mobile app UI/UX design boosts engagement, retention, and conversions. We focus on intuitive navigation, responsive layouts, and accessibility to create seamless experiences that align with your brand.",
      },
    },
  ],
};

const page = () => {
  return (
    <>
      <head>
        {/* <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        /> */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Mobile App Development Services",
              serviceType:
                "iOS App Development, Android App Development, Cross-Platform App Development",
              provider: {
                "@type": "Organization",
                name: "Launchbox Global",
                url: "https://launchboxglobal.com",
                logo: "https://launchboxglobal.com/logo.png",
              },
              areaServed: [
                { "@type": "Country", name: "United States" },
                { "@type": "Country", name: "United Kingdom" },
                { "@type": "Country", name: "Canada" },
                { "@type": "Country", name: "Australia" },
              ],
              description:
                "Launchbox Global offers end-to-end mobile app development services, including iOS, Android, and cross-platform solutions for businesses in the USA, UK, Canada, and Australia.",
              url: "https://launchboxglobal.com/services/mobile-app-development",
            }),
          }}
        />

        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "How can your mobile app development service help turn my app idea into a fully functional and user-friendly product?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We transform your app idea into a functional, user-friendly product through expert consultation, intuitive UI/UX design, agile development, and thorough testing. Our end-to-end service ensures your app is scalable, secure, and ready for launch on iOS and Android, with ongoing support to help your business grow.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What is the difference between Native and Cross-Platform App Development?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Native apps (built for iOS or Android) offer superior performance and user experience, while cross-platform apps (e.g., React Native) save time and cost by sharing code across platforms. We help you choose the best approach based on your budget and goals.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How long does it take to build a Mobile App?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The Mobile App Development timeline depends on features and complexity. A basic app takes 2–4 months, while advanced apps may require 6–12 months. We follow agile methodologies to ensure timely delivery without compromising quality.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you provide post-launch App Maintenance and Support?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, we offer App Maintenance and Support Services to handle updates, bug fixes, performance optimization, and security patches. Regular maintenance ensures your app stays compatible with the latest OS versions and user expectations.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How do you ensure the security of my Mobile App?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We implement secure Mobile App Development practices, including data encryption, secure API integration, penetration testing, and compliance with GDPR/CCPA. Security is prioritized at every stage of development.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can you help with App Store Optimization (ASO)?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Absolutely! Our App Store Optimization Services include keyword research, metadata optimization, compelling visuals, and A/B testing to improve your app’s visibility and downloads on the Apple App Store and Google Play Store.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What Industries do you serve for Mobile App Development?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We’ve built apps for industries like healthcare, e-commerce, fintech, logistics, education, entertainment, and many more. Our team adapts to your industry-specific requirements and regulations.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Why is UI/UX design critical for Mobile Apps?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "A user-friendly mobile app UI/UX design boosts engagement, retention, and conversions. We focus on intuitive navigation, responsive layouts, and accessibility to create seamless experiences that align with your brand.",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <MobileAppDevelopmentPage />;
    </>
  );
};

export default page;

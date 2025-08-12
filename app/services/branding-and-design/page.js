import BrandAndDesignPage from "@/components/services/BrandingAndDesign/BrandAndDesignPage";
import Script from "next/script";
import React from "react";

export const metadata = {
  title: "Expert Branding & Design Services | Build an Identity",
  description:
    "Branding that tells your story. We create logos, visuals, and brand guidelines that truly connect with your audience. Let’s build your brand together.",
  alternates: {
    canonical: "https://launchboxglobal.com/services/branding-and-design",
  },
};

const Page = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Branding and Design Services",
    serviceType:
      "Brand Identity Design, Logo Design, UI/UX Design, Visual Communication",
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
      "Launchbox Global provides professional branding and design services, including logo design, brand identity creation, and UI/UX design for startups and enterprises across the USA, UK, Canada, and Australia.",
    url: "https://launchboxglobal.com/services/branding-and-design",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How can branding design impact My Company’s Success?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Effective branding design communicates your business values, attracts the right audience, and strengthens customer loyalty...",
        },
      },
      {
        "@type": "Question",
        name: "What are the Key Elements of effective Branding Design?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Key elements include a memorable logo, consistent color palette, typography, brand voice, and cohesive design that resonates with your target audience...",
        },
      },
      {
        "@type": "Question",
        name: "How do you create a Brand Identity for a Business?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A brand identity is created by understanding your business values, target audience, and market position...",
        },
      },
      {
        "@type": "Question",
        name: "Can I rebrand My Business and why should I consider it?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Rebranding is ideal when your current brand no longer aligns with your business goals, audience, or market trends...",
        },
      },
      {
        "@type": "Question",
        name: "What are the benefits of hiring a Professional Branding and Design Agency?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A professional branding agency offers expertise in market research, design strategy, and customer insights...",
        },
      },
      {
        "@type": "Question",
        name: "How do you ensure consistency in Branding across all platforms?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We create detailed brand guidelines that outline how your logo, colors, fonts, and other design elements should be used...",
        },
      },
      {
        "@type": "Question",
        name: "What are the trends in Branding and Design for 2025?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Branding and design trends for 2025 focus on minimalist aesthetics, bold typography, and sustainable design...",
        },
      },
      {
        "@type": "Question",
        name: "What are some examples of successful Branding and Design Strategies?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Examples include Apple’s minimalist design, Coca-Cola’s consistent brand messaging, and Nike’s storytelling...",
        },
      },
      {
        "@type": "Question",
        name: "How does branding influence the success of eCommerce development projects?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Branding plays a critical role in the success of any eCommerce platform—it defines how customers perceive your store...",
        },
      },
    ],
  };

  return (
    <>
      {/* JSON-LD for Service */}
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* JSON-LD for FAQ */}
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Page Content */}
      <BrandAndDesignPage />
    </>
  );
};

export default Page;

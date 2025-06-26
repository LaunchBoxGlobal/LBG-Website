import CustomSoftwareDevelopmentPage from "@/components/services/CustomSoftwareDevelopment/CustomSoftwareDevelopmentPage";
import React from "react";

export const metadata = {
  title: "Custom Software Development | Solutions for Your Business",
  description:
    "Need software built for your needs? Our custom software development delivers scalable, secure solutions designed for your workflow. Get a free consultation.",
  alternates: {
    canonical:
      "https://launchboxglobal.com/services/custom-software-development",
  },
};

const page = () => {
  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: "custom software development solutions",
    image: "", // Optional: add image URL
    description:
      "Launchbox delivers tailored custom software development solutions that align with your unique business goals—powered by expert developers, agile methodologies, and a focus on long-term scalability and performance.",
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
        name: "How do you ensure data security in your healthcare software solutions?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We ensure data security through HIPAA-compliant architectures, end-to-end encryption, secure authentication, regular audits, and strict access controls, protecting patient information at every stage of the software lifecycle.",
        },
      },
      {
        "@type": "Question",
        name: "Why we choose your Custom Software Development company, Why Custom Software Development Services is important?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Choose us for tailored, scalable, and secure solutions that fit your exact business needs. Custom software boosts efficiency, supports unique workflows, and grows with your company, unlike off-the-shelf alternatives.",
        },
      },
      {
        "@type": "Question",
        name: "What do your Custom Programming Services include?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Look for agencies with proven expertise in your industry, transparent workflows (e.g., Agile/Scrum), and post-launch support. Check portfolios for similar projects, read client reviews, and verify technical certifications. The best agencies prioritize communication, offer flexible pricing, and align with your long-term goals.",
        },
      },
      {
        "@type": "Question",
        name: "How to identify the best Software Development Agency for my project?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Look for agencies with proven expertise in your industry, transparent workflows (e.g., Agile/Scrum), and post-launch support. Check portfolios for similar projects, read client reviews, and verify technical certifications. The best agencies prioritize communication, offer flexible pricing, and align with your long-term goals.",
        },
      },
      {
        "@type": "Question",
        name: "How does your Software Agency ensure transparency throughout the development process?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We prioritize transparency via daily updates, open communication channels, and collaborative tools (e.g., Jira, Trello). Clients access real-time progress dashboards, participate in sprint reviews, and approve milestones. Clear documentation, no hidden costs, and iterative feedback loops ensure alignment with your goals, building trust and accountability at every stage.",
        },
      },
    ],
  };
  return (
    <>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <CustomSoftwareDevelopmentPage />
    </>
  );
};

export default page;

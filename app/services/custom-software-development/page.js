import CustomSoftwareDevelopmentPage from "@/components/services/CustomSoftwareDevelopment/CustomSoftwareDevelopmentPage";
import Head from "next/head";
import Script from "next/script";
import React from "react";

export const metadata = {
  title: "Custom Software Development | Solutions for Your Business",
  description:
    "Custom software made for your business. We build practical tools that improve your workflow and fit your exact needs. Let’s talk about your project today.",
  alternates: {
    canonical:
      "https://launchboxglobal.com/services/custom-software-development",
  },
};

const page = () => {
  return (
    <>
      {/* <Head> */}
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Custom Software Development Services",
            serviceType:
              "Enterprise Software Solutions, SaaS Development, Business Automation Software",
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
              "Launchbox Global provides tailored custom software development services including SaaS products, enterprise applications, and business automation software for clients in the USA, UK, Canada, and Australia.",
            url: "https://launchboxglobal.com/services/custom-software-development",
          }),
        }}
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
          }),
        }}
      />
      {/* </Head> */}
      <CustomSoftwareDevelopmentPage />
    </>
  );
};

export default page;

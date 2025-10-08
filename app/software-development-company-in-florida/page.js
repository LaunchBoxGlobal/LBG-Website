import SoftwareDevelopmentInFloridaPage from "@/components/Locations/pages/SoftwareDevelopmentCompany/SoftwareDevelopmentInFloridaPage";
import Script from "next/script";
import React from "react";

export const metadata = {
  title: "Software Development Company in Florida | LaunchBox Global",
  description:
    "Leading software development company in Florida offering custom solutions for businesses. Mobile apps, web platforms & enterprise systems with proven results.",
  alternates: {
    canonical:
      "https://launchboxglobal.com/software-development-company-in-florida",
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
            name: "Software Development Company In Florida",
            image: "",
            description:
              "Top software development company in Florida offering custom solutions for businesses. Mobile apps, web platforms & enterprise systems with proven results.",
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
                name: "Software Development Company In Florida",
                item: "https://launchboxglobal.com/software-development-company-in-florida",
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
                name: "Do you work with startups and small businesses in Florida, or just large enterprises?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, we work with startups, small businesses, and large companies alike. Whether you're launching a new product or improving an existing system, we’ll tailor the solution to your goals and budget. Our process is flexible, so you don’t need a huge team or budget to get started.",
                },
              },
              {
                "@type": "Question",
                name: "How do you ensure the quality and security of the software you build?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We follow industry best practices like code reviews, automated testing, and secure coding standards. We also use version control and encrypted environments to protect your data. Everything is tested thoroughly before launch, and we can follow any specific security policies you have.",
                },
              },
              {
                "@type": "Question",
                name: "What technologies and platforms do you specialize in?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We work with modern technologies like React, Node.js, .NET, Python, Flutter, AWS, and more. We choose the tech stack based on what fits your project best scalable, secure, and future-ready so you’re never stuck with outdated tools.",
                },
              },
              {
                "@type": "Question",
                name: "How do you manage communication and project updates during development?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We stay in touch regularly through email, video calls, and project management tools like Trello or Jira. You’ll get weekly updates, milestone reports, and quick responses to your questions, so you always know how things are progressing.",
                },
              },
              {
                "@type": "Question",
                name: "What if I’m not technical? How will I be involved in the development process?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No problem! Many of our clients aren't technical. We explain things in plain language and guide you through each step. You'll help with decision-making, testing, and feedback but we’ll handle all the heavy lifting.",
                },
              },
              {
                "@type": "Question",
                name: "Can you take over an existing software project or codebase?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, we often take over projects that need new features, improvements, or a fresh start. We’ll review the current code, identify issues, and recommend the best way to move forward whether it’s fixing, rebuilding, or scaling.",
                },
              },
              {
                "@type": "Question",
                name: "Will I own the code and intellectual property once the project is complete?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, 100%. Once the project is finished and paid for, you’ll own all the source code and IP. We also provide full access to files, documentation, and repositories, so you’re in complete control.",
                },
              },
              {
                "@type": "Question",
                name: "Do you offer a free consultation before I commit?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Absolutely. We offer a free, no-pressure consultation to understand your goals, answer your questions, and suggest the right approach. It's a great way to see if we’re the right fit before making any commitment.",
                },
              },
            ],
          }),
        }}
        strategy="lazyOnload"
      />

      <SoftwareDevelopmentInFloridaPage />
    </>
  );
};

export default page;

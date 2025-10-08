import StaffAugmentationPage from "@/components/StaffAugmentation/StaffAugmentationPage";
import Script from "next/script";
import React from "react";

export const metadata = {
  title: "IT Staff Augmentation Services | Hire Skilled Tech Talent",
  description:
    "Scale your team fast with expert IT staff augmentation services. Get skilled developers in your timezone at flexible rates. Hire today & build smarter!",

  alternates: {
    canonical: "https://launchboxglobal.com/staff-augmentation",
  },
};

const page = () => {
  return (
    <>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "LaunchBox Global",
            url: "https://launchboxglobal.com/",
            logo: "https://launchboxglobal.com/new-logo.svg",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "(888) 868-8385",
              contactType: "customer service",
              areaServed: "US",
              availableLanguage: "en",
            },
            sameAs: [
              "https://www.facebook.com/LaunchboxGlobal",
              "https://x.com/launchboxglobal/",
              "https://www.instagram.com/launchboxglobal/",
              "https://www.linkedin.com/company/launchboxglobal/",
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
                name: "How can your IT staff augmentation services help reduce my software development time?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We provide pre-vetted developers and engineers who can be onboarded in days, not weeks. This allows you to immediately scale your software development efforts and reduce time-to-market without lengthy recruitment cycles.",
                },
              },
              {
                "@type": "Question",
                name: "Do you offer software development staff augmentation for specific technologies or full-stack teams?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Our staff augmentation service covers specialized roles (like React, Node.js, Python, .NET, etc.) as well as full-stack developers, QA engineers, DevOps, and UI/UX designers—customized to match your project requirements.",
                },
              },
              {
                "@type": "Question",
                name: "Can your resource augmentation services integrate with our in-house Agile or Scrum teams?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Absolutely. Our engineers are experienced in Agile methodologies and can integrate smoothly with your sprint cycles, daily standups, and collaboration tools such as Jira, Slack, or Trello.",
                },
              },
              {
                "@type": "Question",
                name: "What’s the typical onboarding time for your offshore staff augmentation team?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We can onboard offshore developers in as little as 3–5 business days after understanding your requirements and finalizing the contract, ensuring minimal project delays.",
                },
              },
              {
                "@type": "Question",
                name: "How do you ensure quality and accountability with offshore staff augmentation?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We assign a dedicated account manager, enforce KPIs, and conduct regular performance reviews. All augmented staff work under your direction while we handle HR, payroll, and operational management.",
                },
              },
              {
                "@type": "Question",
                name: "What time zones do your offshore staff augmentation teams operate in?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We offer talent across multiple regions (Asia, Eastern Europe, Latin America) and can align work hours partially or fully with your time zone to ensure seamless communication.",
                },
              },
              {
                "@type": "Question",
                name: "Will augmented staff be dedicated to my project, or working on multiple clients?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Our resource augmentation services provide dedicated developers who work exclusively on your project, ensuring focus, accountability, and faster delivery.",
                },
              },
              {
                "@type": "Question",
                name: "Is your staff augmentation service suitable for long-term software development partnerships?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Many of our clients use staff augmentation as a long-term solution to support product development, maintenance, and continuous delivery over months or even years.",
                },
              },
            ],
          }),
        }}
        strategy="lazyOnload"
      />
      <StaffAugmentationPage />;
    </>
  );
};

export default page;

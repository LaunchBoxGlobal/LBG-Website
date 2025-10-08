import WebAppDevelopmentPage from "@/components/services/WebAppDevelopment/WebAppDevelopmentPage";
import Script from "next/script";
import React from "react";

export const metadata = {
  title: "Expert Web App Development Services for Your Business",
  description:
    "Get top-quality web app development services from expert developers. We build custom, fast, and secure web applications tailored to your business needs.",
  alternates: {
    canonical: "https://launchboxglobal.com/services/web-app-development",
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
            "@type": "Service",
            name: "Web App Development Services",
            serviceType:
              "Custom Web Applications, Progressive Web Apps (PWA), Enterprise Web Solutions",
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
              "Launchbox Global delivers high-performance web app development services, including custom web apps, PWAs, and enterprise-grade solutions for businesses in the USA, UK, Canada, and Australia.",
            url: "https://launchboxglobal.com/services/web-app-development",
          }),
        }}
      />

      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            name: "web app development services",
            image: "",
            description:
              "Custom web app development services for scalable digital solutions.",
            brand: {
              "@type": "Brand",
              name: "LaunchBox Global",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
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
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What are the three types of web app development services?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The three main types are static web apps, dynamic web apps, and progressive web apps. Our web app development services cover all three, creating everything from simple informational apps to complex, interactive platforms. Whether you need speed, scalability, or both, our web app developers can bring your idea to life.",
                },
              },
              {
                "@type": "Question",
                name: "Can ChatGPT actually create a website?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Not directly. ChatGPT can give ideas, code snippets, and guidance, but you’ll still need expert web application development teams to build and launch your site. Our web app agency combines AI assistance with skilled developers to deliver professional, functional, and beautiful web apps.",
                },
              },
              {
                "@type": "Question",
                name: "What is the difference between a web app and a website?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A website shows information, while a web app lets users interact, log in, shop, or perform tasks. If you want something beyond a static site, our web app development team can design apps that are engaging, functional, and built for your business goals.",
                },
              },
              {
                "@type": "Question",
                name: "What are the 7 stages of web development?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The web development process typically includes seven key stages: planning, design, development, testing, deployment, launch, and maintenance. Our web application development team follows this process to ensure your app is functional, visually appealing, and easy to maintain for years to come.",
                },
              },
              {
                "@type": "Question",
                name: "Do you only build web apps?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No, we also create mobile apps, APIs, and complete digital solutions. Whether you need web app development services or a complete product ecosystem, our team helps you from concept to launch.",
                },
              },
              {
                "@type": "Question",
                name: "What technologies are commonly used in web app development?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Web apps often use HTML, CSS, JavaScript, React, Angular, Node.js, and more. Our web app developers choose the right tech stack to match your project’s needs—whether it’s a fast prototype, a secure enterprise app, or a feature-rich platform.",
                },
              },
              {
                "@type": "Question",
                name: "Can you work with businesses outside New Jersey?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Absolutely. While we have a strong presence as a web app development company in New Jersey, our client base spans across the globe. Regardless of your time zone or location, we deliver the same level of quality, transparency, and support as we do for local projects.",
                },
              },
            ],
          }),
        }}
        strategy="lazyOnload"
      />

      <WebAppDevelopmentPage />
    </>
  );
};

export default page;

import EcommerceDevelopmentPage from "@/components/services/EcommerceDevelopment/EcommerceDevelopmentPage";
import Script from "next/script";
import React from "react";

export const metadata = {
  title: "Ecommerce Development That Boosts Sales, Not Just Traffic",
  description:
    "Our software development agency builds custom applications and tailored software solutions to help your business grow. Get expert development done right.",
  alternates: {
    canonical: "https://launchboxglobal.com/services/ecommerce-development",
  },
};

const page = () => {
  return (
    <>
      {/* <head> */}
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "eCommerce Development Services",
            serviceType:
              "Custom eCommerce Platforms, Shopify Development, WooCommerce Development, Headless Commerce",
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
              "Launchbox Global offers full-scale eCommerce development services including custom online store creation, Shopify and WooCommerce solutions, and headless commerce for clients in the USA, UK, Canada, and Australia.",
            url: "https://launchboxglobal.com/services/ecommerce-development",
          }),
        }}
      />

      {/* E-Commerce Development FAQ Schema */}
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Why should I invest in professional Ecommerce Development instead of using ready-made templates?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Custom ecommerce development ensures that your online store meets your unique business goals. Unlike templates, which can limit flexibility, a professionally developed ecommerce site is scalable, secure, and optimized for your specific customer base.",
                },
              },
              {
                "@type": "Question",
                name: "Which platforms do you develop Ecommerce websites on?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We specialize in platforms like Shopify, WooCommerce, Magento, BigCommerce, and custom-built solutions using Laravel, React, and more.",
                },
              },
              {
                "@type": "Question",
                name: "Will my Ecommerce website be mobile-friendly?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, your eCommerce website will be fully mobile-friendly. We ensure responsive design, optimized user experience, and fast loading speeds across all devices. This ensures your customers enjoy a smooth, consistent shopping experience on smartphones, tablets, and desktops.",
                },
              },
              {
                "@type": "Question",
                name: "How secure will my Ecommerce website be?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Your eCommerce website will be highly secure, featuring SSL encryption, secure payment gateways, regular security audits, and strict access controls. We implement best practices to protect sensitive customer data and prevent cyber threats, ensuring a safe online shopping experience.",
                },
              },
              {
                "@type": "Question",
                name: "Do you offer ongoing support and maintenance?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, we provide ongoing support and maintenance to ensure your software stays up-to-date, secure, and performs optimally. Our services include bug fixes, updates, system monitoring, and scalability enhancements to adapt to your evolving business needs.",
                },
              },
              {
                "@type": "Question",
                name: "Can I manage my products and orders easily?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, our eCommerce solutions come with intuitive dashboards that allow you to easily manage products, track orders, update inventory, and process transactions. We prioritize a user-friendly interface for seamless business management.",
                },
              },
              {
                "@type": "Question",
                name: "How does Launchbox Global ensure that eCommerce platforms are optimized for digital marketing success?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We don’t just build high-performing eCommerce platforms—we engineer them to support your full digital marketing strategy from day one. Our development approach includes SEO-friendly architecture, fast load speeds, conversion-optimized design, and integrations with tools like Google Analytics, Meta Pixel, and email automation systems. To maximize your store’s visibility and revenue, we recommend pairing your build with our expert Digital Marketing services, which drive targeted traffic and measurable ROI",
                },
              },
            ],
          }),
        }}
      />
      {/* </head> */}
      <EcommerceDevelopmentPage />
    </>
  );
};

export default page;

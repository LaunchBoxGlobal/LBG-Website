import WebAppDevelopmentPage from "@/components/services/WebAppDevelopment/WebAppDevelopmentPage";
import React from "react";

export const metadata = {
  title: "Expert Web App Development Services | Custom-Built Solutions",
  description:
    "We provide top-tier web app development services for businesses. Our web application development agency builds fast, secure & scalable solutions. Among leading web app development companies, we deliver results.",
  alternates: {
    canonical: "https://launchboxglobal.com/services/web-app-development",
  },
};

const page = () => {
  return (
    <>
      <head>
        <script
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
                  name: "What makes your Web App Development Services different from other companies?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We’re not just another Web Application Development Agency; We’re your technology partner. We follow an Agile workflow to keep things efficient and adaptable, while our functionality-first approach ensures we build solutions that deliver real business value. With access to world-class talent and industry-specific expertise, We create Custom Solutions that fit your needs perfectly. Plus, our transparent pricing and dedicated post-launch support mean no surprises.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can your Web App Developers create apps that handle growing traffic?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Absolutely! We build scalable apps using modular architecture, ensuring they grow seamlessly with your user base and data needs.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you offer Progressive Web App Development Services for faster mobile performance?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes! We build Progressive Web Apps (PWAs) that work offline, load quickly, and feel like native apps—perfect for mobile users.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do Web App Development Companies like yours handle post-launch updates?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Definitely! We offer affordable maintenance plans for updates, bug fixes, and feature tweaks to keep your app running flawlessly.",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <WebAppDevelopmentPage />
    </>
  );
};

export default page;

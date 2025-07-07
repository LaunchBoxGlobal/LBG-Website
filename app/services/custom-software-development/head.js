export default function Head() {
  return (
    <>
      <title>Custom Software Development | Solutions for Your Business</title>
      <meta
        name="description"
        content="Need software built for your needs? Our custom software development delivers scalable, secure solutions designed for your workflow. Get a free consultation."
      />
      <link
        rel="canonical"
        href="https://launchboxglobal.com/services/custom-software-development"
      />
      {/* Custom Software Development Service Schema */}
      <script
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
                name: "How do you ensure data security in your healthcare software solutions?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We ensure data security through HIPAA-compliant architectures, end-to-end encryption, secure authentication, regular audits, and strict access controls, protecting patient information at every stage of the software lifecycle.",
                },
              },
              {
                "@type": "Question",
                name: "Why we choose your Custom Software Development company?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Choose us for tailored, scalable, and secure solutions that fit your exact business needs. Custom software boosts efficiency, supports unique workflows, and grows with your company, unlike off-the-shelf alternatives.",
                },
              },
              {
                "@type": "Question",
                name: "How does your Software Agency ensure transparency?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We prioritize transparency via daily updates, open communication channels, and collaborative tools (e.g., Jira, Trello). Clients access real-time progress dashboards, participate in sprint reviews, and approve milestones.",
                },
              },
            ],
          }),
        }}
      />
    </>
  );
}

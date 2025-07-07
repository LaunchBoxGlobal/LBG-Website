import HomePage from "@/components/Home/HomePage";
import Script from "next/script";

export const metadata = {
  title: "Top Software Development Agency | Custom App & Software Solutions",
  description:
    "Leading software development agency delivering expert software development services. We specialize in custom application development and tailored software engineering solutions for your business growth.",
  alternates: {
    canonical: "https://launchboxglobal.com",
  },
};

export default function Home() {
  return (
    <>
      {/* <head> */}
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Corporation",
            name: "LaunchBox Global",
            url: "https://launchboxglobal.com",
            logo: "https://launchboxglobal.com/_next/image?url=%2Flogo02.png&w=256&q=75",
          }),
        }}
      />
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "WebSite",
            name: "LaunchBox Global",
            url: "https://launchboxglobal.com/",
            potentialAction: {
              "@type": "SearchAction",
              target:
                "https://launchboxglobal.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />
      {/* </head> */}

      {/* Page Content */}
      <HomePage />
    </>
  );
}

import ContactUsForm from "@/components/ContactUs/ContactUsForm";
import ContactUsHero from "@/components/ContactUs/ContactUsHero";
import Stats from "@/components/ContactUs/Stats";
import React from "react";

export const metadata = {
  title: "Contact LaunchBox Global | Get in Touch With Our Team",
  description:
    "Reach out to LaunchBox Global for inquiries. Our team is ready to povide you customized solutions according to your needs. Quick responses guaranteed.",
  alternates: {
    canonical: "https://launchboxglobal.com/contact-us",
  },
};

const page = () => {
  return (
    <main className="w-full">
      <ContactUsHero />
      <ContactUsForm />
      <Stats />
    </main>
  );
};

export default page;

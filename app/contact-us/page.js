import ContactUsForm from "@/components/ContactUs/ContactUsForm";
import ContactUsHero from "@/components/ContactUs/ContactUsHero";
import HomeStats from "@/components/Home/HomeStats";
import React from "react";

export const metadata = {
  title: "Contact LaunchBox Global | Get in Touch With Our Team",
  description:
    "Reach out to LaunchBox Global for inquiries or project discussions. Our team is ready to help with your software development needs. Quick responses guaranteed.",
  alternates: {
    canonical: "https://launchboxglobal.com/contact-us",
  },
};

const page = () => {
  return (
    <main className="w-full">
      <ContactUsHero />
      <ContactUsForm />
      <HomeStats />
    </main>
  );
};

export default page;

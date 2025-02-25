import ContactUsForm from "@/components/ContactUs/ContactUsForm";
import ContactUsHero from "@/components/ContactUs/ContactUsHero";
import React from "react";

const page = () => {
  return (
    <main className="w-full">
      <ContactUsHero />
      <ContactUsForm />
    </main>
  );
};

export default page;

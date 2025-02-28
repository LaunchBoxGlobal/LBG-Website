import ContactUsForm from "@/components/ContactUs/ContactUsForm";
import ContactUsHero from "@/components/ContactUs/ContactUsHero";
import HomeStats from "@/components/Home/HomeStats";
import React from "react";

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

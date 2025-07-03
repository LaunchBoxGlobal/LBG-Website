import React from "react";
import Hero from "./Hero";
import Platforms from "@/components/Common/Platforms";
import Locations from "./Locations";
import BlogsContactForm from "@/components/Common/BlogsContactForm";

const LocationsArchivePage = () => {
  return (
    <div className="w-full overflow-hidden relative">
      <Hero />
      <Platforms />
      <Locations />
      <section className="w-full padding-x pb-20 midlg:pb-32">
        <BlogsContactForm />
      </section>
    </div>
  );
};

export default LocationsArchivePage;

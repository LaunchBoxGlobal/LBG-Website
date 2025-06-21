import React from "react";
import Hero from "./Hero";
import List from "./List";
import BlogsContactForm from "@/components/Common/BlogsContactForm";

const ArchivePage = () => {
  return (
    <main className="w-full h-auto relative">
      <Hero />
      <List />
      <div className="w-full padding-x pb-28">
        <div className="w-full border mb-28" />
        <BlogsContactForm />
      </div>
    </main>
  );
};

export default ArchivePage;

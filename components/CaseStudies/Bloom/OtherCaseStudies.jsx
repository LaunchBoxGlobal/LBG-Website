"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Card from "../ArchivePage/Card";
import { ARCHIVED_CASE_STUDIES } from "@/constants/case-studies/archived-case-studies";

const OTHER_CASE_STUDIES = [
  {
    image: "/case-studies/my-garage-outlet-image.png",
    title: "My Garage Outlet",
    url: "Visit Company Profile",
  },
  {
    image: "/case-studies/usubz-image.png",
    title: "U Subz",
    url: "Visit Company Profile",
  },
  {
    image: "/case-studies/fitness-by-faith-image.png",
    title: "Fitness by faith",
    url: "Visit Company Profile",
  },
];

const OtherCaseStudies = () => {
  const [page, setPage] = useState(null);

  useEffect(() => {
    setPage(window?.location?.href);
  }, []);

  const filteredCaseStudies = ARCHIVED_CASE_STUDIES?.filter((c) => {
    // You can adjust this condition based on whether `c.url` is a full URL or relative path
    return page && !page.includes(c?.url);
  });
  return (
    <section className="w-full padding-x flex flex-wrap pb-40">
      <h2 className="section-heading text-center mb-10 mx-auto">
        Wanna See More?
      </h2>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredCaseStudies?.map((c, i) => {
          return (
            <Link key={i} href={c?.url}>
              <div className="w-full relative space-y-4">
                <Image
                  src={c?.image}
                  width={403}
                  height={380}
                  alt={`${c?.title}-featured-image`}
                  className="h-[380px] object-cover rounded-3xl"
                />
                <h3 className="text-lg md:text-xl lg:text-2xl">{c?.title}</h3>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default OtherCaseStudies;

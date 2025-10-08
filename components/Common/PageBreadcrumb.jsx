import Link from "next/link";
import React from "react";

const PageBreadcrumb = ({
  pageTitle,
  pageLink,
  primaryLink,
  primaryPageTitle,
}) => {
  return (
    <section className="w-full flex items-center gap-2">
      <Link
        href={primaryLink ? primaryLink : "/"}
        className="font-normal text-sm md:text-base lg:text-lg text-[#212121] tracking-tight"
      >
        {primaryPageTitle ? primaryPageTitle : "Home"}
      </Link>
      <span>/</span>
      <Link
        href={pageLink}
        className="font-normal text-sm md:text-base lg:text-lg text-[#212121] tracking-tight"
      >
        {pageTitle}
      </Link>
    </section>
  );
};

export default PageBreadcrumb;

import Link from "next/link";
import React from "react";

const AboutSection = () => {
  return (
    <section className="w-full py-20 midlg:py-32 xl:py-40 bg-[#fff] padding-x overflow-hidden">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="text-[25px] font-semibold red-text lg:w-[90%] mx-auto">
          Discover Launchbox Global
        </h2>

        <p className="text-2xl md:text-3xl lg:text-[36px] text-gray-500 lg:w-[90%] mx-auto leading-[3] font-normal">
          At LaunchBox Global, our mission is to work alongside clients to
          develop digital solutions that are specifically customized to their
          needs. We initiate our process by thoroughly understanding your
          objectives, which guides our efforts at every stage. As a
          distinguished web application development company in New Jersey, we
          encourage you to review our latest{" "}
          <Link href={`/case-studies`} className="red-text">
            projects
          </Link>{" "}
          and{" "}
          <Link href={`/blogs`} className="red-text">
            blogs
          </Link>{" "}
          insights to see our expertise in action. In the fast-paced environment
          of web development companies in New Jersey, we stand out through our
          commitment to clear communication, honesty, and delivering outcomes
          that are enduring and aligned with your business priorities.
        </p>
      </section>
    </section>
  );
};

export default AboutSection;

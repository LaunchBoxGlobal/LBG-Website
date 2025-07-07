import AnimatedText from "@/components/StaffAugmentation/AnimatedText";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <section className="w-full py-20 midlg:py-32 xl:py-40 bg-[#fff] padding-x overflow-hidden">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <AnimatedText>
          <h2 className="text-[25px] font-semibold red-text lg:w-[90%] mx-auto">
            Cheyenne SEO Company That Gets Results
          </h2>
        </AnimatedText>
        <AnimatedText>
          <p className="text-2xl md:text-3xl lg:text-[36px] text-gray-500 lg:w-[90%] mx-auto leading-[3] font-normal">
            LaunchBox Global is a full-service{" "}
            <Link
              href={`https://developers.google.com/search/docs/fundamentals/seo-starter-guide`}
              rel="nofollow"
              target="_blank"
              className="red-text"
            >
              SEO company
            </Link>{" "}
            in Cheyenne, Wyoming, helping local businesses dominate search
            rankings. While we excel at technical SEO and content marketing, our
            roots in software development give us unique insights into website
            performance. We’ve helped 50+ Cheyenne clients grow by combining
            marketing expertise with technical excellence to deliver measurable
            results.
          </p>
        </AnimatedText>
      </section>
    </section>
  );
};

export default About;

// 2096

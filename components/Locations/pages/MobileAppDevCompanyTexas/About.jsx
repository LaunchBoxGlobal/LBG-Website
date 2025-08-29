import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <section className="w-full py-20 midlg:py-32 xl:py-40 bg-[#fff] padding-x overflow-hidden">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="text-[25px] font-semibold red-text lg:w-[90%] mx-auto">
          Introducing LaunchBox Global
        </h2>

        <p className="text-2xl md:text-3xl lg:text-[36px] text-gray-500 lg:w-[90%] mx-auto leading-[3] font-normal">
          We are the go-to mobile app development company in Texas, trusted by
          startups and founders. We specialize in mobile app development,
          focused on helping businesses in Texas succeed. We understand that
          building an app can sometimes feel overwhelming, so our top
          application developers​ ensure that you don’t have to deal with the
          issues later. And if you do, we’re right there with you, even after
          launch. And it doesn’t stop at mobile apps. You also get access to a
          variety of services designed to grow your business, like{" "}
          <Link
            href={`https://launchboxglobal.com/services/custom-software-development`}
            className="underline"
          >
            custom software
          </Link>
          ,{" "}
          <Link
            href={`https://launchboxglobal.com/services/web-app-development`}
            className="underline"
          >
            web applications
          </Link>
          ,{" "}
          <Link
            href={`https://launchboxglobal.com/services/ecommerce-development`}
            className="underline"
          >
            eCommerce development
          </Link>
          , and even{" "}
          <Link
            href={`https://launchboxglobal.com/services/branding-and-design`}
            className="underline"
          >
            branding
          </Link>
          . Whatever your business needs, we’ve got you covered.
        </p>
      </section>
    </section>
  );
};

export default About;

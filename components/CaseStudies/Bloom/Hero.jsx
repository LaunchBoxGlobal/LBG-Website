import PageBreadcrumb from "@/components/Common/PageBreadcrumb";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="w-full bg-white relative pt-36 2xl:pt-52 flex flex-col items-center justify-start gap-5 overflow-hidden padding-x">
      {/* <PageBreadcrumb
        pageLink={"/case-studies/bloom"}
        pageTitle={"Bloom"}
        primaryLink={"/case-studies"}
        primaryPageTitle={"Case Studies"}
      /> */}
      <Image
        src={"/case-studies/bloom-logo.png"}
        width={149}
        height={109}
        alt="bloom logo"
      />
      <h1 className="font-bold text-[40px] lg:text-[80px] text-center leading-[1.1]">
        BLooM By <span className="bloomTextColor">Brittany</span>
      </h1>
      <h2 className="text-[22px] font-medium">Overview</h2>
      <p className="text-xl text-center lg:w-[90%]">
        When Brittany's church wanted to strengthen their community's faith, we
        built Bloom. A mobile app development project that puts spiritual growth
        in everyone's hands. Members now start their day with devotionals,
        listen to worship music anywhere, and never miss a sermon. The app
        connects the whole congregation through prayer requests and event
        updates. Designed to support hundreds of simultaneous users, it's become
        their go-to digital space for faith and fellowship.
      </p>
      <div className="flex items-center justify-center gap-2">
        <Link href={"/"}>
          <Image
            src={"/app-store-button-image.png"}
            width={239}
            height={57}
            alt="app-store-button-image"
          />
        </Link>
        <Link href={"/"}>
          <Image
            src={"/google-play-button-image.png"}
            width={239}
            height={57}
            alt="google-play-button-image"
          />
        </Link>
      </div>
    </section>
  );
};

export default Hero;

import Image from "next/image";
import Link from "next/link";
import React from "react";

const SwiftCta = () => {
  return (
    <section className="w-full padding-x py-10 lg:py-20">
      <div className="w-full relative bg-[#FF5034] text-white flex flex-col items-center justify-center gap-6 rounded-[20px] px-4 py-10 lg:p-16 overflow-hidden text-center">
        <h3 className="text-[30px] md:text-[40px] lg:text-[50px] font-bold leading-[1.3] z-10">
          Your Fast Track to Powerful iOS Apps
        </h3>
        <p className="lg:text-xl text-center lg:w-2/3">
          Partner with us for swift development services that combine technical
          excellence and industry best practices to deliver secure high-quality
          iOS apps designed to scale with your business needs.
        </p>
        <Link
          href={"/contact-us"}
          className="bg-white orangeText py-5 px-8 z-10 rounded-[11px] text-lg font-semibold h-[60px] flex items-center justify-center text-center hover:bg-black hover:text-white transition-all duration-300"
        >
          Get Expert Swift Developers
        </Link>

        {/* <Image
          src={"/swift/cta-map-image.png"}
          width={1330}
          height={677}
          loading="lazy"
          alt="cta-map-image"
          className="w-full h-full object-cover absolute inset-0 z-0"
        /> */}
        <Image
          src="/swift/cta-map-image.png"
          alt="Map showing Swift CTA"
          fill
          // priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1330px"
          className="object-cover absolute inset-0 z-0"
        />
      </div>
    </section>
  );
};

export default SwiftCta;

import Image from "next/image";
import Link from "next/link";
import React from "react";
import ContactForm from "./ContactForm";

function FinalCTA() {
  return (
    <section className="w-full mx-auto bg-black text-white rounded-[17px]  max-w-[1220px]   grid grid-cols-1 lg:grid-cols-2 gap-10 items-center  overflow-hidden">
      {/* ===== Left Content ===== */}
      {/* <div className="relative py-16 px-10 z-10 flex flex-col items-start justify-center space-y-6 md:w-[60%]">
        <h2 className="text-3xl font-extrabold leading-snug md:text-4xl">
          Start Your Ecommerce Success
          <br />
          <span className="text-white">Journey With Us Today</span>
        </h2>
        <p className="text-gray-300">
          Every moment you delay launching your online store, you risk losing
          customers and revenue. Our team specializes in building
          high-performing ecommerce stores and apps quickly and efficiently.
          With our expertise, you can start selling faster, capture your
          audience, and stay ahead of competitors without wasting another day.
        </p>

        <Link
              href="/contact-us"
              className="group relative inline-block z-50 [transform:translateZ(0)] font-semibold px-6 py-3 rounded-lg overflow-hidden bg-[#F40E00] 
  before:absolute before:bg-[#ffffff] before:top-1/2 before:left-1/2 before:h-8 before:w-12 before:-translate-y-1/2 before:-translate-x-1/2 
  before:rounded-full before:scale-[0] before:opacity-0 
  hover:before:scale-[6] hover:before:opacity-100 
  before:transition before:ease-in-out before:duration-500"
            >
              <span className="relative z-0 text-white group-hover:text-black transition ease-in-out duration-500">
              Talk to Our Experts
              </span>
            </Link>
      </div> */}
      <ContactForm/>
      <Image
        src={"/industries/ecommerce/icons/mobiles.png"}
        alt="mobile"
        width={1050}
        height={1050}
        className="object-center"
      />
    </section>
  );
}

export default FinalCTA;

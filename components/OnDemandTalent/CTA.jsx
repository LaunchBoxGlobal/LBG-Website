import Image from "next/image";
import Link from "next/link";
import React from "react";

const CTA = () => {
  return (
    <section className="w-full py-20 md:pb-40 midlg:py-32 xl:py-40 px-6 md:px-8 midlg:px-[10%] 2xl:px-[13%] overflow-hidden">
      <div className="w-full h-[504px] md:h-auto lg:min-h-[619px] relative flex items-end justify-center pb-10">
        <Image
          src={"/on-demand-talent/on-demand-cta-image.webp"}
          alt="cta-icons"
          width={918}
          height={289}
          className="absolute w-full h-full inset-0 z-0 hidden lg:block"
        />
        {/* cta-icons-and-border-image */}
        <section className="w-full max-h-[504px] absolute md:h-auto inset-x-0 top-14 md:top-0 block lg:hidden">
          <Image
            src={"/on-demand-talent/cta-icons-and-border-image.webp"}
            alt="cta-mobile-image"
            width={758}
            height={424}
            className="w-[500px] md:w-full md:h-auto md:max-h-[400px] inset-0 z-0 md:hidden"
          />
          <Image
            src={`/on-demand-talent/cta-image-tablet-version-01.webp`}
            width={855}
            height={504}
            alt="on-demand-cta-image-tablet-version"
            className="w-full md:block max-h-[504px] hidden lg:hidden"
          />
        </section>

        <div className="w-full mt-32 z-10 flex flex-col items-center justify-end gap-4 lg:gap-6 px-4 pt-20">
          <h2 className="text-[25px] md:text-[30px] lg:text-[30px] xl:text-[40px] font-bold text-center leading-[1.1] lg:w-[60%] mx-auto z-10">
            Get Skilled Developers in 48 Hours Book Your Free Call Now.
          </h2>
          <p className="mx-auto text-base lg:text-[22px] text-gray-500 lg:w-[70%] text-center z-10">
            Let's help you augment talent quickly with the right tech
            professionals - available immediately and perfectly matched to your
            needs.
          </p>
          <div className="w-full flex justify-center mt-2 z-10">
            <Link
              href={`/contact-us`}
              className="bg-[#F40E00] text-white z-10 rounded-full px-5 py-3 lg:px-10 lg:py-5 text-base lg:text-[22px] font-medium"
            >
              Speak with us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

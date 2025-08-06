import Image from "next/image";
import React from "react";

const Userflow = () => {
  return (
    <section className="w-full padding-x flex flex-col items-center">
      <h2 className="section-heading">Userflow</h2>
      <p className="text-center lg:w-[90%] text-base lg:text-xl mt-7">
        We mapped how real users move through Fitness by Faith with Laken - from
        Onboarding to booking live sessions. Our mobile app development focused
        on making intuitive interactions, whether logging workouts or chatting
        with trainers.
      </p>
      <div className="w-full overflow-x-auto userflow-container mt-12 pb-5">
        <Image
          src="/case-studies/fitness-by-faith/userflow-image.webp"
          alt="fitness by faith userflow"
          width={4341}
          height={877}
          loading="lazy"
          className="min-w-[2441px] h-auto"
        />
      </div>
    </section>
  );
};

export default Userflow;

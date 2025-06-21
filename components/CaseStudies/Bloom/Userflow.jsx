import Image from "next/image";
import React from "react";

const Userflow = () => {
  return (
    <section className="w-full padding-x flex flex-col items-center">
      <h2 className="section-heading">Userflow</h2>
      <p className="text-center lg:w-[90%] text-base lg:text-xl mt-7">
        We mapped how real church members use Bloom from morning devotionals to
        checking event schedules. Our mobile app development focused on making
        every tap feel natural, whether streaming sermons or sharing prayer
        requests with the community.
      </p>
      <div className="w-full overflow-x-auto userflow-container mt-12">
        <Image
          src="/case-studies/bloom-workflow-image.png"
          alt="bloom-userflow"
          width={4341}
          height={877}
          className="min-w-[2441px] h-auto"
        />
      </div>
    </section>
  );
};

export default Userflow;

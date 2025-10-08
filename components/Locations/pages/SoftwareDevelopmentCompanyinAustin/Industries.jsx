import React from "react";
import { FiMinus } from "react-icons/fi";
import { LuPlus } from "react-icons/lu";
import "../../LocationComponents/industries.css";

const INDUSTRIES_WE_SERVE = [
  {
    title: "Health & Wellness",
    description:
      "As one of the trusted healthcare management software companies, we help you build health and wellness software with features like nutrition tracking and wearable integration. Secure, simple solutions that keep clients engaged while supporting your business growth.",
  },
  {
    title: "Financial Services & Fintech",
    description:
      "We make software development for fintech secure and straightforward. We’ve got you covered by providing services, including easy payments and reliable software. Safe transactions, protected data, and smooth user experiences that keep your customers happy and your business moving forward.",
  },
  {
    title: "E-Learning",
    description:
      "Learning gets exciting with our elearning software development services. We design secure, user-friendly platforms with interactive courses and virtual classrooms, making education more accessible, engaging, and available anytime, anywhere for learners and educators alike.",
  },
  {
    title: "Travel & Experiences",
    description:
      "With our custom software development for travel, you can build solutions that handle bookings, tours, and trip planning with ease. Give travelers a smooth, engaging experience while we take care of the technical details that power your business.",
  },
  {
    title: "Real Estate",
    description:
      "Our real estate software development services help you create platforms with property listings, virtual tours, and client management tools. Close deals faster, attract more buyers, and manage transactions easily. All while delivering a smooth experience to your clients.",
  },
  {
    title: "SaaS Marketing",
    description:
      "As a trusted SaaS software development company, we create flexible SaaS solutions with features like subscriptions, analytics, and automation. Keep customers engaged, increase sales, and simplify management. While you focus on growth and we take care of the tech.",
  },
];

const Industries = () => {
  return (
    <section className="w-full padding-x pb-10 lg:py-20 relative overflow-hidden">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="section-heading w-full lg:w-[80%]">
          Industries We Serve as a Leading{" "}
          <span className="red-text">Custom Software Company</span>
        </h2>
        <p className="section-paragraph lg:w-[80%]">
          As one of the trusted customized software development companies, we
          work across multiple industries to create software customized to their
          unique needs. Our expertise ensures solutions that solve challenges,
          improve efficiency, and support long-term success, whether it’s for
          small startups or large organizations.
        </p>
      </section>

      <section className="industries-wrapper w-full mt-10 lg:mt-16 flex flex-wrap gap-2">
        {INDUSTRIES_WE_SERVE.map((industry, index) => (
          <div
            className="industry-card h-[300px] md:h-[270px] midlg:h-[340px] xl:h-[300px] bg-[#F3F3F3] p-5 lg:p-8 rounded-[7px] flex flex-col justify-between group relative overflow-hidden md:w-[46%] lg:w-auto"
            key={index}
          >
            <h3 className="text-[26px] font-semibold leading-[1]">
              {industry.title}
            </h3>
            <div className="flex items-start justify-between gap-2 relative flex-1 mt-5 overflow-hidden">
              <div className="max-w-[85%]">
                <p className="text-base xl:text-lg font-normal lg:text-start leading-[1.2] xl:leading-[1.2] hidden group-hover:block transition-all duration-300">
                  {industry.description}
                </p>
              </div>
            </div>

            <button
              type="button"
              className="min-w-[30px] min-h-[30px] max-w-[30px] max-h-[30px] bg-[#f40e00] group-hover:bg-white transition-all duration-300 rounded flex items-center justify-center absolute right-5 bottom-5"
            >
              <LuPlus className="text-white group-hover:hidden block transition-all duration-300" />
              <FiMinus className="text-black group-hover:block hidden transition-all duration-300" />
            </button>
          </div>
        ))}
      </section>
    </section>
  );
};

export default Industries;

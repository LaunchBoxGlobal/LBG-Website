import Image from "next/image";
import React from "react";

const HiddenChallenges = () => {
  return (
    <section className="w-full py-20 lg:pt-36 bg-[#fff] padding-x overflow-hidden">
      <div className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="section-heading mx-auto">
          The Hidden Challenges Blocking Your{" "}
          <span className="red-text">Store’s Success</span>
        </h2>

        <p className="section-paragraph lg:w-[90%] mx-auto">
          Even the smartest startups face unexpected challenges. Slow load
          times, confusing checkout, or weak integrations can quietly cost you
          customers. However, you can resolve these hidden obstacles and ensure
          your store runs smoothly with our ecommerce software development
          services, keeping shoppers happy and accelerating your success.
        </p>
      </div>

      <div className="w-full mt-16">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-0">
          <div className="col-span-1 space-y-10 relative">
            <div className="bg-[#F6F6F6] w-full max-w-[493px] min-h-[270px] p-5 rounded-[16px] relative">
              <div className="w-0 h-0 border-l-[0px] border-l-transparent border-r-[70px] border-r-transparent border-b-[32px] border-b-[#F6F6F6] absolute right-[-15%] top-5 hidden lg:block" />
              <h3 className="text-[21px] font-semibold leading-[1]">
                Lost Sales from Cart Abandonment
              </h3>
              <p className="text-gray-600 leading-[1.3] mt-3">
                Shoppers leave due to slow checkouts, confusing navigation,
                limited payment options, or unexpected fees. Each abandoned cart
                is a missed opportunity. Our ecommerce developer can help you
                analyze checkout pain points and enhance the buying experience.
              </p>
            </div>
            <div className="bg-[#F6F6F6] w-full max-w-[493px] min-h-[270px] p-5 rounded-[16px] relative lg:-left-10">
              <div className="w-0 h-0 border-l-[70px] border-l-transparent border-r-[0px] border-r-transparent border-t-[32px] border-[#F6F6F6] absolute right-[-15%] top-5 [transform:rotateY(-180deg)] hidden lg:block" />
              <h3 className="text-[21px] font-semibold leading-[1]">
                Slow Site Performance
              </h3>
              <p className="text-gray-600 leading-[1.3] mt-3">
                Website speed issues can quietly damage your store’s success.
                Pages that load slowly frustrate visitors and lead to abandoned
                carts. With insights from customized ecommerce development, you
                can understand the impact and prepare to implement solutions.
              </p>
            </div>
          </div>
          <div className="col-span-1 hidden lg:flex items-center justify-center">
            <Image
              src={"/industries/ecommerce/challenges-mockup.png"}
              alt="challenges-mockup"
              width={550}
              height={333}
              className="object-contain scale-[1.15]"
            />
          </div>
          <div className="col-span-1 space-y-10 relative">
            <div className="bg-[#F6F6F6] w-full max-w-[493px] min-h-[270px] p-5 rounded-[16px] relative">
              <div className="w-0 h-0 border-r-[0px] border-r-transparent border-l-[70px] border-l-transparent border-b-[32px] border-b-[#F6F6F6] absolute left-[-15%] top-5 hidden lg:block" />

              <h3 className="text-[21px] font-semibold leading-[1]">
                Expanding Your Store
              </h3>
              <p className="text-gray-600 leading-[1.3] mt-3">
                Many ecommerce companies struggle when their systems aren’t
                equipped to manage growth, leading to slowdowns and lost sales.
                Sudden spikes in demand can overwhelm your store and limit
                revenue. We ensure your store can handle growth.
              </p>
            </div>
            <div className="bg-[#F6F6F6] w-full max-w-[493px] min-h-[270px] p-5 rounded-[16px] relative lg:-right-10">
              <div className="w-0 h-0 border-r-[0px] border-r-transparent border-l-[70px] border-l-transparent border-t-[32px] border-t-[#F6F6F6] absolute left-[-15%] top-5 hidden lg:block" />

              <h3 className="text-[21px] font-semibold leading-[1]">
                Optimizing Your Store Operations
              </h3>
              <p className="text-gray-600 leading-[1.3] mt-3">
                Inventory management, order processing, and customer support
                often slow your team down, which impacts revenue and customer
                satisfaction. Our experience with custom ecommerce software
                development highlights how missing or outdated processes can
                hold your business back.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 lg:w-full flex justify-center mt-10">
          <div className="bg-[#F6F6F6] w-full max-w-[493px] min-h-[270px] p-5 rounded-[16px] relative">
            <div className="w-0 h-0 border-r-[0px] border-r-transparent border-l-[70px] border-l-transparent border-b-[32px] border-b-[#F6F6F6] absolute top-[-24%] right-[5%] rotate-90 hidden lg:block" />
            <h3 className="text-[21px] font-semibold leading-[1]">
              Closing Marketing Gaps
            </h3>
            <p className="text-gray-600 leading-[1.3] mt-3">
              Even the best online stores can lose momentum when marketing
              strategies fall short. Many startups miss valuable opportunities
              because their marketing isn’t aligned. As an experienced ecommerce
              development company, we can help you identify the marketing gaps.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HiddenChallenges;

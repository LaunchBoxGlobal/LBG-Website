import Image from "next/image";
import React from "react";

const WhyFoundersNeedProjectDiscovery = () => {
  return (
    <section className="w-full relative padding-x py-20 midlg:pt-32 xl:pt-40 midlg:pb-20 grid grid-cols-1 lg:grid-cols-2 gap-6 flex-wrap">
      <div className="w-full max-w-[620px] rounded-[21px] relative p-8 flex flex-col items-start justify-between lg:h-[709px] xl:h-[609px] border overflow-hidden">
        <Image
          src={"/new-project/project-discovery-services-bg-1.png"}
          alt="Main_bg.png"
          width={620}
          height={689}
          className="w-full h-full object-cover absolute inset-x-0 top-0 z-0"
        />
        <Image
          src={"/new-project/project-discovery-services-glow.png"}
          alt="project-discovery-services-glow-1"
          width={849}
          height={822}
          className="w-full h-full object-cover absolute inset-x-0 bottom-0 z-0"
        />

        <div className="w-full h-[236px] z-10 flex items-start justify-center relative overflow-x-hidden -bottom-4">
          <img
            src="/new-project/copilot-logo.png"
            alt="copilot-logo"
            className="absolute top-[27%] left-[8%] z-0 w-[30%] max-w-[160px]"
          />
          <img
            src="/new-project/bolt-logo.png"
            alt="bolt-logo"
            className="absolute top-[8%] left-[20%] z-10 w-[30%] max-w-[160px]"
          />
          <img
            src="/new-project/chatgpt-logo.png"
            alt="chatgpt-logo"
            className="z-20 w-[30%] max-w-[160px]"
          />
          <img
            src="/new-project/lovable-logo.png"
            alt="lovable-logo"
            className="absolute top-[8%] right-[20%] z-10 w-[30%] max-w-[160px]"
          />
          <img
            src="/new-project/new-tech-icon.png"
            alt="new tech logo"
            className="absolute top-[27%] right-[7%] z-0 w-[30%] max-w-[160px]"
          />
        </div>
        <div className="w-full space-y-4">
          <h3 className="font-semibold text-[26px] leading-[1] z-10 relative">
            Why Founders Need Project Recovery Services
          </h3>
          <p
            className="text-base lg:text-lg text-[#212121] relative z-10"
            style={{ lineHeight: "1.4rem" }}
          >
            Building software with AI looked easy, but now your project’s stuck?
            You’re not alone. Many founders get attracted to AI tools that look
            easy until the code breaks, features don’t work, and they’re left
            with half-built software. That’s when you need project rescue
            services. Our project recovery services go beyond fixing bugs. We
            deal with messy code, rebuild broken features, and eventually get
            your project ready for launch in the market. Think of it as Project
            Recovery with a clear plan.
          </p>
        </div>
      </div>
      <div className="w-full max-w-[620px] rounded-[21px] relative h-[120vh] lg:h-[709px] xl:h-[609px] border overflow-hidden flex flex-col items-start justify-between">
        <Image
          src={
            "/new-project/what-founders-need-for-software-recovery-background-image.png"
          }
          alt="what-founders-need-for-software-recovery-background-image"
          width={620}
          height={689}
          className="w-full h-full object-cover absolute inset-x-0 top-0 z-0"
        />
        {/* what-founders-need-for-software-recovery-glow-image */}
        <Image
          src={
            "/new-project/what-founders-need-for-software-recovery-glow-image.png"
          }
          alt="what-founders-need-for-software-recovery-glow-image"
          width={620}
          height={689}
          className="w-full h-[110%] object-cover absolute inset-x-0 top-0 z-0"
        />
        <div className="w-full p-8 flex flex-col items-start justify-start gap-3 ">
          <h3 className="font-semibold text-[26px] leading-[1] relative z-10">
            What Founders Need for Software Project Recovery
          </h3>
          <p
            className="text-base lg:text-lg text-[#212121] relative z-10"
            style={{ lineHeight: "1.4rem" }}
          >
            Ai based coding has been fascinating for a lot of startups, since it
            feels possible to build what once felt out of reach. However, it’s
            common to pause with a half-built product, that’s simply part of the
            journey. That’s when you need our project rescue and code audit
            services.  Effective mobile app, web app, and software project
            recovery services involve more than writing new code; they're also
            about assessing the issue and providing a strategy. With experience
            in project recovery, web app, mobile app, and software development,
            we can help you rescue your half‑built project with a detailed code
            audit and rebuild it into a stable, functional product.
          </p>
        </div>

        <div className="w-full relative h-[284px]">
          <img
            src="/new-project/what-founders-need-for-software-recovery-image.png"
            alt="what-founders-need-for-software-recovery-image"
            width={474}
            height={284}
            className="absolute bottom-0 inset-x-0 mx-auto z-10 object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyFoundersNeedProjectDiscovery;

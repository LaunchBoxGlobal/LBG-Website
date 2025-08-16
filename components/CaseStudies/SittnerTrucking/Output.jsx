import Image from "next/image";
import React from "react";

const Output = () => {
  return (
    <section className="w-full overflow-hidden py-40 relative">
      <section className="w-full lg:w-[90%] 2xl:w-[80%] mx-auto relative px-6 lg:px-0">
        <Image
          src={"/case-studies/sittner-trucking/output-section-lines.png"}
          alt="output-section-lines"
          width={846}
          height={2100}
          className="absolute left-1/2 -translate-x-1/2 top-[10%] midlg:top-[8%] z-10 hidden lg:block lg:w-[70%]"
        />
        <div className="flex justify-center relative">
          <Image
            src={"/case-studies/sittner-trucking/output-green-glow-mockup.png"}
            alt="output-green-glow-mockup"
            width={1280}
            height={647}
            className="mx-auto absolute left-1/2 -translate-x-1/2 z-0 top-20 lg:w-[40%]"
          />
          <Image
            src={
              "/case-studies/sittner-trucking/jb-sittner-trucking-login-screen-mockup.png"
            }
            alt="jb-sittner-trucking-login-screen-mockup"
            width={496}
            height={478}
            className="object-contain z-20 lg:w-[40%]"
          />
        </div>

        <div className="w-full flex justify-between flex-col lg:flex-row items-center gap-10 mt-14 midlg:mt-20 z-20">
          <Image
            src={`/case-studies/sittner-trucking/jb-sittner-trucking-dashboard-mockup.png`}
            alt="jb-sittner-trucking-dashboard-mockup"
            width={496}
            height={478}
            className="object-contain z-20 lg:w-[40%]"
          />
          <Image
            src={`/case-studies/sittner-trucking/jb-sittner-trucking-profile-screen-mockup.png`}
            alt="jb-sittner-trucking-profile-screen-mockup"
            width={496}
            height={478}
            className="object-contain z-20 lg:w-[40%]"
          />
        </div>

        <div className="flex justify-center mt-14 midlg:mt-20 z-20">
          <Image
            src={
              "/case-studies/sittner-trucking/jb-sittner-trucking-edit-profile-screen-mockup.png"
            }
            alt="jb-sittner-trucking-edit-profile-screen-mockup"
            width={496}
            height={478}
            className="object-contain z-20 lg:w-[40%]"
          />
        </div>

        <div className="w-full flex justify-between flex-col lg:flex-row items-center gap-10 mt-14 midlg:mt-20 relative">
          <Image
            src={`/case-studies/sittner-trucking/jb-sittner-trucking-dashboard-mockup-2.png`}
            alt="jb-sittner-trucking-dashboard-mockup-2"
            width={496}
            height={478}
            className="object-contain z-20 lg:w-[40%]"
          />
          <Image
            src={`/case-studies/sittner-trucking/jb-sittner-trucking-schedule-message-screen-mockup.png`}
            alt="jb-sittner-trucking-schedule-message-screen-mockup"
            width={496}
            height={478}
            className="object-contain z-20 lg:w-[40%]"
          />

          <div className="sittner-glow-2 w-[30rem] h-[30rem] absolute -left-[20%] bottom-[-40%] opacity-20" />
          <div className="sittner-glow-2 w-[40rem] h-[40rem] absolute border -right-[25%] bottom-[10%] opacity-15" />
        </div>

        <div className="flex justify-center mt-14 midlg:mt-20">
          <Image
            src={
              "/case-studies/sittner-trucking/jb-sittner-trucking-message-board-screen-mockup.png"
            }
            alt="jb-sittner-trucking-message-board-screen-mockup"
            width={496}
            height={478}
            className="object-contain z-20 lg:w-[40%]"
          />
        </div>

        <div className="w-full flex justify-between flex-col lg:flex-row items-center gap-10 mt-14 midlg:mt-20 relative">
          <Image
            src={`/case-studies/sittner-trucking/jb-sittner-trucking-employees-list-screen-mockup.png`}
            alt="jb-sittner-trucking-employees-list-screen-mockup"
            width={496}
            height={478}
            className="object-contain z-20 lg:w-[40%]"
          />
          <Image
            src={`/case-studies/sittner-trucking/jb-sittner-trucking-edit-employee-screen-mockup.png`}
            alt="jb-sittner-trucking-edit-employee-screen-mockup"
            width={496}
            height={478}
            className="object-contain z-20 lg:w-[40%]"
          />

          <div className="sittner-glow-2 w-[40rem] h-[40rem] absolute border -right-[25%] bottom-[-20%] opacity-15" />
        </div>
      </section>
    </section>
  );
};

export default Output;

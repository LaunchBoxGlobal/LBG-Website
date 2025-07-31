import React from "react";
import ProjectRecoveryServicesCard1 from "./ProjectRecoveryServicesCard1";
import ProjectRecoveryServicesCard2 from "./ProjectRecoveryServicesCard2";

const ProjectRecoveryServices = () => {
  // bg-[#F9F9F9]
  return (
    <section className="w-full py-20 midlg:py-32 xl:py-40 padding-x overflow-hidden">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="section-heading lg:w-[90%] mx-auto">
          Projects We Manage Through Project{" "}
          <span className="red-text">Recovery Services</span>
        </h2>
        <p className="section-paragraph lg:w-[90%] mx-auto">
          If you’re stuck with software that’s half-built, broken, or dealing
          with an abandoned prototype, we've got it covered. Our software
          project rescue service is designed to handle it all. At Launchbox
          Global, our software project rescue service uses thorough code audit
          and proven project recovery services to restore functionality.
        </p>
      </section>

      <section className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10 lg:mt-16">
        <ProjectRecoveryServicesCard1 />
        <ProjectRecoveryServicesCard2 />
      </section>
    </section>
  );
};

export default ProjectRecoveryServices;

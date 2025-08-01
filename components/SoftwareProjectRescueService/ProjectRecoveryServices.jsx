import React from "react";
import ProjectRecoveryServicesCard1 from "./ProjectRecoveryServicesCard1";
import ProjectRecoveryServicesCard2 from "./ProjectRecoveryServicesCard2";
import Link from "next/link";

const ProjectRecoveryServices = () => {
  // bg-[#F9F9F9]
  return (
    <section className="w-full py-20 midlg:py-32 xl:py-40 padding-x overflow-hidden">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="section-heading lg:w-[90%] mx-auto">
          Projects We Can Rescue with{" "}
          <span className="red-text">Recovery Services</span>
        </h2>
        <p className="section-paragraph lg:w-[90%] mx-auto">
          Built a project that reflects exactly what you envisioned, but it is
          not quite ready for the market?{" "}
          <Link href={`https://launchboxglobal.com/`} className="underline">
            Launchbox Global
          </Link>
          ’s project recovery services are designed to handle it all. We help
          refine no‑code builds and recovered projects, turning them into
          market‑ready products.
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

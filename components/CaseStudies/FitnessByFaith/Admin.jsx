import Image from "next/image";
import React from "react";

const Admin = () => {
  return (
    <section className="w-full padding-x flex flex-col items-center">
      <h2 className="section-heading">Admin Dashboard</h2>
      <p className="text-center lg:w-[90%] text-base lg:text-xl mt-7">
        For trainers and admins, we built a dashboard that feels like a personal
        command center. Updating workouts? Drag, drop, done. Adding new meal
        plans? It takes minutes, not emails to developers. Even managing live
        session schedules or answering user questions happens in one place. It
        gave the team freedom to keep content fresh and respond fast. All
        without slowing down their day or touching a single line of code.
      </p>

      <Image
        src="/case-studies/fitness-by-faith/fitness-by-faith-admin-dashboard-mockup.webp"
        alt="Fitness by Faith admin dashboard mockup"
        width={1270}
        height={770}
        quality={85}
        loading="lazy"
        sizes="(max-width: 640px) 100vw, 
         (max-width: 1024px) 90vw, 
         1270px"
        className="w-full h-auto mx-auto mt-10 rounded-xl"
      />
    </section>
  );
};

export default Admin;

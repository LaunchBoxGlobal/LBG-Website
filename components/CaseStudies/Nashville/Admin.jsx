import Image from "next/image";
import React from "react";

const Admin = () => {
  return (
    <section className="w-full padding-x flex flex-col items-center">
      <h2 className="section-heading">Admin Dashboard</h2>
      <p className="text-center lg:w-[90%] text-base lg:text-xl mt-7">
        Great city guides can’t stay static, so we gave the team a dashboard
        that works like their own little control room. Want to add a hidden
        brunch spot? Post it in minutes. Need to tweak a category or see what
        locals love most? It’s all there, simple enough for anyone to use. Now
        the app stays as alive and evolving as Nashville itself.
      </p>

      <Image
        src={
          "/case-studies/nashville/now-you-know-nashville-admin-dashboard-mockup.webp"
        }
        alt="now-you-know-nashville-admin-dashboard-mockup"
        width={1270}
        height={770}
        sizes="(max-width: 640px) 100vw,
         (max-width: 1024px) 90vw,
         1270px"
        loading="lazy"
        className="w-full mx-auto mt-10"
      />
    </section>
  );
};

export default Admin;

import Image from "next/image";
import React from "react";

const Admin = () => {
  return (
    <section className="w-full padding-x flex flex-col items-center">
      <h2 className="section-heading">Admin Dashboard</h2>
      <p className="text-center lg:w-[90%] text-base lg:text-xl mt-7">
        We knew Bloom had to work just as well for the church team as it did for
        members. So, we built a dashboard that feels like second nature. Pastors
        can add devotionals, share events, and check which sermons are
        resonating. All without needing a tech manual. It’s their quiet
        backstage, keeping the app fresh and the whole community feeling cared
        for.
      </p>

      <Image
        src={"/case-studies/bloom-admin-dashboard-mockup.png"}
        alt="bloom-admin-dashboard-mockup"
        width={1270}
        height={770}
        className="w-full mx-auto mt-10"
      />
    </section>
  );
};

export default Admin;

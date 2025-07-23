import Image from "next/image";
import React from "react";

const Admin = () => {
  return (
    <section className="w-full padding-x flex flex-col items-center">
      <h2 className="section-heading">Admin Dashboard</h2>
      <p className="text-center lg:w-[90%] text-base lg:text-xl mt-7">
        BlooM Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
        sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur
        adipiscing elit.
      </p>

      <Image
        src={
          "/case-studies/nashville/now-you-know-nashville-admin-dashboard-mockup.png"
        }
        alt="now-you-know-nashville-admin-dashboard-mockup"
        width={1270}
        height={770}
        className="w-full mx-auto mt-10"
      />
    </section>
  );
};

export default Admin;

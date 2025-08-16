import React from "react";
import MockupsSlider from "./MockupsSlider";

const Mockups = () => {
  return (
    <section className="w-full">
      <section className="w-full padding-x flex flex-col items-center">
        <h2 className="section-heading text-center">Designing the Structure</h2>
        <p className="text-center lg:w-[90%] text-base lg:text-xl mt-7">
          The web app featured a clean message board and profile section. The
          admin dashboard included message scheduling, user management, and
          analytics. Both designs prioritized ease of use for non-technical
          staff.
        </p>
      </section>

      <MockupsSlider />
    </section>
  );
};

export default Mockups;

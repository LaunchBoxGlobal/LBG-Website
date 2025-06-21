import Image from "next/image";
import React from "react";
import OutcomesAnimation from "./OutcomesAnimation";

const Outcomes = () => {
  return (
    <section className="w-full padding-x flex flex-col items-center">
      <h2 className="section-heading">Outcomes</h2>
      <p className="text-center lg:w-[90%] text-base lg:text-xl mt-7">
        Bloom by Brittany became exactly what the church hoped for a digital
        space where faith grows naturally. After months of careful work, the app
        now serves thousands of members daily without hiccups. Mornings begin
        with devotionals popping up right on schedule, commutes fill with
        worship playlists that actually work offline, and nobody misses
        important events anymore. The prayer request feature surprised us all by
        becoming the most popular. Turns out people really wanted to share
        burdens this way. Pastors love seeing which sermons get rewatched,
        helping them plan better messages. Even on busy Sundays when hundreds
        check schedules simultaneously, the app holds up perfectly thanks to
        that enterprise mobile app development approach we took from the start.
        Most importantly, it feels personal. Members describe it as "like
        carrying a little bit of church in my pocket" which was exactly the
        goal. The church reports deeper engagement, especially from younger
        families who live on their phones. For our team, seeing grandparents
        easily navigate the app to find sermons proves we got the
        simple-but-strong balance right.
      </p>

      <OutcomesAnimation />
    </section>
  );
};

export default Outcomes;

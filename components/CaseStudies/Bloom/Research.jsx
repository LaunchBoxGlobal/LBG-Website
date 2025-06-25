import Image from "next/image";
import Link from "next/link";
import React from "react";

const content = [
  {
    title:
      "Studied church schedules to simplify event creation in our mobile app development process.",
    id: "introduction",
  },
  {
    title:
      "Tested 3 music APIs before choosing YouTube for worship playlist features.",
    id: "whatareofflinegames",
  },
  {
    title:
      "Surveyed members to learn which sermon formats worked best for daily use.",
    id: "bestofflinemobilegames",
  },
  {
    title:
      "Measured loading times when mixing media types to prevent app slowdowns.",
    id: "bestofflinephonegames",
  },
  {
    title:
      "Stress-tested servers to handle Sunday rush hours through enterprise mobile app development.",
    id: "",
  },
];

const Research = () => {
  return (
    <section className="w-full padding-x flex flex-col items-center pb-20 midlg:pb-28">
      <h2 className="section-heading">Research</h2>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 mt-10 lg:mt-14">
        {content?.map((p, i) => {
          return (
            <div key={i} className="w-full">
              <div className="w-full flex items-start gap-2 p-4 lg:p-6 rounded-2xl hover:shadow-lg transition-all duration-300">
                <div className="w-[10%] lg:w-[6%] mt-1">
                  <div className="w-6 h-6 bloomBgColor rounded-lg" />
                </div>
                <p className="text-lg leading-6 m-0 p-0">{p?.title}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Research;

import React from "react";

const RESEARCH_POINTS = [
  "Studied Nashville visitors to pick the best login options for our mobile app development",
  "Surveyed locals to learn which two free categories would hook visitors fastest.",
  "Tested splash screens to find which kept users engaged longest during loading.",
  "Checked payment security needs before choosing Stripe for enterprise mobile app development.",
  "Mapped how tourists navigate to build smarter Google Maps integration. ",
];

const Research = () => {
  return (
    <section className="w-full padding-x flex flex-col items-center pb-20 midlg:pb-28">
      <h2 className="section-heading">Research</h2>
      <p className="text-center lg:w-[90%] text-base lg:text-xl mt-7">
        We analyzed visitor behavior, tried splash screens, polled residents to
        determine the best free categories, examined Stripe for safe payments,
        and mapped out navigation patterns in order to create Now You Know
        Nashville, making sure every feature was data-validated.
      </p>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 mt-10 lg:mt-14">
        {RESEARCH_POINTS?.map((p, i) => {
          return (
            <div key={i} className="w-full">
              <div className="w-full flex items-start gap-2 p-4 lg:p-6 rounded-2xl hover:shadow-lg transition-all duration-300">
                <div className="w-[6%] mt-1">
                  <div className="w-6 h-6 bg-[#407BA7] rounded-lg" />
                </div>
                <p className="text-lg leading-6 m-0 p-0">{p}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Research;

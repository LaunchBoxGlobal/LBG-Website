import React from "react";
// Custom cards used — removed Card imports
import { Search, Users, Map, PenTool } from "lucide-react";
import Image from "next/image";

export default function Research() {
  const items = [
    {
      title: "Competitor Analysis",
      desc: "Studied Indeed, Coursera, and LinkedIn Learning to identify UX gaps in career-learning hybrids.",
      icon: <Search className="w-8 h-8" />,
    },
    {
      title: "User Personal Building",
      desc: "Defined two key personas — Learners/Job Seekers and Recruiters.",
      icon: <Users className="w-8 h-8" />,
    },
    {
      title: "Journey Mapping",
      desc: "Mapped emotional touchpoints to reduce drop-offs during course completion and job application stages.",
      icon: <Map className="w-8 h-8" />,
    },
    {
      title: "Wireframing & Feedback Loops",
      desc: "Low-fidelity sketches tested early to validate flow clarity and engagement points.",
      icon: <PenTool className="w-8 h-8" />,
    },
  ];

  return (
    <section className="w-full padding-x">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="section-heading font-bold mb-2">Discovery & Research</h2>
        <p className="text-gray-600 mt-4 text-base md:text-xl max-w-3xl mx-auto">We conducted UX research included in our custom mobile app development services, and this phase involved a detailed, comprehensive approach to understand user needs and market opportunities.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto relative">
        <Image src={"/case-studies/usubz/ring.png"} width={400} height={400} className="absolute left-[50%] transition-all -translate-x-[50%]" />
        {items.map((item, i) => (
          <div key={i} className="relative rounded-[30px] bg-white shadow-lg p-10 border border-gray-100 hover:shadow-xl transition-all duration-300 group">
            <div className="flex gap-4 items-start">
            
              <div>
                <div className="flex items-center h-[80px] justify-between">
                <h3 className="font-semibold text-xl mb-1">{item.title}</h3>
                <div className="bg-[#1CE98A] text-white rounded-full p-2">
                {item.icon}
       </div>         </div>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
            <div className="hidden md:block absolute -right-10 top-1/2 w-10 border-dashed border-gray-300 border-t"></div>
          </div>
        ))}
      </div>
    </section>
  );
}

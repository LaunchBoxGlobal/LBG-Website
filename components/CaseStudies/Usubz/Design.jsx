"use client"
import Image from 'next/image';
import React from 'react'
import EmblaCarousel from './EmblaCarousel';
const features = [
  {
    title: "Centralized Dashboard",
    desc: "Users can view all their learning statistics, rewards, and job applications in one place. Everything needed is just a click away."
  },
  {
    title: "Recruiter Portal",
    desc: "The users can quickly search for candidates with verified skills and profile credibility scores. We made it easier to find the right talent."
  },
  {
    title: "Progress Analytics",
    desc: "The users can track their learning journey with clear graphs, achievement badges, and visual milestones that show how far they’ve come."
  },
  {
    title: "Adaptive Layouts",
    desc: "The web design mirrors the mobile experience with shared components and responsive grids, giving users a smooth experience across devices."
  }
];

function Design() {
  return (
     <section className="w-full py-16 padding-x">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="section-heading font-bold mb-2">Web App Design</h2>
        <p className="text-gray-600 mt-4 text-base md:text-xl max-w-3xl mx-auto">Alongside the mobile app, we designed a responsive web application for Usubz through our web app development services, so you can access learning and career tools from any browser, anytime. The web experience was designed for two main users: Learners and recruiters. Keeping navigation simple, intuitive, and consistent with the mobile app.</p>
      </div>
      <div className='flex justify-center gap-20 md:flex-row flex-col px-10 items-center' >
        {features.map((f,i)=>(
            <div className='space-y-2'>
                <Image src={"/case-studies/usubz/dd.png"} alt='ss' width={100} height={100} />
                <h1 className='text-lg font-semibold'>{f.title}</h1>
                <p className='text-sm w-48'>{f.desc}</p>
            </div>
        ))}
      </div>
      {/* <EmblaCarousel image={[]} /> */}
      </section>
  )
}

export default Design
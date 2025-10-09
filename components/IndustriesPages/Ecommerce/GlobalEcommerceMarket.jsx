"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Line,
  ResponsiveContainer,
} from "recharts";

const data = [
  { year: "2022", sales: 5090, change: 5.9, totalShare: 18.5 },
  { year: "2023", sales: 5580, change: 9.6, totalShare: 19.3 },
  { year: "2024", sales: 6000, change: 7.7, totalShare: 19.9 },
  { year: "2025", sales: 6419, change: 6.8, totalShare: 20.5 },
  { year: "2026", sales: 6880, change: 7.2, totalShare: 21.1 },
  { year: "2027", sales: 7375, change: 7.2, totalShare: 21.8 },
  { year: "2028", sales: 7880, change: 6.9, totalShare: 22.5 },
];

function GlobalEcommerceMarket() {
      const cards = [
    { title: "Personalized Shopping", icon: "/industries/ecommerce/icons/cart3.png" },
    { title: "Faster Checkout", icon: "/industries/ecommerce/icons/taskbar2.png" },
    { title: "Social Selling", icon: "/industries/ecommerce/icons/speaker.png" },
    { title: "Subscription Boxes",icon: "/industries/ecommerce/icons/folder.png" },
  ];
  return (
    <section className="w-full py-20 midlg:py-32 bg-[#fff]">
      <section className="w-full flex flex-col items-center justify-center gap-6 padding-x text-center">
        <h2 className="section-heading lg:w-[90%] mx-auto">
          Global Ecommerce Market: A {" "}
          <span className="red-text"> Trillion-Dollar Opportunity</span>
        </h2>

        <p className="section-paragraph lg:w-[90%] mx-auto">
          The global ecommerce market is booming, valued at $6.09 trillion in 2024 (<a href='https://www.emarketer.com/content/ecommerce-account-more-than-20--of-worldwide-retail-sales-despite-slowdown?' className='text-red-500 underline'>eMarketer</a>) and projected to reach $6.88 trillion by 2025 (<a href='https://soax.com/research/ecommerce-market-size?' className='text-red-500 underline'>SOAX</a>). Forecasts indicate it will surpass $8 trillion by 2027 (<a href='https://www.emarketer.com/content/ecommerce-account-more-than-20--of-worldwide-retail-sales-despite-slowdown?' className='text-red-500 underline'>eMarketer</a>). Mobile commerce, social commerce, and personalized shopping experiences are driving this growth, transforming how customers browse and buy. Businesses using these trends can capture more revenue and stay ahead in this rapidly evolving digital marketplace.
        </p>

        {/* <section className="w-full  justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 midlg:grid-cols-4 gap-5 max-w-[1305px] mx-auto ">
      
        </section> */}
      </section>
        <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <div>
        <h2 className="text-2xl text-center font-semibold text-black mb-8">
          Hidden <span className="text-[#F40E00]">Ecommerce Opportunities</span> to Explore
        </h2>
        </div>

        <div className="grid grid-cols-2 gap-5 mb-8 w-full">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center p-5 bg-white rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.08)] transition-transform hover:-translate-y-1 relative"
            >
              
              <Image src={card.icon} alt='icnon' width={50} height={50} className="text-2xl mb-2"/>
              <p className="font-medium text-gray-800">{card.title}</p>
            </div>
          ))}
        </div>

   
       <Link href={"/contact-us"} class="group [transform:translateZ(0)] text-center w-full font-semibold px-6 py-3 rounded-lg overflow-hidden bg-[#F40E00] relative before:absolute before:bg-[#ffffff] before:top-1/2 before:left-1/2 before:h-8 before:w-28 before:border before:border-1 before:-translate-y-1/2 before:-translate-x-1/2 before:rounded-full before:scale-[0] before:opacity-0 hover:before:scale-[6] hover:before:opacity-100 before:transition before:ease-in-out before:duration-500"><span class="relative z-0 text-white     group-hover:text-black transition ease-in-out duration-500">Don’t Miss Out</span></Link>

        <p className="mt-3 text-[#F40E00] text-sm w-full !text-center">
          Make the most of ecommerce gaps and stay ahead of your competitors
        </p>
      </div>

   <div className="bg-white rounded-3xl shadow-lg p-6">
  <ResponsiveContainer width="100%" height={300}>
    <BarChart
      data={data}
      margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
    >
      <CartesianGrid strokeDasharray="3 3" vertical={false} />
      <XAxis dataKey="year" />
      <YAxis />
      <Tooltip />
      <Legend />

      <Bar
        dataKey="sales"
        fill="#f40e00"
        name="Retail Ecommerce Sales ($B)"
        barSize={40}
        radius={[6, 6, 0, 0]}
        label={{
          position: "top",
          formatter: (value) => `$${(value / 1000).toFixed(2)}`,
          fill: "#111",
          fontSize: 12,
          fontWeight: 500,
        }}
      />

      <Line
        type="monotone"
        dataKey="change"
        stroke="#FF0000"
        strokeWidth={2}
        name="% Change"
      />

      <Line
        type="monotone"
        dataKey="totalShare"
        stroke="#007BFF"
        strokeWidth={2}
        name="% of Total Retail Sales"
      />
    </BarChart>
  </ResponsiveContainer>
</div>

    </section>
    </section>
  )
}

export default GlobalEcommerceMarket

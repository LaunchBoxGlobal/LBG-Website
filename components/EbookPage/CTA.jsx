import Image from "next/image";
import React from "react";

function CTA() {
  return (
    <section className="padding-x my-40">
      <div className="flex justify-center items-center gap-20 bg-[#212121] rounded-3xl h-[400px]">
        <div className="md:block hidden md:w-[30%] relative h-[400px]">
               <div className=" absolute bottom-10  flex  h-[530px] w-[350px] flex-col  bg-white  rounded-2xl shadow-2xl">
          <Image src={"/e-book/c1.png"} alt="image" className="rounded-t-2xl" width={500} height={300} />
          <div className="p-6 ">
           <h1 className="text-4xl">Fair Warning </h1>
          <p className="text-xl md:text-2xl font-semibold mt-4 text-[#490F0F]">
            You’ll never call app building “complicated” again
          </p>
          </div>
        </div>
        </div>
     
        <div className="text-white w-full md:w-[30%] p-4">
            <h4 className="uppercase text-sm font-semibold">Download the book</h4>
            <h1 className="text-4xl font-bold py-5"> Ready to steal our process {" "}<span className="text-[#f40e00]">(legally)?</span></h1>
            <p className="mb-4">The same process we use to build apps for clients can be yours for free.</p>
               <div className="relative bg-white shadow-xl  p-3 w-full rounded-full" >
            <input placeholder="Enter Your Email" className="pl-2 py-2 rounded-full text-xs outline-none text-gray-500" />
            <button className="bg-[#f40e00] text-white px-6 py-3 rounded-full absolute right-1 top-1" >Get the eBook</button>
          </div>
             <div className="p-2 text-sm opacity-65 "><h2> <span>Get it while it’s still free. This won’t stay free forever.</span></h2></div>
        </div>
      </div>
    </section>
  );
}

export default CTA;

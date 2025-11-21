"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

function CTA() {
  // Slide-up animation for the mobile image
  const slideUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className='bg-gradient-to-t from-white text-white to-[#00387D] mb-20'>
      <div className='flex flex-col items-center text-center py-16 gap-12 md:gap-20 px-4 md:px-16'>
        {/* Text Section */}
        <div className='space-y-4'>
          <h1 className='text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-snug'>
            Your Idea Could Be Our Next <br /> Success Story
          </h1>
          <p className='text-base sm:text-lg md:text-xl max-w-2xl mx-auto'>
            Don’t wait. Your idea has the potential to be your next big achievement. Take action today!
          </p>
        </div>

        {/* Link + Pointer */}
        <div className='relative'>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className='absolute -right-3 -bottom-6'
          >
            <Image src={"/case-studies/usubz/pointing.png"} alt='pointer' width={80} height={80} />
          </motion.div>

          <Link
            href={"/contact-us"}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl z-20 font-bold bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent"
          >
            Schedule a Call
          </Link>
        </div>
      </div>

      {/* Animated Mobile Image */}
      <motion.div
        className='flex justify-center -mt-20 md:-mt-24'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={slideUp}
      >
        <Image src={"/case-studies/usubz/rph.png"} alt='phone' width={800} height={800} className='' />
      </motion.div>
    </div>
  );
}

export default CTA;

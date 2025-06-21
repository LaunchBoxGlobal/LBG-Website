import { LuDownload } from "react-icons/lu";
import { useRef, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const CardTwo = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: false,
  });

  const toggleParagraph = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="group relative md:h-[400px] lg:h-[585px] md:w-[680px] lg:w-[1220px] overflow-hidden bg-[#101014] rounded-[27px] p-14">
      <div ref={ref} className="absolute inset-0 z-10 grid grid-cols-2 h-full">
        <div className="w-full col-span-1 h-full bg-[#020203] flex flex-col justify-around gap-5 p-10 relative">
          <motion.div
            initial={{ scale: 0.3 }}
            animate={inView ? { scale: 1 } : { scale: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full"
          >
            <Image
              src={"/service-card-two-mockup-1.png"}
              alt="service-card-two-mockup-1"
              width={230}
              height={150}
              className="object-contain"
            />
          </motion.div>
          <motion.div
            initial={{ scale: 0.3 }}
            animate={inView ? { scale: 1 } : { scale: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex justify-center"
          >
            <Image
              src={"/service-card-two-mockup-2.png"}
              alt="service-card-two-mockup-2"
              width={232}
              height={126}
              className="object-contain"
            />
          </motion.div>
          <motion.div
            initial={{ scale: 0.3 }}
            animate={inView ? { scale: 1 } : { scale: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex justify-end"
          >
            <Image
              src={"/service-card-two-mockup-3.png"}
              alt="service-card-two-mockup-3"
              width={232}
              height={126}
              className="object-contain"
            />
          </motion.div>
        </div>
        {/* text container */}
        <div className="w-full col-span-1 h-full text-white flex flex-col items-center justify-center px-10 gap-4">
          <button type="button" className="w-full text-start">
            <h3 className="text-[22px] lg:text-[45px] leading-[1.2] font-normal">
              Web App Development
            </h3>
          </button>
          <div className="w-full border border-neutral-700" />

          <div
            className="w-full flex items-start justify-between cursor-pointer"
            onClick={toggleParagraph}
          >
            <p
              className={`text-sm lg:text-lg max-w-full text-neutral-300 transition-all duration-300 ${
                isExpanded ? "line-clamp-none" : "line-clamp-2"
              }`}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
              a vero maxime error molestias eligendi est praesentium voluptates
              tempore tempora. Quisquam consequatur doloribus nesciunt, illum
              provident laborum tempore.
            </p>
            <div className="self-start text-white">
              {isExpanded ? (
                <IoIosArrowUp className="text-2xl" />
              ) : (
                <IoIosArrowDown className="text-2xl" />
              )}
            </div>
          </div>

          <div className="w-full flex justify-start h-[52px] relative">
            <Link
              href={`/`}
              className="bg-[#232326] w-[149px] h-[49px] rounded-full flex items-center justify-center uppercase font-medium absolute left-0"
            >
              details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTwo;

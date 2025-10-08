import { LuDownload } from "react-icons/lu";
import { useRef, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const CardOne = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: false,
  });

  const toggleParagraph = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div
      ref={ref}
      className="group relative md:h-[400px] lg:h-[585px] md:w-[680px] lg:w-[1220px] overflow-hidden bg-[#101014] rounded-[27px] p-14"
    >
      <div className="absolute inset-0 z-10 grid grid-cols-2 h-full">
        <div className="w-full col-span-1 h-full bg-[#020203] flex flex-col justify-between gap-5 p-10 relative">
          <div className="w-full flex items-center justify-start gap-4">
            <motion.button
              type="button"
              initial={{ scale: 0.3 }}
              animate={inView ? { scale: 1 } : { scale: 0.3 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="new-service-card-cta-bg text-white flex items-center justify-center px-5 rounded-md gap-2 text-lg h-[43px]"
            >
              <LuDownload className="text-xl" />
              Download
            </motion.button>
            <motion.button
              type="button"
              initial={{ scale: 0.3 }}
              animate={inView ? { scale: 1 } : { scale: 0.3 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <Image
                src={"/heart-button.png"}
                alt="heart-button"
                width={43}
                height={43}
              />
            </motion.button>
          </div>
          <div className="w-full h-full relative flex items-center justify-center">
            <motion.div
              initial={{ scale: 0.3 }}
              animate={inView ? { scale: 1 } : { scale: 0.3 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute left-10 top-[40%]"
            >
              <Image
                src={"/service-card-radio-button.png"}
                alt="service-card-radio-button"
                width={30}
                height={30}
                className="w-[30px] object-contain "
              />
            </motion.div>
            <motion.div
              initial={{ scale: 0.3 }}
              animate={inView ? { scale: 1 } : { scale: 0.3 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="flex h-[80px] items-start self-end"
            >
              <Image
                src={"/service-card-checkbox-image.png"}
                alt="service-card-checkbox-image"
                width={30}
                height={30}
                className="w-[30px] object-contain self-end"
              />
              <Image
                src={"/service-card-arrow-left.png"}
                alt="service-card-arrow-left"
                width={45}
                height={50}
                className="w-[46px] object-contain "
              />
            </motion.div>
            <motion.div
              initial={{ scale: 0.3 }}
              animate={inView ? { scale: 1 } : { scale: 0.3 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className=""
            >
              <Image
                src={"/services-mobile-mockup.png"}
                alt="avatars"
                width={197}
                height={366}
                className=""
              />
            </motion.div>
            <motion.div
              initial={{ scale: 0.3 }}
              animate={inView ? { scale: 1 } : { scale: 0.3 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="flex h-[100px] items-start"
            >
              <Image
                src={"/service-card-arrow-right.png"}
                alt="service-card-arrow-right"
                width={66}
                height={50}
                className="w-[66px] object-contain self-end"
              />
              <Image
                src={"/toggler-image.png"}
                alt="toggler-image"
                width={71}
                height={35}
                className="w-[71px] object-contain "
              />
            </motion.div>
          </div>
          <motion.div
            initial={{ scale: 0.3 }}
            animate={inView ? { scale: 1 } : { scale: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full flex justify-end"
          >
            <Image
              src={"/avatars.png"}
              alt="avatars"
              width={232}
              height={41}
              className="self-end"
            />
          </motion.div>
        </div>
        {/* text container */}
        <div className="w-full col-span-1 h-full text-white flex flex-col items-center justify-center px-10 gap-4">
          <button type="button" className="w-full text-start">
            <h3 className="text-[22px] lg:text-[45px] leading-[1.2] font-normal">
              Mobile App Development
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

export default CardOne;

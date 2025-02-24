import Link from "next/link";
import React from "react";
import { IoClose } from "react-icons/io5";

const Sidebar = ({ onclick }) => {
  return (
    <div
      className={`w-[50%] h-auto bg-white custom-shadow rounded-xl float-end mr-4`}
    >
      {/* <button type="button" className="float-end m-6 text-xl" onClick={onclick}>
        <IoClose />
      </button> */}
      <ul className="flex flex-col items-start w-full justify-center gap-4 py-5 px-7">
        <li>
          <Link href={`/`} className={`font-normal text-black text-[15px]`}>
            Home
          </Link>
        </li>
        <li>
          <Link
            href={`#services`}
            className={`font-normal text-black text-[15px]`}
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            href={`#portfolio`}
            className={`font-normal text-black text-[15px]`}
          >
            Our Work
          </Link>
        </li>
        <li>
          <Link
            href={`/contact-us`}
            className={`font-normal text-black text-[15px]`}
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

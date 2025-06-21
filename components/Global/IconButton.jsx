import Image from "next/image";
import Link from "next/link";
import React from "react";

const IconButton = ({ text }) => {
  return (
    <Link href={"/contact-us"} className={`red-btn`}>
      {text}

      <Image
        src={"/button-icon.png"}
        width={26}
        height={26}
        alt="button icon"
        className="w-[26] h-[26]"
      />
    </Link>
  );
};

export default IconButton;

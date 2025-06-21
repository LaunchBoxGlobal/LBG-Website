import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({ c }) => {
  return (
    <Link href={c?.url}>
      <div className="w-full relative space-y-4">
        <Image
          src={c?.image}
          width={403}
          height={380}
          alt={`${c?.title}-featured-image`}
          className="h-[380px] object-cover rounded-[28px]"
        />
        <h3 className="text-lg md:text-xl lg:text-2xl">{c?.title}</h3>
      </div>
    </Link>
  );
};

export default Card;

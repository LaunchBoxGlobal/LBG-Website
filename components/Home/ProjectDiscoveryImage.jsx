import Image from "next/image";
import React from "react";
import "./ProcessAnimations.css";

const ProjectDiscoveryImage = () => {
  return (
    <div className="w-full h-[301px] lg:h-[471px] relative">
      <Image
        src={"/project-discovery-search.png"}
        width={380}
        height={410}
        className="absolute inset-0 z-10 left-[20%] floatUp w-[60%]"
      />
      <Image
        src={"/project-discovery-03.png"}
        width={189}
        height={300}
        className="absolute right-[13%] top-[20%] z-0 scale-150 floatDown w-[40%]"
      />
    </div>
  );
};

export default ProjectDiscoveryImage;

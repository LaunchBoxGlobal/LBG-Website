"use client";
import React from "react";
import dynamic from "next/dynamic";

const World = dynamic(() => import("./Globe.jsx").then((m) => m.World), {
  ssr: false,
});

export function GlobeDemo() {
  const globeConfig = {
    pointSize: 12,
    globeColor: "#ffffff",
    showAtmosphere: true,
    atmosphereColor: "#fff",
    atmosphereAltitude: 0.1,
    emissive: "#fff",
    emissiveIntensity: 1,
    shininess: 0.9,
    polygonColor: "#F40E00",
    ambientLight: "#ffffff",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#F40E00",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 140.638578729413211, lng: -38.019332777662541 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
    pointColor: (d) => (d.important ? "#F40E00" : "#F40E00"),
  };
  const colors = ["#F40E00", "#F40E00", "#F40E00"];

  return (
    <div className="flex flex-row items-center justify-center relative w-full">
      <div className="w-full relative overflow-hidden h-[180px] lg:h-[380px] xl:h-[400px] flex justify-center">
        <div className="w-[120vw] h-[120vw] lg:w-[110vw] lg:h-[80vw] z-10 relative top-[-20%] lg:top-[-25%] midlg:top-[-33%] xl:top-[-35%]">
          <World data={[]} globeConfig={globeConfig} />
        </div>
      </div>
    </div>
  );
}

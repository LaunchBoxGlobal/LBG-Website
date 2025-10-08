"use client";
import { Canvas } from "@react-three/fiber";
import Earth from "@/public/Earth";
import { Environment, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";

export default function EarthScene() {
  return (
    <Canvas style={{ width: "100%" }}>
      <ambientLight intensity={1} />
      <OrbitControls enableZoom={false} />
      <Suspense fallback={null}>
        <Earth />
      </Suspense>
      <Environment preset="sunset" />
    </Canvas>
  );
}

"use client";

import createGlobe from "cobe";
import { useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

const MOVEMENT_DAMPING = 1400;

const GLOBE_CONFIG = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 0,
  opacity: 0.8,
  diffuse: 0.2,
  mapSamples: 26000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1],
  markerColor: [1, 0, 0],
  glowColor: [1, 1, 1],
  markers: [
    { country: "Afghanistan", location: [34.5289, 69.1725], size: 0.05 },
    { country: "Albania", location: [41.3275, 19.8189], size: 0.05 },
    { country: "Algeria", location: [36.7538, 3.0422], size: 0.05 },
    { country: "Andorra", location: [42.5078, 1.5211], size: 0.05 },
    { country: "Angola", location: [-8.8399, 13.2894], size: 0.05 },
    { country: "Argentina", location: [-34.6037, -58.3816], size: 0.05 },
    { country: "Armenia", location: [40.1792, 44.4991], size: 0.05 },
    { country: "Australia", location: [-35.2809, 149.13], size: 0.05 },
    { country: "Austria", location: [48.2082, 16.3738], size: 0.05 },
    { country: "Azerbaijan", location: [40.4093, 49.8671], size: 0.05 },
    { country: "Bahamas", location: [25.0343, -77.3963], size: 0.05 },
    { country: "Bahrain", location: [26.2285, 50.586], size: 0.05 },
    { country: "Bangladesh", location: [23.8103, 90.4125], size: 0.05 },
    { country: "Barbados", location: [13.1939, -59.5432], size: 0.05 },
    { country: "Belarus", location: [53.9006, 27.559], size: 0.05 },
    { country: "Belgium", location: [50.8503, 4.3517], size: 0.05 },
    { country: "Belize", location: [17.5046, -88.1962], size: 0.05 },
    { country: "Benin", location: [6.5244, 2.4182], size: 0.05 },
    { country: "Bhutan", location: [27.4728, 89.639], size: 0.05 },
    { country: "Bolivia", location: [-16.5, -68.15], size: 0.05 },
    // {
    //   country: "Bosnia and Herzegovina",
    //   location: [43.8563, 18.4131],
    //   size: 0.05,
    // },
    // { country: "Botswana", location: [-24.6282, 25.9231], size: 0.05 },
    // { country: "Brazil", location: [-15.7801, -47.9292], size: 0.05 },
    // { country: "Brunei", location: [4.9031, 114.9398], size: 0.05 },
    // { country: "Bulgaria", location: [42.6977, 23.3242], size: 0.05 },
    // { country: "Burkina Faso", location: [12.3687, -1.5277], size: 0.05 },
    // { country: "Burundi", location: [-3.3614, 29.3599], size: 0.05 },
    // { country: "Cambodia", location: [11.5564, 104.9282], size: 0.05 },
    // { country: "Cameroon", location: [3.848, 11.5021], size: 0.05 },
    // { country: "Canada", location: [45.4215, -75.6993], size: 0.05 },
    // { country: "Cape Verde", location: [14.9167, -23.5167], size: 0.05 },
    // {
    //   country: "Central African Republic",
    //   location: [4.3667, 18.5833],
    //   size: 0.05,
    // },
    // { country: "Chad", location: [12.1348, 15.0557], size: 0.05 },
    // { country: "Chile", location: [-33.4489, -70.6693], size: 0.05 },
    // { country: "China", location: [39.9042, 116.4074], size: 0.05 },
    // { country: "Colombia", location: [4.711, -74.0721], size: 0.05 },
    // { country: "Comoros", location: [-11.7001, 43.2551], size: 0.05 },
    // { country: "Congo", location: [-4.2634, 15.2429], size: 0.05 },
    // { country: "Costa Rica", location: [9.9281, -84.0907], size: 0.05 },
    // { country: "Croatia", location: [45.815, 15.9819], size: 0.05 },
    // { country: "Cuba", location: [23.1136, -82.3666], size: 0.05 },
    // { country: "Cyprus", location: [35.1856, 33.3823], size: 0.05 },
    // { country: "Czech Republic", location: [50.0755, 14.4378], size: 0.05 },
    // { country: "Denmark", location: [55.6761, 12.5683], size: 0.05 },
    // { country: "Djibouti", location: [11.5721, 43.1456], size: 0.05 },
    // {
    //   country: "Dominican Republic",
    //   location: [18.4861, -69.9312],
    //   size: 0.05,
    // },
  ],
};

export function Globe({ className, config = GLOBE_CONFIG }) {
  let phi = 0;
  let width = 0;
  const canvasRef = useRef(null);
  const pointerInteracting = useRef(null);
  const pointerInteractionMovement = useRef(0);

  const r = useMotionValue(0);
  const rs = useSpring(r, {
    mass: 1,
    damping: 30,
    stiffness: 100,
  });

  const updatePointerInteraction = (value) => {
    pointerInteracting.current = value;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab";
    }
  };

  const updateMovement = (clientX) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
      r.set(r.get() + delta / MOVEMENT_DAMPING);
    }
  };

  useEffect(() => {
    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth;
      }
    };

    window.addEventListener("resize", onResize);
    onResize();

    const globe = createGlobe(canvasRef.current, {
      ...config,
      width: width * 2,
      height: width * 2,
      onRender: (state) => {
        if (!pointerInteracting.current) phi += 0.005;
        state.phi = phi + rs.get();
        state.width = width * 2;
        state.height = width * 2;
      },
    });

    setTimeout(() => {
      if (canvasRef.current) {
        canvasRef.current.style.opacity = "1";
      }
    }, 0);

    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, [rs, config]);

  return (
    <div
      className={cn(
        "absolute bottom-[-180vh] 2xl:bottom-[-135vh] aspect-square  w-[120vw] h-[120vw]",
        className
      )}
    >
      <canvas
        className={cn("size-full opacity-0 transition-opacity duration-500")}
        style={{
          contain: "layout paint size",
        }}
        ref={canvasRef}
        // onPointerDown={(e) => {
        //   pointerInteracting.current = e.clientX;
        //   updatePointerInteraction(e.clientX);
        // }}
        // onPointerUp={() => updatePointerInteraction(null)}
        // onPointerOut={() => updatePointerInteraction(null)}
        // onMouseMove={(e) => updateMovement(e.clientX)}
        // onTouchMove={(e) =>
        //   e.touches[0] && updateMovement(e.touches[0].clientX)
        // }
      />
    </div>
  );
}

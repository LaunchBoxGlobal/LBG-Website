"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CursorImage = "/blog-button-image.png";

const Cursor = ({ isHovering }) => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    if (isHovering) {
      window.addEventListener("mousemove", moveCursor);
    } else {
      window.removeEventListener("mousemove", moveCursor);
    }

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [isHovering]);

  if (!isHovering) return null;

  return (
    <motion.img
      src={CursorImage}
      alt="Custom Cursor"
      className="fixed w-[86px] h-[86px] pointer-events-none z-[9999]"
      style={{
        left: cursorPos.x - 32,
        top: cursorPos.y - 32,
      }}
    />
  );
};

export default Cursor;

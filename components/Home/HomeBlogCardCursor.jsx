"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CursorImage = "/blog-card-red-cursor-image.png";

const HomeBlogCardCursor = ({ isHovering }) => {
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
      className="fixed w-[76px] h-[76px] pointer-events-none z-[9999]"
      style={{
        left: cursorPos.x - 32,
        top: cursorPos.y - 32,
      }}
    />
  );
};

export default HomeBlogCardCursor;

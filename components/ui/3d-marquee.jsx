"use client";
import React, { useState, useEffect } from "react";

export const ThreeDMarquee = ({ images, className = "" }) => {
  const [activeCard, setActiveCard] = useState(null);
  const [animatedCards, setAnimatedCards] = useState(new Set());
  const organizeColumns = (items) => {
    const columns = [[], [], []];
    const pattern = [2, 3, 2, 3, 2]; 
    
    let itemIndex = 0;
    let colIndex = 0;
    
    while (itemIndex < items.length) {
      const itemsInThisCol = pattern[colIndex % pattern.length];
      for (let i = 0; i < itemsInThisCol && itemIndex < items.length; i++) {
        columns[colIndex % 3].push(items[itemIndex]);
        itemIndex++;
      }
      colIndex++;
    }
    
    return columns;
  };

  const columns = organizeColumns(images);

  useEffect(() => {
    const totalCards = images.length;
    
    const animateRandomCard = () => {
      const availableCards = Array.from({ length: totalCards }, (_, i) => i)
        .filter(i => !animatedCards.has(i));

      if (availableCards.length === 0) {
        setAnimatedCards(new Set());
        return;
      }

      const randomIndex = availableCards[Math.floor(Math.random() * availableCards.length)];
      
      setActiveCard(randomIndex);
      setAnimatedCards(prev => new Set([...prev, randomIndex]));
      

      setTimeout(() => {
        setActiveCard(null);
      }, 2000); 
    };
    const initialTimeout = setTimeout(animateRandomCard, 1000);
    

    const interval = setInterval(() => {
      animateRandomCard();
    }, 3000 + Math.random() * 900);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, [images.length, animatedCards]);

  return (
    <div
      className={`absolute right-0 top-0 bottom-0 w-[47%] overflow-hidden ${className}`}
      style={{
        perspective: "1200px",
        transformStyle: "preserve-3d",
      }}
    >
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          transform: "rotateX(60deg) rotateZ(40deg) translateZ(-100px)",
          transformStyle: "preserve-3d",
        }}
      >
        <div className="flex gap-4  relative">
          {columns.map((column, colIdx) => (
            <div key={colIdx} className="flex flex-col gap-4">
              {column.map((item, idx) => {
                let flatIndex = 0;
                for (let c = 0; c < colIdx; c++) {
                  flatIndex += columns[c].length;
                }
                flatIndex += idx;

                const isActive = activeCard === flatIndex;
                
                return (
                  <div
                    key={`${colIdx}-${idx}`}
                    className={`group aspect-square w-16 md:w-32 rounded-xl flex items-center justify-center 
                      bg-gradient-to-br from-gray-800/40 to-gray-900/60 
                      border border-gray-700/50
                      shadow-[0_8px_32px_rgba(0,0,0,0.3)]
                      transition-all duration-500 ease-out
                      backdrop-blur-sm
                      relative
                      before:absolute before:inset-0 before:rounded-xl 
                      before:bg-gradient-to-br before:from-white/0 before:to-white/0
                      before:transition-all before:duration-500
                      ${isActive ? 'scale-110 z-10 border-b-8 border-r-8 border-red-500/50 shadow-[0_12px_48px_rgba(244,14,0,0.4)] !bg-[#fe0400] !from-red-600/20 !to-gray-900/80 before:!from-white/10 before:!to-transparent' : ''}`}
                    style={{
                      transform: `translateZ(${(colIdx * 20 + idx * 10)}px) ${isActive ? 'scale(1.1)' : 'scale(1)'}`,
                    }}
                  >
                    <item.icon 
                      className={`text-3xl md:text-4xl transition-all duration-500
                        drop-shadow-[0_0_8px_rgba(244,14,0,0.3)]
                        ${isActive ? 'text-white scale-110 drop-shadow-[0_0_16px_rgba(244,14,0,0.8)]' : 'text-gray-300'}`}
                    />
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
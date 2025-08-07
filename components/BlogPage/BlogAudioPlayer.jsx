"use client";
import { useState, useEffect, useRef } from "react";
import { FaPlay } from "react-icons/fa6";

const BlogAudioPlayer = ({ text, readTime }) => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const intervalRef = useRef(null);
  const utteranceRef = useRef(null);
  const totalDuration = useRef(0);

  // Convert readTime ("MM:SS") to seconds on mount
  useEffect(() => {
    if (typeof readTime === "string" && readTime.includes(":")) {
      const [min, sec] = readTime.split(":").map(Number);
      totalDuration.current = min * 60 + sec;
    }
  }, [readTime]);

  const toggleSpeech = () => {
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      clearInterval(intervalRef.current);
      setIsSpeaking(false);
    } else {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "en-US";
      utterance.rate = 1;
      utterance.pitch = 1;

      utterance.onend = () => {
        clearInterval(intervalRef.current);
        setIsSpeaking(false);
        setElapsed(totalDuration.current);
      };

      utteranceRef.current = utterance;
      window.speechSynthesis.speak(utterance);
      setIsSpeaking(true);

      intervalRef.current = setInterval(() => {
        setElapsed((prev) => {
          if (prev >= totalDuration.current) {
            clearInterval(intervalRef.current);
            return totalDuration.current;
          }
          return prev + 1;
        });
      }, 1000);
    }
  };

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const s = Math.floor(seconds % 60)
      .toString()
      .padStart(2, "0");
    return `${m}:${s}`;
  };

  const remainingTime = totalDuration.current - elapsed;
  const progressPercent = Math.min(
    (elapsed / totalDuration.current) * 100,
    100
  );

  return (
    <div className="w-full">
      <p className="text-sm xl:text-base font-bold text-gray-900 leading-none">
        Listen to this article
      </p>
      <div className="w-full flex justify-start items-center mt-2">
        <div className="w-full flex items-center gap-0.5">
          <button onClick={toggleSpeech} className="min-w-8 min-h-[27px]">
            {isSpeaking ? (
              <PauseIcon />
            ) : (
              <FaPlay className="text-2xl relative -right-0.5 red-text" />
            )}
          </button>

          <div className="w-[96%] relative progressbar-container">
            <div
              className="w-4 h-4 bg-[#f40e00] rounded-full absolute z-10 top-1/2 -translate-y-1/2 transition-all duration-300"
              style={{
                left: `${progressPercent}%`,
                transform: "translate(-50%, -50%)",
              }}
            />
            <div className="w-full border border-gray-300 h-[2px]"></div>
          </div>
        </div>

        <div className="min-w-[15%] flex items-center justify-end timer-container gap-1">
          <p className="text-sm xl:text-base font-bold text-gray-900 leading-none counter">
            {formatTime(elapsed)}
          </p>
          <p className="text-sm xl:text-base font-bold text-gray-900 leading-none">
            /
          </p>
          <p className="text-sm xl:text-base font-bold text-gray-900 leading-none reverse-counter">
            {formatTime(remainingTime)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogAudioPlayer;

export const PauseIcon = () => (
  <div className="flex items-center justify-center gap-0.5">
    <div className="w-2 h-5 bg-[#f40e00] rounded-[2px]"></div>
    <div className="w-2 h-5 bg-[#f40e00] rounded-[2px]"></div>
  </div>
);

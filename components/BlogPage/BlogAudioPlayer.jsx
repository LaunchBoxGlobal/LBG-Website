"use client";
import { useState } from "react";
import { FaPlay } from "react-icons/fa6";

const BlogAudioPlayer = ({ text }) => {
  const [isSpeaking, setIsSpeaking] = useState(false);

  const toggleSpeech = () => {
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    } else {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "en-US";
      utterance.rate = 1; // speed (0.5 to 2)
      utterance.pitch = 1; // voice pitch (0 to 2)
      utterance.onend = () => setIsSpeaking(false);

      window.speechSynthesis.speak(utterance);
      setIsSpeaking(true);
    }
  };

  return (
    <div className="w-full">
      <p className="text-sm xl:text-base font-bold text-gray-900 leading-none">
        Listen to this article
      </p>
      <div className="w-full flex justify-start items-center gap-2 mt-2">
        <div className="w-full flex items-center">
          <button
            onClick={toggleSpeech}
            // className="w-[54px] h-[54px] rounded-full bg-[#F40E00] text-white flex items-center justify-center"
          >
            {isSpeaking ? (
              <PauseIcon className={"red-text"} />
            ) : (
              <FaPlay className="text-2xl relative -right-0.5 red-text" />
            )}
          </button>
          <div className="w-full relative">
            <div className="w-full border border-gray-300"></div>
          </div>
        </div>
        <div className="min-w-[10.5%] flex items-center justify-end">
          <p className="text-sm xl:text-base font-bold text-gray-900 leading-none">
            0:00
          </p>
          <p className="text-sm xl:text-base font-bold text-gray-900 leading-none">
            /
          </p>
          <p className="text-sm xl:text-base font-bold text-gray-900 leading-none">
            15:47
          </p>
        </div>
        {/* {isSpeaking ? (
        <p className="text-sm xl:text-base font-bold text-gray-900 leading-none">
          Stop Listening
        </p>
      ) : (
        <p className="text-sm xl:text-base font-bold text-gray-900 leading-none">
          Listen to Blog
        </p>
      )} */}
      </div>
    </div>
  );
};

export default BlogAudioPlayer;

export const PauseIcon = () => {
  return (
    <div className="flex items-center justify-center gap-0.5">
      <div className="w-2 h-5 bg-white rounded-[2px]"></div>
      <div className="w-2 h-5 bg-white rounded-[2px]"></div>
    </div>
  );
};

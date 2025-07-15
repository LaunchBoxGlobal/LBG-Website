import Image from "next/image";
import { useRef, useState } from "react";

const BlogAuthorDetails = ({ author, date, readTime, blog }) => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const synthRef = useRef(null);

  function formatDate(dateString) {
    const date = new Date(dateString);

    const options = { year: "numeric", month: "long", day: "numeric" };

    return date.toLocaleDateString("en-US", options);
  }

  const handleSpeak = () => {
    if (!blog?.content?.rendered) return;

    // Stop any ongoing speech
    window.speechSynthesis.cancel();

    const plainText = blog.content.rendered.replace(/<[^>]+>/g, " ");
    const utterance = new SpeechSynthesisUtterance(plainText);

    utterance.rate = 1; // Normal speed
    utterance.pitch = 1; // Normal pitch
    utterance.volume = 1; // Max volume

    // Start speaking
    window.speechSynthesis.speak(utterance);
    synthRef.current = utterance;

    setIsSpeaking(true);

    utterance.onend = () => {
      setIsSpeaking(false);
    };
  };

  const handlePause = () => {
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.pause();
      setIsSpeaking(false);
    }
  };

  const handleResume = () => {
    if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
      setIsSpeaking(true);
    }
  };

  const toggleSpeech = () => {
    if (isSpeaking) {
      handlePause();
    } else {
      if (window.speechSynthesis.paused) {
        handleResume();
      } else {
        handleSpeak();
      }
    }
  };

  return (
    <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-y-5 my-10">
      {author?.name && (
        <div className="flex items-center gap-2">
          <img
            src={author?.avatar_urls?.[96] || "/author-profile.jpg"}
            width={54}
            height={54}
            alt="author profile picture"
            className="rounded-full object-contain author-image"
          />
          <div className="flex flex-col">
            <p className="text-sm text-gray-500">By:</p>
            <p className="text-base font-bold text-gray-900 leading-none">
              {author?.name}
            </p>
          </div>
        </div>
      )}
      {date && (
        <div className="flex items-center gap-2">
          <img
            src={"/blog-calendar-image.png"}
            alt="blog-calendar-image"
            width={54}
            height={54}
            className="rounded-full author-image"
          />
          <div className="flex flex-col">
            <p className="text-sm text-gray-500">Published Date:</p>
            <p className="text-base font-bold text-gray-900">
              {formatDate(date)}
            </p>
          </div>
        </div>
      )}
      {readTime && (
        <div className="flex items-center gap-2">
          <img
            src={"/blog-estimated-read-time-image.png"}
            alt="blog testimated read time image"
            width={54}
            height={54}
            className="rounded-full author-image"
          />
          <div className="flex flex-col">
            <p className="text-sm text-gray-500">Estimated Read Time:</p>
            <p className="text-base font-bold text-gray-900">{readTime} min</p>
          </div>
        </div>
      )}
      {/* <button className="listen-btn" onClick={() => toggleSpeech()}>
        {isSpeaking ? "⏸ Pause" : "▶️ Listen to Blog"}
      </button> */}
    </div>
  );
};

export default BlogAuthorDetails;

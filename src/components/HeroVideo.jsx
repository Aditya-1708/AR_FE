import { useRef, useState } from "react";
import {
  FaArrowRight,
  FaVolumeMute,
  FaVolumeUp,
  FaYoutube,
} from "react-icons/fa";

const HeroVideo = () => {
  const videoRef = useRef(null);

  const [ctaState, setCtaState] = useState("idle");
  // idle | expanded
  const [isMuted, setIsMuted] = useState(true);

  const handleVideoEnd = () => {
    setCtaState("expanded");

    setTimeout(() => {
      setCtaState("idle");
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play();
      }
    }, 3000);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;

    if (isMuted) {
      // unmute → play at 50% volume
      videoRef.current.muted = false;
      videoRef.current.volume = 0.5;
    } else {
      // mute completely
      videoRef.current.muted = true;
      videoRef.current.volume = 0;
    }

    setIsMuted(!isMuted);
  };

  const isExpanded = ctaState === "expanded";

  return (
    <div className="relative aspect-video rounded-3xl overflow-hidden bg-black shadow-2xl">
      {/* ===== VIDEO ===== */}
      <video
        ref={videoRef}
        src="/AR Industries Teaser002.mp4"
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd}
        className="w-full h-full object-cover"
      />

      {/* ===== MUTE BUTTON ===== */}
      <button
        onClick={toggleMute}
        className="absolute bottom-4 right-4 z-30 h-11 w-11 rounded-full
                   bg-black/60 backdrop-blur flex items-center justify-center
                   text-white hover:bg-black/80 transition"
      >
        {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
      </button>

      {/* ===== CTA (SAME ELEMENT, TWO STATES) ===== */}
      <a
        href="https://www.youtube.com/watch?v=YOUR_VIDEO_ID"
        target="_blank"
        rel="noopener noreferrer"
        className={`
    absolute z-30 flex items-center gap-3 font-semibold text-white
    bg-red-600 hover:bg-red-700 shadow-lg

    transition-[transform,opacity,padding,width,height,border-radius]
    duration-700
    [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]

    ${
      isExpanded
        ? `
        left-1/2 top-1/2
        -translate-x-1/2 -translate-y-1/2
        px-8 py-4 rounded-xl text-lg
        scale-100 opacity-100
      `
        : `
        left-4 top-4
        translate-x-0 translate-y-0
        h-12 w-12 rounded-full
        scale-95 opacity-90
        justify-center
      `
    }
  `}
      >
        <FaYoutube className={isExpanded ? "text-2xl" : "text-xl"} />

        {isExpanded && (
          <>
            <span className="whitespace-nowrap">Watch Full Story</span>
            <FaArrowRight className="text-base opacity-80" />
          </>
        )}
      </a>

      {/* ===== OVERLAY ONLY DURING CTA ===== */}
      {isExpanded && (
        <div className="absolute inset-0 z-10 bg-black/50 backdrop-blur-sm transition-opacity" />
      )}
    </div>
  );
};

export default HeroVideo;

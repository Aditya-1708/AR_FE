import { useRef, useState } from "react";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";

const HeroVideo = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (!videoRef.current) return;

    if (isMuted) {
      videoRef.current.muted = false;
      videoRef.current.volume = 0.5;
    } else {
      videoRef.current.muted = true;
      videoRef.current.volume = 0;
    }

    setIsMuted(!isMuted);
  };

  return (
    <div className="relative aspect-video rounded-3xl overflow-hidden bg-black shadow-2xl">
      {/* ===== VIDEO ===== */}
      <video
        ref={videoRef}
        src="/AR Industries Teaser002.mp4"
        autoPlay
        muted
        loop
        playsInline
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
    </div>
  );
};

export default HeroVideo;

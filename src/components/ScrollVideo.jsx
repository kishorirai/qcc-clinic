import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ScrollVideo = () => {
  const { scrollY } = useScroll();

  // Video scale from smaller (~0.7) to full screen (1) between scroll 0 and 600
  const scale = useTransform(scrollY, [0, 800], [0.7, 1]);

  // Text opacity transitions (fade out/in)
  const opacity1 = useTransform(scrollY, [400, 600, 800], [1, 0, 0]);
  const opacity2 = useTransform(scrollY, [700, 900, 1100], [0, 1, 0]);

  return (
    <section className="relative bg-black text-white overflow-hidden min-h-screen flex flex-col items-center justify-center">
      {/* Video container */}
      <motion.div
        style={{ scale }}
        className="w-[80%] md:w-[60%] rounded-lg overflow-hidden shadow-lg"
      >
        <video
          src="/video.mp4" 
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-auto object-cover"
        />
      </motion.div>

     
    </section>
  );
};

export default ScrollVideo;

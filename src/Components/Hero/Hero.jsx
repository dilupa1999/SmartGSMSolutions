import React from "react";

const VideoBackground = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video 
        className="absolute top-0 left-0 object-cover w-full h-full" 
        autoPlay 
        loop 
        muted
      >
        <source src="https://videos.pexels.com/video-files/4201543/4201543-hd_1920_1080_30fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full bg-black/50">
        <h1 className="text-4xl font-bold text-center text-white md:text-6xl">
          Welcome to Our Site
        </h1>
      </div>
    </div>
  );
};

export default VideoBackground;

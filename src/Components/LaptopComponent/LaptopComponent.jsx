import React from "react";
import lap from "/assets/images/headphone.png";

const LaptopComponent = () => {
  return (
    <section className="bg-black">
      <div className="flex flex-col items-center justify-between px-4 py-8 mx-auto mt-8 mb-8 shadow-md max-w-7xl md:py-12 lg:flex-row rounded-2xl">
        {/* Left Content */}
        <div className="space-y-3 text-center text-white lg:w-1/3 lg:space-y-4 lg:text-left">
          <p className="text-xs tracking-wide uppercase md:text-sm">30% OFF</p>
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
            FINE SMILE
          </h1>
          <p className="text-xs md:text-sm">10 Jan to 28 Jan</p>
        </div>

        {/* Image */}
        <div className="flex items-center justify-center w-full my-6 lg:w-1/3 lg:my-0">
          <img
            src={lap}
            alt="Headphones"
            className="object-contain w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56"
          />
        </div>

        {/* Right Content */}
        <div className="space-y-3 text-center text-white lg:w-1/3 lg:space-y-4 lg:text-left">
          <h2 className="text-sm font-medium tracking-wide uppercase sm:text-base">
            Air Solo Bass
          </h2>
          <h3 className="text-2xl font-bold sm:text-3xl md:text-4xl">
            Winter Sale
          </h3>
          <p className="text-xs leading-relaxed sm:text-sm md:text-base">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea
            reprehenderit.
          </p>
          <button className="px-6 py-2 font-semibold text-pink-500 transition-all duration-300 bg-white rounded-full hover:bg-gray-100">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default LaptopComponent;

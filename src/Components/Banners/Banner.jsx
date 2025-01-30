import React from "react";

const banners = [
  {
    id: 1,
    title: "Earphone",
    subtitle: "Enjoy With",
    color: "bg-gray-800",
    textColor: "text-white",
    image: "/assets/images/category/earphone.png", // Replace with the correct path
  },
  {
    id: 2,
    title: "Gadget",
    subtitle: "Enjoy With",
    color: "bg-yellow-400",
    textColor: "text-gray-900",
    image: "/assets/images/category/speaker.png", // Replace with the correct path
  },
  {
    id: 3,
    title: "Mobile",
    subtitle: "Enjoy With",
    color: "bg-red-500",
    textColor: "text-white",
    image: "/assets/images/category/apple.png", // Replace with the correct path img2.png
  },
  {
    id: 4,
    title: "Gaming",
    subtitle: "Enjoy With",
    color: "bg-gray-300",
    textColor: "text-gray-800",
    image: "/assets/images/category/gaming.png", // Replace with the correct path
  },
  {
    id: 5,
    title: "VR",
    subtitle: "Enjoy With",
    color: "bg-green-500",
    textColor: "text-white",
    image: "/assets/images/category/vr.png", // Replace with the correct path
  },
  {
    id: 6,
    title: "Smart watch",
    subtitle: "Enjoy With",
    color: "bg-blue-500",
    textColor: "text-white",
    image: "/assets/images/category/WA.png", // Replace with the correct path
  },
];

const BannerGrid = () => {
  return (
    <div className="bg-blackg-bla">
      <div className="grid grid-cols-1 gap-6 px-2 mx-auto max-w-7xl sm:grid-cols-2 lg:grid-cols-3">
        {banners.map((banner) => (
          <div
            key={banner.id}
            className={`${banner.color} ${banner.textColor} rounded-lg p-6 flex flex-col justify-between items-start shadow-lg relative`}
          >
            {/* Text Content */}
            <div>
              <p className="text-sm uppercase">{banner.subtitle}</p>
              <h2 className="text-2xl font-bold sm:text-3xl">{banner.title}</h2>
            </div>
            {/* Button */}
            <button className="px-4 py-2 mt-4 font-semibold text-red-500 bg-white rounded-full hover:bg-gray-100">
              Browse
            </button>
            {/* Image */}
            <img
              src={banner.image}
              alt={banner.title}
              className="absolute object-contain w-20 h-20 right-4 bottom-4 sm:w-24 sm:h-24"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BannerGrid;


import React from "react";
import { FaShippingFast, FaMoneyCheckAlt, FaLock, FaHeadset } from "react-icons/fa";

const Features = () => {
  const features = [
    {
      icon: <FaShippingFast size={40} color="#ec4899" />,
      title: "Free Shipping",
      description: "Free Shipping On All Orders",
    },
    {
      icon: <FaMoneyCheckAlt size={40} color="#ec4899" />,
      title: "Safe Money",
      description: "30 Days Money Back",
    },
    {
      icon: <FaLock size={40} color="#ec4899" />,
      title: "Secure Payment",
      description: "All Payment Secure",
    },
    {
      icon: <FaHeadset size={40} color="#ec4899" />,
      title: "Online Support 24/7",
      description: "Technical Support 24/7",
    },
  ];

  return (
    <section id="features" className="py-20 bg-black">
      <div className="container px-4 mx-auto">
        <h2 className="mb-12 text-3xl font-bold text-center text-pink-600">Key Features</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 text-center bg-black rounded-lg shadow-md "
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="mb-2 text-xl font-bold text-white">{feature.title}</h3>
              <p className="text-white">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

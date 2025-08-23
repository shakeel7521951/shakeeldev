import React from "react";
import "./ClientSlider.css";

const ClientSlider = () => {
  const logos = [
    "/client/1.png",
    "/client/2.png",
    "/client/3.png",
    "/client/4.png",
    "/client/1.png",
    "/client/2.png",
    "/client/3.png",
    "/client/4.png",
  ];

  return (
    <div className="py-6 bg-blue-700 mb-8">
      {/* Border with reduced left & right width */}
      <div className=" border-gray-300 max-w-5xl mx-auto overflow-hidden py-6">
      <div className="whitespace-nowrap flex items-center animate-marquee-alternate mt-4">
        {logos.concat(logos).map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Logo ${index + 1}`}
            className="h-8 sm:h-16 mx-8 object-contain"
          />
        ))}
      </div>
    </div>
    </div>
  );
};

export default ClientSlider;



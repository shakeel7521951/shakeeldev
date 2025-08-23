import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaNetworkWired,
  FaHandshake,
  FaLock,
  FaRocket,
  FaExchangeAlt,
  FaLightbulb,
} from "react-icons/fa";

// Feature data with AOS type and duration
const features = [
  {
    icon: <FaNetworkWired />,
    label: "Blockchain Expertise",
    position: "lg:ms-[-200px]",
    aos: "fade-left",
    duration: 800,
  },
  {
    icon: <FaHandshake />,
    label: "Small Business Support",
    position: "lg:ms-[-120px]",
    aos: "fade-left",
    duration: 1200,
  },
  {
    icon: <FaLock />,
    label: "Crypto Solutions",
    position: "lg:ms-[-60px]",
    aos: "fade-left",
    duration: 1600,
  },
  {
    icon: <FaRocket />,
    label: "Startup Business",
    position: "lg:ms-[-60px]",
    aos: "fade-left",
    duration: 2000,
  },
  {
    icon: <FaExchangeAlt />,
    label: "B2B Integration",
    position: "lg:ms-[-120px]",
    aos: "fade-left",
    duration: 2400,
  },
  {
    icon: <FaLightbulb />,
    label: "Fintech Innovation",
    position: "lg:ms-[-200px]",
    aos: "fade-left",
    duration: 2800,
  },
];

const KeyFeatures = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="bg-gray-100 text-white px-5 py-2 sm:py-16 overflow-hidden">
      <div className="flex flex-col w-full mx-auto sm:w-7/12 lg:flex-row items-center justify-center md:gap-16 lg:gap-32">
        {/* Circle Title */}
        <div
          className="flex items-center justify-center mb-10 lg:mb-0"
          data-aos="fade-right"
          data-aos-duration="3000"
        >
          <div className="w-60 border border-[#251d23] transition-all ease-in delay-250 hover:bg-gradient-to-br from-[#0F00AA] to-[#060044] h-60 md:w-72 md:h-72 rounded-full flex items-center justify-center group shadow-2xl">
            <h1 className="text-2xl text-black md:text-3xl group-hover:text-white font-bold text-center leading-tight tracking-wide">
              KEY
              <br />
              FEATURES
            </h1>
          </div>
        </div>

        {/* Feature List */}
        <div className="flex w-full flex-col items-center lg:items-start gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              data-aos={feature.aos}
              data-aos-duration={feature.duration}
              className={`flex h-13 justify-center items-center gap-4 px-4 w-full sm:w-[340px] md:w-[340px] rounded-full border border-[#251d23] shadow-md shadow-black group cursor-pointer relative delay-100 hover:shadow-lg transition-all duration-700 bg-[length:200%_100%] bg-left hover:bg-right hover:text-white
              ${feature.position}
              bg-white hover:bg-[linear-gradient(to_right,#060044,#0F00AA,#060044)]`}
            >
              <div className="h-[100%] absolute left-0 border-r-2 border-0 top-0 w-[15%] flex items-center justify-center rounded-full transition-all border-black delay-250 ease-in-out group-hover:border-white group-hover:bg-black group-hover:text-white text-black text-xl shadow-md">
                {feature.icon}
              </div>
              <span className="text-black transition-all delay-250 ease-in-out group-hover:text-white font-semibold text-base tracking-wide">
                {feature.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;

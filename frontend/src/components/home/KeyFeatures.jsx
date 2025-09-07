import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaCode,
  FaLaptopCode,
  FaServer,
  FaRocket,
  FaCloud,
  FaShieldAlt,
} from "react-icons/fa";

// Feature data
const features = [
  {
    icon: <FaCode />,
    label: "MERN & Next.js Expertise",
    position: "lg:ms-[-200px]",
    aos: "fade-left",
    duration: 800,
  },
  {
    icon: <FaLaptopCode />,
    label: "Responsive UI/UX Design",
    position: "lg:ms-[-120px]",
    aos: "fade-left",
    duration: 1200,
  },
  {
    icon: <FaServer />,
    label: "Secure Backend Solutions",
    position: "lg:ms-[-60px]",
    aos: "fade-left",
    duration: 1600,
  },
  {
    icon: <FaRocket />,
    label: "Scalable Web Applications",
    position: "lg:ms-[-60px]",
    aos: "fade-left",
    duration: 2000,
  },
  {
    icon: <FaCloud />,
    label: "Cloud & Deployment",
    position: "lg:ms-[-120px]",
    aos: "fade-left",
    duration: 2400,
  },
  {
    icon: <FaShieldAlt />,
    label: "Authentication & Security",
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
    <div className="bg-[#c4e4eb] text-white px-5 py-12 sm:py-16 overflow-hidden">
      <div className="flex flex-col w-full mx-auto sm:w-8/12 lg:flex-row items-center justify-center md:gap-16 lg:gap-32">
        {/* Circle Title */}
        <div
          className="flex items-center justify-center mb-10 lg:mb-0"
          data-aos="fade-right"
          data-aos-duration="3000"
        >
          <div className="w-60 h-60 md:w-72 md:h-72 rounded-full border-4 border-[#100b6883] shadow-2xl flex items-center justify-center transition-all ease-in delay-250 hover:bg-gradient-to-br from-[#100B68] to-[#3D9CB3] group">
            <h1 className="text-2xl md:text-3xl font-bold text-center leading-tight tracking-wide text-[#100B68] group-hover:text-white">
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
              className={`relative flex items-center gap-4 px-4 h-14 w-full sm:w-[340px] md:w-[340px] rounded-full border-2 border-[#100B68] shadow-md cursor-pointer group transition-all duration-700 delay-100
              bg-white bg-[length:200%_100%] bg-left hover:bg-right 
              hover:bg-[linear-gradient(to_right,#100B68,#3D9CB3,#28C2CF)] hover:text-white
              ${feature.position}`}
            >
              {/* Icon Section */}
              <div className="absolute left-0 top-0 h-full w-[15%] flex items-center justify-center border-r-2 border-[#100B68] rounded-full text-[#100B68] text-xl shadow-md transition-all delay-250 ease-in-out group-hover:border-white group-hover:bg-[#100B68] group-hover:text-white">
                {feature.icon}
              </div>

              {/* Label */}
              <span className="ml-[20%] text-[#100B68] font-semibold text-base tracking-wide transition-all delay-250 ease-in-out group-hover:text-white">
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

import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Features = () => {
  const features = [
    {
      image: "./home/homePageHeroCardSvg01.svg",
      title: "Full Stack Web Development",
    },
    {
      image: "./home/homePageHeroCardSvg02.svg",
      title: "Modern & Engaging UI/UX",
    },
    {
      image: "./home/homePageHeroCardSvg03.svg",
      title: "Scalable & Secure Solutions",
    },
    {
      image: "./home/homePageHeroCardSvg05.svg",
      title: "Deployment & Ongoing Support",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className=" bg-gradient-to-br from-[#3D9CB3] to-[#c4e4eb] py-10 my-10 px-6 overflow-hidden">
      <h2
        className="text-center text-2xl sm:text-4xl font-bold mb-10 text-[#100B68]"
        data-aos="zoom-in"
      >
        What Makes Me Stand Out?
      </h2>

      <div className="flex flex-wrap justify-center gap-10 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          
          <div
            key={index}
            className="group relative w-62 p-8 bg-white rounded-3xl text-center shadow-xl transition-transform duration-700 ease-in-out hover:scale-[1.05] hover:shadow-[0_20px_50px_rgba(0,180,255,0.25)] cursor-pointer  hover:bg-gradient-to-br hover:from-[#7470c4] hover:to-[#100B68] hover:text-white border border-gray-200 hover:border-transparent"
            data-aos="fade-left"
          >
            <div className="absolute top-3 right-3 w-4 h-4 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 animate-ping"></div>

            <div
              className="w-20 h-20 mb-6 mx-auto flex items-center justify-center bg-gradient-to-tr from-[#3D9CB3] to-[#c4e4eb] rounded-full group-hover:scale-110 transition-transform duration-700 shadow-md"
              data-aos="zoom-out"
            >
              <img
                src={feature.image}
                alt={feature.title}
                loading="lazy"
                className="w-10 h-10"
              />
            </div>
            <p className="font-semibold text-lg leading-snug transition-opacity duration-500 group-hover:opacity-95">
              {feature.title}
            </p>

            {/* Subtle glow pulse */}
            <div className="absolute top-3 right-3 w-4 h-4 bg-bl rounded-full opacity-0 group-hover:opacity-100 animate-ping"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;

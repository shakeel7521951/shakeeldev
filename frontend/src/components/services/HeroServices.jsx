import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const HeroServices = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true, // whether animation should happen only once
    });
  }, []);
  return (
    <header className=" bg-white text-black overflow-hidden">
      <div className="container mx-auto px-4 py-20 flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="w-full md:w-full space-y-6" data-aos="fade-right">
          <h1 className="text-4xl lg:text-6xl font-extrabold">
            Perfect It <span className="text-[#1E94AC]">Solutions</span>{" "}
            Business
          </h1>
          <p className="text-lg leading-relaxed text-black">
            Perfect IT Solutions provides expert services in software
            development, IT consulting, cloud solutions, network security, data
            management, technical support, web design, and system integration to
            empower business growth and efficiency.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link to="/contact">
              <button
                aria-label="Get Started"
                className="mt-2 px-8 py-3 cursor-pointer text-white text-lg font-semibold rounded-full shadow-lg bg-[#1E94AC] bg-left hover:bg-right transition-all duration-700"
              >
                Contact Us
              </button>
            </Link>
          </div>
        </div>

        {/* Right Content */}
        <div
          className="w-full md:w-1/2 flex justify-center"
          data-aos="fade-left"
        >
          <div className="w-full h-64  md:h-96  rounded-xl  flex items-center justify-center text-white text-xl backdrop-blur-md border bg-white border-white/20">
            <div className="w-full h-full ">
              <img src="/services/hero.png" className=" w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroServices;

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const OurValue = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const values = [
    {
      icon: "OurValueServicesIcon01.svg",
      title: "Integrity",
      desc: "We hold myself to a strong ethical and moral code.",
    },
    {
      icon: "OurValueServicesIcon02.svg",
      title: "Trust",
      desc: "I am loyal, and hardworking to achieve the same goal.",
    },
    {
      icon: "OurValueServicesIcon03.svg",
      title: "Excellence",
      desc: "I consistently strive to deliver high-quality work without room for error.",
    },
  ];

  return (
    <div className="container mx-auto px-5 py-10 flex flex-col-reverse md:flex-row items-center gap-10">
      {/* Left Content */}
      <div className="w-full md:w-1/2 flex flex-col items-start">
        <h1 className="text-3xl md:text-5xl font-bold">
          MY{" "}
          <span className="text-transparent bg-clip-text bg-[#100B68]">
            VALUE
          </span>
        </h1>

        {/* Gradient Line */}
        <div className="w-24 h-1 bg-gradient-to-r from-[#0F00AA] to-[#0F00AA] rounded-full my-4" />

        <p className="text-xl md:text-3xl font-semibold mb-8 w-full md:w-3/4">
          A melting pot for the best ideas
        </p>

        {/* Icons and Text - Aligned Correctly */}
        <div
          className="flex flex-col gap-6"
          data-aos="fade-right"
          data-aos-anchor-placement="center-center"
        >
          {values.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4"
            >
              <div className="bg-[#060044] p-3 mt-1 rounded-lg border-2 border-white flex items-center justify-center">
                <img
                  src={`./home/${item.icon}`}
                  alt={item.title}
                  className="w-14"
                  loading="lazy"
                />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold">{item.title}</h2>
                <p className="text-base md:text-lg">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Image */}
      <div
        className="w-full md:w-1/2 flex justify-center items-center"
        data-aos="fade-down"
      >
        <img
          src="./home/Home-Page-Our-Value-Services.png"
          alt="Home Page Our Value Services"
          className="w-full max-w-md md:max-w-lg"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default OurValue;

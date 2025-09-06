import React from "react";
import { IoArrowForward } from "react-icons/io5";

const WhoWeAre = () => {
  const aboutFeatures = [
    { text: "Industry Expert Experience", aos: "fade-right" },
    { text: "Client-Centric Focus", aos: "fade-left" },
    { text: "Partner Rather Than Vendor", aos: "fade-up-right" },
    { text: "Solutions That Improve Productivity", aos: "fade-up-left" },
    { text: "Collaborative Approach Throughout", aos: "fade-up-right" },
  ];

  return (
    <>
      {/* Shine Hover Effect CSS */}
      <style>{`
        .shine-wrapper {
          position: relative;
          overflow: hidden;
        }

        .shine-wrapper img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .shine-wrapper::after {
          content: "";
          position: absolute;
          top: 0;
          left: -75%;
          width: 50%;
          height: 100%;
          background: linear-gradient(
            120deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.4) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          transform: skewX(-25deg);
          pointer-events: none;
        }

        .group:hover .shine-wrapper::after {
          animation: shine-move 1s ease-in-out;
        }

        @keyframes shine-move {
          100% {
            left: 125%;
          }
        }
      `}</style>

      <section className="max-w-6xl mx-auto px-4 py-12 text-center">
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center text-left">
          {/* Image Section */}
          <div
            className="group w-full max-w-xl mx-auto relative"
            data-aos="fade-right"
          >
            <div className="shine-wrapper rounded">
              <img
                src="/about/img2.png"
                alt="Shakeel working on development"
                loading="lazy"
                className="w-full h-auto rounded-md max-h-[23rem] object-contain"
              />
            </div>

            {/* Floating small image */}
            <img
              src="/about/img.jpg"
              alt="Shakeel team meeting"
              loading="lazy"
              className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 absolute -bottom-12 sm:bottom-4 right-2 md:-right-10 rounded-md object-cover shadow-lg"
            />

            {/* Top mask icon */}
            <div className="h-16 w-16 md:h-24 md:w-24 absolute flex justify-center items-center top-2 bg-white p-2 rounded-full shadow-md">
              <img
                src="/about/mask.png"
                alt="Mask icon"
                className="h-8 w-8 md:h-10 md:w-10"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="px-2">
            <h2 className="text-md font-light mb-2 text-black">
              WHO <span className="text-[#1E94AC] font-bold">I</span> AM
            </h2>
            <h1 className="text-xl sm:text-4xl font-semibold mb-3 text-gray-900">
              YOUR <span className="text-[#1E94AC]">VISION</span> MY CODE
            </h1>
            <p className="text-base sm:text-md mb-5 text-gray-900">
              I am <b>Shakeel Dev</b>, a passionate Full Stack Developer
              dedicated to building smart, scalable, and user-focused digital
              solutions. With creativity and cutting-edge technology, I
              transform ideas into impactful products. My commitment to quality,
              transparency, and client satisfaction ensures that I don’t just
              deliver code — I deliver value. Every project reflects my belief
              in innovation, precision, and long-term partnerships.
            </p>

            <div className="flex flex-col gap-3 mt-4">
              {aboutFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="group cursor-pointer rounded-full w-fit shadow-md px-4 pe-6 py-2 flex items-center hover:bg-gray-100 transition-all"
                  data-aos={feature.aos}
                >
                  <span className="w-5 h-5 flex items-center justify-center mr-3 text-[#1E94AC]">
                    <IoArrowForward />
                  </span>
                  <p className="text-md text-gray-900">{feature.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhoWeAre;

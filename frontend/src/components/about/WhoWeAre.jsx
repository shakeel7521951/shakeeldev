import React from "react";
import { IoArrowForward } from "react-icons/io5";

const WhoWeAre = () => {
  const aboutFeatures = [
    { text: "Industry Expert Expereience", aos: "fade-right" },
    { text: "Client-Centric Focus", aos: "fade-left" },
    { text: "Partner rather than Vendor", aos: "fade-up-right" },
    { text: "Solutions Geared to Improve Productivity", aos: "fade-up-left" },
    { text: "Collaborative Approach Throughout the Process", aos: "fade-up-right" },
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

      <div>
        <section className="max-w-6xl mx-auto px-4 py-12 text-center">
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center text-left">
            {/* Group added here */}
            <div className="group w-full max-w-xl mx-auto relative" data-aos="fade-right">
              <div className="shine-wrapper rounded">
                <img
                  src="/about/img2.png"
                  alt="career step"
                  className="w-full h-auto rounded-md max-h-[23rem] object-contain"
                />
              </div>

              <img
                src="/about/img.jpg"
                alt="career step"
                className="w-28 h-28 md:w-40 md:h-40  absolute -bottom-16 sm:bottom-4 right-0 md:-right-10  object-contain"
              />

              <div className="h-18 w-18 md:h-24 md:w-24 absolute flex justify-center items-center top-2 bg-white p-2 rounded-full">
                <img src="/about/mask.png" alt="" className="h-10 w-10" />
              </div>
            </div>

            <div className="px-2">
              <h2 className="text-md font-light mb-2 text-black">
                WHO <span className="text-[#1E94AC] font-bold">I</span> AM
              </h2>
              <h1 className="text-xl sm:text-4xl font-semibold mb-3 text-gray-900">
                YOUR <span className="text-[#1E94AC]">VISION MY</span> CODE
              </h1>
              <p className="text-base sm:text-md mb-5 text-gray-900">
                At Shakeel Dev, I am a passionate Full Stack developer, designers, and strategists dedicated to building smart, scalable, and user-focused digital solutions. I thrive on creativity, and cutting-edge technology to transform ideas into impactful products. With a commitment to quality, transparency, and client satisfaction, I don't just deliver code — I deliver value. Every project I take on reflects my belief in innovation, precision, and long-term partnerships.
              </p>

              <div className="flex flex-col gap-3 mt-4">
                {aboutFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="group cursor-pointer rounded-full w-fit shadow-lg px-4 pe-6 py-1 flex items-center"
                    data-aos={feature.aos}
                  >
                    <span className="w-[25px] h-[10px] flex justify-center mr-4 rounded">
                      <IoArrowForward />
                    </span>
                    <p className="text-md text-black">{feature.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default WhoWeAre;

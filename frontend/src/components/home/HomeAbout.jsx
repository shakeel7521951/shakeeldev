import AOS from "aos";
import "aos/dist/aos.css";
import about from "/about/about2.jpg";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const HomeAbout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isAboutPage = location.pathname === "/about";

  const aboutFeatures = [
    { text: "Industry Expert Experience", aos: "fade-right" },
    { text: "Client-Centric Focus", aos: "fade-left" },
    { text: "Partner rather than Vendor", aos: "fade-up-right" },
    { text: "Solutions Geared to Improve Productivity", aos: "fade-up-left" },
    { text: "Collaborative Approach Throughout the Process", aos: "fade-up-right" },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      {/* Shine Effect CSS */}
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

      <div className="  bg-[#e0ecee]  pt-10 pb-10 px-5 text-black overflow-hidden">
        <div className="container mx-auto flex flex-col md:flex-row gap-8">
          
          {/* Image Section with Shine */}
          <div className="w-full md:w-1/2 order-2 group" data-aos="fade-up-right">
            <div className="shine-wrapper rounded-md overflow-hidden">
              <img
                src={about}
                alt="About Code's Thinker"
                loading="lazy"
                className="md:min-h-[450px]"
              />
            </div>
          </div>

          {/* Home Page Section */}
          {isHomePage && (
            <div className="w-full md:w-1/2 mt-2" data-aos="fade-up-left">
              <h1 className="text-3xl md:text-5xl font-bold">
                About <span className="text-[#100B68]">Shakeel </span>Dev
              </h1>
              <p className="py-3 text-black">
               I redefine excellence in business solution at Shakeel Dev...
              </p>
              <div className="flex flex-col gap-3 mt-4">
                {aboutFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="group cursor-pointer rounded-full w-fit shadow-lg px-4 pe-6 py-1 flex items-center"
                    data-aos={feature.aos}
                  >
                    <span className="w-[15px] h-[15px] mr-4 rounded-full bg-[#100B68]"></span>
                    <p className="text-md text-black">{feature.text}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* About Page Section */}
          {isAboutPage && (
            <div className="w-full sm:w-6/12 flex flex-col justify-center px-4 gap-3">
              <h1 className="text-start font-bold text-4xl w-full sm:w-6/12 md:w-full">
                Building <span className="text-[#100B68]">Future-Ready Software</span>
              </h1>
              <p className="w-full sm:w-9/12">
                I am a passionate developers, designers, and thinkers building scalable solutions for tomorrow. At [Sh], we don’t just build software — we craft scalable, intelligent solutions that drive real-world impact. Our team of developers, designers, and strategists work together to deliver innovative digital products tailored for tomorrow’s challenges. Rooted in collaboration, quality, and forward thinking, we’re committed to helping businesses grow through technology.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default HomeAbout;

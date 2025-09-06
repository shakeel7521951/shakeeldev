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
    { text: "Proven Full Stack Expertise", aos: "fade-right" },
    { text: "Client-First, Value-Driven Approach", aos: "fade-left" },
    { text: "Collaboration Beyond Just Delivery", aos: "fade-up-right" },
    { text: "Solutions That Enhance Productivity", aos: "fade-up-left" },
    { text: "Transparent & Continuous Communication", aos: "fade-up-right" },
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

      <div className="bg-[#e0ecee] pt-10 pb-10 px-5 text-black overflow-hidden">
        <div className="container mx-auto flex flex-col md:flex-row gap-8">
          {/* Image Section with Shine */}
          <div
            className="w-full md:w-1/2 order-2 group"
            data-aos="fade-up-right"
          >
            <div className="shine-wrapper rounded-md overflow-hidden">
              <img
                src={about}
                alt="About Shakeel Dev"
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
                At <b>Shakeel Dev</b>, I craft tailored digital solutions with a
                focus on performance, scalability, and user experience. My
                mission is to help businesses transform their ideas into
                reliable, future-ready software.
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
                Building{" "}
                <span className="text-[#100B68]">Future-Ready Software</span>
              </h1>
              <p className="w-full sm:w-9/12">
                I am a dedicated <b>Full Stack Web Developer</b> with expertise
                in MERN, Next.js, and scalable cloud deployment. At{" "}
                <b>Shakeel Dev</b>, I don’t just build websites I create
                complete digital solutions that empower businesses to innovate,
                grow, and succeed. Rooted in collaboration and problem-solving,
                I deliver technology that is modern, secure, and aligned with
                tomorrow’s challenges.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default HomeAbout;

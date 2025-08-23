import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import  { useEffect } from "react";
const departments = {
  Management: [
    { name: "Muhammad Waseem", role: "CEO", img: "./team/waseem.jpg" },
    { name: "Saim", role: "Head of Business/UK", img: "./team/b2.jpg" },
    { name: "Malaika Noor", role: "Business Developer", img: "./team/g1.jpg" },
  ],
  // Development: [
  //   { name: "Asad Ullah", role: "Frontend Developer", img: "./team/asdi.jpg" },
  //   { name: "Waqas", role: "Backend Dev", img: "./team/b3.jpg" },
  //   { name: "Kinza", role: "Fullstack Dev", img: "./team/g4.jpg" },
  // ],
  // Graphic: [
  //   { name: "Fakhar Abbas Bhatti", role: "Frontend Developer", img: "./team/fakhar.jpeg" },
  //   { name: "Rida Fatima", role: "Frontend Developer", img: "./team/g3.jpg" },
  // ],
  // Marketing: [
  //   { name: "Hamza", role: "SEO Expert", img: "./team/b5.jpg" },
  //   { name: "Arooj", role: "Social Media Expert", img: "./team/g5.jpg" },
  // ],
};

const OurTeam = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true,     // whether animation should happen only once
    });
  }, []);
  return (
    <div className="">
      <header className="text-center py-10">
        <h1 className="text-3xl md:text-5xl font-bold mb-2" data-aos="fade-down" data-aos-duration="1000">
          Meet Our{" "}
          <span className="text-[#0F00AA]">
            Team
          </span>
        </h1>
        <p className="max-w-3xl mx-auto text-sm md:text-lg px-4 md:p-0 text-black" data-aos="fade-left">
          Our team of passionate and experienced professionals is dedicated to
          driving your success. From strategy to execution, we combine
          creativity, innovation, and insight to deliver exceptional results.
        </p>
      </header>

      {Object.entries(departments).map(([dept, members]) => (
        <section key={dept} className="py-10 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-bold text-black mb-6 text-start" data-aos="fade-right">
              Global{" "}
              <span className="text-[#0F00AA]">
                Leadership
              </span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 justify-center" data-aos="fade-up" data-aos-duration="2000">
              {members.map((member, idx) => (
                <div
                  key={idx}
                  className="group relative rounded-xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105"
                >
                  <div className="shine-wrapper h-80">
                    {" "}
                    {/* Increased height here */}
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      style={{backgroundSize:"100% 100%"}}
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-100 group-hover:opacity-0 transition-opacity duration-500"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-[#2E3944]/90 text-white p-4 translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                    <h3 className="text-lg font-medium">{member.name}</h3>
                    <p className="text-sm text-gray-300">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

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
    </div>
  );
};

export default OurTeam;

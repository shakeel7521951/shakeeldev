import React, { useState, useRef, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const faqsData = [
  {
    question: "What services do you offer?",
    answer:
      "We offer web development, data science solutions, WordPress customization, and UI/UX design tailored to client needs.",
    aos: "fade-right",
    duration: "1000",
  },
  {
    question: "How long does a project usually take?",
    answer:
      "Project timelines vary but typically range from 2 to 6 weeks depending on complexity and requirements.",
    aos: "fade-right",
    duration: "2000",
  },
  {
    question: "Do you offer post-launch support?",
    answer:
      "Yes, we provide maintenance, updates, and technical support after your project goes live.",
    aos: "fade-right",
    duration: "3000",
  },
  {
    question: "Can I get a custom design for my brand?",
    answer:
      "Absolutely. We create custom designs that align with your brand identity and audience.",
    aos: "fade-right",
    duration: "3000",
  },
  {
    question: "How do I get started with a project?",
    answer:
      "Simply contact us through the form or email. We’ll schedule a free consultation to understand your goals.",
    aos: "fade-right",
    duration: "4000",
  },
];

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

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

      <div className="py-12 px-4 md:px-16 bg-gray-50 overflow-hidden">
        <div className="text-center mb-10">
          <p className="text-gray-600 text-sm">Have You Any Question</p>
          <h1 className="text-2xl md:text-4xl font-bold">
            <span className="text-[#100B68]" data-aos="zoom-in-up">
              Frequently
            </span>{" "}
            <span data-aos="fade-up" data-aos-duration="4000">
              Asked Questions
            </span>
          </h1>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 items-start">
          {/* Left: Accordion */}
          <div className="md:w-1/2 w-full">
            {faqsData.map((item, idx) => (
              <div
                key={idx}
                className="mb-4 overflow-hidden transition-all duration-500"
                data-aos={item.aos}
                data-aos-duration={item.duration}
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full text-left p-4 bg-white rounded-lg shadow hover:bg-gray-100 transition-all duration-300"
                >
                  <h3 className="font-semibold text-lg text-gray-800 flex justify-between items-center">
                    {item.question}
                    <span
                      className={`transition-transform ${
                        activeIndex === idx ? "rotate-180" : ""
                      }`}
                    >
                      <FaChevronDown />
                    </span>
                  </h3>
                </button>
                <div
                  ref={(el) => (contentRefs.current[idx] = el)}
                  style={{
                    maxHeight:
                      activeIndex === idx
                        ? contentRefs.current[idx]?.scrollHeight + "px"
                        : "0px",
                  }}
                  className="transition-all duration-500 ease-in-out overflow-hidden bg-white border-l-4 border-[#0F00AA] text-gray-700 rounded-b-lg shadow-inner px-4"
                >
                  <p className="py-3">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Image with Shine Hover Effect */}
          <div className="md:w-1/2 w-full group" data-aos="flip-left">
            <div className="shine-wrapper rounded-md overflow-hidden">
              <img
                src="/home/faqs.png"
                alt="FAQs Illustration"
                className="w-full max-w-md mx-auto rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faqs;

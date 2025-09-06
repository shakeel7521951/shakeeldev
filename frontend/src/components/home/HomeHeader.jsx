import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

const slides = [
  {
    title: "Welcome to",
    highlight: "Shakeel Dev",
    description:
      "I am a Full Stack Web Developer crafting scalable, user-friendly solutions with MERN, Next.js, and modern technologies.",
    image: "/home/header1.png",
  },
  {
    title: "Turning Ideas Into",
    highlight: "Digital Reality",
    description:
      "From clean UI to powerful backend, I build complete end-to-end solutions tailored to your business needs.",
    image: "/home/header1.png",
  },
  {
    title: "Your Vision,",
    highlight: "My Expertise",
    description:
      "I design, develop, and deploy impactful websites and applications that bring your vision to life seamlessly.",
    image: "/home/header1.png",
  },
];


const HomeHeader = () => {
  return (
    <div className="w-full h-[88vh] max-h-[550px] relative">
      <Swiper
        modules={[Autoplay, Pagination]} 
        loop
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet !bg-white/50 !w-3 !h-3 !mx-1",
          bulletActiveClass:
            "swiper-pagination-bullet-active !bg-white !w-6 !transition-all !duration-300",
        }}
        className="w-full h-full"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="w-full h-full bg-cover bg-center relative"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 flex items-center justify-center px-6">
                <div className="text-white text-center max-w-4xl px-4 transform transition-all duration-500 hover:scale-[1.01]">
                  <h2 className="text-2xl md:text-5xl font-bold mb-6 leading-tight">
                    {slide.title}{" "}
                    <span className="text-[#1E94AC]">
                      {slide.highlight}
                    </span>
                  </h2>
                  <p className="text-sx md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
                    {slide.description}
                  </p>
                  <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                    <Link to="/projects">
                      <button className="px-3 py-2 md:px-6 md:py-3 text-sx font-semibold rounded-full bg-[#1E94AC] text-white hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 transform focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 cursor-pointer">
                        View My Work
                      </button>
                    </Link>
                    <Link to="/contact">
                      <button className="px-3 py-2 md:px-6 md:py-3 text-sx font-semibold rounded-full bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 transform focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 cursor-pointer">
                        Contact Me
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeHeader;

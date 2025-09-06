import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

 const HomeServices = () => {
  const services = [
    {
      name: "Full Stack Development",
      tags: [
        "MERN Stack Applications",
        "Next.js Development",
        "REST & GraphQL APIs",
        "Authentication & Security",
        "Scalable Architectures",
        "Cloud Deployment (AWS, Vercel, Render, Netlify)",
      ],
    },
    {
      name: "Frontend Engineering",
      tags: [
        "React.js / Next.js",
        "Tailwind CSS / Bootstrap",
        "Responsive Web Design",
        "Performance Optimization",
        "State Management (Redux / RTK)",
        "Reusable UI Components",
      ],
    },
    {
      name: "Backend Engineering",
      tags: [
        "Node.js & Express.js",
        "MongoDB & Mongoose",
        "Authentication (JWT, OAuth, Bcrypt)",
        "Database Design",
        "API Integration",
        "Error Handling & Validation",
      ],
    },
    {
      name: "Deployment & DevOps",
      tags: [
        "Vercel / Netlify / Render",
        "AWS (EC2, S3, Lambda)",
        "Docker Basics",
        "CI/CD Setup",
        "Nginx & PM2",
        "Version Control (Git/GitHub)",
      ],
    },
    {
      name: "SEO & Optimization",
      tags: [
        "SEO Friendly Development",
        "On-Page Optimization",
        "Server-Side Rendering (SSR)",
        "Static Site Generation (SSG)",
        "Website Performance Tuning",
        "Core Web Vitals Improvement",
      ],
    },
    {
      name: "UI/UX & Design",
      tags: [
        "User-Centered Design",
        "Wireframing & Prototyping",
        "UI/UX for Web Apps",
        "Figma to Code",
        "Modern Web Interfaces",
        "Mobile-First Design",
      ],
    },
  ];

  const [selectedService, setSelectedService] = useState(services[0]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  // Refresh AOS on service change
  useEffect(() => {
    AOS.refresh();
  }, [selectedService]);

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  return (
    <div className="bg-white py-10 overflow-hidden">
      <h1
        className="text-3xl lg:text-5xl px-5 font-extrabold leading-tight text-start md:text-center text-black"
        data-aos="fade-down"
      >
        <span className="text-transparent bg-clip-text bg-[#100B68]">
          Services
        </span>{" "}
        Availabe
      </h1>
      <p className="text-start md:text-center flex mx-auto px-5 md:w-[50rem]">
        Shakeel Dev offers crypto solutions, targeted marketing, impactful
        design, custom development, and professional video editing to elevate
        your brand.
      </p>

      <div className="container flex flex-col md:flex-row gap-10 mx-auto rounded-3xl my-6 p-5">
        {/* Left Side - Service Menu */}
        <div
          className="w-full md:w-2/5 flex flex-col gap-4"
          data-aos="zoom-in-right"
        >
          {services.map((service, index) => (
            <h4
              key={index}
              className={`text-center px-10 py-2 rounded-3xl border border-[#0000001d] shadow cursor-pointer font-semibold text-xl
    bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-700
    ${
      service.name === selectedService.name
        ? "text-white bg-[linear-gradient(to_right,#060044,#0F00AA,#060044)]"
        : "text-black hover:text-white hover:bg-[linear-gradient(to_right,#060044,#0F00AA,#060044)]"
    }`}
              onClick={() => handleServiceClick(service)}
            >
              {service.name}
            </h4>
          ))}
        </div>

        {/* Right Side - Image + Tags */}
        <div
          className="w-full md:w-3/5 flex flex-col items-center justify-center"
          data-aos="zoom-in-left"
        >
          <img
            key={selectedService.name} // ← forces re-render
            src="./home/servicesImage.png"
            alt="Services section"
            loading="lazy"
            data-aos="flip-left"
          />

          {selectedService.tags && (
            <div className="mt-3 flex gap-3 flex-wrap justify-center">
              {selectedService.tags.map((tag, index) => (
                <h4
                  key={index}
                  className="text-black w-fit px-3 py-2 rounded-xl font-semibold"
                >
                  {tag}
                </h4>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeServices;

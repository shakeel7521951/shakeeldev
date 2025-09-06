import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { MdLocationOn, MdEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const socialIcons = [
  {
    icon: <FaFacebookF />,
    link: "https://www.facebook.com/profile.php?id=61578954271887",
    color: "#ffffff",
  },
  {
    icon: <FaInstagram />,
    link: "https://www.instagram.com/shakeel.devv",
    color: "#ffffff",
  },
  {
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/shakeel-dev",
    color: "#ffffff",
  },
];

const contactItems = [
  {
    icon: <BsTelephoneFill className="text-white text-base" />,
    text: "+92 326 7100227",
  },
  {
    icon: <MdEmail className="text-white text-base" />,
    text: "shakeeldev.tech@gmail.com",
  },
  {
    icon: <MdLocationOn className="text-white text-base" />,
    text: "Bahawalpur, Pakistan",
  },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-tr from-[#cbdbec] to-[#1E94AC] text-white py-12 px-4 md:px-24 w-full">
      <div className="flex flex-wrap justify-between w-full md:w-full">
        {/* Left Section - Personal Brand */}
        <div className="w-full sm:w-[30%] mb-6 sm:mb-0">
          <div className="flex items-center gap-2 mb-4">
            <Link to="/">
              <img
                src="./newlog.png"
                alt="Shakeel Dev Logo"
                className="w-32 object-contain"
              />
            </Link>
          </div>
          <p className="text-sm text-[#100B68] w-full md:w-[90%] leading-relaxed">
            Hi, I’m <span className="font-semibold">Shakeel</span>, a passionate
            developer helping businesses grow with modern web development,
            scalable solutions, and innovative digital strategies.
          </p>
          <div className="flex gap-4 mt-4">
            {socialIcons.map((item, index) => (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                className="bg-[#100B68] p-2 rounded-full hover:bg-[#463dee] transition-transform transform hover:scale-110"
                style={{ color: item.color }}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-wrap w-full md:w-[70%]">
          {/* Services Section */}
          <div className="w-full md:w-[31%] mb-6 md:mb-0">
            <div className="group relative inline-block mb-4">
              <h3 className="font-bold text-lg">Expertise</h3>
              <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-[#261ce6] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </div>
            <ul className="space-y-1 text-sm text-[#100B68]">
              {[
                { label: "Web Development", path: "/services" },
                { label: "Data Science", path: "/services" },
                { label: "Cloud Solutions", path: "/services" },
                { label: "Business Intelligence", path: "/services" },
                { label: "Tech Consulting", path: "/services" },
              ].map((item, idx) => (
                <li key={idx} className="font-medium group relative w-fit">
                  <Link to={item.path} className="cursor-pointer">
                    {item.label}
                    <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-[#261ce6] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Section */}
          <div className="w-full md:w-[31%] mb-6 md:mb-0">
            <div className="group relative inline-block mb-4">
              <h3 className="font-bold text-lg">Quick Links</h3>
              <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </div>
            <ul className="space-y-1 text-sm text-[#100B68]">
              {[
                { label: "About Me", path: "/about" },
                { label: "My Projects", path: "/projects" },
                { label: "Services", path: "/services" },
                { label: "Contact", path: "/contact" },
              ].map((item, idx) => (
                <li key={idx} className="font-medium group relative w-fit">
                  <Link to={item.path} className="cursor-pointer">
                    {item.label}
                    <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-[#261ce6] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="w-full md:w-[38%]">
            <div className="group relative inline-block mb-4">
              <h3 className="font-bold text-lg">Get In Touch</h3>
              <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </div>
            <ul className="space-y-2 text-sm text-[#100B68]">
              {contactItems.map((item, index) => (
                <li key={index} className="flex items-center gap-4 py-1">
                  <div className="bg-[#100B68] p-2 rounded-full hover:bg-[#463dee] transition-transform transform hover:scale-110">
                    {item.icon}
                  </div>
                  <span className="font-medium">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-[#100B68] text-xs font-medium mt-8 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} – All Rights Reserved –{" "}
        <span className="font-semibold">Shakeel Dev</span>
      </div>
    </footer>
  );
}

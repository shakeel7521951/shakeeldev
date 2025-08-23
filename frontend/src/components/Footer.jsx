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
    link: "https://www.facebook.com/profile.php?id=61565400934738",
    color: "#ffffff",
  },
  {
    icon: <FaTwitter />,
    link: "", // Add Twitter link if needed
    color: "#ffffff",
  },
  {
    icon: <FaInstagram />,
    link: "https://www.instagram.com/codesthinker_offical",
    color: "#ffffff",
  },
  {
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/codes-thinker",
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
    text: "Bahawalpur Pakistan",
  },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-tr from-[#cbdbec] to-[#1E94AC] text-white py-10 px-4 md:px-24 w-full">
      <div className="flex flex-wrap justify-between w-full md:w-full">
        {/* Left Section */}
        <div className="w-full sm:w-[30%]">
          <div className="text-xl font-bold mb-2 flex items-center gap-2">
            <div className="flex-shrink-0 w-70  flex items-center">
              <Link to="/">
                <img
                  src="./newlog.png"
                  alt="Shakeel Dev"
                  className="w-full h-full object-cover bg-center "
                />
              </Link>
            </div>
          </div>
          <p className="text-sm text-[#100B68] w-full md:w-[90%]">
            We offer a range of cutting-edge web development and software
            solutions tailored to meet client needs. Our experienced team
            delivers collaboratively and efficiently.
          </p>
          <div className="flex gap-4 mt-4">
            {socialIcons.map((item, index) => (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                className="bg-[#100B68] p-2 rounded-full hover:text-white transition-transform transform hover:scale-110"
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
          <div className="w-full md:w-[31%]">
            <div className="group relative inline-block mb-4">
              <h3 className="font-bold text-lg">Services</h3>
              <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-[#261ce6] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </div>
            <ul className="space-y-1 text-sm text-[#100B68]">
              {[
                { label: "Business Intelligence", path: "/services" },
                { label: "Virtual Workstation", path: "/services" },
                { label: "Network Services", path: "/services" },
                { label: "Data Science", path: "/services" },
                { label: "IT Strategy", path: "/services" },
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
          <div className="w-full md:w-[31%]">
            <div className="group relative inline-block mb-4">
              <h3 className="font-bold text-lg">Company</h3>
              <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </div>
            <ul className="space-y-1 text-sm text-[#100B68]">
              {[
                { label: "About Me", path: "/about" },
                { label: "My Projects", path: "/projects" },
                { label: "IT Solutions", path: "/services" },
                // { label: "Team Member", path: "/team" },
                { label: "Contact Me", path: "/contact" },
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
              <h3 className="font-bold text-lg">Contact Info</h3>
              <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </div>
            <ul className="space-y-2 text-sm text-[#100B68]">
              {contactItems.map((item, index) => (
                <li key={index} className="flex items-center gap-4 py-1">
                  <div className="bg-[#100B68] p-2 rounded-full hover:text-white transition-transform transform hover:scale-110">
                    {item.icon}
                  </div>
                  <span className="font-medium">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Email Input */}
      <div className="flex mt-8 w-full md:w-[30%] justify-end ms-auto rounded-xl">
        <input
          type="email"
          placeholder="Your Mail"
          className="w-full px-3 py-2 pe-10 rounded-l bg-white text-black text-sm outline-none"
        />
        <button className="bg-[#100B68] hover:bg-[#463dee] px-4 rounded-r text-sm text-white cursor-pointer">
          Submit
        </button>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-[#100B68] text-xs font-medium mt-8 border-t border-gray-700 pt-4">
        © 2024 – All Rights Reserved – Shakeel Dev
      </div>
    </footer>
  );
}

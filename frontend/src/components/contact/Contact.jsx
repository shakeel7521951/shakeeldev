import { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { IoSendSharp } from "react-icons/io5";
import { MdLocationOn } from "react-icons/md";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Optionally reset form
    // setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <FaPhoneAlt className="w-5 h-5 text-white" />,
      text: "+44 7470 103120",
    },
    {
      icon: <FaEnvelope className="w-5 h-5 text-white" />,
      text: "info@codesthinker.com",
    },
    {
      icon: <MdLocationOn className="text-white text-base" />,
      text: "Bartle House 9 Oxford Court, Manchester M23WQ United Kingdom(Regional Office)",
    },
    {
      icon: <MdLocationOn className="text-white text-base" />,
      text: "Hassan Manzil Basement Goheer Town Bahawalpur(Global Delivery Center)",
    },
  ];

  const socialIcons = [
    {
      icon: <FaFacebookF />,
      link: "https://www.facebook.com/profile.php?id=61565400934738",
      color: "#ffffff",
    },
    {
      icon: <FaTwitter />,
      link: "", // You can remove this if not needed
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

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-7xl font-bold mb-4">
            Get In <span className="  text-[#0F00AA]">Touch</span>
          </h1>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:mt-20">
          <div className="space-y-8">
            <h1 className="text-2xl sm:text-4xl mb-6 font-bold">
              Ready To Turn Your Vision Into Reality?
            </h1>
            <p className="text-md sm:text-md">
              Want to blast your business off like a rocket? Tojo Global's got a
              secret weapon for you: an amazing custom Marketing, Management,
              Design, Development & Crypto listing plan which will turn heads
              and grow your business faster than ever.
            </p>

            {contactInfo.map((item, idx) => (
              <div key={idx} className="flex items-center space-x-4">
                <div
                  className="p-5 bg-[linear-gradient(to_right,#060044,#0F00AA,#060044)] bg-[length:200%_100%] transform transition duration-300 hover:scale-105"
                  style={{
                    clipPath: "polygon(11% 28%, 100% 5%, 89% 91%, 0% 100%)",
                  }}
                >
                  {item.icon}
                </div>
                <span className="font-semibold">{item.text}</span>
              </div>
            ))}

            <div className="flex gap-4 mt-6">
              {socialIcons.map((item, idx) => (
                <a
                  key={idx}
                  href={item.link}
                  target="_blank"
                  className="group relative inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-[#c508ff] to-[#18c9ff] p-[2px] transition-transform duration-300 hover:scale-110"
                >
                  <div className="w-full h-full flex items-center justify-center bg-[#060145] rounded-full group-hover:bg-white transition-colors duration-300">
                    <div className="text-white group-hover:text-[#060145] transition-colors duration-300">
                      {item.icon}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className=" p-6 rounded-4xl shadow-[linear-gradient(45deg,#060145,#BE10FF)]"
          >
            <h2 className="text-2xl text-center font-bold mb-6">
              Book a Free Consultation
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block font-semibold mb-2" htmlFor="name">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 placeholder-black"
                  placeholder="Full Name"
                />
              </div>

              <div>
                <label className="block font-semibold mb-2" htmlFor="email">
                  Work Email *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 placeholder-black"
                  placeholder="Working Email"
                />
              </div>

              <div>
                <label className="block font-semibold mb-2" htmlFor="subject">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 placeholder-black"
                  placeholder="Enter your Subject "
                />
              </div>

              <div>
                <label className="block font-semibold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 placeholder-black"
                  placeholder="Describe your message here"
                ></textarea>
              </div>

              <button
                type="submit"
                className="px-6 py-3 text-white  border border-[#f3f7f9] rounded-full text-lg font-semibold 
                shadow-lg bg-[linear-gradient(to_right,#060044,#0F00AA,#060044)] bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-700 flex items-center gap-3 cursor-pointer"
              >
                SUBMIT <IoSendSharp className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

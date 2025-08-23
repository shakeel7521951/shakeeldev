import { FaUser, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className="px-4 py-10 bg-gray-50 overflow-hidden">
      <div className="text-center mb-10">
        <p className="text-sm text-gray-600">Let's Talk</p>
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800">
          <span className="text-[#0F00AA]">Let's Collaborate</span> and Innovate
        </h1>
      </div>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10">
        {/* Left Section */}
        <div className="md:w-1/2 flex flex-col gap-8">
          {[
            {
              img: "/home/contactIcon1.png",
              title: "Discuss Your Project",
              desc: "Invite clients to share their ideas and requirements, fostering an open dialogue about potential collaborations.",
              aos: "fade-right",
              duration: 1000,
            },
            {
              img: "/home/contactIcon2.png",
              title: "Get a Free Consultation",
              desc: "Offer a no-obligation consultation to understand the client's needs and propose tailored solutions.",
              aos: "fade-right",
              duration: 2000,
            },
            {
              img: "/home/contactIcon3.png",
              title: "Reach Us Anytime",
              desc: "Provide multiple contact channels, ensuring clients can connect with you at their convenience.",
              aos: "fade-right",
              duration: 3000,
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex gap-5 items-start mt-4"
              data-aos={item.aos}
              data-aos-duration={item.duration}
            >
              <img
                src={item.img}
                alt="contact icon"
                className="w-12 shadow-2xl rounded-ful"
              />
              <div>
                <h3 className="font-semibold text-xl text-gray-800">
                  {item.title}
                </h3>
                <p className=" text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Section */}
        <div
          className="md:w-2/3  p-6 rounded-lg shadow-lg"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <h2 className="text-xl font-bold text-center text-black mb-6">
            CONTACT ME
          </h2>
          <form className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center  border border-black text-black px-3 py-2 rounded w-full">
                <FaUser className="me-2" />
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                  className="w-full bg-transparent outline-none text-black placeholder-black"
                />
              </div>
              <div className="flex items-center border border-black text-black px-3 py-2 rounded w-full">
                <FaPhoneAlt className="me-2" />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  required
                  className="w-full bg-transparent outline-none text-black placeholder-black"
                />
              </div>
            </div>
            <div className="flex items-center border border-black text-black px-3 py-2 rounded w-full">
              <MdEmail className="me-2" />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full bg-transparent outline-none text-black placeholder-black"
              />
            </div>
            <div
              className="flex  items-start  border
             border-black text-black px-3 py-2 rounded w-full"
            >
              <textarea
                name="message"
                placeholder="Message"
                rows={4}
                required
                className="w-full bg-transparent outline-none text-black placeholder-black resize-none"
              />
            </div>
            <button
              type="submit"
              className="text-white px-8 py-2 border border-[#f3f7f9] rounded-full text-lg font-semibold 
                  shadow-lg bg-[linear-gradient(to_right,#060044,#0F00AA,#060044)] bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-700 cursor-pointer w-fit ms-auto"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

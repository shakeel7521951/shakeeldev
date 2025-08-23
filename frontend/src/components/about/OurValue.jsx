import React from "react";

const OurValue = () => {
  return (
    <div className="container mx-auto px-5 py-10 flex flex-col-reverse md:flex-row items-center gap-10">
      
      {/* Left Content */}
      <div className="w-full md:w-1/2 flex flex-col items-start">
        <h1 className="text-3xl md:text-5xl font-bold">
          OUR{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#18c8ff] to-[#c608ff]">
            VALUE
          </span>
        </h1>
        
        {/* Gradient Line */}
        <div className="w-24 h-1 bg-gradient-to-r from-[#18c8ff] to-[#c608ff] rounded-full my-4" />

        <p className="text-xl md:text-3xl font-semibold mb-8 w-full md:w-3/4">
          A melting pot for the best ideas
        </p>

        {/* Icons and Text */}
        <div className="flex flex-col sm:flex-row gap-10">
          {/* Icons */}
          <div className="flex flex-row sm:flex-col gap-8">
            {["OurValueServicesIcon01.svg", "OurValueServicesIcon02.svg", "OurValueServicesIcon03.svg"].map((icon, index) => (
              <div key={index} className="bg-[#060044] p-3 rounded-lg border-2 border-white flex items-center justify-center">
                <img src={`./home/${icon}`} alt={`OurValueServicesIcon0${index + 1}`} className="w-14" loading="lazy" />
              </div>
            ))}
          </div>

          {/* Titles and Descriptions */}
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="text-xl md:text-2xl font-bold">Integrity</h2>
              <p className="text-base md:text-lg">
                We hold ourselves to a strong ethical and moral code.
              </p>
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold">Trust</h2>
              <p className="text-base md:text-lg ">
                We are dependable, loyal, and hardworking to achieve the same goal.
              </p>
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold">Excellence</h2>
              <p className="text-base md:text-lg">
                We consistently strive to deliver high-quality work without room for error.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="./about/Home-Page-Our-Value-Services.png"
          alt="Home Page Our Value Services"
          className="w-full max-w-md md:max-w-lg"
          loading="lazy"
        />
      </div>

    </div>
  );
};

export default OurValue;

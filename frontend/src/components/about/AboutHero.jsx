
const AboutHero = () => {
    const aboutFeatures = [
      { text: "Industry Expert Staff" },
      { text: "Client-Centric Focus" },
      { text: "Partner rather than Vendor" },
      { text: "Solutions Geared to Improve Productivity" },
      { text: "Collaborative Approach Throughout the Process" },
    ];
  
    return (
      <div className="bg-gray-100 pt-30 pb-10 px-5 text-black">
        <div className="container mx-auto flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2">
            <img
              src="./about/aboutUsHero.png"
              alt="About Code's Thinker"
              loading="lazy"
              className="md:min-h-[450px]"
            />
          </div>
          <div className="w-full md:w-1/2 mt-2">
            <h1 className="text-3xl md:text-5xl font-bold">
              About{" "}
              <span className="text-transparent bg-clip-text bg-[linear-gradient(241deg,#18c8ff_14.59%,#c608ff_59.76%)]">
                Code's{" "}
              </span>
              Thinker
            </h1>
            <p className="py-3 text-black">
              We redefine excellence in business solution at Code's Thinker. Our
              unique services in marketing, branding, management, design,
              development, and listing enables us to support industries & companies in the
              blockchain, fintech, edtech, cryptocurrency, small company, and B2B
              sectors. Discover success, efficiency, and innovation with TOJO
              Global—where your goals become our mission. Welcome to a new era of
              business transformation.
            </p>
            <div className="flex flex-col gap-3 mt-4">
              {aboutFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-[#091E60] rounded-full w-fit shadow-lg px-4 pe-6 py-1 flex items-center"
                >
                  <span className="w-[15px] h-[15px] mr-4 rounded-full bg-[linear-gradient(142deg,#18c8ff,#c608ff)]"></span>
                  <p className="text-md text-white">{feature.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default AboutHero;
  

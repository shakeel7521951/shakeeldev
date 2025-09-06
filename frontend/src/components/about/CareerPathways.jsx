import submit from "/about/submit.jpg";
import expert from "/about/Experts.jpg";
import personal from "/about/personal.jpg";
import seamless from "/about/seamless.jpg";

export default function CareerPathways() {
  const steps = [
    {
      image: submit,
      title: "Share Your Project Idea",
      desc: "Tell me about your vision, requirements, and goals so I can understand your needs clearly.",
    },
    {
      image: expert,
      title: "Project Analysis",
      desc: "I review your idea in detail, analyze feasibility, and propose the best technical solutions.",
    },
    {
      image: personal,
      title: "Collaborative Communication",
      desc: "We’ll stay in touch throughout the process to ensure your expectations are always met.",
    },
    {
      image: seamless,
      title: "Budget & Timeline",
      desc: "We finalize a fair budget and timeline that ensures high quality and on-time delivery.",
    },
  ];

  return (
    <section className="p-6 sm:p-12" id="career">
      {/* Heading */}
      <h1 className="text-center text-3xl sm:text-5xl font-bold mb-12 text-[#100B68]">
        My Work <span className="text-[#1E94AC]">Process</span>
      </h1>

      {/* Steps */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {steps.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center group"
          >
            {/* Circle Image */}
            <div className="relative mx-auto overflow-hidden border-4 border-[#1E94AC] h-40 w-40 rounded-full shadow-md hover:shadow-xl transition-all duration-500 group-hover:border-[#100B68]">
              <img
                src={item.image}
                alt={item.title}
                className="scale-110 transition-all ease-in-out duration-500 group-hover:scale-95 h-full w-full rounded-full object-cover"
              />
              {/* Step Number Badge */}
              <span className="absolute -top-3 -right-3 bg-[#100B68] text-white text-sm font-bold h-8 w-8 flex items-center justify-center rounded-full shadow">
                {index + 1}
              </span>
            </div>

            {/* Title & Description */}
            <h2 className="mt-4 font-semibold text-lg sm:text-xl text-[#100B68]">
              {item.title}
            </h2>
            <p className="mt-2 text-sm text-gray-600 max-w-[220px]">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const stats = [
  { value: 4, suffix: "+", label: "Years of Experience", aos: "fade-up" },
  { value: 50, suffix: "+", label: "Satisfied Clients", aos: "fade-down" },
  { value: 17, suffix: "+", label: "Countries We Operate", aos: "fade-up" },
  { value: 200, prefix: "$", suffix: "K+", label: "Managed Marketing Fund", aos: "fade-down" },
  { value: 2.9, prefix: "$", suffix: "M+", label: "Clients Gain", aos: "fade-up" },
];

const Progress = () => {
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts(prevCounts =>
        prevCounts.map((count, index) => {
          const target = stats[index].value;
          const increment = target / 50;
          if (count < target) {
            const newCount = count + increment;
            return newCount > target ? target : newCount;
          }
          return target;
        })
      );
    }, 30);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="bg-gray-100 text-center py-16 px-4 overflow-hidden">
      <h1 data-aos="fade-left" className="text-3xl md:text-5xl font-bold mb-6">
        My <span className="text-[#100B68]">Progress</span>
      </h1>
      <p data-aos="fade-right" className="max-w-3xl mx-auto text-gray-700 text-lg mb-12">
      I help connect your business directly with your target audience, so you don’t have to waste time searching for clients they’ll come straight to you.
      </p>

      <div className="flex flex-wrap justify-center gap-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className="group w-52 h-44 flex flex-col justify-center items-center bg-[linear-gradient(45deg,#060043,#4764D6)] border-2 border-white rounded-2xl text-white shadow-md transform transition-transform duration-300 delay-0 group-hover:delay-300 hover:scale-105"
            data-aos={item.aos}
            data-aos-delay={index * 300} // staggered AOS delay
          >
            <h1 className="text-3xl md:text-4xl font-bold">
              {item.prefix || ""}
              {item.value % 1 === 0
                ? Math.floor(counts[index])
                : counts[index].toFixed(1)}
              {item.suffix || ""}
            </h1>
            <p className="text-sm mt-2 px-2">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Progress;

import React from "react";

const CareerJobs = () => {
  const jobs = [
    {
      title: "Junior Content Writer",
      department: "Content",
      salary: "৳4000–৳8000",
      picture: "./career/2.png",
    },
    {
      title: "Senior Moderator",
      department: "Management",
      salary: "৳6000–৳10000",
      picture: "./career/2.png",
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      salary: "৳10,000–৳20,000",
      picture: "./career/3.png",
    },
  ];
  return (
    <section className=" py-12">
      <div className="max-w-6xl mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {jobs.map((job, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-b from-[#0D1A6A] to-[#192e9e] rounded-2xl p-6 shadow-xl text-white relative border border-purple-600 hover:scale-[1.02] transition-all min-h-[300px] flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-[#18C8FF] rounded-full overflow-hidden w-16 h-16">
                  <img
                    src={job.picture}
                    alt={job.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="absolute top-10 right-4 bg-blue-400 text-xs px-3 py-1 rounded-full font-semibold">
                  {job.department}
                </span>
              </div>

              <h3 className="text-2xl md:text-4xl font-bold text-[#1AC9FF] mb-2 w-[90%]">
                {job.title}
              </h3>
              <p className="text-lg text-white mt-3">Remote · Full-Time</p>
              <p className="text-xl text-white mt-3">
                {job.salary}/<span className="text-xl">Month</span>
              </p>
            </div>

            <button className="w-full shadow-lg bg-[linear-gradient(to_right,#18c8ff,#c608ff,#18c8ff)] bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-700 text-white py-2 rounded-full font-semibold mt-5 cursor-pointer">
              Apply
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CareerJobs;

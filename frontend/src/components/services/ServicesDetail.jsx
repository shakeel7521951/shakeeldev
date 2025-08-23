import { useParams, useNavigate } from "react-router-dom";
import services from "./servicesData";

const ServiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = services.find((s) => s.id === id);

  if (!service) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-black">Service not found!</h2>
        <button
          onClick={() => navigate("/services")}
          className="mt-4 px-4 py-2 text-black rounded hover:cursor-pointer"
        >
          Back to Services
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 text-white bg-white">
      <button
        onClick={() => navigate(-1)}
        className="mb-8 text-black font-semibold hover:underline hover:cursor-pointer"
      >
        ← Back to Services
      </button>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="shine-wrapper">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-72 md:h-96 object-cover rounded-xl shadow-lg"
          />
        </div>

        <div>
          <h1 className="text-2xl md:text-4xl font-bold text-black mb-4">
            {service.title}
          </h1>
          <p className="text-md md:text-lg text-gray-800 leading-relaxed">
            {service.long_description}
          </p>
        </div>
      </div>

      {service.details && (
        <div className="mt-16">
          <h2 className="text-xl md:text-2xl font-semibold text-black mb-4">
            Why Choose Us for {service.title}?
          </h2>
          <p className="text-gray-800 leading-relaxed mb-6">
            We offer expert-level {service.title.toLowerCase()} services with
            results that speak for themselves.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            {service.details.map((detail, index) => (
              <div
                key={index}
                className="p-5 rounded-xl bg-[linear-gradient(45deg,#060145,#1862A3)] shadow-lg hover:shadow-[0_10px_25px_rgba(24,200,255,0.3)] transition-all cursor-pointer transform hover:-translate-y-2 duration-300"
              >
                <h3 className="text-lg font-bold text-white mb-2">{detail}</h3>
                <p className="text-gray-100 text-sm">
                  Our {detail.toLowerCase()} service is designed to exceed
                  expectations.
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Shine animation CSS */}
      <style>{`
        .shine-wrapper {
          position: relative;
          overflow: hidden;
        }
        .shine-wrapper img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .shine-wrapper::after {
          content: "";
          position: absolute;
          top: 0;
          left: -75%;
          width: 50%;
          height: 100%;
          background: linear-gradient(
            120deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.4) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          transform: skewX(-25deg);
        }
        .shine-wrapper:hover::after {
          animation: shine-move 1s ease-in-out forwards;
        }
        @keyframes shine-move {
          100% {
            left: 125%;
          }
        }
      `}</style>
    </div>
  );
};

export default ServiceDetail;

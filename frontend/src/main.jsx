import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaWhatsapp } from "react-icons/fa";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <div className="max-w-[2100px] mx-auto">
        <App />

        {/* WhatsApp Floating Button */}
        <a
          href="https://wa.me/+923267100227" // Replace with your WhatsApp number
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-5 right-5 z-50 group"
        >
          <div className="relative animate-float">
            {/* Tooltip */}
            <div className="absolute bottom-[65px] right-1/2 translate-x-1/2">
              <span className="inline-flex items-center bg-black text-white text-sm font-medium rounded-full py-2 px-4 shadow-lg transform -translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                Chat with us
                <span className="absolute -bottom-1 right-1/2 w-3 h-3 bg-black transform rotate-45 translate-x-1/2"></span>
              </span>
            </div>

            {/* Glow ring */}
            <div className="absolute -inset-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-50 group-hover:animate-ping transition-opacity duration-700"></div>

            {/* Main WhatsApp button */}
            <div className="relative bg-gradient-to-br from-green-500 to-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-green-500/40">
              <FaWhatsapp
                size={20}
                className="transition-transform group-hover:scale-125"
              />

              {/* Notification badge */}
              <span className="absolute top-0 right-0 flex h-5 w-5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                <span className="relative inline-flex items-center justify-center rounded-full h-5 w-5 bg-red-600 text-xs font-bold text-white">
                  1
                </span>
              </span>
            </div>
          </div>

          {/* Floating animation */}
          <style jsx="true">{`
            @keyframes float {
              0%,
              100% {
                transform: translateY(0);
              }
              50% {
                transform: translateY(-6px);
              }
            }
            .animate-float {
              animation: float 3s ease-in-out infinite;
            }
          `}</style>
        </a>
      </div>
      <ToastContainer />
    </Provider>
  </StrictMode>
);

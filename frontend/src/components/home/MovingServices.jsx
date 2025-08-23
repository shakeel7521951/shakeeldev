import { FaBootstrap, FaCode, FaFigma, FaPhp, FaReact, FaSearch, FaWordpress } from "react-icons/fa";
// import '../../../../Codes-Thinker/src/App.css';
// import { FaBootstrap, FaCode, FaFigma, FaPhp, FaReact, FaWordpress } from "react-icons/fa";
import { MdJavascript } from "react-icons/md";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiDjango } from "react-icons/di";

export default function MovingServices() {
  return (
    <div className="relative w-full mt-14 sm:mt-0 h-[600px] flex items-center justify-center overflow-hidden">
      {/* Central Glowing Sun with text */}
      <div className="sun z-10 flex items-center justify-center">
        <span className="text-black font-bold text-xs">Thinker</span>
      </div>

      {/* Visible on all screen sizes */}
      <Orbit radius="50px" duration="20s" icon={<FaCode className="text-black" />} label="Web" />
      <Orbit radius="80px" duration="25s" icon={<RiTailwindCssFill className="text-black" />} label="App" />
      <Orbit radius="100px" duration="30s" icon={<MdJavascript className="text-black" />} label="Marketing" />
      <Orbit radius="140px" duration="40s" icon={<FaBootstrap className="text-black" />} label="SEO" />

      {/* Hidden on mobile (sm), visible from md screens up */}
      <Orbit radius="120px" duration="35s" icon={<FaReact className="text-black" />} label="React"  />
      <Orbit radius="160px" duration="45s" icon={<FaWordpress className="text-black" />} label="WordPress"  />
      <Orbit radius="180px" duration="50s" icon={<DiDjango className="text-black" />} label="Django" hideOnMobile />
      <Orbit radius="200px" duration="55s" icon={<FaPhp className="text-black" />} label="PHP" hideOnMobile />
      <Orbit radius="220px" duration="60s" icon={<FaFigma className="text-black" />} label="Figma" hideOnMobile />
    </div>
  );
}

function Orbit({ radius, duration, icon, label, hideOnMobile = false }) {
  return (
    <div
      className={`orbit-ring absolute rounded-full border border-gray-500 opacity-80 ${hideOnMobile ? 'hidden sm:block' : ''}`}
      style={{
        width: `calc(2 * ${radius})`,
        height: `calc(2 * ${radius})`,
        animation: `orbitAnimation ${duration} linear infinite`,
      }}
    >
      <div 
        className="orbit-object absolute top-0 left-1/2 transform -translate-x-1/2"
        style={{
          width: radius,
          height: radius,
        }}
      >
        <div 
          className="orbit-content rounded-full shadow-lg flex flex-col items-center justify-center"
          style={{
            width: '30px',
            height: '30px',
          }}
        >
          <div className="orbit-icon text-lg">
            {icon}
          </div>
          <span className="orbit-label text-[8px] font-bold mt-1 hidden md:block">
            {label}
          </span>
        </div>
      </div>
    </div>
  );
}
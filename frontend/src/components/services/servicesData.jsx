import {
  FaCode,
  FaLaptop,
  FaPaintBrush,
  FaChartLine,
  FaCloudUploadAlt,
  FaCogs,
} from "react-icons/fa";

// services data.....
const services = [
  {
    id: "1",
    title: "Website Development",
    description:
      "Custom, responsive websites designed to meet business needs with excellent performance and user experience.",
    long_description:
      "I specialize in building fast, responsive, and SEO-friendly websites tailored to each client’s brand. From simple landing pages to complex platforms, I ensure a professional design, clean code, secure architecture, and optimized performance to help businesses thrive online.",
    image: "/services/website.jpg",
    details: [
      "Responsive design",
      "SEO optimized",
      "Fast performance",
      "Custom functionality",
      "Secure architecture",
    ],
  },
  {
    id: "2",
    title: "Responsive Website Design",
    description:
      "Modern, mobile-friendly websites that look great and work smoothly on any screen size or device.",
    long_description:
      "I create responsive website designs that deliver a consistent and engaging user experience across desktops, tablets, and mobiles. With a mobile-first approach, intuitive layouts, and performance-focused development, I ensure every site is easy to use, visually appealing, and optimized for growth.",
    image: "/services/web.jpg",
    details: [
      "Mobile-first approach",
      "Cross-browser compatibility",
      "Fast loading speed",
      "SEO-friendly design",
      "User-centered UI/UX",
    ],
  },
  {
    id: "3",
    title: "API Development & Integration",
    description:
      "Build and integrate secure, scalable APIs to connect your applications seamlessly.",
    long_description:
      "I design and develop RESTful APIs and integrate third-party services to make applications more dynamic and powerful. From authentication systems to payment gateways and cloud services, I ensure reliable and secure connections that enhance your platform’s functionality.",
    image: "/services/codecalling.jpg",
    details: [
      "RESTful API design",
      "Third-party integrations",
      "Authentication & security",
      "Scalable architecture",
      "Real-time data handling",
    ],
  },
  {
    id: "4",
    title: "Figma to Code",
    description:
      "Turn your Figma or design files into clean, responsive, and production-ready code.",
    long_description:
      "I transform your UI/UX designs into pixel-perfect, production-ready code using React, Next.js, and modern frameworks. With attention to detail, I ensure the final product matches the design precisely, while keeping it fast, maintainable, and scalable.",
    image: "/services/uiux.jpg",
    details: [
      "Pixel-perfect implementation",
      "Responsive layouts",
      "Reusable components",
      "Clean, maintainable code",
      "Cross-browser compatibility",
    ],
  },
  {
    id: "5",
    title: "Website Hosting & Deployment",
    description:
      "Reliable, secure, and fast hosting with expert deployment for smooth project launches.",
    long_description:
      "Along with development, I provide dependable hosting and deployment solutions to keep your websites live and secure. With SSL certificates, backups, and optimized servers, I ensure smooth deployments and minimal downtime so your business stays available to customers anytime.",
    image: "/services/websitehosting.jpg",
    details: [
      "High uptime",
      "SSL certificates",
      "Fast servers",
      "24/7 support",
      "Backup & recovery",
    ],
  },
];

export default services;

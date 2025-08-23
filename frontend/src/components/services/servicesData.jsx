import {
  FaProjectDiagram,
  FaSearch,
  FaUsers,
  FaPenNib,
  FaBullseye,
  FaCertificate,
  FaMobileAlt,
  FaCode,
  FaShieldAlt,
  FaPaintBrush,
  FaLaptop,
  FaInstagram,
  FaVideo,
  FaVolumeUp,
  FaCloudUploadAlt,
  FaGamepad,
  FaCogs,
  FaGlobe,
  FaWordpress,
  FaNetworkWired,
  FaBrain,
  FaLink,
  FaBolt,
  FaChartLine,
  FaPhoneAlt,
} from "react-icons/fa";

// services data.....
const services = [
  {
    id: "1",
    title: "Website Development",
    description:
      "Custom, responsive websites designed to meet your business needs and provide an excellent user experience.",
    long_description:
      "We specialize in building fast, responsive, and SEO-friendly websites tailored to your brand. From simple landing pages to complex web platforms, our team ensures top-notch user experience, performance, and security using the latest technologies and industry best practices to help your business thrive online.",
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
          "Modern, mobile-friendly websites that adapt seamlessly to any screen size and device.",
     long_description:
       "I create responsive website designs that provide a consistent and engaging user experience across desktops, tablets, and mobile devices. Our focus is on clean layouts, intuitive navigation, and performance optimization, ensuring your website not only looks stunning but also functions smoothly. With a mobile-first approach, we help businesses reach wider audiences effectively.",
     image: "/services/web.jpg",
     details: [
        "Mobile-first approach",
    "Cross-browser compatibility",
    "Fast loading speed",
    "SEO-friendly design",
    "User-centered UI/UX",
     ],
   },
  // {
  //   id: "3",
  //   title: "DevOps & Cloud",
  //   description:
  //     "Automate deployments, improve scalability, and reduce downtime with our DevOps and cloud solutions.",
  //   long_description:
  //     "We streamline your development and deployment processes using DevOps best practices and cloud infrastructure such as AWS, Azure, and GCP. From CI/CD pipelines to containerization and monitoring, we help your business scale securely, efficiently, and reliably while reducing operational risks and downtime.",
  //   image: "/services/devops&clouds.jpg",
  //   details: [
  //     "CI/CD pipelines",
  //     "Cloud architecture",
  //     "Server automation",
  //     "Monitoring & alerts",
  //     "Infrastructure as code",
  //   ],
  // },
  // {
  //   id: "4",
  //   title: "Machine Learning",
  //   description:
  //     "Leverage AI and machine learning to automate processes, analyze data, and improve decision-making.",
  //   long_description:
  //     "We design and implement machine learning models that empower your business with data-driven insights and automation. From predictive analytics to image recognition and NLP, our solutions are tailored to solve real-world problems using the latest AI technologies and frameworks for better efficiency and performance.",
  //   image: "/services/machinelearning.jpg",
  //   details: [
  //     "Data preprocessing",
  //     "Model training",
  //     "Custom ML solutions",
  //     "Real-time analytics",
  //     "AI integration",
  //   ],
  // },
  // {
  //   id: "5",
  //   title: "Blockchain",
  //   description:
  //     "Secure and transparent blockchain solutions for smart contracts, decentralized apps, and more.",
  //   long_description:
  //     "We offer blockchain development services to build secure, decentralized applications and smart contracts. Whether you need a custom blockchain solution, NFT platform, or crypto wallet, our team delivers scalable, transparent, and tamper-proof systems using Ethereum, Solana, and other top blockchain technologies.",
  //   image: "/services/blockchain.jpg",
  //   details: [
  //     "Smart contracts",
  //     "App development",
  //     "NFT integration",
  //     "Wallet setup",
  //     "Blockchain consulting",
  //   ],
  // },
  {
    id: "6",
    title: "Website Hosting",
    description:
      "Reliable and secure web hosting services with high uptime and technical support to keep your site running smoothly.",
    long_description:
      "We provide dependable web hosting solutions with fast servers, regular backups, SSL security, and expert support. Whether shared, VPS, or cloud hosting, we ensure your website stays online and performs at its best.",
    image: "/services/websitehosting.jpg",
    details: [
      "High uptime",
      "SSL certificates",
      "Fast servers",
      "24/7 support",
      "Backup & recovery",
    ],
  },
  // {
  //   id: "7",
  //   title: "WordPress Development",
  //   description:
  //     "Custom WordPress websites with modern themes, powerful plugins, and SEO optimization.",
  //   long_description:
  //     "Our WordPress development services include building custom themes, integrating powerful plugins, and optimizing performance for speed and SEO. Whether it's a blog, portfolio, or e-commerce site, we ensure your website is easy to manage, mobile-friendly, and built for success.",
  //   image: "/services/wordpressdevelopment.jpg",
  //   details: [
  //     "Custom themes",
  //     "Plugin integration",
  //     "E-commerce setup",
  //     "SEO tools",
  //     "Performance optimization",
  //   ],
  // },
  // {
  //   id: "8",
  //   title: "SEO Optimization",
  //   description:
  //     "Improve your website’s ranking and visibility with proven SEO techniques and strategies.",
  //   long_description:
  //     "We help your website rank higher on search engines by implementing technical SEO, keyword research, content optimization, and link-building strategies. Our goal is to increase your organic traffic, improve your online presence, and help your business get discovered by the right audience.",
  //   image: "/services/seo.jpg",
  //   details: [
  //     "Keyword research",
  //     "On-page SEO",
  //     "Backlink building",
  //     "Technical SEO",
  //     "Analytics reporting",
  //   ],
  // },
  // {
  //   id: "9",
  //   title: "UI/UX",
  //   description:
  //     "Design interfaces that are beautiful, user-friendly, and focused on conversion and engagement.",
  //   long_description:
  //     "We create visually appealing and intuitive UI/UX designs that enhance user satisfaction and engagement. Our process includes user research, wireframing, prototyping, and testing to ensure your digital product provides a seamless and enjoyable user experience across all devices.",
  //   image: "/services/uiux.jpg",
  //   details: [
  //     "User research",
  //     "Wireframing",
  //     "Prototyping",
  //     "Responsive design",
  //     "User testing",
  //   ],
  // },
  // {
  //   id: "10",
  //   title: "Graphic Designing",
  //   description:
  //     "Eye-catching graphics that represent your brand identity and convey your message effectively.",
  //   long_description:
  //     "Our graphic design services include logos, banners, social media creatives, brochures, and more. We combine creativity with strategy to deliver visually striking designs that align with your brand and captivate your audience across digital and print platforms.",
  //   image: "/services/graphic.jpg",
  //   details: [
  //     "Logo design",
  //     "Brand identity",
  //     "Marketing materials",
  //     "Social media graphics",
  //     "Print-ready designs",
  //   ],
  // },
  // {
  //   id: "11",
  //   title: "Video Editing",
  //   description:
  //     "Professional video editing for marketing, branding, tutorials, and more.",
  //   long_description:
  //     "We offer high-quality video editing services tailored to your business or personal brand. Whether you need promotional content, tutorials, or cinematic effects, we ensure smooth transitions, clear audio, engaging visuals, and fast turnaround times to elevate your video presence.",
  //   image: "/services/videoeditings.jpg",
  //   details: [
  //     "HD/4K editing",
  //     "Transitions & effects",
  //     "Color correction",
  //     "Audio enhancement",
  //     "Custom intros/outros",
  //   ],
  // },
  // {
  //   id: "12",
  //   title: "Code Calling",
  //   description:
  //     "Real-time expert coding assistance and live debugging for quick issue resolution.",
  //   long_description:
  //     "Our code calling service connects you with experienced developers for one-on-one live coding sessions. Whether it's debugging, reviewing, or implementing features, we help you solve coding problems in real time and improve your development workflow efficiently.",
  //   image: "/services/codecalling.jpg",
  //   details: [
  //     "Live debugging",
  //     "Code walkthroughs",
  //     "Problem solving",
  //     "Real-time chat",
  //     "Screen sharing",
  //   ],
  // },
  // {
  //   id: "13",
  //   title: "Digital Marketing",
  //   description:
  //     "Boost your online presence through targeted campaigns and multichannel marketing strategies.",
  //   long_description:
  //     "We offer comprehensive digital marketing services including social media, email marketing, PPC, and content marketing. Our strategies are tailored to drive traffic, generate leads, and increase conversions, helping your brand grow across all online platforms effectively and measurably.",
  //   image: "/services/digital.jpg",
  //   details: [
  //     "Social media ads",
  //     "Email campaigns",
  //     "Content strategy",
  //     "PPC advertising",
  //     "Conversion tracking",
  //   ],
  // },
  // {
  //   id: "14",
  //   title: "Lead Generation",
  //   description:
  //     "Generate high-quality leads with targeted campaigns and data-driven marketing strategies.",
  //   long_description:
  //     "We help businesses grow by generating qualified leads through email marketing, landing pages, CRM integration, and ad campaigns. Our methods ensure your sales funnel stays full, targeting the right audience and converting them into long-term customers efficiently.",
  //   image: "/services/leadgeneration.jpg",
  //   details: [
  //     "Targeted campaigns",
  //     "Email funnels",
  //     "CRM integration",
  //     "Landing page design",
  //     "Analytics tracking",
  //   ],
  // },
];

export default services;

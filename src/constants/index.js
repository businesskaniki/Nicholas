import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "#about",
    title: "About",
  },
  {
    id: "#work",
    title: "Work",
  },
  {
    id: "#contact",
    title: "Contact",
  },
  {
    id: "https://www.linkedin.com/in/nicholas-maina-kamau/",
    title: "LinkedIn",
  },
  {
    id: "https://github.com/businesskaniki",
    title: "GitHub",
  },
  {
    id: "mailto:businesskanikii@gmail.com",
    title: "Gmail",
  },
];

const services = [
  {
    title: "Django Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "python developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full stack Developer",
    company_name: "katex Power",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining  katex power blog app using React.js, Django and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "most amaizing part got to build a platform for writting blogs (built a rich text editor).",
    ],
  },
  {
    title: "Shopify Developer",
    company_name: "walkersupermarket",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing custom application for the shopify website.",
      "Collaborating with cross-functional teams including designers and other developers to create high-quality products.",
      "This included learning Node in 2 weeks.",
      "meeting some pretty tight deadldines",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "personal projects",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing personal web applications using React.js",
      "Collaborating with  developers remotely to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility for all web applications built.",
    ],
  },
  {
    title: "Backend Developer",
    company_name: "personal projects",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using python, Ruby Ruby On Rails, Node and Django.",
      "working alone in most of the projects",
      "Building and  Implementing secure API applications",
      "building fast and optimized APIs",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Nick proved me wrong.",
    name: "Walker Katema",
    designation: "CEO",
    company: "Walker supermarket",
    image:
      "https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Nick does.",
    name: "Kachi",
    designation: "CEO",
    company: "Katex Power",
    image:
      "https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg",
  },
  {
    testimonial:
      "After Nick build me my personal website my business sales increased and all thanks to his skills.",
    name: "Ian Mwangi",
    designation: "CEO",
    company: "MTC",
    image:
      "https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg",
  },
];

const projects = [
  {
    name: "Katex Power",
    description:
      "Web-based platform that allows users to create an accout and ask for authorization for them to be able to write blogs on the platform",
    tags: [
      {
        name: "#react",
        color: "blue-text-gradient",
      },
      {
        name: "#Django",
        color: "green-text-gradient",
      },
      {
        name: "#css",
        color: "pink-text-gradient",
      },
      {
        link: "web site",
        color: "red-text-gradient",
      },
    ],
    image: carrent,
    source_code_link:
      "https://github.com/businesskaniki/katex-power-backend.git",
  },

  {
    name: "MTC",
    description:
      " MTC is a micro tax company that uses this website to showcase their capability in the micro tax field. This website have helped boost their sales.",
    tags: [
      {
        name: "#react",
        color: "blue-text-gradient",
      },
      {
        name: "#Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "#scss",
        color: "pink-text-gradient",
      },
      {
        link: "https://mtc-micro-tax.netlify.app/",
        color: "red-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/businesskaniki/mtc",
  },
  {
    name: "KDF Driving",
    description:
      "A comprehensive website for Kenya Deffesnsive Driving school that helps them market their services and put themselves out to the world.",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        link: "https://kenya-deffensive-driving.netlify.app/home",
        color: "red-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/businesskaniki/driving",
  },
];

export { services, technologies, experiences, testimonials, projects };

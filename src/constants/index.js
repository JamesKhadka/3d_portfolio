import {
  mobile, backend, creator, web, javascript, typescript, html, css, reactjs, redux, tailwind, nodejs,
  mongodb, git, figma, docker, meta, starbucks, tesla, shopify, carrent, jobit, tripguide, threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "React Web Developer",
    icon: web,
  },
  {
    title: "Video Editor",
    icon: mobile,
  },
  {
    title: "UI/UX Designer",
    icon: backend,
  },
  {
    title: "Front End Developer",
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
    title: "React JS Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Tailwind CSS",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Utility-First: Tailwind provides utility classes to style elements directly in your HTML.",
      "Customizable: Easily configure colors, spacing, and more using tailwind.config.js.",
      "Lightweight: Unused CSS is purged in production, keeping the bundle small.",
      "Framework-Friendly: Works well with React, Vue, and other JS frameworks.",
    ],
  },
  {
    title: "Web App Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Builds Web Apps: Develops and maintains web applications.",
      "Front-End Skills: Proficient in HTML, CSS, and JavaScript.",
      "Responsive Design: Ensures applications work well on various devices.",
      "Cross-Browser Compatibility: Ensures apps work across different browsers.",
    ],
  },
  {
    title: "UI/UX ",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "UI (User Interface): Focuses on designing the visual elements and layout of an application.",
      "UX (User Experience): Concentrates on the overall user experience, including usability and functionality.",
      "Wireframes: Used in UX to outline the structure and flow of an application.",
      "Prototypes: Interactive models created to test and refine UI/UX designs.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Github User Finder",
    description:
      "Github user finder is a web application built in react.js and tailwind css that helps in searching github profiles and shows relative details about them. this application provides an interactive interface to search for github users and show information from their profiles, including their repositories, activity, and followers.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/JamesKhadka/githubfinder",
  },
  {
    name: "iCloud Note Book",
    description:
      "This particular app can store user's login data and provide a space to store the info in the system. the specific user only with a valid login can see the particular data. users can access different interfaces without seeing other data.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/JamesKhadka/notecloud",
  },
  {
    name: "News App",
    description:
      "Daily digest is the news app whre you can see the news from sector like sports , tech , entertainment , and many more",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/JamesKhadka/dailydigest",
  },

];

export { services, technologies, experiences, testimonials, projects };
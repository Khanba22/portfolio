

import {
  mobile,
  backend,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  threejs,
  python,
  java,
  city,
  whatsapp,
  servico,
  cloudNotebook,
  hashtag
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  }
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
    name: "python",
    icon: python,
  },
  {
    name: "Java",
    icon: java,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Hashtag City",
    icon:city,
    iconBg: "#383E56",
    date: "March 2022 - April 2022",
    points: [
      "Developing A Website for Company named Hashtag city",
      "Collaborating with team to design and develop the UI and Animations",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
]

const testimonials = [];

const projects = [
  {
    name: "Whatsapp Clone",
    description:
      "Socket-io based Chat application with real time updates and latest functionalities like Reactions Replies, etc",
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
        name: "socket-io",
        color: "pink-text-gradient",
      },
      {
        name: "node",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
    ],
    image: whatsapp,
    source_code_link: "https://github.com/Khanba22/whatapp_frontend_mern",
  },
  {
    name: "SERVICO",
    description:
      "Web application that enables users to search for daily life services at and order them at doorsteps just with a click.",
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
        name: "node",
        color: "pink-text-gradient",
      },
      {
        name: "express",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
    ],
    image: servico,
    source_code_link: "https://github.com/Khanba22/servico_frontend",
  },
  {
    name: "Cloud Notebook",
    description:
      "A comprehensive Online NoteBook with functionalities of MS words like coloring,highlighting,text decorations and with features to share notes via emails or links",
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
        name: "node",
        color: "pink-text-gradient",
      },
      {
        name: "express",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "Draft JS",
        color: "pink-text-gradient",
      },
    ],
    image: cloudNotebook,
    source_code_link: "https://github.com/Khanba22/cloud-note-book",
  },
  {
    name: "Hashtag City",
    description:
      "Hashtag city is a travels startup of Nagpur city, The website uses libraries like GSAP and Scroll Trigger to provide a more lively and animated look to the website",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "GSAP",
        color: "green-text-gradient",
      },
      {
        name: "scrolltrigger",
        color: "pink-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
    ],
    image: hashtag,
    source_code_link: "https://github.com/Khanba22/cloud-note-book",
  },
];

export { services, technologies, experiences, testimonials, projects };

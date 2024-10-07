import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Gianluca Giordano",
  initials: "GG",
  url: "https://giordanogianluca.com",
  location: "Greates Naples Area, ITA",
  locationLink: "https://www.google.com/maps/place/napoli",
  description:
    "Software Engineer turned Entrepreneur. I love building things and helping people. Very active on Linkedin.",
  summary:
    //"At the end of 2022, I quit my job as a software engineer to go fulltime into building and scaling my own SaaS businesses. In the past, [I pursued a double degree in computer science and business](/#education), [interned at big tech companies in Silicon Valley](https://www.youtube.com/watch?v=d-LJ2e5qKdE), and [competed in over 21 hackathons for fun](/#hackathons). I also had the pleasure of being a part of the first ever in-person cohort of buildspace called [buildspace sf1](https://buildspace.so/sf1).",
    "Driving innovation as a Senior Full Stack Engineer, I've recently enhanced an energy market analysis tool, boosting performance by 90%. [My proficiency in Node.js and React, coupled with a focus on modernizing legacy systems](/#), has facilitated significant advancements in data processing speed and accuracy. [As a technical lead](/#), I've mentored a vibrant team of 4 developers, fostering an environment that values agile methodology and collaboration. Our collective efforts led to a 40% increase in test coverage and a 50% reduction in redundant code, exemplifying my commitment to efficiency and maintainable code. If you’re looking for a dedicated developer for your next project or have any questions.",
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "Next.js",
    "Redux",
    "Redux Saga",
    "Typescript",
    "Node.js",
    "Express",
    "Conventional Commits",
    "Jest",
    "Mocha",
    "Jasmine",
    "React Testing Tools",
    "Cypress",
    "Postgres",
    "Docker",
    "PHP",
    "Laravel",
    "RESTFul API",
    "POSTMAN",
    "Socker.io",
    "Husky",
    "Git",
    "Prettier",
    "Babel",
    "Webpack",
    "NPM",
    "Ajax",
    "Figma",
    "Agile",
    "Scrum",
    "AWS",
    "Azure",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    //{ href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "gianluca@giordanogianluca.com",
    tel: "+39 3348413240",
    social: {
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/gianlucagiordan0/",
        icon: Icons.linkedin,

        navbar: true,
      },
      Email: {
        name: "Send Email",
        url: "mailto: gianluca@giordanogianluca.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Ricardo PLC",
      href: "https://www.ricardo.com/",
      badges: [],
      location: "Remote",
      title: "Senior Full Stack Developer",
      logoUrl: "/ricardo_plc_logo.jpeg",
      start: "Sept 2023",
      end: "Oct 2024",
      description:
        "Replaced legacy software with a modern solution for energy market analysis, improving performance by 90%. Developed a mono-repository using NX Workspaces, reducing code redundancy by 50%. Led a team of 4 developers, increasing test coverage by 40%. Tech stack: Node.js, TypeScript, NestJS, React, NX, GitLab, Docker, Figma.",
    },
    {
      company: "Accenture INC",
      badges: [],
      href: "https://accenture.com",
      location: "Remote",
      title: "Senior Full Stack Developer",
      logoUrl: "/accenture_logo.jpeg",
      start: "Mar 2022",
      end: "Oct 2023",
      description:
        "Developed software for industrial machines with a microservices architecture and IoT integration. Built a mono-repository framework with Rollup, Babel, and AWS, streamlining development. Led and mentored a team of 4 developers, driving project progress with agile methodologies.",
    },
    {
      company: "Tetrapak International S.A.",
      href: "https://tetrapak.com/",
      badges: [],
      location: "Santa Clara, CA",
      title: "Senior Full Stack Developer",
      logoUrl: "/tetra_pak_logo.jpeg",
      start: "Mar 2022",
      end: "Oct 2023",
      description:
        "Developed stable software for industrial machines using a microservices architecture and IoT. Collaborated with product owners, ensuring alignment with business goals. Led and mentored 4 developers, streamlining code sharing and using agile methodologies for project progress.",
    },
    {
      company: "Trustcom Financial UAB",
      href: "https://trustcomfinancial.com",
      badges: [],
      location: "Vilnius, LT",
      title: "Chief Technology Officer (Hands-On)",
      logoUrl: "/trustcom.png",
      start: "January 2019",
      end: "April 2019",
      description:
        "Led a team of 6 developers, migrating from legacy to a MERN stack, improving performance and scalability. Developed and maintained Web3 components for cryptocurrency purchases using Solidity, Infura, React, and Express.",
    },
    {
      company: "Wavecrest GI",
      href: "https://wavecrest.gi/",
      badges: [],
      location: "Remote",
      title: "Senior Full Stack Developer",
      logoUrl: "/wavecrest.jpeg",
      start: "January 2018",
      end: "April 2018",
      description:
        "Built a web platform from scratch, integrating MasterCard and Visa partners (3D Secure, OAuth, 2FA). Developed a mobile app and internet banking system using a single backend.",
    },
    {
      company: "AirSat SRL",
      href: "https://airsat.com/",
      badges: [],
      location: "Toronto, ON",
      title: "Software Engineer Junior",
      logoUrl: "/airsat_logo.png",
      start: "May 2008",
      end: "Sept 2009",
      description:
        "Utilized PHP, JavaScript, HTML, and CSS to implement UI designs, ensuring a seamless and visually appealing user experience.",
    },
  ],
  education: [
    {
      school: "University of E-Campus",
      href: "https://www.uniecampus.it/",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "/logo_ecampus.jpeg",
      start: "2016",
      end: "2021",
    },
    {
      school: "Istituto d'Istruzione Secondaria Superiore “Giancarlo Siani” ",
      href: "https://www.iissgiancarlosiani.edu.it/",
      degree: "Science Diploma",
      logoUrl: "/repubblica.png",
      start: "2012",
      end: "2016",
    },
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Business Dashboard",
      href: "#",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "Business Dashboard",
      href: "https://llm.report",
      dates: "April 2023 - September 2024",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website not Available for privacy reason",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Mobile App for E-Banking",
      href: "#",
      dates: "Nov 2017 - Mar 2022",
      active: true,
      description:
        "Developed a secure mobile banking app for Trustcom, featuring real-time transactions, money transfers, bill payments, and customizable budgeting tools. Integrated biometric login and encryption for data security, ensuring a smooth and safe user experience. ",
      technologies: [
        "React Native",
        "Typescript",
        "Expo",
        "Javascript",
        "Express.js",
        "JWT",
        "OAUTH",
        "Signal API",
        "KeyCloak",
      ],
      links: [
        {
          type: "Youtube",
          href: "https://www.youtube.com/watch?v=dIApS_lY0HQ&t=21s",
          icon: <Icons.youtube className="size-3" />,
        },
      ],
      image: "/screen_app_trustcom2.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title:
        "Leadership: Spiritual Yoga for Emotional Intelligence and Team Success",
      dates: "Sept 23rd - 25th, 2024",
      location: "London, UK",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image: "osm_logo.jpeg",
      links: [
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.opensourcemanagement.it/",
        },
      ],
    },
    {
      title: "Leadership and Time Managment",
      dates: "September 14th - 24th, 2016",
      location: "Milano, IT",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image: "hrd_logo.jpeg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://robertore.com/",
        },
      ],
    },
    {
      title: "Giffoni Film Festival - Innovation HUB: Bests under 30s in IT",
      dates: "June 03rd - 24th, 2017",
      location: "Giffoni Vallepiana, Salerno, IT",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image: "giffoni_logo.jpeg",
      links: [
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.giffonihub.com/",
        },
      ],
    },
  ],
} as const;

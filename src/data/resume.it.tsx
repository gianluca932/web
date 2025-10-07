import { Icons } from "@/components/icons";
import { HomeIcon /*, NotebookIcon*/ } from "lucide-react";

export const DATA = {
  name: "Gianluca Giordano",
  initials: "GG",
  url: "https://giordanogianluca.com",
  location: "Area metropolitana di Napoli, IT",
  locationLink: "https://www.google.com/maps/place/napoli",
  description:
    "Software Engineer diventato imprenditore. Amo costruire soluzioni e aiutare le persone. Molto attivo su LinkedIn.",
  summary:
    "Come Senior Full-Stack Engineer, ho recentemente migliorato uno strumento di analisi del mercato energetico aumentando le prestazioni del 90%. [La mia competenza in Node.js e React, unita al focus sulla modernizzazione dei sistemi legacy](/#), ha permesso notevoli progressi nella velocità e nell’accuratezza dell’elaborazione dati. [Come technical lead](/#), ho guidato e mentorizzato un team di 4 sviluppatori, promuovendo un ambiente orientato all’agile e alla collaborazione. Il nostro lavoro ha portato a un +40% di code coverage e a una riduzione del 50% del codice ridondante: efficienza e manutennibilità prima di tutto. Se stai cercando uno sviluppatore dedicato per il tuo prossimo progetto o hai domande, scrivimi.",
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "Next.js",
    "Redux",
    "Redux Saga",
    "TypeScript",
    "Node.js",
    "Express",
    "Conventional Commits",
    "Jest",
    "Mocha",
    "Jasmine",
    "React Testing Library",
    "Cypress",
    "Postgres",
    "Docker",
    "PHP",
    "Laravel",
    "RESTful API",
    "Postman",
    "Socket.io",
    "Husky",
    "Git",
    "Prettier",
    "Babel",
    "Webpack",
    "NPM",
    "AJAX",
    "Figma",
    "Agile",
    "Scrum",
    "AWS",
    "Azure",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
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
        name: "Invia email",
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
      location: "Remoto",
      title: "Sviluppatore Full-Stack Senior",
      logoUrl: "/ricardo_plc_logo.jpeg",
      start: "Set 2023",
      end: "Ott 2024",
      description:
        "Sostituzione del software legacy con una soluzione moderna per l’analisi del mercato energetico (+90% performance). Creato mono-repo con NX Workspaces (−50% codice ridondante). Guida di un team di 4 dev (+40% test coverage). Stack: Node.js, TypeScript, NestJS, React, NX, GitLab, Docker, Figma.",
    },
    {
      company: "Accenture INC",
      badges: [],
      href: "https://accenture.com",
      location: "Remoto",
      title: "Sviluppatore Full-Stack Senior",
      logoUrl: "/accenture_logo.jpeg",
      start: "Mar 2022",
      end: "Ott 2023",
      description:
        "Software per macchine industriali con architettura a microservizi e integrazione IoT. Creato framework mono-repo con Rollup, Babel e AWS per velocizzare lo sviluppo. Coordinamento e mentorship di 4 sviluppatori con metodologie agile.",
    },
    {
      company: "Tetra Pak International S.A.",
      href: "https://tetrapak.com/",
      badges: [],
      location: "Santa Clara, CA",
      title: "Sviluppatore Full-Stack Senior",
      logoUrl: "/tetra_pak_logo.jpeg",
      start: "Mar 2022",
      end: "Ott 2023",
      description:
        "Sviluppo di software stabile per macchine industriali con architettura a microservizi e IoT. Collaborazione con i product owner per allineamento agli obiettivi di business. Mentorship di 4 sviluppatori, condivisione del codice e processi agili.",
    },
    {
      company: "Trustcom Financial UAB",
      href: "https://trustcomfinancial.com",
      badges: [],
      location: "Vilnius, LT",
      title: "Chief Technology Officer (operativo)",
      logoUrl: "/trustcom.png",
      start: "Gen 2019",
      end: "Apr 2019",
      description:
        "Guidato un team di 6 sviluppatori, migrazione da legacy a stack MERN con miglioramenti di performance e scalabilità. Sviluppo e manutenzione di componenti Web3 per acquisti crypto (Solidity, Infura, React, Express).",
    },
    {
      company: "Wavecrest GI",
      href: "https://wavecrest.gi/",
      badges: [],
      location: "Remoto",
      title: "Sviluppatore Full-Stack Senior",
      logoUrl: "/wavecrest.jpeg",
      start: "Gen 2018",
      end: "Apr 2018",
      description:
        "Piattaforma web da zero con integrazione partner MasterCard e Visa (3-D Secure, OAuth, 2FA). App mobile e internet banking con unico backend.",
    },
    {
      company: "AirSat SRL",
      href: "https://airsat.com/",
      badges: [],
      location: "Toronto, ON",
      title: "Software Engineer Junior",
      logoUrl: "/airsat_logo.png",
      start: "Mag 2008",
      end: "Set 2009",
      description:
        "Uso di PHP, JavaScript, HTML e CSS per implementare UI coerenti e gradevoli, garantendo un’esperienza utente fluida.",
    },
  ],

  education: [
    {
      school: "Università e-Campus",
      href: "https://www.uniecampus.it/",
      degree: "Laurea triennale in Informatica (BCS)",
      logoUrl: "/logo_ecampus.jpeg",
      start: "2016",
      end: "2021",
    },
    {
      school: "Istituto di Istruzione Superiore “Giancarlo Siani”",
      href: "https://www.iissgiancarlosiani.edu.it/",
      degree: "Diploma Scientifico",
      logoUrl: "/repubblica.png",
      start: "2012",
      end: "2016",
    },
  ],

  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Gen 2024 - Feb 2024",
      active: true,
      description:
        "Con l’uscita dell’[OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), ho creato un SaaS che permette di raccogliere email dagli utenti del tuo GPT. Ottimo per costruire un’audience e monetizzare l’uso dell’API GPT.",
      technologies: [
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "shadcn/ui",
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
      dates: "Giu 2023 - Presente",
      active: true,
      description:
        "Progettazione, sviluppo e vendita di componenti UI animati per sviluppatori.",
      technologies: [
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "shadcn/ui",
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
      dates: "Apr 2023 - Set 2024",
      active: true,
      description:
        "Piattaforma open-source di logging e analytics per OpenAI: traccia le richieste alla ChatGPT API, analizza i costi e migliora i prompt.",
      technologies: [
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Sito non disponibile per motivi di privacy",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Mobile App per E-Banking",
      href: "#",
      dates: "Nov 2017 - Mar 2022",
      active: true,
      description:
        "App mobile di internet banking per Trustcom: transazioni in tempo reale, bonifici, pagamenti, budget personalizzabili. Login biometrico e cifratura per sicurezza, UX fluida.",
      technologies: [
        "React Native",
        "TypeScript",
        "Expo",
        "JavaScript",
        "Express.js",
        "JWT",
        "OAuth",
        "Signal API",
        "Keycloak",
      ],
      links: [
        {
          type: "YouTube",
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
        "Leadership: Yoga Spirituale per Intelligenza Emotiva e Successo del Team",
      dates: "23–25 Settembre 2024",
      location: "Londra, UK",
      description:
        "Sviluppata un’app mobile che consegna fiabe della buonanotte in realtà aumentata.",
      image: "osm_logo.jpeg",
      links: [
        {
          title: "Sito web",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.opensourcemanagement.it/",
        },
      ],
    },
    {
      title: "Leadership e Gestione del Tempo",
      dates: "14–24 Settembre 2016",
      location: "Milano, IT",
      description:
        "Sviluppata un’app mobile che mostra in tempo reale gli eventi del campus universitario.",
      image: "hrd_logo.jpeg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "Sito web",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://robertore.com/",
        },
      ],
    },
    {
      title:
        "Giffoni Film Festival – Innovation HUB: Migliori under 30 nell’IT",
      dates: "03–24 Giugno 2017",
      location: "Giffoni Vallepiana (SA), IT",
      description:
        "App mobile per inviare i dati medici del paziente dall’ambulanza all’ospedale in tempo reale.",
      icon: "public",
      image: "giffoni_logo.jpeg",
      links: [
        {
          title: "Sito web",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.giffonihub.com/",
        },
      ],
    },
  ],
} as const;

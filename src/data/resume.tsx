import { Icons } from "@/components/icons";
import {HomeIcon, FileText} from "lucide-react";

export const DATA = {
  name: "Tan Nguyen Le",
  initials: "",
  url: "https://tannguyenle-portfolio.vercel.app/",
  location: "Melbourne, VIC, AU",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Hey Everyone, my name is Tan Nguyen LE! I develop awesome WebApps based on ReactJS, NextJs and Pure HTML+CSS+JS. I also know NestJs, PrismaJs, VueJS, Angular, GatsbyJs, TailwindCss, JavaScript, Typescript, Nodejs, Apollo/GraphQL, StyledComponents, Bootstrap.",
  summary:
    "I have over 10 years in software development. Dabbling into experimental cutting edge new technologies is my favorite pastime. I love motivating others to get into Open-Source!",
  avatarUrl: "/myPicture.jpg",
  skills: [
    "React",
    "Node.js",
    "Next.js",
    "TailwindCSS",
    "Prisma",
    "Javascript",
    "Typescript",
    "GraphQL",
    "Postgres",
    "Docker",
    "AWS",
    "Nest.js",
    "Wordpress",
    "Gatsby",
    "Astro",
    "Bootstrap",
    "Jquery",
    "Styled Components",
    "C#",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "/tannguyenle.pdf", icon: FileText, label: "Resume" },
  ],
  contact: {
    email: "nguyenletan@gmail.com",
    tel: "0467580942",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/nguyenletan",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/tan-nguyen-le-b3797023/",
        icon: Icons.linkedin,

        navbar: true,
      },
      // X: {
      //   name: "X",
      //   url: "https://dub.sh/dillion-twitter",
      //   icon: Icons.x,
      //
      //   navbar: true,
      // },
      // Youtube: {
      //   name: "Youtube",
      //   url: "https://dub.sh/dillion-youtube",
      //   icon: Icons.youtube,
      //   navbar: true,
      // },
      email: {
        name: "Send Email",
        url: "sendTo:nguyenletan@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Anacle",
      href: "https://anacle.com/",
      badges: [],
      location: "Remote, Singapore",
      title: "Full Stack Node.js Developer",
      logoUrl: "/anacle.webp",
      start: "May 2024",
      end: "Now",
      contributions: `
        - Successfully converted the Simplicity website to Next.js and Sanity Headless CMS. </br>
        - Collaborated with cross-functional teams to maintain the Anacle Partner Website and Tesseract product site, ensuring seamless functionality and user experience.`,
      description: `
        - Developing and maintaining full-stack applications using Node.js, React.js, and PostgreSQL. <br/>
        - Leading the migration of legacy systems to modern web frameworks, enhancing performance and scalability.`,
    },
    {
      company: "Inlight",
      href: "https://inlight.com.au/",
      badges: [],
      location: "Melbourne",
      title: "Full Stack Node.js Developer",
      logoUrl: "/inlight.jpg",
      start: "Sep 2022",
      end: "May 2024",
      contributions: `
       - Developed both front-end and back-end components for projects like Nandos and AHM, integrating with systems like Civica Ensure and Sanity CMS. <br/>
       - Built Urban Rest's website using Next.js and integrating Stripe for payments
      `,
      description: `
        - Developed both front-end and back-end components for projects like Nandos and AHM, integrating with systems like Civica Ensure and Sanity CMS. <br/>
        - Built Urban Rest's website using Next.js and integrating Stripe for payments.`,
    },
    {
      company: "Bound",
      badges: [],
      href: "https://boundinteractive.com/",
      location: "Melbourne",
      title: "Front-End Developer (Casual Job)",
      logoUrl: "/bound.jpeg",
      start: "Jan 2021",
      end: "Sep 2022",
      description: `
        - Developed and maintained front-end components using React.js, Next.js, and Gatsby.js for client websites. <br/>
        - Ensured that applications were responsive and compatible across various devices and browsers.`,
      contributions: `
        - Worked on the A2Milk website, implementing server-side rendering with Next.js and optimizing search functionality with Algolia. </br>
        - Contributed to the redesign of KidsFirst's website using Gatsby.js, improving site speed and overall user experience.
      `
    },
    {
      company: "NashTech",
      href: "https://www.nashtechglobal.com/",
      badges: [],
      location: "Vietnam",
      title: "Senior Front-End Software Engineer",
      logoUrl: "/nashtech.jpeg",
      start: "Dec 2009",
      end: "Jan 2020",
      description: `
        - Developed and maintained front-end applications using AngularJS, React.js, and jQuery. <br/>
        - Collaborated with design teams to implement user-friendly interfaces.`,
      contributions: `
      - Helped modernize legacy applications by transitioning from AngularJS to React.js, simplifying the codebase and improving performance. </br>
      - Assisted in mentoring junior developers, contributing to a collaborative team environment.`
    },
    {
      company: "Pyramid Consulting",
      href: "#",
      badges: [],
      location: "Vietnam",
      title: ".NET Software Engineer",
      logoUrl: "/pico.png",
      start: "2007",
      end: "2009",
      description:`
        - Developed web applications using ASP.NET MVC, C#, and jQuery. <br/>
        - Gathered client requirements and translated them into technical solutions.`,
      contributions: ''
    },
    {
      company: "TMA Solutions",
      href: "https://www.tmasolutions.com/",
      badges: [],
      location: "Vietnam",
      title: ".NET Software Engineer",
      logoUrl: "/tma.png",
      start: "2006",
      end: "2007",
      description:
       ` - Developed web applications using ASP.NET and MS SQL, focusing on performance and scalability. <br/
         - Assisted in the design and development of user interfaces.`,
      contributions: ''
    },
  ],
  education: [
    {
      school: "University of Science - Ho Chi Minh City - Vietnam",
      href: "https://en.hcmus.edu.vn/",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "/uni.svg",
      start: "2001",
      end: "2005",
    }
  ],
  projects: [
    {
      title: "Anacle Websites",
      href: "https://www.anacle.com.au/",
      dates: "May 2024 - Now",
      active: true,
      description:
        `Maintained and enhanced Anacle Singapore, Anacle AU, Anacle Partners website and Tesseract product site. 
        \\
        \\
         Converted the Simplicity website from **WordPress** to **Next.js**, improving load times and overall performance`,
      technologies: [
        "Next.js",
        "Typescript",
        "Wordpress",
        "TailwindCSS",
        "Jquery",
        "Bootstrap",
        "Sanity Headless CMS",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.anacle.com.au/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/anacle-proj.webp",
      video:
        "",
    },
    {
      title: "Nandos (Inlight)",
      href: "https://www.nandos.com.au/",
      dates: "Jan 2024 - May 2024",
      active: true,
      description:
        `Developed the front-end using **React.js** and back-end using **Express.js** for the Nandos website. 
        \\
        \\
         Contributed to the Nandos mobile app development with **React Native** and deployed the solution on **AWS**.`,
      technologies: [
        "Next.js",
        "Typescript",
        "ReactNative",
        "PostgreSQL",
        "DybamoDB",
        "AWS",
        "GraphQL",
        "TailwindCSS",
        "Adyen",
        "NodeJs",
        "Reddit",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        // {
        //   type: "Source",
        //   href: "https://github.com/magicuidesign/magicui",
        //   icon: <Icons.github className="size-3" />,
        // },
      ],
      image: "/nandos-prj.webp",
      video: "",
    },
    {
      title: "AHM (Inlight)",
      href: "https://ahm.com.au/health-insurance/join",
      dates: "May 2023 to Dec 2023",
      active: true,
      description:
        `Built and maintained the UI with **React.js** and the back end with **Express.js**. Integrated the **Civica Ensure** system for data storage and utilized **Next.js** for the marketing website, sourcing content from **Sanity headless CMS**.`,
      technologies: [
        "Next.js",
        "ReactJs",
        "Typescript",
        "NodeJs",
        "ExpressJs",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://ahm.com.au/health-insurance/join",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/ahm-prj.webp",
      video: "",
    },
    {
      title: "Urban Rest website (Inlight)",
      href: "https://www.stayurbanrest.com/",
      dates: "Jan 2024 - May 2024",
      active: true,
      description:
        "Developed a full stack booking platform using **Next.js**, with **Stripe** for payment processing and **Algolia** for search functionality. Hosted the platform on Vercel and managed content through **DatoCMS**.",
      technologies: [
        "Next.js",
        "Typescript",
        "AWS",
        "Reddit",
        "Apollo/GraphQL",
        "Vanilla-extract CSS",
        "Salesforce",
        "Stripe",
        "Booking API",
        "Algolia",
        "DatoCMS headless CMS",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.stayurbanrest.com/",
          icon: <Icons.globe className="size-3" />,
        },
        // {
        //   type: "Source",
        //   href: "https://github.com/dillionverma/llm.report",
        //   icon: <Icons.github className="size-3" />,
        // },
      ],
      image: "/stayurbanrest-prj.webp",
      video: "",
    },
    {
      title: "OES Students portal (Inlight)",
      href: "https://oes-demo.vercel.app/",
      dates: "Sep 2022 to Dec 2022",
      active: true,
      description:
        "Created a responsive student portal using **React.js** for the front end and **Express.j** for the back end. Deployed the application on **AWS**, ensuring high availability and scalability.",
      technologies: [
        "Reactjs",
        "Typescript",
        "AWS",
        "Styled Components",
        "DynamoDB",
        "ExpressJs"
      ],
      links: [
        {
          type: "Website",
          href: "https://oes-demo.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        // {
        //   type: "Source",
        //   href: "https://github.com/dillionverma/llm.report",
        //   icon: <Icons.github className="size-3" />,
        // },
      ],
      image: "/oes-prj.webp",
      video: "",
    },
    {
      title: "A2Milk (Bound)",
      href: "https://a2milk.com.au/",
      dates: "Sep 2022 to Dec 2022",
      active: true,
      description:
        "Developed a server-side rendered website using **Next.js**, integrating **Algolia** for advanced search. Managed content using **Kontent.ai** Headless CMS.",
      technologies: [
        "NextJs",
        "Typescript",
        "AWS",
        "Styled Components",
        "Kontent.ai headless CMS",
        "Angolia",
      ],
      links: [
        {
          type: "Website",
          href: "https://a2milk.com.au/",
          icon: <Icons.globe className="size-3" />,
        },
        // {
        //   type: "Source",
        //   href: "https://github.com/dillionverma/llm.report",
        //   icon: <Icons.github className="size-3" />,
        // },
      ],
      image: "/a2milk-prj.webp",
      video: "",
    },
    {
      title: "Lastfootprint (German startup – side project)",
      href: "https://www.lastfootprint.com/ ",
      dates: "Sep 2020 to Dec 2022",
      active: true,
      description:
        `Developed Business Intelligence (BI) software for energy performance visibility using **React.js** with **Recoil** for state management, and **Nest.js** with **Prisma** for the back end. Managed data in a **PostgreSQL** database.
          \\
          \\
         Developed a marketing website using **Next.js** and **Styled Components**, integrating **Strapi** Headless CMS for content management.`,
      technologies: [
        "NextJs",
        "ReactJs",
        "Typescript",
        "Digital Ocean",
        "Reddit",
        "Styled Components",
        "TailwindCSS",
        "Strapi headless CMS",
        "Prisma",
        "PostgreSQL",
        "Recoil"
      ],
      links: [
        {
          type: "Website",
          href: "https://www.lastfootprint.com/",
          icon: <Icons.globe className="size-3" />,
        },
        // {
        //   type: "Source",
        //   href: "https://github.com/dillionverma/llm.report",
        //   icon: <Icons.github className="size-3" />,
        // },
      ],
      image: "/lastfootprint-prj.webp",
      video: "",
    },
    {
      title: "KidsFirst (Bound)",
      href: "https://www.kidsfirstaustralia.org.au/",
      dates: "Jan 2021 to Jun 2021",
      active: true,
      description:
        `Rebuilt the KidsFirst website with **Gatsby.js** for improved speed and performance. Leveraged **Gatsby.js**, **Bootstrap**, and **Drupal** (headless Cms) for a modern, user-friendly interface.`,
      technologies: [
        "GatsbyJs",
        "Typescript",
        "Netlify",
        "AWS",
        "Drupal",
        "BootstrapCss"
      ],
      links: [
        {
          type: "Website",
          href: "https://www.kidsfirstaustralia.org.au/",
          icon: <Icons.globe className="size-3" />,
        },
        // {
        //   type: "Source",
        //   href: "https://github.com/dillionverma/llm.report",
        //   icon: <Icons.github className="size-3" />,
        // },
      ],
      image: "/kidsfirst-prj.webp",
      video: "",
    },
    {
      title: "Edvisor.io (NashTech)",
      href: "https://www.edvisor.io/",
      dates: "Feb 2019 to Jan 2020",
      active: true,
      description:
        `Contributed to the Edvisor for Schools platform, focusing on the enrollment feature and fixing legacy UI bugs. Utilized **AngularJS**, **GraphQL**, and **Node.js** for development.`,
      technologies: [
        "AngularJs",
        "Javascript",
        "ExpressJs",
        "GraphQL",
        "NodeJs"
      ],
      links: [
        {
          type: "Website",
          href: "https://www.edvisor.io/",
          icon: <Icons.globe className="size-3" />,
        },
        // {
        //   type: "Source",
        //   href: "https://github.com/dillionverma/llm.report",
        //   icon: <Icons.github className="size-3" />,
        // },
      ],
      image: "/edvisor-prj.webp",
      video: "",
    },
    {
      title: "Civica Housing (NashTech)",
      href: "https://www.civica.com/en-au/sector-pages/housing/",
      dates: "Dec 2011 to Oct 2017",
      active: true,
      description:
        `Developed Civica Housing project using **ASP.NET MVC**, **jQuery**, and **KendoUI**, supporting data management through **MS-SQL**.`,
      technologies: [
        "ASP.NET MVC",
        "C#",
        "Jquery",
        "IIS",
        "KendoUI",
        "C#",
        "MS-SQL",
        ".NET"
      ],
      links: [
        {
          type: "Website",
          href: "https://www.civica.com/en-au/sector-pages/housing/",
          icon: <Icons.globe className="size-3" />,
        },
        // {
        //   type: "Source",
        //   href: "https://github.com/dillionverma/llm.report",
        //   icon: <Icons.github className="size-3" />,
        // },
      ],
      image: "/civica-prj.webp",
      video: "",
    },
    {
      title: "Vielife (NashTech)",
      href: "",
      dates: "May 2007 to Dec 2010",
      active: true,
      description:
        `Worked on a wellness platform focusing on sleep, stress management, nutrition, and physical activity. Collaborated with cross-functional teams to develop, deploy, and troubleshoot various legacy bugs using **ASP.NET MVC**, and **jQuery**.`,
      technologies: [
        "ASP.NET MVC",
        "C#",
        "Jquery",
        "IIS",
        "C#",
        "MS-SQL",
        ".NET"
      ],
      links: [
      ],
      image: "/vielife-prj.webp",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
    {
      title: "ETH Waterloo",
      dates: "October 13th - 15th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
      ],
    },
    {
      title: "Hack The North",
      dates: "September 15th - 17th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a virtual reality application allowing users to see themselves in third person.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Streamer Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/htn2017",
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/RTSPClient",
        },
      ],
    },
    {
      title: "Hack The 6ix",
      dates: "August 26th - 27th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShareShip/ShareShip",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/",
        },
      ],
    },
    {
      title: "Stupid Hack Toronto",
      dates: "July 23rd, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/nsagirlfriend/nsagirlfriend",
        },
      ],
    },
    {
      title: "Global AI Hackathon - Toronto",
      dates: "June 23rd - 25th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/TinySamosas/",
        },
      ],
    },
    {
      title: "McGill AI for Social Innovation Hackathon",
      dates: "June 17th - 18th, 2017",
      location: "Montreal, Quebec",
      description:
        "Developed realtime facial microexpression analyzer using AI",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
      links: [],
    },
    {
      title: "Open Source Circular Economy Days Hackathon",
      dates: "June 10th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/genecis",
        },
      ],
    },
    {
      title: "Make School's Student App Competition 2017",
      dates: "May 19th - 21st, 2017",
      location: "International",
      description: "Improved PocketDoc and submitted to online competition",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
      win: "Top 10 Finalist | Honourable Mention",
      links: [
        {
          title: "Medium Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "HackMining",
      dates: "May 12th - 14th, 2017",
      location: "Toronto, Ontario",
      description: "Developed neural network to optimize a mining process",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
      links: [],
    },
    {
      title: "Waterloo Equithon",
      dates: "May 5th - 7th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "SpaceApps Waterloo",
      dates: "April 28th - 30th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/earthwatch",
        },
      ],
    },
    {
      title: "MHacks 9",
      dates: "March 24th - 26th, 2017",
      location: "Ann Arbor, Michigan",
      description:
        "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/threejs-planes",
        },
      ],
    },
    {
      title: "StartHacks I",
      dates: "March 4th - 5th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
      win: "1st Place Winner",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-ionic",
        },
        {
          title: "Source (Server)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-rails",
        },
      ],
    },
    {
      title: "QHacks II",
      dates: "February 3rd - 5th, 2017",
      location: "Kingston, Ontario",
      description:
        "Developed a mobile game which enables city-wide manhunt with random lobbies",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/human-huntr-react-native",
        },
        {
          title: "Source (API)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/human-huntr-rails",
        },
      ],
    },
    {
      title: "Terrible Hacks V",
      dates: "November 26th, 2016",
      location: "Waterloo, Ontario",
      description:
        "Developed a mock of Windows 11 with interesting notifications and functionality",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
        },
      ],
    },
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],
} as const;

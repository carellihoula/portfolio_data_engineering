export const studies = [
  {
    title: "4A Informatique (Data & IA)",
    corporation: "ESEO – Grande École d’ingénieurs",
    date: "2024 – 2025",
  },
  {
    title: "BAC+4 en Informatique",
    corporation:
      "École Nationale Supérieure d'Ingénieurs du Mans, Le Mans (72)",
    date: "2022 – 2024",
  },
  {
    title: "BTS SIO SLAM (Solutions Logicielles et Applications Metiers)",
    corporation: "ENSITECH - ENSUP, Cergy (95) ",
    date: "2020 – 2022",
  },
];

export const IconKeys = {
  html: "html",
  css: "css",
  javaScript: "javaScript",
  react: "react",
  astro: "astro",
  materialUi: "materialUi",
  nextjs: "nextjs",
  redux: "redux",
  styled: "styled",
  tailwind: "tailwind",
  radix: "radix",
  reactQuery: "reactQuery",
  typeScript: "typeScript",
  zustand: "zustand",
  git: "git",
  github: "github",
  stripe: "stripe",
  shadcn: "shadcn",
  nodejs: "nodejs",
  mongodb: "mongodb",
  vite: "vite",
  docker: "docker",
  spark: "spark",
  python: "python",
  tensorflow: "tensorflow",
  sql: "sql",
  // here add more icon keys
};

export const skills = [
  {
    title: "TensorFlow ",
    icon: IconKeys.tensorflow,
  },
  {
    title: "SQL ",
    icon: IconKeys.sql,
  },
  {
    title: "Docker ",
    icon: IconKeys.docker,
  },
  {
    title: "Python ",
    icon: IconKeys.python,
  },
  {
    title: "Spark Apache ",
    icon: IconKeys.spark,
  },
  {
    title: "React Js",
    icon: IconKeys.react,
  },
  {
    title: "Node Js",
    icon: IconKeys.nodejs,
  },
  {
    title: "TypeScript",
    icon: IconKeys.typeScript,
  },
  {
    title: "JavaScript",
    icon: IconKeys.javaScript,
  },
  {
    title: "Html",
    icon: IconKeys.html,
  },
  {
    title: "Css",
    icon: IconKeys.css,
  },

  {
    title: "Tailwindcss",
    icon: IconKeys.tailwind,
  },

  {
    title: "Git",
    icon: IconKeys.git,
  },

  {
    title: "Github",
    icon: IconKeys.github,
  },
  {
    title: "Material UI",
    icon: IconKeys.materialUi,
  },

  {
    title: "Redux Js",
    icon: IconKeys.redux,
  },
  {
    title: "Styled Components",
    icon: IconKeys.styled,
  },

  {
    title: "React Query",
    icon: IconKeys.reactQuery,
  },
  {
    title: "Vite",
    icon: IconKeys.vite,
  },

  {
    title: "Mongo Db",
    icon: IconKeys.mongodb,
  },
];

export const projects = [
  {
    img: "../../../img/tasks-manager.webp",
    title: "Tasks Manager",
    link: "https://task-manager-ecru-chi.vercel.app/dashboard",
    description: `Administrador de tareas con drag and drop autenticación con Clerk , shadcn.  "En Desarrollo "`,
    technologies: [
      {
        icon: IconKeys.typeScript,
      },
      {
        icon: IconKeys.nextjs,
      },
      {
        icon: IconKeys.tailwind,
      },
      {
        icon: IconKeys.zustand,
      },
      {
        icon: IconKeys.shadcn,
      },
    ],
  },

  {
    img: "../../../img/nexanime.webp",
    title: "NexAnime",
    link: "https://nexanime.vercel.app",
    description: `plataforma de anime para ver los animes en tendencia , más valorados , estadísticas.`,
    technologies: [
      {
        icon: IconKeys.typeScript,
      },
      {
        icon: IconKeys.nextjs,
      },
      {
        icon: IconKeys.tailwind,
      },
    ],
  },
  {
    img: "../../../img/store-games.webp",
    title: "Store games",
    link: "https://store-games-site.netlify.app/",
    description: `Simulando una página de juegos , consumiendo la API de rawg api
      donde los usuarios pueden buscar videojuegos, ver sus detalles como
      creadores , calificaciones,tiendas donde comprar.....`,
    technologies: [
      {
        icon: IconKeys.react,
      },
      {
        icon: IconKeys.css,
      },
      {
        icon: IconKeys.javaScript,
      },
      {
        icon: IconKeys.tailwind,
      },
      {
        icon: IconKeys.reactQuery,
      },
    ],
  },
];

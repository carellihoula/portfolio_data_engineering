export const studies = [
  {
    title:
      "Engineering Degree in Computer Science (Human-Computer Interaction)",
    corporation:
      "ENSIM – National School of Engineers of Le Mans, Le Mans (72)",
    date: "2022 – 2025",
  },
  {
    title: "BTS SIO SLAM (Software Solutions and Business Applications)",
    corporation: "ENSITECH - ENSUP, Cergy (95)",
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
  socketio: "socketio",
  apacheSpark: "apacheSpark",
  pandas: "pandas",
  streamlit: "streamlit",
  mqtt: "mqtt",
  cpp: "cpp",
  arduino: "arduino",
  torch: "torch",
  scikitLearn: "scikitLearn",

  // here add more icon keys
};

export const skills = [
  {
    title: "SQL ",
    icon: IconKeys.sql,
  },
  {
    title: "Docker ",
    icon: IconKeys.docker,
  },
  {
    title: "arduino",
    icon: IconKeys.arduino,
  },
  {
    title: "Python ",
    icon: IconKeys.python,
  },
  {
    title: "C++ ",
    icon: IconKeys.cpp,
  },
  {
    title: "MQTT ",
    icon: IconKeys.mqtt,
  },
  {
    title: "PowerBI ",
    icon: IconKeys.powerbi,
  },
  {
    title: "Jenkins ",
    icon: IconKeys.jenkins,
  },
  {
    title: "GitLab CI ",
    icon: IconKeys.gitlabci,
  },
  {
    title: "Apache Spark",
    icon: IconKeys.apacheSpark,
  },
  {
    title: "React Js",
    icon: IconKeys.react,
  },
  {
    title: "Django",
    icon: IconKeys.django,
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
    title: "Vite",
    icon: IconKeys.vite,
  },

  {
    title: "Mongo Db",
    icon: IconKeys.mongodb,
  },
  {
    title: "socket io",
    icon: IconKeys.socketio,
  },
];

export const projects = [
  {
    img: "../../../img/crazee.png",
    title: "Crazee Burger",
    isFinished: true,
    link: "https://crazee-burger-pi.vercel.app/",
    github_front: "https://github.com/carellihoula/crazee-burger.git",
    description: `Crazee Burger is a front-end interface for ordering burgers online, developed with ReactJS.`,
    technologies: [
      {
        icon: IconKeys.javaScript,
      },
      {
        icon: IconKeys.react,
      },
      {
        icon: IconKeys.redux,
      },
      {
        icon: IconKeys.styled,
      },
    ],
  },
  {
    img: "../../../img/canochat.png",
    title: "CanoChat",
    isFinished: true,
    github_front: "https://github.com/carellihoula/chat-frontend-reactjs.git",
    github_back: "https://github.com/carellihoula/backend-chat-expressjs.git",
    description: `CanoChat is a real-time chat app using WebSockets for fast communication. , it provides a smooth messaging experience.`,
    technologies: [
      {
        icon: IconKeys.react,
      },
      {
        icon: IconKeys.typeScript,
      },
      {
        icon: IconKeys.nodejs,
      },
      {
        icon: IconKeys.socketio,
      },
      {
        icon: IconKeys.mongodb,
      },
    ],
  },
  {
    img: "../../../img/bundesliga.png",
    title: "Bundesliga Team Performance Analysis",
    isFinished: true,
    github_back: "https://github.com/carellihoula/FootBallDataAnalysis.git",
    description: `A data engineering project analyzing team performance in the Bundesliga. Built with Python, Apache Spark, Streamlit, and Pandas for efficient data processing and visualization.`,
    technologies: [
      {
        icon: IconKeys.python,
      },
      {
        icon: IconKeys.apacheSpark,
      },
      {
        icon: IconKeys.docker,
      },
      {
        icon: IconKeys.streamlit,
      },
      {
        icon: IconKeys.pandas,
      },
    ],
  },
  {
    img: "../../../img/crazee.png",
    title: "DeepLearning2PlayOthello",
    isFinished: true,
    github_back: "https://github.com/carellihoula/Artificial-Intelligence.git",
    description: `DeepLearning2PlayOthello is a project that trains and tests models to play the Othello game. It includes game simulation, model training, and performance evaluation.`,
    technologies: [
      { icon: IconKeys.python },
      { icon: IconKeys.torch },
      { icon: IconKeys.pandas },
      { icon: IconKeys.matplotlib },
      { icon: IconKeys.scikitLearn },
    ],
  },
  {
    img: "../../../img/chatbot.png",
    title: "Ephemeral Chatbot",
    isFinished: true,
    github_back: "https://github.com/carellihoula/chatbot-react-django.git",
    description: `Ephemeral Chatbot is a simple implementation of a temporary chatbot using the Mistral API for conversational responses. The frontend is built with ReactJS, providing an interactive and lightweight chat experience.`,
    technologies: [
      {
        icon: IconKeys.react,
      },
      {
        icon: IconKeys.typeScript,
      },
      {
        icon: IconKeys.python,
      },
    ],
  },
  {
    img: "../../../img/iot.png",
    title: "IoT Environmental Monitoring",
    isFinished: false,
    link: "https://wwww.google.com/",
    github_back:
      "https://github.com/carellihoula/iot-environmental-monitoring.git",
    github_front:
      "https://github.com/carellihoula/iot-environmental-monitoring.git",
    description: `An IoT project for environmental monitoring using two ESP32 devices with DHT22 and BME280 sensors. Data is transmitted securely via MQTT (HiveMQ Cloud) and TLS, stored in MongoDB, and displayed in a ReactJS frontend with a backend built in ExpressJS.`,
    technologies: [
      {
        icon: IconKeys.react,
      },

      {
        icon: IconKeys.nodejs,
      },
      {
        icon: IconKeys.cpp,
      },

      {
        icon: IconKeys.mqtt,
      },

      {
        icon: IconKeys.arduino,
      },
    ],
  },
];

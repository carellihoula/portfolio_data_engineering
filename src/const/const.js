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
  aws: "aws",
  jenkins: "jenkins",
  django: "django",
  gitlab: "gitlab",
  shell: "shell",
  springboot: "springboot",
  powerbi: "powerbi",

  // here add more icon keys
};

export const skills = [
  {
    title: "React Js",
    icon: IconKeys.react,
  },
  {
    title: "Node Js",
    icon: IconKeys.nodejs,
  },
  {
    title: "springBoot ",
    icon: IconKeys.springboot,
  },
  {
    title: "AWS",
    icon: IconKeys.aws,
  },

  {
    title: "Docker ",
    icon: IconKeys.docker,
  },
  {
    title: "shell",
    icon: IconKeys.shell,
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
    title: "GitLab CI ",
    icon: IconKeys.gitlab,
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
    title: "Mongo Db",
    icon: IconKeys.mongodb,
  },
  {
    title: "socket io",
    icon: IconKeys.socketio,
  },

  {
    title: "Redux Js",
    icon: IconKeys.redux,
  },

  {
    title: "Django",
    icon: IconKeys.django,
  },
  {
    title: "Tailwindcss",
    icon: IconKeys.tailwind,
  },

  {
    title: "Material UI",
    icon: IconKeys.materialUi,
  },

  {
    title: "PowerBI ",
    icon: IconKeys.powerbi,
  },
  {
    title: "Apache Spark",
    icon: IconKeys.apacheSpark,
  },

  {
    title: "Python ",
    icon: IconKeys.python,
  },
  {
    title: "SQL ",
    icon: IconKeys.sql,
  },
  {
    title: "C++ ",
    icon: IconKeys.cpp,
  },
  {
    title: "arduino",
    icon: IconKeys.arduino,
  },

  {
    title: "MQTT ",
    icon: IconKeys.mqtt,
  },
  {
    title: "Jenkins ",
    icon: IconKeys.jenkins,
  },

  {
    title: "Vite",
    icon: IconKeys.vite,
  },
];

export const projects = [
  {
    img: "../../../img/iotensim.png",
    title: "IoT Environmental Monitoring",
    isFinished: true,
    github_front:
      "https://github.com/carellihoula/iot-environmental-monitoring-frontend.git",
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
    link: "https://bundesliga-analysis-production.up.railway.app/",
    isFinished: true,
    github_back: "https://github.com/carellihoula/FootBallDataAnalysis.git",
    description: `A data engineering project analyzing team performance in the Bundesliga. Built with Python, Apache Spark, Streamlit, and Pandas for efficient data processing and visualization.`,
    technologies: [
      {
        icon: IconKeys.python,
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
    img: "../../../img/ai.png",
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
      {
        icon: IconKeys.django,
      },
    ],
  },
  
];

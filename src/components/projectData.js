const projectData = [
    {
      id: 1,
      title: "Audio Bid",
      description: "AudioBid is a Django-based voice transcription job portal with dynamic pricing and Google OAuth integration. It offers multiple audio upload options and utilizes AWS S3 for storage and streaming. The platform enables users to claim and get paid for jobs, along with a chat system for seamless communication.",
      image: require("../assets/AudioBidProject.png"),
      demoLink: "https://audiobid.herokuapp.com/",
      githubLink: "https://github.com/vasunverma/binary-classification-high-dim-data",
      tags: ["Python", "Django", "JavaScript", "S3", "PostgreSQL", "SES", "OAuth", "HTML/CSS", "Heroku"],
      tagColor: ["blue", "red", "yellow", "orange", "teal", "green", "purple", "pink", "red"],
    },
    {
      id: 2,
      title: "Binary Classification with High-Dimensional Data",
      description: "Binary classification models were developed using R, Caret, Baruta, XgBoost, Tensorflow, Keras, and RandomForest for binary classification with high-dimensional data. Predictor reduction techniques were applied, achieving 20 predictors while maintaining high predictive power. Rigorous cross-validation techniques led to 82% accuracy on the validation set, accompanied by insightful visualizations and statistical summaries.",
      image: require("../assets/BinaryClassificationProject.png"),
      githubLink: "https://github.com/vasunverma/binary-classification-high-dim-data",
      tags: ["R", "XgBoost", "Baruta", "Tensorflow", "PCA", "Keras", "RandomForest", "Caret"],
      tagColor: ["blue", "red", "yellow", "orange", "teal", "green", "purple", "pink"],
    },
    {
      id: 3,
      title: "Smart Air Purifier",
      description: "A budget-friendly smart air purifier was designed and developed using C++, Arduino, AWS IoT, HTML/CSS, JavaScript, and P5.js. The purifier integrated dust, temperature, and humidity sensors to provide real-time air quality feedback. It featured an automatic switch-on function triggered by high dust density and utilized MQTT protocol for real-time communication with the web app. The purifier effectively cleaned indoor air using HEPA H13 and activated carbon filters.",
      image: require("../assets/SmartAirPurifierProject.jpg"),
      githubLink: "https://github.com/vasunverma/binary-classification-high-dim-data",
      tags: ["C++", "Arduino", "AWS IoT", "JavaScript", "HTML/CSS", "P5.js", "MQTT"],
      tagColor: ["blue", "red", "yellow", "orange", "teal", "green", "purple"],
    },
    {
        id: 4,
        title: "Timer App",
        description: "A simple timer app made using Electron.js",
        image: require("../assets/SmartAirPurifierProject.jpg"),
        githubLink: "https://github.com/vasunverma/binary-classification-high-dim-data",
        tags: ["Electron", "Javascript", "HTML", "CSS"],
        tagColor: ["orange", "teal", "green", "purple"],
      },
  ];
  
  export default projectData;
  
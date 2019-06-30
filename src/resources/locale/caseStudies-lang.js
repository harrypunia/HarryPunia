const study1 = {
  en: {
    title: "VR Video Game",
    desc: "Using AR Libraries to create an Interactive Video Game controlled with gestures.",
    created: "December, 2018, Sheridan College",
    what: "A side scrolling level based game controlled with physical gestures",
    why: "This project is supposed to be an art installation in crowded places. The assets of the game are replaceable and can evolve according to the environment",
    how: "With help of Processing and Kinect based libraries, the project is able to detect numerous states of user gestures and allow the interaction with the game. The levels also rely on a JSON file which can be easily edited.",
    tags: ['VR', 'Video Game', 'Processing', 'Duo Project'],
    try: "Play game"
  },
  fr: {
    title: "Random Phrase, GIF Poster",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet magnam nihil officia quas sit, velit?",
    created: "December, 2018, Sheridan College",
    what: "A side scrolling level based game controlled with physical gestures",
    why: "This project is supposed to be an art installation in crowded places. The assets of the game are replaceable and can evolve according to the environment",
    how: "With help of Processing and Kinect based libraries, the project is able to detect numerous states of user gestures and allow the interaction with the game. The levels also rely on a JSON file which can be easily edited.",
    tags: ['One Man Army'],
    try: "Play game"
  }
};

const study2 = {
  en: {
    title: "Poster Design",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet magnam nihil officia quas sit, velit?",
    created: "January, 2019, Sheridan College",
    tags: ['Research', 'Development']
  },
  fr: {
    title: "Poster Design",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet magnam nihil officia quas sit, velit?",
    created: "January, 2019, Sheridan College",
    tags: ['Research', 'Development']
  }
};

const study3 = {
  en: {
    title: "Poster Design",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet magnam nihil officia quas sit, velit?",
    created: "January, 2019, Sheridan College",
    tags: ['Research', 'Development']
  },
  fr: {
    title: "Poster Design",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet magnam nihil officia quas sit, velit?",
    created: "January, 2019, Sheridan College",
    tags: ['Research', 'Development']
  }
};

const study4 = {
  en: {
    title: "Poster Design",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet magnam nihil officia quas sit, velit?",
    created: "January, 2019, Sheridan College",
    tags: ['Research', 'Development']
  },
  fr: {
    title: "Poster Design",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet magnam nihil officia quas sit, velit?",
    created: "January, 2019, Sheridan College",
    tags: ['Research', 'Development']
  }
};

export const caseStudies = {
  en: {
    title: "Case Studies",
    1: {...study1.en},
    2: {...study2.en},
    3: {...study3.en},
    4: {...study4.en}
  },
  fr: {
    title: 'Projets',
    1: {...study1.fr},
    2: {...study2.fr},
    3: {...study3.fr},
    4: {...study4.fr}
  }
};
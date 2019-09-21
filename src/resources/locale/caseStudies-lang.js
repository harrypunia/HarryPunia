import study1Page from "./studies/study1-lang";
import study2Page from "./studies/study2-lang";
import study3Page from "./studies/study3-lang";
import study4Page from "./studies/study4-lang";

const study1 = {
  en: {
    title: "Kinect Video Game",
    desc: "Using Kinect Libraries to create an Interactive Video Game controlled with gestures.",
    created: "December, 2018, Sheridan College",
    ...study1Page.en
  },
  fr: {
    title: "Random Phrase, GIF Poster",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet magnam nihil officia quas sit, velit?",
    created: "December, 2018, Sheridan College",
    ...study1Page.fr
  }
};

const study2 = {
  en: {
    title: "Mage Royale",
    desc: "Using Web Sockets and ES6 to create a hybrid MMO Battle Royale & MOBA game.",
    created: "August, 2019",
    ...study2Page.en
  },
  fr: {
    title: "Random Phrase, GIF Poster",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet magnam nihil officia quas sit, velit?",
    created: "December, 2018, Sheridan College",
    ...study2Page.fr
  }
};

const study3 = {
  en: {
    title: "Kinetic Typography",
    desc: "Using after effects express visual typography from a speech",
    created: "August, 2019",
    ...study3Page.en
  },
  fr: {
    title: "Random Phrase, GIF Poster",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet magnam nihil officia quas sit, velit?",
    created: "December, 2018, Sheridan College",
    ...study3Page.fr
  }
};


const study4 = {
  en: {
    title: "3D Motion Artifact",
    desc: "Using Physical computing technologies like Arduino to generate dynamic Motion in a 3D object",
    created: "August, 2019",
    ...study4Page.en
  },
  fr: {
    title: "Random Phrase, GIF Poster",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet magnam nihil officia quas sit, velit?",
    created: "December, 2018, Sheridan College",
    ...study4Page.fr
  }
};

export const caseStudies = {
  en: {
    title: "Case Studies",
    problem: "Problem",
    solution: "Solution",
    about: "About",
    process: "Process",
    members: "Study Members",
    links: "Links",
    1: {...study1.en},
    2: {...study2.en},
    3: {...study3.en},
    4: {...study4.en}
  },
  fr: {
    title: 'Projets',
    problem: "Problem",
    solution: "Solution",
    gallery: "Gallery",
    process: "Process",
    members: "Study Members",
    links: "Links",
    1: {...study1.fr},
    2: {...study2.fr},
    3: {...study3.fr},
    4: {...study4.fr}
  }
};
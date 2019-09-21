import study1Page from "./studies/study1-lang";
import study2Page from "./studies/study2-lang";
import study3Page from "./studies/study3-lang";
import study4Page from "./studies/study4-lang";

const study1 = {
  en: {
    title: "Kinect Video Game",
    desc: "Level based Kinect game, which is controlled by physical gestures",
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
    desc: "Massive Multi-player io game which is a hybrid of Battle Royale and MOBA genre.",
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
    desc: "Motion Type to visually express a speech on Plato's philosophies",
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
    title: "3D Motion Box",
    desc: "A Motion box creates motion by moving multiple boxes in 3D space",
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
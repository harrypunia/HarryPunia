import study1Page from "./studies/study1-lang";

const study1 = {
  en: {
    title: "VR Video Game",
    desc: "Using AR Libraries to create an Interactive Video Game controlled with gestures.",
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

export const caseStudies = {
  en: {
    title: "Case Studies",
    gallery: "Gallery",
    process: "Process",
    members: "Study Members",
    1: {...study1.en},
  },
  fr: {
    title: 'Projets',
    gallery: "Gallery",
    process: "Process",
    members: "Study Members",
    1: {...study1.fr},
  }
};
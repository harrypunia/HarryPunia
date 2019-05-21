const study1= {
  en: {
    title: "Random Phrase, GIF Poster",
    what: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet magnam nihil officia quas sit, velit? Dolore error pariatur sequi. A aliquid assumenda consectetur est itaque laboriosam odio quia quod ut.",
    created: "December, 2018, Sheridan College",
    details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet magnam nihil officia quas sit, velit? Dolore error pariatur sequi. A aliquid assumenda consectetur est itaque laboriosam odio quia quod ut.",
    tags: ['One Man Army']
  },
  fr: {
    title: "Random Phrase, GIF Poster",
    what: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet magnam nihil officia quas sit, velit? Dolore error pariatur sequi. A aliquid assumenda consectetur est itaque laboriosam odio quia quod ut.",
    created: "December, 2018, Sheridan College",
    details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet magnam nihil officia quas sit, velit? Dolore error pariatur sequi. A aliquid assumenda consectetur est itaque laboriosam odio quia quod ut.",
    tags: ['One Man Army']
  }
};

const study2= {
  en: {
    title: "Poster Design",
    what: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet magnam nihil officia quas sit, velit? Dolore error pariatur sequi. A aliquid assumenda consectetur est itaque laboriosam odio quia quod ut.",
    created: "January, 2019, Sheridan College",
    details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet magnam nihil officia quas sit, velit? Dolore error pariatur sequi. A aliquid assumenda consectetur est itaque laboriosam odio quia quod ut.",
    tags: ['Research', 'Development']
  },
  fr: {
    title: "Poster Design",
    what: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet magnam nihil officia quas sit, velit? Dolore error pariatur sequi. A aliquid assumenda consectetur est itaque laboriosam odio quia quod ut.",
    created: "January, 2019, Sheridan College",
    details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet magnam nihil officia quas sit, velit? Dolore error pariatur sequi. A aliquid assumenda consectetur est itaque laboriosam odio quia quod ut.",
    tags: ['Research', 'Development']
  }
};

export const caseStudies = {
  en: {
    title: "Case Studies",
    rolesTitle: "Roles?",
    whatTitle: "What?",
    detailsTitle: "Details?",
    1:{...study1.en},
    2: {...study2.en}
  },
  fr: {
    title: 'Projets',
    rolesTitle: "Rôles?",
    whatTitle: "Quoi?",
    detailsTitle: "Détails?",
    1: {...study1.fr},
    2: {...study2.fr},
  }
};
//Dependencies
import Vue from "vue"
import VueI18n from "vue-i18n"
//Assets
import {global} from "./global-lang";
import {intro} from "./intro-lang";
import {nav} from "./nav-lang";
import {passion} from "./passion-lang";
import {skills} from "./skills-lang";
import {caseStudies} from "./caseStudies-lang";
import {clients} from "./clients-lang";
import {social} from "./social-lang";
import {about} from "./about-lang";

Vue.use(VueI18n);

export const i18n = new VueI18n({
  locale: 'en',
  messages: {
    en: {
      ...global.en,
      intro: {...intro.en},
      nav: {...nav.en},
      passion: {...passion.en},
      skills: {...skills.en},
      caseStudies: {...caseStudies.en},
      clients: {...clients.en},
      social: {...social.en},
      about: {...about.en}
    },
    fr: {
      ...global.fr,
      intro: {...intro.fr},
      nav: {...nav.fr},
      passion: {...passion.fr},
      skills: {...skills.fr},
      caseStudies: {...caseStudies.fr},
      clients: {...clients.fr},
      social: {...social.fr},
      about: {...about.fr}
    }
  }
});
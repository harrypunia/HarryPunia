//Dependencies
import Vue from "vue"
import VueI18n from "vue-i18n"
//Assets
import {intro} from "./intro-lang"
import {nav} from "./nav-lang";
import {passion} from "./passion-lang"
import {skills} from "./skills-lang";
import {caseStudies} from "./caseStudies-lang";
import {clients} from "./clients-lang";
import {about} from "./about-lang";

Vue.use(VueI18n);

export const i18n = new VueI18n({
  locale: 'en',
  messages: {
    en: {
      intro: {...intro.en},
      nav: {...nav.en},
      passion: {...passion.en},
      skills: {...skills.en},
      caseStudies: {...caseStudies.en},
      clients: {...clients.en},
      about: {...about.en}
    },
    fr: {
      intro: {...intro.fr},
      nav: {...nav.fr},
      passion: {...passion.fr},
      skills: {...skills.fr},
      caseStudies: {...caseStudies.fr},
      clients: {...clients.fr},
      about: {...about.fr}
    }
  }
});
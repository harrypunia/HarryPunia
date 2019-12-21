export default {
  en: {
    problem: "Create an easier way to design and develop web projects without loosing resources on repetitive setups.",
    solution: "A pre-designed flexible Vue Framework that allows for easy css and template manipulation for easier" +
      " design and development",
    roles: ["Project Lead"],
    duration: "6 Weeks and in Progress",
    tags: ['Vue', 'Components', 'Re-usability', 'Framework'],
    try: "Watch",
    process: {
      idea: {
        title: "Core Concept",
        desc: "The core concept of VUI was to create flexible and pre-designed components that would act as a " +
          "boilerplate for web projects. The main inspiration for this project started from the initial exposure to " +
          "Material-UI. Though material UI is a very heavy framework and requires the developer to fully migrate " +
          "towards using their API. For VUI, the API was kept extremely minimalistic and the majority of the development " +
          "is left for the developer. A lot of Scss mixins are also exposed to the developer providing them with full " +
          "access to the classes any layers deep into the framework."
      },
      components: {
        title: "Components",
        subtitle: "Currently VUI is in production and there are roughly ~8-10 components supported by the Framework",
      },
      dev: {
        title: "API",
        subtitle: "The Api of these components avoid making any drastic changes. They maintain most of the VUE api " +
          "and add more props aside from it.",
        button: {
          title: "Button API",
          desc: "In case of button the api here is very minimalistic. The image displays the only additional prop " +
            "for button is the type, which sets the default css of the button. The button maintains any additional vue " +
            "api with help of $bind-attrs"
        },
        type: {
          title: "Typography",
          desc: "Typography is an essential element of design. VUI provides a Type component that has all text html " +
            "components from h1-h6 and p, a tags included. The types are also stylized for a better starting point. The " +
            "component also provides handy props like: center, noMargin, light, regular, bold and so on for quick and " +
            "easy customization of each type"
        },
        template: {
          title: "Templating with Grids",
          desc: "Grid is a non-ui component that is used for templating for on the web-page. This component uses" +
            " flex-box to template its children and create grids out of content. Additionally the image also displays" +
            " the api for input and Type component."
        }
      }
    }
  },
  fr: {
    what: "Create a Visual Kinetic Typography video for a persuasive speech. The speech must be around 20 seconds and " +
      "mustn't contain any music.",
    why:
      "The motive is to amplify the message being conveyed in the speech with help of just text and no graphics.",
    how:
      "After effects was the main software to create this project. But the main challenge was to be creative and " +
      "expressive. A lot of research & experimentation was done to achieve the outcome.",
    tags:
      ['Typography', 'After Effects', 'Visual Design', 'Solo Project', 'College'],
    try:
      "Watch",
    process:
      {
        concept: {
          title: "Conceptualization",
          1:
            {
              title: "Audio Hunting",
              desc:
                "To begin, I looked for audio's of topics that are interesting to me"
            }
          ,
          2:
            {
              title: "Font Exploration",
              desc:
                "Putting fonts that could fit on the audio side-by-side to get a broader picture."
            }
          ,
          3:
            {
              title: "Transcript",
              desc:
                "Creating a transcript of the audio to understand the message and selected appropriate Font-Family"
            }
        }
        ,
        design: {
          1:
            {
              title: "Rough Sketches",
              desc:
                "Early Sketches for the possible frames for the sequence"
            }
          ,
          2:
            {
              title: "Sequence 1",
              desc:
                ""
            }
          ,
          3:
            {
              title: "Sequence 2",
              desc:
                ""
            }
          ,
          4:
            {
              title: "Sequence 3",
              desc:
                ""
            }
          ,
          5:
            {
              title: "Sequence 4",
              desc:
                ""
            }
          ,
          6:
            {
              title: "Sequence 5",
              desc:
                ""
            }
          ,
          7:
            {
              title: "Putting it all Together in AE",
              desc:
                ""
            }
        }
      }
  }
}
;
export default {
  en: {
    solution: "Mage Royale is a massive multi-player game designed and developed for browsers. The purpose of the " +
      "game is to allow users to enjoy popular game genres like MOBA and Battle Royale on their browsers without having " +
      "the hassle to get appropriate tech for it.",
    roles: ["Project Manager", "Lead Front-end Developer", "UI Designer"],
    duration: "6 Months and In Progress",
    tags: ['Game', 'Multi-player', 'Personal', 'Team Project'],
    try: "Contribute",
    process: {
      design: {
        title: "Design Process",
        1: {
          title: "Logo Design",
          desc: "To begin the branding we decided to do logo design and we wanted to express the idea of the game " +
            "through it. We heavily inspired our logo from MOBA games and incorporating our colors to it. Adding magic " +
            "stones to and gold to add more representation towards mages."
        },
        2: {
          title: "Home Page - Draft",
          desc: "Designs for Home Page had 3 sections. It was necessary for the user-flow to priorities Guest User, " +
            "since users generally don't want to SignUp and just get a quick buzz out of the game. We also had a Store to " +
            "purchase unique characters and tertiary information relevant to the game."
        },
        3: {
          title: "Home Page - Refactored",
          desc: "We improved on our user-flow and designs to make the experience more fluid. The Guest SignUp was " +
            "further prioritized and made the focus of the page. Secondary methods of joining games were added as tabs. " +
            "We also added all tertiary information like How To Play & Controls on a Side Nav. The least important " +
            "information was at the bottom of the card, which includes support, reports, and social media. The game shop " +
            "was put on a coming soon state for the alpha version, hence a badge was designed to display that. Additionally, " +
            "a character selection section was created on the left-hand side of the forms to allow the user to change characters" +
            " at any moment."
        },
        controls: {
          title: "Game Controls",
          desc: "The entire game runs on a set of controls that the user has access to. The game allows the user to " +
            "change controls at any stage of the game. Controls were implemented with validation to avoid duplication. The " +
            "user can select the control they want to change and assign a new key. If the key already exists the controls" +
            " will throw an error with visual ques. Controls are also configured with Local Storage allowing the user to store " +
            "their settings on their browser and not lose it after leaving the page. This also allows for additional " +
            "functionality to Reset back to Default."
        },
        settings: {
          title: "Game Settings",
          desc: "Game Settings was not only implemented to allow users to personalize their game-play experience but also" +
            " as a tool for developers to toggle some important settings. At the time of writing this, Mage Royale allows" +
            " users to personalize their graphics settings, which is crucial to improve performance on small devices like" +
            " laptops. It provides the ability to toggle audio settings and some general flags. In Developer mode," +
            " the developers can toggle performance graph, prop validation and parameter logs to enhance debugging abilities."
        },
        characters: {
          title: "Character Development",
          desc: "The team made further progress on character development with details character designs, background stories" +
            ", and skills. The designs have been kept very minimalistic to stay cohesive with the art style of the game. These" +
            " characters are planned to be launched in the Alpha version with additional content like skins and accessories."
        },
        5: {
          title: "First Character",
          desc: "Our First Character Design is to make our development life easier. Though this will not make it to the " +
            "MVP, it gives us a good idea of the art direction and style we will be expecting the first release."
        },
        6: {
          title: "Environment Assets",
          desc: "The Environment of the game contains some elements that interact with the player, whereas others that " +
            "are just for decoration. Elements like bushes and trees help players hide and Fountain bless them with " +
            "health and mana. There are also assets like flyers and lanterns that just add to the environment and the overall" +
            " vibe of the game. The environment also contains coins that the player collects by moving around the forest " +
            "in order to get stronger by purchasing items. Additionally, we have monsters planned to be implemented in the " +
            "game to allow the player to gain additional gold + experience by killing them, however, we have delayed this " +
            "implementation for Beta version / official launch."
        },
        7: {
          title: "Character Slot",
          desc: "This slot design is supposed to convey information about the character's skills (cooldown/information). " +
            "For convenience each skill displays the key user selected in Controls Panel. The slot also displays the " +
            "current Health and available Mana. The designs are very simple to avoid complexity and convey information " +
            "efficiently."
        },
        8: {
          title: "Mini Map",
          desc: "The Mini Map displays some information regarding the map generated at the beginning of the game. " +
            "It displays the bushes (green), Fountains (Blue) and the zone (Red: active, White: Destination). This map " +
            "is a lot simpler than the game since it's objective is to convey information efficiently without any visual" +
            " noise"
        },
        9: {
          title: "In-Game Shop",
          desc: "This shop is conceptually inspired by MOBA games. Players, during the game, can purchase items with " +
            "a currency they farm during the game to buff their characters' stats. This is the crucial element to winning " +
            "fights and winning the game. The shop is divided into sections based on categories of items. There is a " +
            "recommended panel for each unique character to help get new players introduced to the shop."
        },
        10: {
          title: "Character Stats",
          desc: "Characters stats display the active stats of the character and any changes made to it. This is beneficial " +
            "for players who want to know how each character works and learn on the go. The UI organizes these skills by " +
            "their types and then provide basic information of, name, value, and addition/subtraction made by purchasing " +
            "items from the shop"
        }
      },
      code: {
        title: "Code Process",
        explanation: {
          title: "Code Explanation",
          desc: "OOP was a necessity to maintain and develop smoothly",
          info: "This was a large scale project and the management was a crucial part of this project to make it " +
            "scalable. The directory structure is well nested and the scss & server follow the same file structure " +
            "to make communication between different sections easier. Practices like superclasses, singletons & " +
            "polymorphism make OOP extremely easy and readable."
        },
        management: {
          title: "File Management",
          desc: "A Game of this scale is hard to maintain with a sloppy project file structure",
          1: "This handles Home Page and Initiating a game",
          2: "This handles each section of the game, like player, env, enemies & zone",
          3: "This handles each env structure and interaction of it",
          4: "This handles the player and its interactions",
          5: "Each class has a client class which handles communication with server",
          6: "Each character extends this to get basic functionality",
          7: "Each skill extends this to get basic functionality",
          8: "This handles all UI and interactions with Character stats"
        },
        practices: {
          1: {
            title: "Super Classes",
            desc: "Creating a super class was a very helpful tool, as it acted as a boiler plate for most classes." +
              " This not only allowed for global variables to be easy to access and maintain but handle global methods " +
              "nested inside important classes like players and characters."
          },
          2: {
            title: "Polymorphism",
            desc: "Allowing other classes to morph the parent class as a parameter was extremely beneficial in the case " +
              "of shop items. As each item has very unique properties and creating an API for such a complex structure would " +
              "only pollute the parameters and variables. With Polymorphism, it was easy to pass the reference of the parent " +
              "and allow the child to morph data at the second level."
          },
          3: {
            title: "Singleton",
            desc: "There are a few cases where, as a developer, I wanted to keep the API consistent and create classes for " +
              "each functionality. Hence for classes that only contained global variables/methods, singletons came in very" +
              " handy."
          }
        }
      }
    }
  },
  fr: {
    what: "A Massive multi-player browser game, that allows users to join in for a session with 99 other players. " +
      "Players can select unique characters to enter the session, farm form gold to get stronger meanwhile fighting" +
      " other players.",
    why: "This project is a browser multi-player gaming experience for users with not powerful enough machines " +
      "to run modern day AAA-games.",
    how: "With help of Web Sockets, Mongo DB, NodeJS, ES6 & Canvas(P5), the project is able to create a 2D gaming " +
      "experience that is capable of being played over different machines over the internet.",
    tags: ['Web Sockets', 'Video Game', 'Canvas', 'Team Project', 'Personal', 'Multi-player'],
    try: "Contribute",
    process: {
      design: {
        title: "Design Process",
        1: {
          title: "Branding",
          desc: "To begin the branding we decided to do a logo design and we wanted to express the idea of the game " +
            "through it. We heavily inspired our logo from MOBA games and incorporating our colors to it. Adding magic " +
            "stones to and gold to add more representation towards mages."
        },
        2: {
          title: "Home Page - Draft",
          desc: "Designs for Home Page had 3 sections. It was necessary for the user-flow to priorities Guest User, " +
            "since users generally dont want to SignUp and just get a quick buzz out of the game. We also had a store to " +
            "purchase unique characters and tertiary information relevant to the game"
        },
        3: {
          title: "Home Page - Refactored",
          desc: "We improved on our user-flow and designs to make the experience more fluid. The Guest SignUp was " +
            "further prioritized and made the focus of the page. Secondary methods of joining game were added as tabs. " +
            "We also added all tertiary information like How To Play & Controls on a Side Nav. The least important " +
            "information was at the bottom of the card, which includes supports, reports and social media."
        },
        4: {
          title: "Game Controls",
          desc: "Before the user joins the game, he/she can change the controls. The UI uses the template used very often " +
            "in the UI for the game. User can click on each item to edit it(wiggles). They have to confirm and cancel " +
            "those changes and they can always revert back to default."
        },
        5: {
          title: "First Character",
          desc: "Our First Character Design is to make our development life easier. Though this will not make it to the " +
            "MVP, it gives us a good idea of the art direction and style we will be expecting the first release."
        },
        6: {
          title: "Environment Assets",
          desc: "The Environment of the game contains some elements that interact with the player, whereas others that " +
            "are just for decoration. Elements like, bushes and tress help player hide and Fountain bless them with " +
            "health and mana. There are also assets like flyers and lanterns that just add to the environment and the overall" +
            " vibe of the game"
        },
        7: {
          title: "Character Slot",
          desc: "This slot design is supposed to convey the information of the characters skills (cooldown/information). " +
            "For convenience each skill displays the key user selected in Controls Panel. The slot also displays the " +
            "current Health and available Mana. The designs are very simple to avoid complexity and convey information " +
            "efficiently."
        },
        8: {
          title: "Mini Map",
          desc: "The Mini Map displays some information regarding the map generated at the beginning of the game. " +
            "It displays the bushes (green), Fountains (Blue) and the zone (Red: active, White: Destination). This map " +
            "is a lot simpler than the game since it's objective is to convey information efficiently without any visual" +
            " noise"
        },
        9: {
          title: "In Game Shop",
          desc: "This shop is conceptually inspired from MOBA games. Players, during the game, can purchase items with " +
            "currency they farm during the game to buff their characters stats. This is the crucial element to winning " +
            "fights and winning the game. The shop is divided into sections based on categories of items. There is a " +
            "recommended panel to for each unique character to help get new players introduced to the shop."
        },
        10: {
          title: "Character Stats",
          desc: "Characters stats display the active stats of the character and any changes made to it. This is beneficial " +
            "for players who want to know how each characters works and learn on the go. The UI organizes these skills by " +
            "their types and then provide basic information of, name, value, and addition/subtraction made by purchasing " +
            "items from the shop"
        }
      },
      code: {
        title: "Code Process",
        explanation: {
          title: "Code Explanation",
          desc: "OOP was a necessity to maintain and develop smoothly",
          info: "This was a large scale project and the management was a crucial part of this project to make it " +
            "scalable. The directory structure is well nested and the scss & server follows the same file structure " +
            "to make communication between different sections easier. Practices like super classes, singletons & " +
            "polymorphism make OOP extremely easy and readable."
        },
        management: {
          title: "File Management",
          desc: "A Game of this scale is hard to maintain with a sloppy project file structure",
          1: "This handles Home Page and Initiating game",
          2: "This handles each section of the game, like player, env, enemies & zone",
          3: "This handles each env structure and interaction of it",
          4: "This handles the player and its interactions",
          5: "Each class has a client class which handles communication with the server",
          6: "Each character extends this to get basic functionality",
          7: "Each skill extends this to get basic functionality",
          8: "This handles all UI and interactions with Character stats"
        },
        practices: {
          1: {
            title: "Super Classes",
            desc: "Creating a superclass was a very helpful tool, as it acted as a boilerplate for most classes." +
              " This not only allowed for global variables to be easy to access and maintain but handle global methods " +
              "nested inside important classes like players and characters."
          },
          2: "Polymorphism",
          3: "Singleton"
        }
      }
    }
  }
};
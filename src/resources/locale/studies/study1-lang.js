export default {
  en: {
    problem: "Creating an art installation to allow users to have an interactive experience in different public environments",
    solution: "A gesture based Kinect Game with easily replaceable assets that allows the game to " +
      "adapt to different environments. ",
    tags: ['Kinect', 'Game', 'Processing', 'Team of 2'],
    try: "Watch Gameplay",
    duration: "6 Months",
    roles: ["Lead Developer", "Game Conceptualization", "Design Support/Guidance"],
    process: {
      concept: {
        title: "Conceptualization",
        1: {
          title: "Brain Storming",
          desc: "To begin with, a lot of ideas were brainstormed was done for places/locations the installations could" +
            " be done in"
        },
        2: {
          title: "Idea",
          desc: "After multiple discussions between team members, we finally decided to create a video game that would " +
            "be able to adapt to different environments with simple assets. This game would be controlled by physics" +
            " movement/gestures, like closing either of your fists to move and both to jump."
        }
      },
      design: {
        title: "Design Process",
        1: {
          title: "Floor/Roof Asset Designs",
          desc: "We wanted the assets to have a block-y look and be heavily inspired from MineCraft. We tried different" +
            "variations with impurites in dirt and stones, but for the final version we chose the simple dirt & grass" +
            "variations."
        },
        2: {
          title: "Background Design",
          desc: "The background of the game runs in parallel to player movement. Our motive was to achieve a fantasy/" +
            "happy vibe from this asset. As this covers majority of the game area we tried making it the heaviest asset" +
            "in the game."
        },
        3: {
          title: "Character Design/Frames",
          desc: "The character of the was a slime blob. The design for the character was very simple and based on " +
            "pixel art style which fit together with the entire theme."
        },
        4: {
          title: "Obstacle Designs",
          desc: "There are 2 obstacles in the game, Spikes and doors. The spikes kill the player whereas, the doors " +
            "block the player but kills if the player hits the pointy end."
        },
        5: {
          title: "Bringing it all together",
          desc: ""
        }
      },
      development: {
        title: "Development Process",
        1: {
          title: "Roof/Floor",
          desc: "To begin, 2 classes were created, Roof & Floor which handle the outermost box and the remainders." +
            "At this point instances were made and places at random heights on th Env class."
        },
        2: {
          title: "Floor Physics",
          desc: "The number of blocks in the level were not a lot for this demo. But keeping scalability in mind, most" +
            " the physics rendering was simplified. There is only 1 active block that applies physics and 2 neighbouring" +
            "blocks that are waiting to become active blocks. This avoids the need for a nested for loops"
        },
      },
      code: {
        title: "Code Process",
        explanation: {
          title: "Code Explanation",
          desc: "The main focus while developing the game was to keep the code modulated and easier to scale/handle",
          info: "To make things easier, the code was modulated and divided into classes. All level design data was " +
            "fetched from an external JSON file and global assets were introduced for easy game testing.",
        },
        management: {
          title: "File Management",
          desc: "Creating a 2D game can quickly get overwhelming. This code architecture helped things stay manageable",
          1: "This file handles all the functions at the root level.",
          2: "This file handles all the major communications among classes that form the game.",
          3: "This file handles all player related data and methods.",
          4: {
            0: "These files handle two classes. The top tile and the remainder blocks underneath.",
            1: "The file also keeps track of the active block player is on.",
            2: "The file also keeps a check if the user has moved to a neighbouring class."
          },
          5: {
            0: "This class handles all the obstacles in the game.",
            1: "This class uses the index of bar to position itself itself on top of it. Further physics is added to it",
            2: "This class uses the same methods as Spikes for positioning & move constantly in that location. " +
              "This animation uses booleans to switch the direction when the doors reach either end of predefined limits."
          },
        },
        practices: {
          1: "Modular Development",
          2: "Assets Management"
        }
      }
    }
  },
  fr: {
    what: "Un jeu basé sur le niveau de défilement latéral contrôlé avec des gestes physiques.",
    why: "Ce projet est une installation artistique dans des lieux très fréquentés. Les atouts du jeu sont remplaçables" +
      " et peuvent s’adapter en fonction de l’environnement.",
    how: "Avec l'aide de Processing et de bibliothèques basées sur Kinect, le projet est capable de détecter de nombreux" +
      " états de gestes d'utilisateur et de permettre une interaction avec le jeu. Le jeu utilise des méthodes flexibles" +
      " telles que les importations JSON pour les conceptions de niveau et une structuration très simple des ressources," +
      " facilement remplaçables. Le jeu est également accessible à partir d’un clavier en guise de solution de rechange " +
      "dans les cas où Kinect n’est pas disponible.",
    tags: ['Kinect', 'Video Game', 'Processing', 'Duo Project', 'College'],
    try: "Watch Gameplay",
    process: {
      concept: {
        title: "Conceptualization",
        1: {
          title: "Brain Storming",
          desc: "To begin with, a lot of ideas were brainstormed was done for places/locations the installations could" +
            " be done in"
        },
        2: {
          title: "Idea",
          desc: "After multiple discussions between team members, we finally decided to create a video game that would " +
            "be able to adapt to different environments with simple assets. This game would be controlled by physics" +
            " movement/gestures, like closing either of your fists to move and both to jump."
        }
      },
      design: {
        title: "Design Process",
        1: {
          title: "Floor/Roof Asset Designs",
          desc: "We wanted the assets to have a block-y look and be heavily inspired from MineCraft. We tried different" +
            "variations with impurites in dirt and stones, but for the final version we chose the simple dirt & grass" +
            "variations."
        },
        2: {
          title: "Background Design",
          desc: "The background of the game runs in parallel to player movement. Our motive was to achieve a fantasy/" +
            "happy vibe from this asset. As this covers majority of the game area we tried making it the heaviest asset" +
            "in the game."
        },
        3: {
          title: "Character Design/Frames",
          desc: "The character of the was a slime blob. The design for the character was very simple and based on " +
            "pixel art style which fit together with the entire theme."
        },
        4: {
          title: "Obstacle Designs",
          desc: "There are 2 obstacles in the game, Spikes and doors. The spikes kill the player whereas, the doors " +
            "block the player but kills if the player hits the pointy end."
        },
        5: {
          title: "Bringing it all together",
          desc: ""
        }
      },
      development: {
        title: "Development Process",
        1: {
          title: "Roof/Floor",
          desc: "To begin, 2 classes were created, Roof & Floor which handle the outermost box and the remainders." +
            "At this point instances were made and places at random heights on th Env class."
        },
        2: {
          title: "Floor Physics",
          desc: "The number of blocks in the level were not a lot for this demo. But keeping scalability in mind, most" +
            " the physics rendering was simplified. There is only 1 active block that applies physics and 2 neighbouring" +
            "blocks that are waiting to become active blocks. This avoids the need for a nested for loops"
        },
      },
      code: {
        title: "Code Process",
        explanation: {
          title: "Code Explanation",
          desc: "The main focus while developing the game was to keep the code modulated and easier to scale/handle",
          info: "To make things easier, the code was modulated and divided into classes. All level design data was " +
            "fetched from an external JSON file and global assets were introduced for easy game testing.",
        },
        management: {
          title: "File Management",
          desc: "Creating a 2D game can quickly get overwhelming. This code architecture helped things stay manageable",
          1: "This file handles all the functions at the root level.",
          2: "This file handles all the major communications among classes that form the game.",
          3: "This file handles all player related data and methods.",
          4: {
            0: "These files handle two classes. The top tile and the remainder blocks underneath.",
            1: "The file also keeps track of the active block player is on.",
            2: "The file also keeps a check if the user has moved to a neighbouring class."
          },
          5: {
            0: "This class handles all the obstacles in the game.",
            1: "This class uses the index of bar to position itself itself on top of it. Further physics is added to it",
            2: "This class uses the same methods as Spikes for positioning & move constantly in that location. " +
              "This animation uses booleans to switch the direction when the doors reach either end of predefined limits."
          },
        },
        practices: {
          1: "Modular Development",
          2: "Assets Management"
        }
      }
    }
  }
};
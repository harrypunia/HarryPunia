export default {
  en: {
    what: "A side scrolling level based game controlled with physical gestures.",
    why: "This project is supposed to be an art installation in crowded places. The assets of the game are replaceable and can adjust according to" +
      " the environment.",
    how: "With help of Processing and Kinect based libraries, the project is able to detect numerous states of user gestures and allow the interaction" +
      " with the game. The game uses flexible methods like JSON imports for level designs and very simple asset structuring which are easily" +
      " replaceable. The game is also accessible from a keyboard as a fallback for situations where kinect is unavailable.",
    tags: ['VR', 'Video Game', 'Processing', 'Duo Project'],
    try: "Play game",
    process: {
      code: {
        title: "Development Process",
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
  ,
  fr: {
    what: "A side scrolling level based game controlled with physical gestures.",
    why:
      "This project is supposed to be an art installation in crowded places. The assets of the game are replaceable and can evolve according to" +
      " the environment.",
    how:
      "With help of Processing and Kinect based libraries, the project is able to detect numerous states of user gestures and allow the interaction" +
      " with the game. The game uses flexible methods like JSON imports for level designs and very simple asset structuring which are easily" +
      " replaceable. The game also functional from a keyboard as a fallback for situations where kinect is unavailable.",
    tags:
      ['VR', 'Video Game', 'Processing', 'Duo Project'],
    try:
      "Play game"
  }
}
;
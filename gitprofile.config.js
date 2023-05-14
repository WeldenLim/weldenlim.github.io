// gitprofile.config.js

const config = {
  github: {
    username: 'WeldenLim', //TODO: Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 4, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  scratch: {
    username: 'VirtualRobloxYes', //TODO: Your Scratch username. (Required)
    limit: 8, // How many projects to display; maximum 20
    sortBy: 'date', // date | views | remixes
    corsProxy: "https://scratchapicors-qmr9ek0n8-weldenlim.vercel.app/" //TODO: Enter your CORS Proxy here
  },
  social: { //TODO: Add in Socials
    linkedin: '',
    facebook: '',
    instagram: '',
    tiktok: '',
    email: 'weldenlim2011@gmail.com',
    website: '',
    // dev: '',
    // twitter: '',
    // mastodon: '',
    // dribbble: '',
    // behance: '',
    // medium: '',
    // stackoverflow: '', // format: userid/username
    // skype: '',
    // telegram: '',
    // phone: '',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Scratch',
    'Microbit',
    'Design Thinking',
    'Python',
    'Git',
    'MakeCode',
    'Robotics',
    'Math Olympiad'
  ],
  experiences: [
    {
      company: 'The Young Maker',
      position: 'Student',
      from: 'April 2022',
      to: 'Present',
      companyLink: 'https://theyoungmaker.com',
    },
    {
      company: 'Piano',
      position: 'Grade 5 Student',
      from: 'January 2018',
      to: 'Present',
    },
  ],
  certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ],
  education: [
    {
      institution: 'Elias Park Primary School',
      degree: 'PSLE',
      from: '2018',
      to: 'Present',
    },
  ],

  // TODO: Add external projects
  externalProjects: [
    {
      title: 'Microbit Space Invaders',
      description:
        "This project features a traditional Space Invaders game developed for the Microbit v2 platform. It utilizes while loops, conditional statements, variables, and the Microbit's native game coordinate system to deliver an engaging gaming experience.",
      imageUrl:
        'https://www.svg.com/img/gallery/the-original-idea-behind-space-invaders-that-could-have-changed-gaming-forever/l-intro-1608754172.jpg',
      link: 'https://makecode.microbit.org/_ED1KtuX1xRka',
    },
    {
      title: 'Microbit Treasure Hunt',
      description:
        "Treasure Hunt is an engaging Micro:bit project designed using MakeCode's inbuilt game system. In this immersive game, players are tasked with navigating their character through a virtual maze to collect hidden treasures. The challenge lies in avoiding strategically placed bombs throughout the game, The Mico:bits LED grid serves as the display, lighting up to indicate treasures, bombs, and the players current position. The game showcases the power of Mico:bit and MakeCode, creating a fun interactive experience that tests players' strategy and quick thinking.",
      imageUrl:
        'https://www.trainerbubble.com/wp-content/uploads/2015/09/Treasure-Hunt_web.jpg',
      link: 'https://makecode.microbit.org/_4Y6KJkeEM3su',
    },
    {
      title: 'Microbit Pacman',
      description:
        "Pacman is an inventive Micro:bit project, designed using the MakeCode's inbuily game system. Drawing inspiration from the classic Pacman game, players are tasked with navigating their Pacman character to eat dots displayed on the Micro:bit's LED grid, while avoiding the ghosts. The unique twist of this game lies in the use of Micro:bit's inbuilt gyroscope for controls, where players tilt the Micro:bit in different directions to move the Pacman. This project beautifully blends the nostalgia of the classic game with modern technology, providing an exciting and interactive gaming experience that tests the player's agility and quick reflexes.",
      imageUrl:
        'https://easydrawingguides.com/wp-content/uploads/2021/09/Pacman-Pixel-Art-step-by-step-drawing-tutorial-step-10.png',
      link: 'https://makecode.microbit.org/_ED1KtuX1xRka',
    },
    {
      title: 'Microbit Buzz Wire',
      description:
        "The Buzz Wire Game is an innovative project utilizing the Micro:bit's circuit system. In this captivating game, players are given firve lives and the challenge to skillfully navigate a loop from one end of the buzzwire to the other without making contact more than four times. Every touch with the buzzwire results in a life lost, tracked bu the Micro:bit's LED display. The game conclides victoriously when the player successfully transports the loop to the other end of the wire without depleting all lives. This project showcases the interactive possibilities of the Micro:bit's circuit system, testing the player's steadiness and precision in a thrilling and engaging manner.",
      imageUrl:
        'https://www.resourcecentre.org.uk/wp-content/uploads/2016/10/Buzz-wire-001.jpg',
      link: 'https://makecode.microbit.org/_XR88Kw9MRiMH',
    }
  ],
  // Display blog posts from your medium or dev account. (Optional)
  // blog: {
  //   source: 'dev', // medium | dev
  //   username: 'arifszn', // to hide blog section, keep it empty
  //   limit: 2, // How many posts to display. Max is 10.
  // },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: { //TODO: Change the theme of the website to your liking
    defaultTheme: 'bumblebee',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    //TODO: Change to false if you want to have the option to see switch
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
  class="text-primary" href="https://github.com/arifszn/gitprofile"
  target="_blank"
  rel="noreferrer"
>GitProfile</a> & <div class="flex items-center"><img src="https://i.ibb.co/L10rd94/TYMLogo-Background.png" width="20" height="20" alt="TYMLogo-Background" border="0" /> <a class="text-primary" href="https://theyoungmaker.com/" target="_blank" rel="noreferrer">The Young Maker </a></div>`,
};

export default config;

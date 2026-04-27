const projects = [
    {
    id: 'nextstop',
    icon: '🗺',
    tag: 'Web App',
    name: 'NextStop',
    sub: 'Smart Itinerary Planner',
    desc: 'A group project for the Data Structures and Algorithms class. Uses AI and mapping APIs to generate personalized travel itineraries tailored to each user.',
    bullets: [
      'Generates custom travel itineraries based on user preferences and budget',
      'Considers time constraints and geographic proximity for optimal routing',
      'Integrates Google Maps API for location-based planning',
      'Powered by OpenAI API for intelligent itinerary suggestions',
    ],
    tags: ['React', 'TypeScript', 'Vite', 'React Router', 'Google Maps API', 'OpenAI API', 'Material UI', 'Boostrap'],
    url: 'https://next-stop-chi.vercel.app/',
    github: 'https://github.com/4Chronosx/NextStop',
    image: '/images/NextStop.png',
    video: 'dLBBwokbejE'
  },
  {
    id: 'blackjack',
    icon: '🎲',
    tag: 'Game Dev',
    name: 'Blackjack Mafia',
    sub: 'Blackjack Game with Mafia-Themed Opponents',
    desc: 'A group project for the Automata Theory and Formal Languages class. A unique twist on classic blackjack with progressions, abilities, and boss fights.',
    bullets: [
        '9-level progression system with mafia boss encounters every 3 stages',
        'Strategic gameplay enhanced by unlockable, randomized player skills',
        'Replayable design through randomized skills, gameplay patterns, and boss encounters',
  ],
    tags: ['Godot', 'GDScript'],
    github: 'https://github.com/KANKAN25/BlackJackMafia',
    image: '/images/BlackJack.png',
    video: 'HFJ5MSqFIAc', 
  },
  {
    id: 'focus',
    icon: '🖥',
    tag: 'Web App',
    name: 'Online Focus Room',
    sub: 'Real-time Collaborative Productivity App (Still In Development)',
    desc: 'A group project for the Web Engineering class. A real-time web application designed to help users stay focused together — even remotely.',
    bullets: [
      'Users can join shared virtual rooms and collaborate in real-time',
      'Personal focus timers for each user in a room',
      "See each other's timers and status live, keeping everyone motivated and accountable",
      'Session history tracking to review past focus sessions',
    ],
    tags: ['React', 'Node.js', 'Express.js', 'PostgreSQL'],
    github: 'https://github.com/kapadilla/focus-room',
    image: '/images/FocusRoomDemo.png',
    video: null
  },
  {
    id: 'wip',
    placeholder: true, // flag to render differently
    name: 'More on the way...',
    desc: 'Currently working on more projects. To be added soon!',
  }
];

export default projects;
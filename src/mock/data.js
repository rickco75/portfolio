import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Rick Cohen Portfolio', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio!', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Rick is a hero',
  name: 'Rick Cohen',
  subtitle: 'subtitles',
  cta: 'About Me',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'I am a detail-oriented, reliable and trustworthy individual with a systematic approach to problem-solving and the ability to work in a team environment. I am seeking to advance my career as a software engineer where I can contribute my experience, education, and leadership.',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Social Media Application',
    info: 'uses mongodb, graphql with subscriptions, apollo server, react, mapbox and more!',
    info2: '',
    url: 'https://wonderful-heisenberg-397e19.netlify.app/',
    repo: 'https://github.com/rickco75/merng-client', // if no repo, the button will not show up
  },
  // {
  //   id: nanoid(),
  //   img: 'project.jpg',
  //   title: '',
  //   info: '',
  //   info2: '',
  //   url: '',
  //   repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  // },
  // {
  //   id: nanoid(),
  //   img: 'project.jpg',
  //   title: '',
  //   info: '',
  //   info2: '',
  //   url: '',
  //   repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  // },
];

// CONTACT DATA
export const contactData = {
  cta: 'Would you like to get in touch with me? Fantastic!',
  btn: 'Send Me Email',
  email: 'rickco@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/rick-cohen/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/rickco75',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};

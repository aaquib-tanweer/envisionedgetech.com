import { ImageConstants } from '../image.constant'

export enum projectNames {
  'CLOUDFLOW' = 'CloudFlow',
  'DATAFORGE' = 'DataForge',
  'NEXUSAI' = 'NexusAI',
}

export const projectList = [
  {
    title: projectNames.CLOUDFLOW,
    description:
      'AI based Mobile App for teachers for creating and sharing curriculum and lesson plans.',
    type: 'Mobile Application', 
    link: 'https://play.google.com/store/apps/details?id=com.uniplan',
    image: ImageConstants.PROJECTS.uniplan,
    year: 2024,
  },
  {
    title: projectNames.DATAFORGE,
    description:
      'An online ecosystem for startups, connecting incubators, angel investors, venture capitalists, and academia for seamless access and growth.',
    link: 'https://www.investiaa.com/',
    type: 'Web Application',
    image: ImageConstants.PROJECTS.investiaa,
    year: 2024,
  },
  {
    title: projectNames.NEXUSAI,
    description:
      'An end-to-end e-commerce platform for small businesses to sell their products online.',
    link: 'https://atozcleaningsupplies.com.au/',
    type: 'Web Application',
    image: 'https://atozcleaningsupplies.com.au/assets/white-logo-CVYLiP2S.png',
    year: 2024,
  },
]

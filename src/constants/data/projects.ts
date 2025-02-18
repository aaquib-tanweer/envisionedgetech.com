import { ImageConstants } from '../image.constant'

export enum projectNames {
  'CLOUDFLOW' = 'CloudFlow',
  'DATAFORGE' = 'DataForge', 
  'NEXUSAI' = 'NexusAI',
  'SMARTHEALTH' = 'SmartHealth',
  'FINTECH' = 'FinTech',
  'AIASSIST' = 'AIAssist',
  'CYBERGUARD' = 'CyberGuard',
  'EDTECH' = 'EdTech'
}

export const projectList = [
  {
    title: projectNames.CLOUDFLOW,
    description:
      'AI based Mobile App for teachers for creating and sharing curriculum and lesson plans.',
    type: 'Mobile Application',
    image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?w=500',
    year: 2024,
  },
  {
    title: projectNames.DATAFORGE,
    description:
      'An online ecosystem for startups, connecting incubators, angel investors, venture capitalists, and academia for seamless access and growth.',
    type: 'Web Application', 
    image: ImageConstants.PROJECTS.investiaa,
    year: 2024,
  },
  {
    title: projectNames.NEXUSAI,
    description:
      'An end-to-end e-commerce platform for small businesses to sell their products online.',
    type: 'Web Application',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500',
    year: 2024,
  },
  {
    title: projectNames.SMARTHEALTH,
    description: 
      'Healthcare management platform with AI-powered diagnostics and patient monitoring.',
    type: 'Web & Mobile Application',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500',
    year: 2023,
  },
  {
    title: projectNames.FINTECH,
    description:
      'Blockchain-based financial trading platform with real-time analytics.',
    type: 'Web Application',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=500',
    year: 2023,
  },
  {
    title: projectNames.AIASSIST,
    description:
      'AI-powered virtual assistant for customer service automation.',
    type: 'SaaS Platform',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=500',
    year: 2023,
  },
  {
    title: projectNames.CYBERGUARD,
    description:
      'Advanced cybersecurity platform with threat detection and prevention.',
    type: 'Enterprise Software',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=500',
    year: 2023,
  },
  {
    title: projectNames.EDTECH,
    description:
      'Interactive learning platform with personalized education paths.',
    type: 'Web & Mobile Application',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=500',
    year: 2023,
  }
]

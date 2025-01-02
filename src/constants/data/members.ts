import { projectNames } from './projects'

interface Member {
  name: string
  role: string
  projectsInvolved: string[]
  image: string
}

const members: Member[] = [
  {
    name: 'Raj Anderson',
    role: 'Mobile App Developer',
    projectsInvolved: [projectNames.CLOUDFLOW],
    image: 'https://randomuser.me/api/portraits/men/71.jpg',
  },
  {
    name: 'Priya Williams',
    role: 'Frontend Developer', 
    projectsInvolved: [projectNames.DATAFORGE],
    image: 'https://randomuser.me/api/portraits/women/52.jpg',
  },
  {
    name: 'Arun Miller',
    role: 'Backend Developer',
    projectsInvolved: [projectNames.NEXUSAI],
    image: 'https://randomuser.me/api/portraits/men/83.jpg',
  },
  {
    name: 'Maya Johnson',
    role: 'Fullstack Developer',
    projectsInvolved: [projectNames.NEXUSAI, projectNames.DATAFORGE],
    image: 'https://randomuser.me/api/portraits/women/91.jpg',
  },
  {
    name: 'Vikram Smith',
    role: 'Marketing and QA',
    projectsInvolved: [projectNames.DATAFORGE],
    image: 'https://randomuser.me/api/portraits/men/62.jpg',
  },
  {
    name: 'Anjali Davis',
    role: 'Frontend Developer',
    projectsInvolved: [projectNames.DATAFORGE],
    image: 'https://randomuser.me/api/portraits/women/73.jpg',
  },
  {
    name: 'Neil Patel',
    role: 'UI/UX Designer',
    projectsInvolved: [projectNames.DATAFORGE],
    image: 'https://randomuser.me/api/portraits/men/94.jpg',
  },
]

members.sort((a, b) => b.projectsInvolved.length - a.projectsInvolved.length)

export { members }

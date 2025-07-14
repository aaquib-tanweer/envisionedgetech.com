import { projectNames } from './projects'

interface Member {
  name: string
  role: string
  projectsInvolved: string[]
  image: string
}

const members: Member[] = [
  {
    name: 'Rajesh Kumar Sharma',
    role: 'Mobile App Developer',
    projectsInvolved: [projectNames.CLOUDFLOW],
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=RajeshKumar',
  },
  {
    name: 'Aaquib Tanweer',
    role: 'Full Stack Developer',
    projectsInvolved: [projectNames.CLOUDFLOW],
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=AaquibTanweer',
  },
  {
    name: 'Priyanka Mehta',
    role: 'Frontend Developer', 
    projectsInvolved: [projectNames.DATAFORGE],
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=PriyankaMehta',
  },
  {
    name: 'Arundhati Nair',
    role: 'Backend Developer',
    projectsInvolved: [projectNames.NEXUSAI],
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ArundhatiNair',
  },
  {
    name: 'Mayawati Iyer',
    role: 'Fullstack Developer',
    projectsInvolved: [projectNames.NEXUSAI, projectNames.DATAFORGE],
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MayawatiIyer',
  },
  {
    name: 'Vikram Malhotra',
    role: 'Marketing and QA',
    projectsInvolved: [projectNames.DATAFORGE],
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=VikramMalhotra',
  },
  {
    name: 'Anjali Deshmukh',
    role: 'Frontend Developer',
    projectsInvolved: [projectNames.DATAFORGE],
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=AnjaliDeshmukh',
  },
  {
    name: 'Nitin Patel',
    role: 'UI/UX Designer',
    projectsInvolved: [projectNames.DATAFORGE],
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=NitinPatel',
  },
]

members.sort((a, b) => b.projectsInvolved.length - a.projectsInvolved.length)

export { members }

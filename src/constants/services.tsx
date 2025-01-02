import {
  MonitorIcon,
  PaintbrushVertical,
  SmartphoneIcon,
  WrenchIcon,
  Code2,
  Database,
  CloudCog,
  Bot
} from 'lucide-react'

export const services = {
  webDevelopement: {
    name: 'Web Development',
    description: 'Building scalable web applications with modern frameworks and cloud infrastructure. Specializing in React, Node.js and serverless architecture.',
    icon: <MonitorIcon />,
    features: ['Custom Web Apps', 'E-commerce', 'Enterprise Solutions']
  },
  uiuxDesign: {
    name: 'UI/UX Design',
    description: 'Creating intuitive and engaging user experiences through research-driven design, interactive prototypes, and modern design systems.',
    icon: <PaintbrushVertical />,
    features: ['User Research', 'Wireframing', 'Design Systems']
  },
  mobileApplicationDevelopement: {
    name: 'Mobile Development',
    description: 'Developing native and cross-platform mobile applications with React Native and Flutter. Full lifecycle from concept to app store deployment.',
    icon: <SmartphoneIcon />,
    features: ['iOS & Android', 'Cross-platform', 'App Store Publishing']
  },
  maintenanceSupport: {
    name: 'Maintenance & Support',
    description: 'Comprehensive application maintenance, performance optimization, security updates and 24/7 technical support.',
    icon: <WrenchIcon />,
    features: ['24/7 Support', 'Security Updates', 'Performance Monitoring']
  },
  customSoftware: {
    name: 'Custom Software',
    description: 'Tailored software solutions designed to automate workflows and solve complex business challenges.',
    icon: <Code2 />,
    features: ['Process Automation', 'Integration', 'Scalability']
  },
  dataAnalytics: {
    name: 'Data Analytics',
    description: 'Transform raw data into actionable insights using advanced analytics, visualization and machine learning.',
    icon: <Database />,
    features: ['Business Intelligence', 'Predictive Analytics', 'Data Visualization']
  },
  cloudServices: {
    name: 'Cloud Services',
    description: 'Cloud infrastructure setup, migration and management using AWS, Azure and Google Cloud Platform.',
    icon: <CloudCog />,
    features: ['Cloud Migration', 'DevOps', 'Serverless']
  },
  aiSolutions: {
    name: 'AI Solutions',
    description: 'Implementing artificial intelligence and machine learning solutions to automate processes and enhance decision making.',
    icon: <Bot />,
    features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision']
  }
}

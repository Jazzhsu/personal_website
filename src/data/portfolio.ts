import { FaGithub, FaLinkedin, FaEnvelope, FaApple, FaGoogle } from 'react-icons/fa';
import type { Project, Skill, SocialLink, Bio } from '../types';

export const bio: Bio = {
  firstName: 'Jiru',
  lastName: 'Xu',
  title: 'Software Engineer & CS Graduate Student',
  description: [
    "I'm a Computer Science Master's student at Johns Hopkins University with 4+ years of industry experience at Google and Apple. ",
    "I'm extremely passionate about every aspect of Computer Science. Always eager to learn new technology.",
  ],
  educations: [
    {
      degree: 'Master of Science in Computer Science (GPA: 3.94)',
      university: 'Johns Hopkins University',
      period: 'Aug 2024 - May 2026',
    },
    {
      degree: 'Bachelor of Science in Computer Science',
      university: 'Hawaii Pacific University',
      period: 'Sep 2014 - May 2018',
    },
  ],
  experience: [
    {
      title: 'Software Engineer Intern - Streaming Media',
      company: 'Apple',
      period: 'May 2025 - Aug 2025',
      description: [
        'Beef up unit test framework, increase test coverage over 50% in critical components',
        'Containerization and multi-platform support',
        'Enable realtime splunk logging',
      ],
      icon: FaApple,
    },
    {
      title: 'Software Engineer - Chrome Media',
      company: 'Google',
      period: 'Oct 2018 - Mar 2023',
      description: [
        'Developed ChromeOS global media control',
        'Developed Chrome Android picture-in-picture (PIP)',
        'Maintain global media control and native media player',
      ],
      icon: FaGoogle,
    },
  ],
};

export const projects: Project[] = [
  {
    id: '1',
    title: 'Project One',
    description:
      'A modern web application built with React and TypeScript. Features include real-time updates, responsive design, and seamless user experience.',
    image: 'https://via.placeholder.com/400x300',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    id: '2',
    title: 'Project Two',
    description:
      'Full-stack application with Node.js backend and React frontend. Implements authentication, database integration, and RESTful API design.',
    image: 'https://via.placeholder.com/400x300',
    tags: ['Node.js', 'Express', 'MongoDB', 'React'],
    githubUrl: 'https://github.com',
  },
  {
    id: '3',
    title: 'Project Three',
    description:
      'Mobile-first responsive website with modern UI/UX principles. Optimized for performance and accessibility.',
    image: 'https://via.placeholder.com/400x300',
    tags: ['Next.js', 'TypeScript', 'CSS'],
    liveUrl: 'https://example.com',
  },
  {
    id: '4',
    title: 'Project Three',
    description:
      'Mobile-first responsive website with modern UI/UX principles. Optimized for performance and accessibility.',
    image: 'https://via.placeholder.com/400x300',
    tags: ['Next.js', 'TypeScript', 'CSS'],
    liveUrl: 'https://example.com',
  },
];

export const skills: Skill[] = [
  // Frontend
  { name: 'React', category: 'frontend' },
  { name: 'TypeScript', category: 'frontend' },
  { name: 'JavaScript', category: 'frontend' },
  { name: 'HTML/CSS', category: 'frontend' },

  // Backend & Languages
  { name: 'C++', category: 'backend' },
  { name: 'Python', category: 'backend' },
  { name: 'Java', category: 'backend' },
  { name: 'MongoDB', category: 'backend' },
  { name: 'REST API', category: 'backend' },
  { name: 'FastAPI', category: 'backend' },

  // Tools & Other
  { name: 'Git', category: 'tools' },
  { name: 'Docker', category: 'tools' },
  { name: 'PyTorch', category: 'tools' },
  { name: 'Machine Learning', category: 'tools' },
  { name: 'Data Structures & Algorithms', category: 'tools' },
];

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/Jazzhsu',
    icon: FaGithub,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/jiru-xu-b99101150/',
    icon: FaLinkedin,
  },
  {
    name: 'Email',
    url: 'mailto:jxu12138@gmail.com',
    icon: FaEnvelope,
  },
];

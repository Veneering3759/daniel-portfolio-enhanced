export const projects = [
  {
    id: 'leadmanager',
    title: 'LeadManager CRM',
    tagline: 'Mini CRM for Small Businesses',
    description: 'Full-stack CRM helping small businesses track leads, manage pipelines, and convert customers. Built for consultants, agencies, and service businesses who need organization without enterprise complexity.',
    image: '/projects/leadmanager.png',
    liveUrl: 'https://crm-dashboard-navy.vercel.app',
    githubUrl: 'https://github.com/Veneering3759/leadmanager-crm',
    caseStudyUrl: '/projects/leadmanager',
    highlights: [
      '67% average lead-to-client conversion rate',
      'Real-time pipeline tracking with instant updates',
      'Sub-100ms API response times',
    ],
    tech: ['React', 'Tailwind', 'Node.js', 'Express', 'MongoDB'],
    featured: true,
    category: 'Full-Stack',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'ai-sales-ops',
    title: 'AI Sales Ops Copilot',
    tagline: 'Intelligent Lead Management Automation',
    description: 'Production SaaS automating lead management with CSV processing, intelligent deduplication, automated enrichment, and AI-powered scoring. Turns messy data into actionable sales pipelines.',
    image: '/projects/ai-sales-ops.png',
    liveUrl: 'https://ai-sales-ops-copilot.vercel.app',
    githubUrl: 'https://github.com/Veneering3759/ai-sales-ops-frontend',
    caseStudyUrl: '/projects/ai-sales-ops',
    highlights: [
      'Processes 5,000+ leads in under 30 seconds',
      '95% deduplication accuracy with smart matching',
      'Automated scoring & next-best action recommendations',
    ],
    tech: ['React', 'Vite', 'Express', 'MongoDB', 'Tailwind'],
    featured: true,
    category: 'Full-Stack',
    gradient: 'from-purple-500 to-pink-500',
  },
];

export const profile = {
  name: 'Daniel Aryee',
  title: 'Full-Stack Developer',
  location: 'London, UK',
  timezone: 'GMT/BST',
  email: 'tnix9826@tutamail.com',
  github: 'https://github.com/Veneering3759',
  linkedin: 'https://www.linkedin.com/in/daniel-a-869619399/',
  availability: 'Open to remote opportunities',
  preferences: 'Remote-first • US/EU companies welcome • Flexible timezone',
};

export const skills = {
  frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vite'],
  backend: ['Node.js', 'Express', 'MongoDB', 'RESTful APIs', 'Mongoose'],
  tools: ['Git', 'GitHub', 'Vercel', 'Render', 'MongoDB Atlas'],
};

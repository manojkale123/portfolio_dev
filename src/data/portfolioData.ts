import type { Skill, Experience, Project, Education, ContactLink } from '../types';

// ─── Personal Info ────────────────────────────────────────
export const personalInfo = {
  name: 'Manoj Kale',
  nameFirst: 'MANOJ',
  nameLast: 'KALE',
  title: 'Front-End Developer & Angular & React Specialist',
  location: 'Pune, Maharashtra, India',
  phone: '8806065177',
  linkedin: 'linkedin.com/in/manoj-kale-198273116',
  linkedinUrl: 'https://www.linkedin.com/in/manoj-kale-198273116',
  availableForHire: true,
  bio: [
    'Experienced in HTML5, CSS3, JavaScript and Angular.',
    'I transform UI/UX concepts into responsive, accessible, high-performance web applications.',
    'Skilled in component-based architecture, SSR, and optimizing user experience across all browsers and devices.',
  ],
  highlightedSkills: ['HTML5, CSS3, JavaScript', 'Angular', 'component-based architecture'],
};

// ─── Skills ──────────────────────────────────────────────
export const skills: Skill[] = [
  { name: 'HTML5' },
  { name: 'CSS3' },
  { name: 'JavaScript' },
  { name: 'TypeScript' },
  { name: 'React' },
  { name: 'Angular' },
  { name: 'Node.js' },
  { name: 'SQL / MySQL' },
  { name: 'REST APIs' },
  { name: 'RabbitMQ' },
  { name: 'Docker' },
];

// ─── Experience ──────────────────────────────────────────
export const experiences: Experience[] = [
  {
    id: 'vantageo',
    role: 'Software Engineer',
    company: 'Vantageo Pvt. Ltd',
    location: 'ManageGrid',
    period: 'Nov 2025 — Present',
    technologies: ['React', 'TypeScript', 'Node.js', 'RabbitMQ', 'Docker', 'REST APIs', 'CI/CD'],
    bullets: [
      'Built and maintained the appliance-management microservice responsible for network settings updates, job scheduling, and structured logging — part of a multi-service architecture for enterprise server management via BMC.',
      'Developed the React (TypeScript) frontend for network configuration workflows, enabling administrators to update BMC network parameters in real time across managed server fleets.',
      'Contributed to the Node.js backend layer, implementing RESTful APIs for scheduling tasks, persisting appliance state, and emitting structured logs for observability across the distributed system.',
      'Integrated RabbitMQ as the messaging queue layer to enable reliable async communication between microservices, decoupling task producers from consumers for scheduling and network update workflows.',
      'Containerised services using Docker and maintained CI/CD pipelines to streamline builds, testing, and deployment across environments.',
    ],
  },
  {
    id: 'vnnogile',
    role: 'Software Developer',
    company: 'Vnnogile Solutions',
    location: 'Mumbai, India',
    period: 'Jan 2023 — Nov 2025',
    subRoles: [
      {
        title: 'Tim Hortons India — Front-End Developer',
        technologies: ['Angular', 'SSR', 'JavaScript', 'HTML5', 'CSS3'],
        bullets: [
          'Developed comprehensive front-end interfaces for a server-side rendered application, enhancing digital customer experience across all Indian outlets.',
          'Implemented a store-specific customer feedback system to capture actionable insights, enabling data-driven service improvements.',
          'Built and deployed a scalable coupon distribution platform delivering personalized promotional offers, resulting in measurable increase in redemption rates.',
        ],
      },
      {
        title: 'Vnnogile Solutions — Web Developer',
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'SEO', 'Flexbox', 'CSS Grid'],
        bullets: [
          'Developed a fully responsive website using CSS Grid and Flexbox, ensuring seamless performance across desktops, tablets, and mobiles.',
          'Implemented SEO best practices including semantic HTML5, structured data markup, and metadata optimization — boosting organic traffic.',
          'Improved site performance via image compression, code minification, and lazy loading, significantly enhancing Core Web Vitals.',
        ],
      },
      {
        title: 'Jaspur — Admin Dashboard & CMS Developer',
        technologies: ['Angular', 'Google Charts', 'TinyMCE', 'TypeScript'],
        bullets: [
          'Designed and developed a responsive admin dashboard for managing affiliates, products, and brands with interactive analytics via Google Charts.',
          'Built a secure user management system with role-based access control (RBAC) and Angular Route Guards.',
          'Implemented scalable CRUD operations and integrated TinyMCE for advanced content editing in product descriptions.',
        ],
      },
      {
        title: 'ERP Sales Management — Full Stack Developer',
        technologies: ['Angular', 'Node.js', 'MySQL', 'REST APIs'],
        bullets: [
          'Developed inquiry management module with full CRUD functionality to streamline client interaction tracking.',
          'Created comprehensive quotation management system with custom pricing, product configurations, and discounts.',
          'Built sales order processing workflow fully integrated into inventory system, automating processes from order entry to delivery.',
        ],
      },
    ],
  },
  {
    id: 'sogecom',
    role: 'ERP Administrator',
    company: 'Sogecom Sarl',
    location: 'Goma, Africa',
    period: 'Jul 2019 — Apr 2022',
    technologies: ['ERP Software', 'Functional Testing', 'Process Documentation'],
    bullets: [
      'Managed end-to-end import-export process for minerals within the ERP system, ensuring compliance with industry standards.',
      'Collaborated with IT team to identify and document process optimization opportunities, enhancing ERP workflow efficiency.',
      'Administered end-user accounts and data storage with focus on compliance and security; provided bilingual client support in French.',
    ],
  },
];

// ─── Projects ────────────────────────────────────────────
export const projects: Project[] = [
  {
    id: 'managegrid',
    number: 'PROJECT / 01',
    name: 'ManageGrid Appliance Management',
    description:
      'Appliance-management microservice for enterprise server management via BMC, featuring a React/TypeScript frontend for real-time network configuration and a Node.js/RabbitMQ backend for task scheduling.',
    stack: ['React', 'TypeScript', 'Node.js', 'RabbitMQ', 'Docker', 'REST APIs', 'CI/CD'],
  },
  {
    id: 'timhortons',
    number: 'PROJECT / 02',
    name: 'Tim Hortons India',
    description:
      'SSR-powered front-end for Canada\'s iconic food chain in India — customer feedback system and personalized coupon distribution platform.',
    stack: ['Angular', 'SSR', 'JavaScript', 'CSS3'],
  },
  {
    id: 'jaspur',
    number: 'PROJECT / 03',
    name: 'Jaspur Affiliate Dashboard',
    description:
      'Admin CMS for affiliate marketing platform with interactive Google Charts analytics, RBAC security, and TinyMCE rich-text editing.',
    stack: ['Angular', 'TypeScript', 'Google Charts', 'TinyMCE'],
  },
  {
    id: 'erp',
    number: 'PROJECT / 04',
    name: 'ERP Sales Module',
    description:
      'Full-stack ERP sales module — inquiry tracking, quotation builder, proforma invoices, and order processing integrated with inventory.',
    stack: ['Angular', 'Node.js', 'MySQL', 'REST APIs'],
  },
  {
    id: 'responsive',
    number: 'PROJECT / 05',
    name: 'Responsive Website + Blog',
    description:
      'SEO-optimized responsive site with dynamic blog platform, advanced search, lazy loading, and Core Web Vitals improvements.',
    stack: ['HTML5', 'CSS Grid', 'JavaScript', 'SEO'],
  },
];

// ─── Education ───────────────────────────────────────────
export const educations: Education[] = [
  {
    id: 'msc',
    degree: 'Master of Computer Science',
    university: 'Savitribai Phule Pune University',
    location: 'Pune, India',
  },
  {
    id: 'bsc',
    degree: 'Bachelor of Computer Science',
    university: 'Savitribai Phule Pune University',
    location: 'Pune, India',
  },
];

// ─── Contact ─────────────────────────────────────────────
export const contactLinks: ContactLink[] = [
  {
    label: 'PHONE',
    value: '8806065177',
    href: 'tel:+918806065177',
  },
  {
    label: 'LINKEDIN',
    value: 'linkedin.com/in/manoj-kale-198273116',
    href: 'https://www.linkedin.com/in/manoj-kale-198273116',
  },
  {
    label: 'LOCATION',
    value: 'Pune, Maharashtra, India',
    href: '#',
  },
];

export const SERVICES = [
  {
    id: 'web-app',
    title: 'Web App Development',
    description: 'Custom web applications built with modern technologies and best practices.',
    icon: '🌐'
  },
  {
    id: 'ai-tools',
    title: 'AI-Powered Tools',
    description: 'Intelligent solutions leveraging cutting-edge AI and machine learning.',
    icon: '🤖'
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Strategy',
    description: 'User-centered design that creates engaging and intuitive experiences.',
    icon: '🎨'
  },
  {
    id: 'automation',
    title: 'Automation & Integration',
    description: 'Streamline operations with smart automation and seamless integrations.',
    icon: '⚡'
  }
];

export const USPS = [
  {
    id: 'human-centered',
    title: 'Human-Centered Engineering',
    description: 'We build solutions that put people first, ensuring intuitive and accessible experiences.',
    icon: '👥'
  },
  {
    id: 'speed',
    title: 'Speed with Precision',
    description: 'Rapid development without compromising on quality or attention to detail.',
    icon: '⚡'
  },
  {
    id: 'ai-integrated',
    title: 'AI-Integrated by Default',
    description: 'Leveraging AI to enhance every aspect of your digital solutions.',
    icon: '🧠'
  },
  {
    id: 'partnership',
    title: 'Reliable Long-Term Partnerships',
    description: 'Building lasting relationships through trust, transparency, and consistent delivery.',
    icon: '🤝'
  }
];

export const PORTFOLIO = [
  {
    id: 'project1',
    title: 'AI-Powered Analytics Platform',
    description: 'Enterprise-grade analytics with predictive insights',
    image: '/portfolio/project1.jpg'
  },
  {
    id: 'project2',
    title: 'E-commerce Solution',
    description: 'Scalable platform for modern retail',
    image: '/portfolio/project2.jpg'
  },
  {
    id: 'project3',
    title: 'Healthcare Management System',
    description: 'Streamlined patient care coordination',
    image: '/portfolio/project3.jpg'
  }
];

export const TESTIMONIALS = [
  {
    id: 'testimonial1',
    quote: "FuzzyDuck transformed our business with their innovative solutions. Their team's expertise in AI integration was game-changing.",
    author: "Sarah Johnson",
    role: "CTO, TechCorp"
  },
  {
    id: 'testimonial2',
    quote: "Working with FuzzyDuck has been a pleasure. They delivered our project on time and exceeded our expectations.",
    author: "Michael Chen",
    role: "Founder, StartupX"
  }
];

export interface NavLink {
  name: string;
  href: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Contact', href: '#contact' }
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'Twitter',
    url: 'https://twitter.com/fuzzyduck',
    icon: '𝕏'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/company/fuzzyduck',
    icon: 'in'
  },
  {
    name: 'GitHub',
    url: 'https://github.com/fuzzyduck',
    icon: '⌨'
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/fuzzyduck',
    icon: '📸'
  }
]; 
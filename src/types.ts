export interface SocialLink {
  label: string;
  url: string;
  icon: 'github' | 'linkedin' | 'twitter' | 'mail';
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface TimelineItem {
  title: string;
  organization: string;
  period: string;
  location: string;
  description: string[];
  tags?: string[];
  type?: string;
  score?: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  metrics?: string;
  period?: string;
}

export interface Award {
  title: string;
  issuer: string;
  year: string;
  detail: string;
  type?: 'Award' | 'Certification';
}

export interface ProfileData {
  name: string;
  roles: string[];
  headline: string;
  bioParagraphs: string[];
  email: string;
  phone?: string;
  location: string;
  availability: string;
  avatarUrl?: string;
  socials: SocialLink[];
  formspreeEndpoint: string;
}

export interface NavLink {
  label: string;
  href: string;
}

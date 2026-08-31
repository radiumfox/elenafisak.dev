export type LabelColor = 'blue' | 'green' | 'purple' | 'orange' | 'pink';

export interface SkillLabel {
  text: string;
  color: LabelColor;
}

export interface Skill {
  _id: string;
  _createdAt: string;
  title: string;
  description: string;
  labels: SkillLabel[];
}

export interface ExperienceEntry {
  _id: string;
  _createdAt: string;
  name: string;
  title: string;
  description: string;
}

export interface ProjectStep {
  title: string;
  description: string;
}

export interface Project {
  _id: string;
  _createdAt: string;
  title: string;
  description: string;
  videoUrl?: string;
  githubUrl?: string;
  steps: ProjectStep[];
}

export interface SocialLink {
  _key?: string;
  name: string;
  title?: string;
  url?: string;
}

export interface SiteSettings {
  greeting: string;
  headline: string;
  introParagraphs: string[];
  socials: SocialLink[];
  contactsBannerText: string;
  contactsBannerImage?: {
    _type: 'image';
    asset: { _ref: string; _type: 'reference' };
  };
  avatarImage?: {
    _type: 'image';
    asset: { _ref: string; _type: 'reference' };
  };
  cv?: {
    _type: 'file';
    asset: { _ref: string; _type: 'reference' };
  };
  footerDescription: string;
  copyright: string;
  otherCredits?: PortableTextBlock[];
}

export type PortableTextBlock = {
  _type: 'block';
  _key?: string;
  style?: string;
  children?: PortableTextSpan[];
  markDefs?: PortableTextMarkDef[];
};

export type PortableTextSpan = {
  _type: 'span';
  _key?: string;
  text?: string;
  marks?: string[];
};

export type PortableTextMarkDef = {
  _key: string;
  _type: 'link';
  href?: string;
};

export interface SiteData {
  skills: Skill[];
  experience: ExperienceEntry[];
  projects: Project[];
  settings: SiteSettings | null;
}

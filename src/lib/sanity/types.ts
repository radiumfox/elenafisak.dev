export type LabelColor =
  | 'blue'
  | 'green'
  | 'purple'
  | 'orange'
  | 'pink'
  | 'red'
  | 'yellow'
  | 'cyan'
  | 'indigo';

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
  order: number;
  name: string;
}

export interface ExperienceEntry {
  _id: string;
  _createdAt: string;
  name: string;
  title: string;
  description: string;
  order: number;
}

export interface ProjectStep {
  title: string;
  description: string;
}

export interface MuxVideo {
  playbackId: string;
  assetId?: string;
  status?: string;
}

export interface Project {
  _id: string;
  _createdAt: string;
  title: string;
  description: string;
  video?: MuxVideo;
  appUrl?: string;
  githubUrl?: string;
  steps: ProjectStep[];
}

export interface Certificate {
  _id: string;
  _createdAt: string;
  order: number;
  title: string;
  company: string;
  date: string;
  skills: string[];
  url?: string;
}

export enum BlogPostCategory {
  FRONTEND = 'frontend',
  BACKEND = 'backend',
  KUBERNETES = 'kubernetes',
  ARCHITECTURE = 'architecture',
}

export interface SanityImageDimensions {
  width: number;
  height: number;
  aspectRatio: number;
}

export interface SanityImageAsset {
  _id?: string;
  _ref?: string;
  _type?: 'reference';
  url?: string;
  metadata?: {
    lqip?: string;
    dimensions?: SanityImageDimensions;
  };
}

export interface SanityImage {
  _type: 'image';
  asset: SanityImageAsset;
  alt?: string;
  hotspot?: {
    x: number;
    y: number;
    height: number;
    width: number;
  };
  crop?: {
    top: number;
    bottom: number;
    left: number;
    right: number;
  };
}

export interface Slug {
  _type: 'slug';
  current: string;
}

export interface BlogPostCard {
  _id: string;
  _createdAt: string;
  title: string;
  description: string;
  category: BlogPostCategory;
  time: number;
  slug: Slug;
  image?: SanityImage;
}

export interface BlogPost extends BlogPostCard {
  content: PortableTextEntry[];
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
  email?: string;
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

export interface PortableTextImage extends SanityImage {
  _key?: string;
}

export type PortableTextEntry = PortableTextBlock | PortableTextImage;

export interface SiteData {
  skills: Skill[];
  experience: ExperienceEntry[];
  projects: Project[];
  settings: SiteSettings | null;
  certificates: Certificate[];
  blogPosts?: BlogPost[];
}

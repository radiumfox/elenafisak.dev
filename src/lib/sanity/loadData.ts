import { unstable_noStore as noStore } from 'next/cache';
import { client } from './client';
import type { Skill, ExperienceEntry, Project, SiteSettings, Certificate, BlogPost, BlogPostCard } from './types';
import {
  skillsQuery,
  experienceQuery,
  projectsQuery,
  settingsQuery,
  certificatesQuery,
  blogPostCardsQuery,
  blogPostBySlugQuery
} from './queries';

const HOME_BLOG_POSTS_LIMIT = 3;

export interface LoadedSiteData {
  skills: Skill[];
  experience: ExperienceEntry[];
  projects: Project[];
  settings: SiteSettings | null;
  certificates: Certificate[];
  blogPosts: BlogPostCard[];
}

export async function loadSiteData(): Promise<LoadedSiteData> {
  noStore();

  const [skills, experience, projects, settings, certificates, blogPosts] = await Promise.all([
    client.fetch<Skill[]>(skillsQuery),
    client.fetch<ExperienceEntry[]>(experienceQuery),
    client.fetch<Project[]>(projectsQuery),
    client.fetch<SiteSettings | null>(settingsQuery),
    client.fetch<Certificate[]>(certificatesQuery),
    client.fetch<BlogPostCard[]>(blogPostCardsQuery, { offset: 0, limit: HOME_BLOG_POSTS_LIMIT })
  ]);

  return { skills, experience, projects, settings, certificates, blogPosts };
}

export async function loadBlogPostCards(limit = 10, offset = 0): Promise<BlogPostCard[]> {
  noStore();

  return client.fetch<BlogPostCard[]>(blogPostCardsQuery, { limit, offset });
}

export async function loadBlogPost(slug: string): Promise<BlogPost | null> {
  noStore();

  return client.fetch<BlogPost | null>(blogPostBySlugQuery, { slug });
}

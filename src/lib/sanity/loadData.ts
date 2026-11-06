import { unstable_noStore as noStore } from 'next/cache';
import { client } from './client';
import type { Skill, ExperienceEntry, Project, SiteSettings, Certificate, BlogPost } from './types';
import {
  skillsQuery,
  experienceQuery,
  projectsQuery,
  settingsQuery,
  certificatesQuery,
  blogPostsQuery,
  blogPostBySlugQuery
} from './queries';

export interface LoadedSiteData {
  skills: Skill[];
  experience: ExperienceEntry[];
  projects: Project[];
  settings: SiteSettings | null;
  certificates: Certificate[];
  blogPosts: BlogPost[];
}

export async function loadSiteData(): Promise<LoadedSiteData> {
  noStore();

  const [skills, experience, projects, settings, certificates, blogPosts] = await Promise.all([
    client.fetch<Skill[]>(skillsQuery),
    client.fetch<ExperienceEntry[]>(experienceQuery),
    client.fetch<Project[]>(projectsQuery),
    client.fetch<SiteSettings | null>(settingsQuery),
    client.fetch<Certificate[]>(certificatesQuery),
    client.fetch<BlogPost[]>(blogPostsQuery)
  ]);

  return { skills, experience, projects, settings, certificates, blogPosts };
}

export async function loadBlogPost(slug: string): Promise<BlogPost | null> {
  noStore();

  return client.fetch<BlogPost | null>(blogPostBySlugQuery, { slug });
}

import { unstable_noStore as noStore } from 'next/cache';
import { client } from './client';
import type { Skill, ExperienceEntry, Project, SiteSettings } from './types';
import {
  skillsQuery,
  experienceQuery,
  projectsQuery,
  settingsQuery,
} from './queries';

export interface LoadedSiteData {
  skills: Skill[];
  experience: ExperienceEntry[];
  projects: Project[];
  settings: SiteSettings | null;
}

export async function loadSiteData(): Promise<LoadedSiteData> {
  noStore();

  const [skills, experience, projects, settings] = await Promise.all([
    client.fetch<Skill[]>(skillsQuery),
    client.fetch<ExperienceEntry[]>(experienceQuery),
    client.fetch<Project[]>(projectsQuery),
    client.fetch<SiteSettings | null>(settingsQuery),
  ]);

  return { skills, experience, projects, settings };
}

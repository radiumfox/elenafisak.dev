import { unstable_noStore as noStore } from 'next/cache';
import { client } from './client';
import type { Skill, ExperienceEntry, Project, SiteSettings, Certificate } from './types';
import {
  skillsQuery,
  experienceQuery,
  projectsQuery,
  settingsQuery,
  certificatesQuery,
} from './queries';

export interface LoadedSiteData {
  skills: Skill[];
  experience: ExperienceEntry[];
  projects: Project[];
  settings: SiteSettings | null;
  certificates: Certificate[];
}

export async function loadSiteData(): Promise<LoadedSiteData> {
  noStore();

  const [skills, experience, projects, settings, certificates] = await Promise.all([
    client.fetch<Skill[]>(skillsQuery),
    client.fetch<ExperienceEntry[]>(experienceQuery),
    client.fetch<Project[]>(projectsQuery),
    client.fetch<SiteSettings | null>(settingsQuery),
    client.fetch<Certificate[]>(certificatesQuery),
  ]);

  return { skills, experience, projects, settings, certificates };
}

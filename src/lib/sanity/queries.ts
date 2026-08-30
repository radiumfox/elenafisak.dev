export const skillsQuery = '*[_type == "skill"] | order(_createdAt asc)';
export const experienceQuery = '*[_type == "experience"] | order(_createdAt asc)';
export const projectsQuery = '*[_type == "project"] | order(_createdAt asc)';
export const settingsQuery = '*[_type == "siteSettings"][0]';

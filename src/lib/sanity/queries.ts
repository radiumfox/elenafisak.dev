export const skillsQuery = '*[_type == "skill"] | order(order asc)';
export const experienceQuery = '*[_type == "experience"] | order(order asc)';
export const projectsQuery =
  '*[_type == "project"] | order(_createdAt asc) { ..., "video": video.asset->{playbackId, assetId, status} }';
export const settingsQuery = '*[_type == "siteSettings"][0]';

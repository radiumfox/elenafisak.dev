export const skillsQuery = '*[_type == "skill"] | order(_createdAt asc)';
export const experienceQuery = '*[_type == "experience"] | order(_createdAt asc)';
export const projectsQuery =
  '*[_type == "project"] | order(_createdAt asc) { ..., "video": video.asset->{playbackId, assetId, status} }';
export const settingsQuery = '*[_type == "siteSettings"][0]';

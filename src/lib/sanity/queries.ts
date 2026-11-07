export const skillsQuery = '*[_type == "skill"] | order(order asc)';
export const experienceQuery = '*[_type == "experience"] | order(order asc)';
export const projectsQuery =
  '*[_type == "project"] | order(_createdAt asc) { ..., "video": video.asset->{playbackId, assetId, status} }';
export const settingsQuery = '*[_type == "siteSettings"][0]';
export const certificatesQuery = '*[_type == "certificate"] | order(order asc)';
export const blogPostCardsQuery = `
  *[_type == "blogPost"] | order(_createdAt desc, _id desc)[0...$limit] {
    _id,
    _createdAt,
    title,
    description,
    category,
    time,
    slug,
    image { ..., asset->{ _id, url, metadata { lqip } } }
  }
`;
export const blogPostBySlugQuery =
  '*[_type == "blogPost" && slug.current == $slug][0] { ..., image { ..., asset->{ _id, url, metadata { lqip, dimensions } } }, content[] { ..., _type == "image" => { ..., asset->{ _id, url, metadata { lqip, dimensions } } } } }';

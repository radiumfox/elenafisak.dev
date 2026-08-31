import {
  createImageUrlBuilder,
  type SanityImageSource,
} from '@sanity/image-url';
import { client } from './client';

const builder = createImageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

export function fileUrlFor(source: { asset?: { _ref?: string } } | null): string {
  const ref = source?.asset?._ref;
  if (!ref) return '';
  const id = ref.replace(/^file-/, '');
  const extensionIndex = id.lastIndexOf('-');
  const extension = extensionIndex >= 0 ? id.slice(extensionIndex + 1) : '';
  const assetId = extensionIndex >= 0 ? id.slice(0, extensionIndex) : id;
  const { projectId, dataset } = client.config();
  return `https://cdn.sanity.io/files/${projectId}/${dataset}/${assetId}.${extension}`;
}

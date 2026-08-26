import type { ImageMetadata } from 'astro';
import type { MediaReference } from './types';

export type SchemaNode = Record<string, unknown>;

export type Breadcrumb = {
  name: string;
  url: string;
};

export function absoluteImageUrl(image: ImageMetadata, siteBase: URL): string {
  return new URL(image.src, siteBase).toString();
}

export function mediaImageUrls(media: readonly MediaReference[], siteBase: URL): string[] {
  const urls = media.flatMap((item) => {
    if (!item) return [];
    if (item.status === 'available') return [absoluteImageUrl(item.src, siteBase)];
    if (item.status === 'video' && item.poster?.status === 'available') {
      return [absoluteImageUrl(item.poster.src, siteBase)];
    }
    return [];
  });

  return [...new Set(urls)];
}

export function productSchema({
  url,
  name,
  productType,
  description,
  media,
  siteBase,
}: {
  url: string;
  name: string;
  productType: string;
  description?: string | null;
  media: readonly MediaReference[];
  siteBase: URL;
}): SchemaNode {
  const images = mediaImageUrls(media, siteBase);

  return {
    '@type': 'Product',
    '@id': `${url}#product`,
    name,
    url,
    brand: { '@type': 'Brand', name: 'Print3x' },
    category: productType,
    ...(description ? { description } : {}),
    ...(images.length > 0 ? { image: images } : {}),
  };
}

export function itemListSchema({
  id,
  name,
  items,
}: {
  id: string;
  name: string;
  items: readonly { name: string; url: string }[];
}): SchemaNode {
  return {
    '@type': 'ItemList',
    '@id': id,
    name,
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function articleSchema({
  url,
  headline,
  description,
  image,
  keywords,
  section,
  siteBase,
}: {
  url: string;
  headline: string;
  description?: string | null;
  image?: string;
  keywords: readonly string[];
  section?: string;
  siteBase: URL;
}): SchemaNode {
  const homeUrl = new URL('/', siteBase).toString();

  return {
    '@type': 'Article',
    '@id': `${url}#article`,
    headline,
    url,
    mainEntityOfPage: { '@id': `${url}#webpage` },
    publisher: { '@id': `${homeUrl}#organization` },
    inLanguage: 'es-CL',
    ...(description ? { description } : {}),
    ...(image ? { image: [image] } : {}),
    ...(keywords.length > 0 ? { keywords: [...keywords] } : {}),
    ...(section ? { articleSection: section } : {}),
  };
}

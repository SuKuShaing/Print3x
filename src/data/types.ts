import type { ImageMetadata } from 'astro';

/**
 * Contratos de contenido para el escaparate estatico de Print3x.
 *
 * Estos tipos describen datos propios de la aplicacion y no modelan objetos,
 * endpoints ni flujos comerciales de Shopify.
 */

export type ContentFormat = 'html' | 'markdown';

export interface RichText {
  format: ContentFormat;
  value: string;
}

export interface MediaDimensions {
  width?: number;
  height?: number;
}

interface MediaAssetBase extends MediaDimensions {
  sourceUrl?: string;
}

export interface AvailableMediaAssetWithReviewedAlt extends MediaAssetBase {
  status: 'available';
  altStatus: 'reviewed';
  alt: string;
  src: ImageMetadata;
}

export interface AvailableMediaAssetWithPendingAlt extends MediaAssetBase {
  status: 'available';
  altStatus: 'pending';
  alt: null;
  src: ImageMetadata;
}

export type AvailableMediaAsset =
  | AvailableMediaAssetWithReviewedAlt
  | AvailableMediaAssetWithPendingAlt;

export interface PendingMediaAsset extends MediaAssetBase {
  status: 'pending';
  /**
   * The source may not provide local alt text yet. The file can be available
   * locally while its alternative text remains pending review.
   */
  alt?: string | null;
  reason?: string;
  src?: never;
}

export interface VideoMediaAsset extends MediaAssetBase {
  status: 'video';
  videoId: string;
  title: string;
  poster?: AvailableMediaAsset;
}

export type MediaAsset = AvailableMediaAsset | PendingMediaAsset;
export type MediaReference = MediaAsset | null;
export type MediaCollection = readonly MediaReference[];

export interface SeoMetadata {
  /**
   * Shopify may omit this value. Absence is source data, not invented copy.
   */
  title?: string | null;
  /**
   * Shopify may omit this value. Absence is source data, not invented copy.
   */
  description?: string | null;
  canonical?: string;
  noIndex?: boolean;
  openGraphImage?: MediaReference;
}

export type InternalPath = `/${string}`;

export interface InternalLink {
  href: InternalPath;
  label: string;
}

export type InternalLinks = readonly InternalLink[];

export type ContentStatus = 'published' | 'pending' | 'retired';

export type ShowcaseAvailability =
  | 'available'
  | 'pending'
  | 'unavailable'
  | 'historical';

export interface ContentRecordBase {
  slug: string;
  title: string;
  description: RichText;
  /**
   * SEO can be omitted or null when the Shopify source has no metadata.
   */
  seo?: SeoMetadata | null;
  images: MediaCollection;
  status: ContentStatus;
  links: InternalLinks;
  sourceUrl: string;
}

export interface ProductRecord extends ContentRecordBase {
  availability: ShowcaseAvailability;
}

export interface CollectionRecord extends ContentRecordBase {
  productLinks: InternalLinks;
}

export interface PageRecord extends ContentRecordBase {
  body: RichText;
}

export interface BlogRecord extends ContentRecordBase {
  articleLinks: InternalLinks;
}

export interface ArticleRecord extends ContentRecordBase {
  blogSlug: string;
  body: RichText;
  publishedAt?: string;
  updatedAt?: string;
}

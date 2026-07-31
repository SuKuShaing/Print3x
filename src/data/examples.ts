import type {
  ArticleRecord,
  BlogRecord,
  CollectionRecord,
  PageRecord,
  PendingMediaAsset,
  ProductRecord,
} from './types';

/**
 * FIXTURES ONLY: these neutral records are examples for contract checks.
 * This module is intentionally not rendered and must not be imported by
 * anything under `src/pages`.
 */

const pendingMedia: PendingMediaAsset = {
  status: 'pending',
  width: 1200,
  height: 800,
  sourceUrl: 'https://example.invalid/media/pending-fixture',
  reason: 'Fixture media has not been supplied locally.',
};

export const exampleProduct: ProductRecord = {
  slug: 'fixture-product',
  title: 'Fixture product',
  description: {
    format: 'markdown',
    value: 'Neutral product description for a non-rendered fixture.',
  },
  seo: {
    title: 'Fixture product metadata',
  },
  images: [pendingMedia],
  status: 'pending',
  links: [
    {
      href: '/fixture-collection',
      label: 'Fixture collection',
    },
  ],
  sourceUrl: 'https://example.invalid/source/product-fixture',
  availability: 'pending',
};

export const exampleCollection: CollectionRecord = {
  slug: 'fixture-collection',
  title: 'Fixture collection',
  description: {
    format: 'markdown',
    value: 'Neutral collection description for a non-rendered fixture.',
  },
  seo: null,
  images: [pendingMedia],
  status: 'pending',
  links: [],
  sourceUrl: 'https://example.invalid/source/collection-fixture',
  productLinks: [
    {
      href: '/products/fixture-product',
      label: 'Fixture product',
    },
  ],
};

export const examplePage: PageRecord = {
  slug: 'fixture-page',
  title: 'Fixture page',
  description: {
    format: 'markdown',
    value: 'Neutral page summary for a non-rendered fixture.',
  },
  images: [],
  status: 'pending',
  links: [],
  sourceUrl: 'https://example.invalid/source/page-fixture',
  body: {
    format: 'markdown',
    value: 'Neutral page body for a non-rendered fixture.',
  },
};

export const exampleBlog: BlogRecord = {
  slug: 'fixture-blog',
  title: 'Fixture blog',
  description: {
    format: 'markdown',
    value: 'Neutral blog description for a non-rendered fixture.',
  },
  seo: {
    description: 'Fixture blog description metadata',
  },
  images: [],
  status: 'pending',
  links: [],
  sourceUrl: 'https://example.invalid/source/blog-fixture',
  articleLinks: [
    {
      href: '/blogs/fixture-blog/fixture-article',
      label: 'Fixture article',
    },
  ],
};

export const exampleArticle: ArticleRecord = {
  slug: 'fixture-article',
  title: 'Fixture article',
  description: {
    format: 'markdown',
    value: 'Neutral article summary for a non-rendered fixture.',
  },
  seo: {},
  images: [pendingMedia],
  status: 'pending',
  links: [],
  sourceUrl: 'https://example.invalid/source/article-fixture',
  blogSlug: 'fixture-blog',
  body: {
    format: 'markdown',
    value: 'Neutral article body for a non-rendered fixture.',
  },
};

import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const pendingMedia = z.object({
  status: z.literal('pending'),
  sourceReference: z.string(),
  use: z.string(),
  expectedDimensions: z.string(),
  aspectRatio: z.string(),
  reason: z.string(),
});

const editorialSeo = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  canonical: z.url().optional(),
  noIndex: z.boolean().optional(),
}).nullable().optional();

const editorialBase = {
  slug: z.string(),
  title: z.string(),
  sourceUrl: z.url(),
  sourceRetrieved: z.string(),
  status: z.literal('published'),
  seo: editorialSeo,
  media: z.array(pendingMedia),
};

const collectionPages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/collections' }),
  schema: z.object({
    slug: z.string(),
    title: z.string(),
    template: z.string(),
    sourceUrl: z.url(),
    sourceRetrieved: z.string(),
    status: z.literal('published'),
    descriptionStatus: z.enum(['available', 'pending']),
    seoDescription: z.string().nullable(),
    productSlugs: z.array(z.string()),
    media: z.array(pendingMedia),
  }),
});

const products = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/products' }),
  schema: z.object({
    slug: z.string(),
    title: z.string(),
    productType: z.string(),
    template: z.string(),
    sourceUrl: z.url(),
    sourceRetrieved: z.string(),
    status: z.literal('published'),
    availability: z.enum(['historical', 'unavailable']),
    descriptionStatus: z.enum(['available', 'pending']),
    seoDescription: z.string().nullable(),
    historicalPriceCLP: z.number().int().nonnegative().nullable(),
    historicalCompareAtPriceCLP: z.number().int().nonnegative().nullable(),
    historicalPriceMaxCLP: z.number().int().nonnegative().nullable(),
    presentations: z.array(z.string()),
    tags: z.array(z.string()),
    media: z.array(pendingMedia),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    ...editorialBase,
  }),
});

const blogs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blogs' }),
  schema: z.object({
    ...editorialBase,
    articles: z.array(z.object({
      slug: z.string(),
      title: z.string(),
      description: z.string().optional(),
      mediaSource: z.string().optional(),
    })),
  }),
});

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    ...editorialBase,
    blog: z.string(),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  products,
  collections: collectionPages,
  pages,
  blogs,
  articles,
};

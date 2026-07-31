import type { AvailableMediaAsset } from './types';

export type IndexMediaKey =
  | 'hero1'
  | 'hero2'
  | 'hero3'
  | 'hero4'
  | 'categoriasFilamentosPla';

export type IndexMediaAsset = AvailableMediaAsset & {
  filename: string;
  usage: 'index';
  uses: readonly ('index' | 'collection')[];
  sourceFile: string;
};

/**
 * The role of each local file on the index was confirmed by the user. These
 * records do not assert equivalence with any Shopify image reference.
 */
export const indexMedia = {
  hero1: {
    filename: 'Hero_1.jpg',
    sourceFile: 'Imagenes_de_la_web/index/Hero_1.jpg',
    src: '/images/index/Hero_1.jpg',
    width: 2500,
    height: 2500,
    usage: 'index',
    uses: ['index'],
    status: 'available',
    alt: null,
    altStatus: 'pending',
  },
  hero2: {
    filename: 'Hero_2.jpg',
    sourceFile: 'Imagenes_de_la_web/index/Hero_2.jpg',
    src: '/images/index/Hero_2.jpg',
    width: 2500,
    height: 1146,
    usage: 'index',
    uses: ['index'],
    status: 'available',
    alt: null,
    altStatus: 'pending',
  },
  hero3: {
    filename: 'Hero_3.jpg',
    sourceFile: 'Imagenes_de_la_web/index/Hero_3.jpg',
    src: '/images/index/Hero_3.jpg',
    width: 1799,
    height: 927,
    usage: 'index',
    uses: ['index'],
    status: 'available',
    alt: null,
    altStatus: 'pending',
  },
  hero4: {
    filename: 'Hero_4.jpg',
    sourceFile: 'Imagenes_de_la_web/index/Hero_4.jpg',
    src: '/images/index/Hero_4.jpg',
    width: 1799,
    height: 927,
    usage: 'index',
    uses: ['index'],
    status: 'available',
    alt: null,
    altStatus: 'pending',
  },
  categoriasFilamentosPla: {
    filename: 'Categorias_1_filamentos_pla.jpg',
    sourceFile: 'Imagenes_de_la_web/index/Categorias_1_filamentos_pla.jpg',
    src: '/images/index/Categorias_1_filamentos_pla.jpg',
    width: 1000,
    height: 750,
    usage: 'index',
    uses: ['index', 'collection'],
    status: 'available',
    alt: null,
    altStatus: 'pending',
  },
} satisfies Record<IndexMediaKey, IndexMediaAsset>;

import type { AvailableMediaAsset } from './types';

export type IndexMediaKey =
  | 'hero1'
  | 'hero2'
  | 'hero3'
  | 'hero4'
  | 'categoriasFilamentosPla'
  | 'categoriasImpresora3d'
  | 'compromisoCarreteFilamento'
  | 'compromisoImpresion3d'
  | 'compromisoLineaMeta'
  | 'compromisoPulgarArriba';

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
  categoriasImpresora3d: {
    filename: 'Categorias_2_impresora_3D_Axis_one.jpg',
    sourceFile: 'Imagenes_de_la_web/index/Categorias_2_impresora_3D_Axis_one.jpg',
    src: '/images/index/Categorias_2_impresora_3D_Axis_one.jpg',
    width: 4928,
    height: 3264,
    usage: 'index',
    uses: ['index', 'collection'],
    status: 'available',
    alt: null,
    altStatus: 'pending',
  },
  compromisoCarreteFilamento: {
    filename: 'Nuestros_compromisos_icono_1_carrete_filamento.avif',
    sourceFile: 'Imagenes_de_la_web/index/Nuestros_compromisos_icono_1_carrete_filamento.avif',
    src: '/images/index/Nuestros_compromisos_icono_1_carrete_filamento.avif',
    width: 150,
    height: 150,
    usage: 'index',
    uses: ['index'],
    status: 'available',
    alt: null,
    altStatus: 'pending',
  },
  compromisoImpresion3d: {
    filename: 'Nuestros_compromisos_icono_2_impresion-3d.avif',
    sourceFile: 'Imagenes_de_la_web/index/Nuestros_compromisos_icono_2_impresion-3d.avif',
    src: '/images/index/Nuestros_compromisos_icono_2_impresion-3d.avif',
    width: 150,
    height: 150,
    usage: 'index',
    uses: ['index'],
    status: 'available',
    alt: null,
    altStatus: 'pending',
  },
  compromisoLineaMeta: {
    filename: 'Nuestros_compromisos_icono_3_linea-de-meta.avif',
    sourceFile: 'Imagenes_de_la_web/index/Nuestros_compromisos_icono_3_linea-de-meta.avif',
    src: '/images/index/Nuestros_compromisos_icono_3_linea-de-meta.avif',
    width: 150,
    height: 150,
    usage: 'index',
    uses: ['index'],
    status: 'available',
    alt: null,
    altStatus: 'pending',
  },
  compromisoPulgarArriba: {
    filename: 'Nuestros_compromisos_icono_4_pulgar_arriba.avif',
    sourceFile: 'Imagenes_de_la_web/index/Nuestros_compromisos_icono_4_pulgar_arriba.avif',
    src: '/images/index/Nuestros_compromisos_icono_4_pulgar_arriba.avif',
    width: 150,
    height: 150,
    usage: 'index',
    uses: ['index'],
    status: 'available',
    alt: null,
    altStatus: 'pending',
  },
} satisfies Record<IndexMediaKey, IndexMediaAsset>;

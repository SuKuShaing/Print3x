import type { AvailableMediaAsset } from './types';
import categoriasFilamentosPla from '../assets/index/Categorias_1_filamentos_pla.jpg';
import categoriasImpresora3d from '../assets/index/Categorias_2_impresora_3D_Axis_one.jpg';
import compromisoCarreteFilamento from '../assets/index/Nuestros_compromisos_icono_1_carrete_filamento.avif';
import compromisoImpresion3d from '../assets/index/Nuestros_compromisos_icono_2_impresion-3d.avif';
import compromisoLineaMeta from '../assets/index/Nuestros_compromisos_icono_3_linea-de-meta.avif';
import compromisoPulgarArriba from '../assets/index/Nuestros_compromisos_icono_4_pulgar_arriba.avif';
import hero1 from '../assets/index/Hero_1.jpg';
import hero2 from '../assets/index/Hero_2.jpg';
import hero3 from '../assets/index/Hero_3.jpg';
import hero4 from '../assets/index/Hero_4.jpg';

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
    sourceFile: 'src/assets/index/Hero_1.jpg',
    src: hero1,
    width: hero1.width,
    height: hero1.height,
    usage: 'index',
    uses: ['index'],
    status: 'available',
    alt: null,
    altStatus: 'pending',
  },
  hero2: {
    filename: 'Hero_2.jpg',
    sourceFile: 'src/assets/index/Hero_2.jpg',
    src: hero2,
    width: hero2.width,
    height: hero2.height,
    usage: 'index',
    uses: ['index'],
    status: 'available',
    alt: null,
    altStatus: 'pending',
  },
  hero3: {
    filename: 'Hero_3.jpg',
    sourceFile: 'src/assets/index/Hero_3.jpg',
    src: hero3,
    width: hero3.width,
    height: hero3.height,
    usage: 'index',
    uses: ['index'],
    status: 'available',
    alt: null,
    altStatus: 'pending',
  },
  hero4: {
    filename: 'Hero_4.jpg',
    sourceFile: 'src/assets/index/Hero_4.jpg',
    src: hero4,
    width: hero4.width,
    height: hero4.height,
    usage: 'index',
    uses: ['index'],
    status: 'available',
    alt: null,
    altStatus: 'pending',
  },
  categoriasFilamentosPla: {
    filename: 'Categorias_1_filamentos_pla.jpg',
    sourceFile: 'src/assets/index/Categorias_1_filamentos_pla.jpg',
    src: categoriasFilamentosPla,
    width: categoriasFilamentosPla.width,
    height: categoriasFilamentosPla.height,
    usage: 'index',
    uses: ['index', 'collection'],
    status: 'available',
    alt: null,
    altStatus: 'pending',
  },
  categoriasImpresora3d: {
    filename: 'Categorias_2_impresora_3D_Axis_one.jpg',
    sourceFile: 'src/assets/index/Categorias_2_impresora_3D_Axis_one.jpg',
    src: categoriasImpresora3d,
    width: categoriasImpresora3d.width,
    height: categoriasImpresora3d.height,
    usage: 'index',
    uses: ['index', 'collection'],
    status: 'available',
    alt: null,
    altStatus: 'pending',
  },
  compromisoCarreteFilamento: {
    filename: 'Nuestros_compromisos_icono_1_carrete_filamento.avif',
    sourceFile: 'src/assets/index/Nuestros_compromisos_icono_1_carrete_filamento.avif',
    src: compromisoCarreteFilamento,
    width: compromisoCarreteFilamento.width,
    height: compromisoCarreteFilamento.height,
    usage: 'index',
    uses: ['index'],
    status: 'available',
    alt: null,
    altStatus: 'pending',
  },
  compromisoImpresion3d: {
    filename: 'Nuestros_compromisos_icono_2_impresion-3d.avif',
    sourceFile: 'src/assets/index/Nuestros_compromisos_icono_2_impresion-3d.avif',
    src: compromisoImpresion3d,
    width: compromisoImpresion3d.width,
    height: compromisoImpresion3d.height,
    usage: 'index',
    uses: ['index'],
    status: 'available',
    alt: null,
    altStatus: 'pending',
  },
  compromisoLineaMeta: {
    filename: 'Nuestros_compromisos_icono_3_linea-de-meta.avif',
    sourceFile: 'src/assets/index/Nuestros_compromisos_icono_3_linea-de-meta.avif',
    src: compromisoLineaMeta,
    width: compromisoLineaMeta.width,
    height: compromisoLineaMeta.height,
    usage: 'index',
    uses: ['index'],
    status: 'available',
    alt: null,
    altStatus: 'pending',
  },
  compromisoPulgarArriba: {
    filename: 'Nuestros_compromisos_icono_4_pulgar_arriba.avif',
    sourceFile: 'src/assets/index/Nuestros_compromisos_icono_4_pulgar_arriba.avif',
    src: compromisoPulgarArriba,
    width: compromisoPulgarArriba.width,
    height: compromisoPulgarArriba.height,
    usage: 'index',
    uses: ['index'],
    status: 'available',
    alt: null,
    altStatus: 'pending',
  },
} satisfies Record<IndexMediaKey, IndexMediaAsset>;

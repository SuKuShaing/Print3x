import type { ImageMetadata } from 'astro';
import type { AvailableMediaAsset } from './types';

const localProductImages = import.meta.glob('../assets/index-products-pla/*/*.jpg', {
  eager: true,
  import: 'default',
}) as Record<string, ImageMetadata>;

type ProductMediaAsset = AvailableMediaAsset & {
  filename: string;
  sourceFile: string;
  usage: 'product';
};

type ImageRole = 'box-roll-egg' | 'roll-egg' | 'box-roll' | 'egg';

const imageRole = (filename: string): ImageRole => {
  const normalized = filename.toLocaleLowerCase();

  if (normalized.startsWith('huevo')) return 'egg';
  if (normalized.includes('caja') && normalized.includes('huevo')) return 'box-roll-egg';
  if (normalized.includes('huevo')) return 'roll-egg';
  return 'box-roll';
};

const imagesFor = (folder: string, order: ImageRole[] = ['box-roll-egg', 'roll-egg', 'box-roll', 'egg']): ProductMediaAsset[] =>
  Object.entries(localProductImages)
    .filter(([sourceFile]) => sourceFile.includes(`/index-products-pla/${folder}/`))
    .sort(([left], [right]) => {
      const leftRole = order.indexOf(imageRole(left.split('/').pop() ?? left));
      const rightRole = order.indexOf(imageRole(right.split('/').pop() ?? right));
      return leftRole - rightRole || left.localeCompare(right);
    })
    .map(([sourceFile, src]) => ({
      filename: sourceFile.split('/').pop() ?? sourceFile,
      sourceFile: sourceFile.replace('../', 'src/'),
      src,
      width: src.width,
      height: src.height,
      usage: 'product',
      status: 'available',
      alt: null,
      altStatus: 'pending',
    }));

/** Local PLA galleries keyed by the approved historical product slug. */
export const productMedia: Record<string, ProductMediaAsset[]> = {
  filamento_pla_amarillo: imagesFor('pla-amarillo'),
  filamento_pla_azul: imagesFor('pla-azul'),
  filamento_pla_blanco: imagesFor('pla-blanco'),
  filamento_pla_celeste: imagesFor('pla-celeste'),
  filamento_pla_gris: imagesFor('pla-gris'),
  filamento_pla_negro: imagesFor('pla-negro'),
  filamento_pla_oro: imagesFor('pla-dorado'),
  filamento_pla_transparente: imagesFor('pla-transparente', ['box-roll', 'box-roll-egg', 'roll-egg', 'egg']),
  filamento_pla_verde: imagesFor('pla-verde'),
  pla_pantera_rosa: imagesFor('pla-rosado'),
  pla_rojo: imagesFor('pla-rojo', ['box-roll-egg', 'roll-egg', 'egg', 'box-roll']),
};

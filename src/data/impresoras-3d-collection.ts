import type { ImageMetadata } from 'astro';
import type { AvailableMediaAssetWithReviewedAlt } from './types';
import heroImage from '../assets/index-products-axis-one/fotos producto/Foto5.jpg';
import axisOneCardImage from '../assets/index-products-axis-one/fotos producto/foto4.jpg';
import axisOneSecondaryCardImage from '../assets/index-products-axis-one/fotos producto/foto2.jpg';
import padiCardImage from '../assets/index-products-padi/fotos producto/foto 3 despegue.jpg';

const padiImages = import.meta.glob('../assets/index-products-padi/fotos producto/*', {
  eager: true,
  import: 'default',
}) as Record<string, ImageMetadata>;
const padiSecondaryCardImage = padiImages['../assets/index-products-padi/fotos producto/fotos 2 despegue.JPG'];

export const impresoras3dCollectionDescription =
  'Obtén tu Impresoras 3D Profesional, con capacitaciones y asesoría, disponibles a la venta, cuentan con calibración automática, gran área de impresión y el respaldo completo de nuestro equipo.';

export const impresoras3dCollectionHero: AvailableMediaAssetWithReviewedAlt = {
  status: 'available',
  altStatus: 'reviewed',
  alt: 'Impresora 3D Profesional Axis One',
  src: heroImage,
  width: heroImage.width,
  height: heroImage.height,
  sourceUrl: 'src/assets/index-products-axis-one/fotos producto/Foto5.jpg',
};

const cardMedia = (src: ImageMetadata, alt: string): AvailableMediaAssetWithReviewedAlt => ({
  status: 'available',
  altStatus: 'reviewed',
  alt,
  src,
  width: src.width,
  height: src.height,
});

export const impresoras3dCollectionCardMedia = {
  'axis-one': [
    cardMedia(axisOneCardImage, 'Impresora 3D Profesional Axis One'),
    cardMedia(axisOneSecondaryCardImage, 'Impresora 3D Profesional Axis One'),
  ],
  'padi-superficie-de-impresion': [
    cardMedia(padiCardImage, 'Padi - Superficie de impresión'),
    ...(padiSecondaryCardImage ? [cardMedia(padiSecondaryCardImage, 'Padi - Superficie de impresión')] : []),
  ],
};

import type { AvailableMediaAsset } from './types';

type SiteMediaAsset = AvailableMediaAsset & {
  filename: string;
  sourceFile: string;
  usage: 'header';
};

export const siteMedia = {
  logo: {
    filename: 'Logo Print3x.png',
    sourceFile: 'Imagenes_de_la_web/Logo Print3x.png',
    src: '/images/brand/logo-print3x.png',
    width: 2362,
    height: 433,
    usage: 'header',
    status: 'available',
    alt: null,
    altStatus: 'pending',
  },
} satisfies Record<'logo', SiteMediaAsset>;

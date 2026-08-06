import type { AvailableMediaAsset } from './types';
import logo from '../assets/Logo Print3x.png';

type SiteMediaAsset = AvailableMediaAsset & {
  filename: string;
  sourceFile: string;
  usage: 'header';
};

export const siteMedia = {
  logo: {
    filename: 'Logo Print3x.png',
    sourceFile: 'src/assets/Logo Print3x.png',
    src: logo,
    width: logo.width,
    height: logo.height,
    usage: 'header',
    status: 'available',
    alt: null,
    altStatus: 'pending',
  },
} satisfies Record<'logo', SiteMediaAsset>;

import type { ImageMetadata } from 'astro';
import type { AvailableMediaAsset } from './types';

export type PadiAccordion = {
  title: string;
  content: string;
};

export type PadiFeature = {
  heading: string;
  paragraphs: readonly string[];
  image: AvailableMediaAsset;
  links?: readonly { href: string; label: string }[];
};

export type PadiProductDetails = {
  heading: string;
  accordions: readonly PadiAccordion[];
  features: readonly PadiFeature[];
};

const localImages = import.meta.glob('../assets/index-products-padi/**/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', {
  eager: true,
  import: 'default',
}) as Record<string, ImageMetadata>;

const image = (filename: string, alt: string): AvailableMediaAsset => {
  const src = localImages[`../assets/index-products-padi/${filename}`];

  if (!src) {
    throw new Error(`Missing Padi image: ${filename}`);
  }

  return {
    status: 'available',
    altStatus: 'reviewed',
    alt,
    src,
    width: src.width,
    height: src.height,
    sourceUrl: `src/assets/index-products-padi/${filename}`,
  };
};

const productImage = (filename: string): AvailableMediaAsset =>
  image(`fotos producto/${filename}`, 'Padi - Superficie de impresión');

export const padiGallery: readonly AvailableMediaAsset[] = [
  productImage('foto 1 dos padis.JPG'),
  productImage('fotos 2 despegue.JPG'),
  productImage('foto 3 despegue.jpg'),
  productImage('foto 4 otro despegue.JPG'),
];

export const padiProductDetails: Record<string, PadiProductDetails> = {
  'padi-superficie-de-impresion': {
    heading: 'Características de la superficie de impresión Padi',
    accordions: [],
    features: [
      {
        heading: 'Objetivo del Padi',
        paragraphs: [
          'Los Padi son un producto diseñado para facilitarte la vida, está hecho para que se pegue el filamento a la base y sea muy fácil de remover.',
          'Reemplazan la cinta adhesiva azul y la laca que ocupan las otras impresoras.',
        ],
        image: image('logo Axis One.png', 'Logo Axis One cuadrado, impresora 3D producida por Print3x'),
      },
      {
        heading: 'Fácil Adhesión',
        paragraphs: [
          'El Padi tiene una película como el polímero de la molécula de laca, la cual le otorga la propiedad de que el filamento se pegue fácilmente a su superficie.',
        ],
        image: image('despegue 1 Facil Adhesión.JPG', 'Superficie de impresión 3D Padi para facilitar la adhesión'),
      },
      {
        heading: 'Despegue flexible',
        paragraphs: [
          'Las impresiones 3D se despegan muy fácil de esta superficie, solo con doblar el Padi.',
          'Así de simple. ;)',
        ],
        image: image('despegue 2 Despegue Flexible.JPG', 'Superficie de impresión 3D Padi flexible'),
      },
      {
        heading: 'Instalación Magnética',
        paragraphs: [
          '¿Se mueve? ¿Quedará mal? Simplemente colócalo y el Padi se pegará a la plataforma. ¡Así de simple!',
        ],
        image: image('despegue 3, instalación magnética.JPG', 'Instalación magnética de la superficie de impresión Padi'),
      },
      {
        heading: 'Comportamiento Térmico Inteligente',
        paragraphs: [
          'Cuando la plataforma está caliente, a más de 60 °C, el filamento se adhiere fácilmente. Cuando está fría, entre 5 °C y 20 °C, se despega con facilidad.',
        ],
        image: image('Emoji_hot_and_cold2.webp', 'Comportamiento térmico de la superficie Padi'),
      },
      {
        heading: 'Único elemento',
        paragraphs: [
          'Utilizar el Padi reemplaza la laca, la cinta azul, los pegamentos, los aerosoles de impresión 3D, la cinta kapton y muchos artilugios más.',
        ],
        image: image('fotos padi negro.jpg', 'Fotografía de una superficie Padi negra'),
      },
      {
        heading: 'Impresiones perfectas con filamentos de calidad',
        paragraphs: [
          'Se puede imprimir sobre los Padi con filamentos de cualquier tipo: ABS, PLA, TPU, Nylon, madera, etc. y tendrás superficies de contacto perfectamente hechas.',
          'También imprime espectacular con filamento PLA de calidad como el nuestro. Puedes revisar todas las características de nuestro material PLA aquí.',
        ],
        links: [
          { href: '/collections/pla#CaracteristicasFilamentoPLA', label: 'Características de nuestro material PLA aquí' },
          { href: '/collections/pla', label: 'Comprar Filamentos PLA de Calidad aquí' },
        ],
        image: image('filamentos de colores.webp', 'Filamentos PLA de Print3x'),
      },
      {
        heading: 'Historia',
        paragraphs: [
          'Un día estaba haciendo una demostración de nuestra anterior impresora, la Minerva, un modelo descontinuado, y la base era de vidrio y ocupábamos laca para que las piezas se peguen. Para despegarlas ocupábamos una espátula delgada y costó tanto despegarla que, al ocupar fuerza, despegué la pieza y me enterré la punta de la espátula en la mano, frente a los niños del colegio.',
          'Desde ahí buscábamos una solución para hacer el despegue más fácil. Dos años después, Padi.',
        ],
        image: image('Historia.JPG', 'Historia del desarrollo de la superficie de impresión Padi'),
      },
    ],
  },
};

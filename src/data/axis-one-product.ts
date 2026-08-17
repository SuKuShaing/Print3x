import type { ImageMetadata } from 'astro';
import type { AvailableMediaAsset, VideoMediaAsset } from './types';

export type AxisOneAccordion = {
  title: string;
  content: string;
};

export type AxisOneFeature = {
  heading: string;
  paragraphs: readonly string[];
  image: AvailableMediaAsset;
  links?: readonly { href: string; label: string }[];
};

export type AxisOneProductDetails = {
  heading: string;
  accordions: readonly AxisOneAccordion[];
  videoUrl: string;
  videoId: string;
  videoLabel: string;
  features: readonly AxisOneFeature[];
  technicalSheet: {
    heading: string;
    paragraphs: readonly string[];
  };
};

const localImages = import.meta.glob('../assets/index-products-axis-one/**/*.{jpg,jpeg,png}', {
  eager: true,
  import: 'default',
}) as Record<string, ImageMetadata>;

const image = (filename: string, alt: string): AvailableMediaAsset => {
  const src = localImages[`../assets/index-products-axis-one/${filename}`];

  if (!src) {
    throw new Error(`Missing Axis One image: ${filename}`);
  }

  return {
    status: 'available',
    altStatus: 'reviewed',
    alt,
    src,
    width: src.width,
    height: src.height,
    sourceUrl: `src/assets/index-products-axis-one/${filename}`,
  };
};

const productImage = (filename: string): AvailableMediaAsset =>
  image(`fotos producto/${filename}`, 'Impresora 3D Profesional Axis One');

const axisOneVideo: VideoMediaAsset = {
  status: 'video',
  videoId: 'J-rV8g_5Te4',
  title: 'Video de presentación impresora 3D Axis One producida por Print3x',
  width: 16,
  height: 9,
  poster: image('miniatura.jpg', 'Miniatura del video de presentación de la impresora 3D Axis One'),
};

export const axisOneGallery: readonly (AvailableMediaAsset | VideoMediaAsset)[] = [
  productImage('foto4.jpg'),
  axisOneVideo,
  productImage('foto2.jpg'),
  productImage('foto1.jpg'),
  productImage('7 Print3x.png'),
  productImage('23 print3x.png'),
  productImage('11 print3x.png'),
  productImage('Foto5.jpg'),
  productImage('Foto9.jpg'),
];

export const axisOneProductDetails: Record<string, AxisOneProductDetails> = {
  'axis-one': {
    heading: 'Características del la impresora 3D Profesional Axis One',
    videoUrl: 'https://www.youtube.com/watch?v=J-rV8g_5Te4',
    videoId: 'J-rV8g_5Te4',
    videoLabel: 'Video de presentación impresora 3D Axis One producida por Print3x',
    accordions: [
      {
        title: 'Volumen de impresión',
        content: 'El volumen de impresión de la Impresora 3D Profesional Axis One es de 300 x 280 x 300 mm. Representados en orden XYZ.',
      },
      {
        title: 'Calibración Automatica',
        content: 'Nuestra Impresora 3D Profesional Axis One cuenta con calibración automatica',
      },
      {
        title: 'Filamentos Rígidos y Flexibles',
        content: 'Nuestra Impresora 3D Profesional Axis One puede trabajar tanto con filamento rigidos como flexifles, dado que tiene el motor en el extrusor, es decir, es de bowden directo.',
      },
      {
        title: 'Padi',
        content: 'Cuenta con una superficie padi sobre la cual se imprime, es magnetica y que le proporciona la adherencia necesaria, en la cual no necesitará de adesivos adicionales, tales como Laca o pegamento.',
      },
      {
        title: 'Pantalla Táctil',
        content: 'Cuenta con una pantalla tactil donde se puede hacer todo lo que necesite.',
      },
      {
        title: 'Alta Resolución',
        content: 'Puede trabajar con resoluciones de capa de 0.1 mm',
      },
      {
        title: 'Velocidades de impresión',
        content: 'La maquina imprime a una velocidad de 167 mm/s',
      },
    ],
    features: [
      {
        heading: 'Objetivo',
        paragraphs: [
          'La impresora 3D Axis One esta diseñada para que sean muy simples de usar y que entreguen una gran calidad de impresión, con su gran volumen de impresión, su velocidad, la pantalla táctil y los filamentos rígidos y flexibles que puede utilizar, queremos que tengas la mejor experiencia y resultados de gran calidad.',
          'Además cuentas con todo un equipo para responder a tus dudas y dispones de un soporte técnico completo.',
        ],
        image: image('logo Axis One.png', 'Logo Axis One cuadrado, impresora 3D producida por Print3x'),
      },
      {
        heading: 'Volumen de impresión',
        paragraphs: [
          'Un gran volumen de impresión 3D para que logres construir piezas de gran tamaño de una sola vez.',
          '300 x 280 x 300 mm.',
        ],
        image: image('Axis One 300 mm al cubo.png', 'Volumen de impresión de la impresora 3D Axis One Print3x'),
      },
      {
        heading: 'Calibración Automática',
        paragraphs: [
          'Es un sistema pionero de monitoreo de la plataforma mediante inducción de impresión en la cual calcula y corrige las desviaciones de la base, con una sensibilidad de 10 micrones de precisión.',
        ],
        image: image('Sensor con ondas.jpg', 'Sensor de calibración automática Print3x'),
      },
      {
        heading: 'Filamentos Rígidos y Flexibles',
        paragraphs: [
          'Nuestras impresoras están hechas para ocupar filamentos rígidos y flexibles. Axis One es una de las pocas impresoras del mercado que podemos imprimir materiales flexibles.',
          'Nuestros filamentos son Biodegradables, inocuos con los alimentos, No tóxicos en caso de ser ingeridos, no emiten olores al ser impresos. Todos nuestros filamentos están estandarizados para que tengas la mejor calidad y la máxima vida útil de la impresora 3D.',
          'Los mejores Filamentos Flexibles aquí',
        ],
        links: [{ href: '/collections/pla', label: 'Los mejores Filamentos PLA aquí' }],
        image: image('Flexibles2.jpg', 'Corazón 3D impreso con filamento 3D flexible por una impresora Axis One'),
      },
      {
        heading: 'Padi',
        paragraphs: ['Base de impresión flexible de fácil remoción de impresiones, con adhesión magnética y comportamiento Termodependiente.'],
        links: [{ href: '/products/padi-superficie-de-impresion', label: 'Todas las Características del Padi aquí' }],
        image: image('DSC_0009.jpg', 'Impresión 3D sobre la superficie de impresión 3D Padi'),
      },
      {
        heading: 'Pantalla Táctil',
        paragraphs: [
          'La impresora Axis One cuenta con una pantalla TFT, en la cual, hemos trabajado para hacer el display cada vez más fácil e intuitivo de ocupar. Esta 3ra versión, en la cual incorporamos la capacidad de recibir los archivos de impresión gcodes directamente en la pantalla y cuenta con su propio sistema operativo.',
        ],
        image: image('Pantalla tactil.jpg', 'Pantalla Táctil de la impresora 3D Axis One'),
      },
      {
        heading: 'MCE',
        paragraphs: [
          'La Impresora 3D Axis One cuenta con Memoria de Corte de Energía, la cual guarda el ultimo comando de ejecución. Entonces, cuando se corte la energía, al volver la corriente, te preguntará si deseas continuar la impresión.',
        ],
        image: image('procesador electronico.jpeg', 'Circuitos electrónicos de la impresora 3D Axis One'),
      },
      {
        heading: 'Alta Resolución',
        paragraphs: [
          'La Impresora 3D Axis One puede otorgarle una resolución de 100 micrometros (0,1 mm) en la altura de capa, y de 10 micrometros (0,01 mm) en horizontal XY.',
        ],
        image: image('impresion 3D 4.png', 'Impresión 3D con la impresora 3D Axis One'),
      },
      {
        heading: 'Separación de corrientes',
        paragraphs: [
          'La separación de corrientes de alta y baja potencia es para lograr calentar la base y el extrusor de manera muy rápida sin afectar a la placa electrónica que controla la maquina.',
        ],
        image: image('electricidad_rayo.jpg', 'Corrientes separadas en la impresora 3D Axis One'),
      },
      {
        heading: 'Protección Electrica',
        paragraphs: [
          'En caso de alzas o bajas de energía, la impresora cuenta con un sistema que la protege en caso de que ocurra esta variaciones en el voltaje y no permite que afecte a los componentes externos.',
        ],
        image: image('Sin título-1.png', 'La impresora 3D Axis One es segura frente a comportamientos eléctricos erráticos'),
      },
      {
        heading: 'Soporte Técnico Total',
        paragraphs: [
          'Al ser diseñadas y fabricadas en Chile, por nosotros, Print3x (Crea 3D SpA), contamos con un stock completo de piezas, además de tener el knowhow del porqué de las partes, para proporcionarle una reparación completa y otorgarle la máxima calidad en nuestros productos.',
        ],
        image: image('reparacion.png', 'Logo de herramientas representando el servicio técnico que presta Print3x'),
      },
      {
        heading: 'Software propio',
        paragraphs: [
          'Utilizamos un software propio que junto con la comunidad vamos mejorando generación tras generación.',
          'El Software Slic3r lo tenemos configurado y una vez instalado, esta listo para usar.',
          'Te avisamos por mail para que descargues la última versión de nuestras configuraciones.',
        ],
        image: image('12.jpg', 'Software de laminado Slic3r proveído por Print3x'),
      },
      {
        heading: 'S.O.C.',
        paragraphs: [
          'La impresora 3D cuenta con Sistemas Ópticos de Contactos, los cuales evitan que haya contacto cuando la impresora hace homming, evitando el desgaste de piezas criticas.',
          'Las partes interrumpen una luz infrarroja y con ello la maquina sabe donde están las partes mobiles.',
        ],
        image: image('OptoSensor1.jpg', 'Endstop óptico de la impresora 3D Axis One'),
      },
      {
        heading: 'Tensores regulables',
        paragraphs: [
          'Con el tiempo las maquinas sufren desgaste y para ello tenemos unas partes que el usuario a los meses de uso puede ir regulando para controlar la tensión en las correas de la maquina, con el fin de que obtengas los mejores resultados. ;)',
        ],
        image: image('Tensor.jpg', 'Tensores regulables de la impresora 3D profesional Axis One'),
      },
      {
        heading: 'Velocidades de impresión',
        paragraphs: [
          'La impresora se mueve a una velocidad de 85 mm/s cuando esta extrayendo y a 167 mm/s cuando no esta imprimiendo, en los saltos de posición.',
          'Esto la posiciona como una de las más rápidas de su categoría.',
        ],
        image: image('rapidez-01.png', 'Las velocidades alcanzadas por la impresora 3D Profesional Axis One'),
      },
      {
        heading: 'Capacitaciones',
        paragraphs: [
          'La compra de la Axis One incluye una capacitación presencial en el uso y mantención de la impresora 3D.',
          'También contamos con las capacitaciones online en la cual entregamos la mayoría de nuestros secretos y tips para que sepas como sacar el maximo provecho a tu impresora 3D, Y contamos con las capacitaciones de nivel usuario y profesionales.',
        ],
        image: image('capacitaciones.jpg', 'Cursos de capacitación en impresión 3D para la impresora Axis One'),
      },
    ],
    technicalSheet: {
      heading: 'Ficha Técnica Impresora 3D Axis One',
      paragraphs: [
        'Gracias por elegir nuestra maquina y si deseas saber mayor cantidad de detalles y ver todas sus características, descarga el documento a continuación.',
        'En este texto-link podrás descargar la ficha técnica de la impresora 3D Axis One, al hacer click aquí.',
      ],
    },
  },
};

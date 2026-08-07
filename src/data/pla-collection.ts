import type { ImageMetadata } from 'astro';
import type { AvailableMediaAssetWithReviewedAlt } from './types';
import diameterImage from '../assets/index-collections-pla/1,75.webp';
import catImage from '../assets/index-collections-pla/18-04-2015-gato-olfatear.webp';
import guaranteeImage from '../assets/index-collections-pla/Badge-garantia-dorado.webp';
import biodegradableImage from '../assets/index-collections-pla/Biodegradable.webp';
import bubblesImage from '../assets/index-collections-pla/Burbujas_en_el_filamento.avif';
import checkImage from '../assets/index-collections-pla/Check.webp';
import rollFiveImage from '../assets/index-collections-pla/Cinco hermosos Rollos de filamento PLA y huevos Print3x Recortada Grande - Ligera.jpg';
import rollFourImage from '../assets/index-collections-pla/Cuatro Rollos de filamento PLA y huevos Print3x.jpg';
import dimensionsImage from '../assets/index-collections-pla/Dimensiones del Rollo.jpg';
import temperatureImage from '../assets/index-collections-pla/Emoji_hot_and_cold2.webp';
import inocuousImage from '../assets/index-collections-pla/Emogiis.webp';
import extruderImage from '../assets/index-collections-pla/Extrusor_Tapado_Print3x.avif';
import brokenImage from '../assets/index-collections-pla/Filamento_PLA_roto_autoquiebre.webp';
import hydrolysisImage from '../assets/index-collections-pla/hidrolisis.webp';
import sunImage from '../assets/index-collections-pla/lente2-20150919-161405.webp';
import filamentCollectionImage from '../assets/index-collections-pla/makerbot_mp06591_10_pack_bundle_true_col.webp';
import recyclingImage from '../assets/index-collections-pla/recycling-304974_960_720.webp';
import colorImage from '../assets/index-collections-pla/cientifico-mezclando-liquidos_1423-1805_.webp';

export const plaCollectionDescription =
  'Los filamento PLA que ofrecemos son de suave impresión, estandarizados a un diámetro 1,75 mm, con una tolerancia de calidad de ± 0.05 mm para asegurar un diámetro regular y una impresión impecable, con color estable gracias a su distribución homogénea de los complejantes que se le añaden al plástico.';

export type PlaCollectionFeature = {
  heading: string;
  media: AvailableMediaAssetWithReviewedAlt;
  html: string;
  expectedWidth: number;
  expectedHeight: number;
  reverse: boolean;
  imageWidth: 'small' | 'medium';
  contentPosition: 'middle' | 'top';
};

const featureMedia = (src: ImageMetadata, alt: string): AvailableMediaAssetWithReviewedAlt => ({
  status: 'available',
  altStatus: 'reviewed',
  alt,
  src,
  width: src.width,
  height: src.height,
});

export const plaCollectionFeatures: readonly PlaCollectionFeature[] = [
  {
    heading: 'Grosor del pla plastico',
    media: featureMedia(diameterImage, 'El grosor de los filamentos PLA de Print3x es de 1.75 mm printex printec print3c'),
    html: '<p>El grosor de nuestros filamentos es de&nbsp;<strong>1,75 mm</strong>&nbsp;con una tolerancia&nbsp;de ± 0,05mm.<br>Todos nuestros filamentos están estandarizados para conservar el mismo diámetro en toda la extensión del filamento.</p>',
    expectedWidth: 1500,
    expectedHeight: 1011,
    reverse: true,
    imageWidth: 'medium',
    contentPosition: 'middle',
  },
  {
    heading: '¿ Cuánto trae un rollo de pla 3d?',
    media: featureMedia(rollFiveImage, 'Rollos de Filamento PLA Print3x junto con huevos impresos en 3D de los colores celeste, azul, amarillo, rojo y verde | printex printec print3c'),
    html: '<p>Cada uno de nuestros filamentos están cuidadosamente enrollado con 1kg de filamento PLA</p>',
    expectedWidth: 1500,
    expectedHeight: 1086,
    reverse: false,
    imageWidth: 'medium',
    contentPosition: 'top',
  },
  {
    heading: '¿ Cuántos metros trae de pla 1.75 mm ?',
    media: featureMedia(rollFourImage, 'Cuatro Rollos de filamento PLA Print3x Negro, blanco, transparente y dorado más huevos | printex printec print3c'),
    html: '<p>En el carrete hay enrollados 335,29 mt de filamento PLA</p>',
    expectedWidth: 1500,
    expectedHeight: 1500,
    reverse: true,
    imageWidth: 'medium',
    contentPosition: 'top',
  },
  {
    heading: 'Color Homogéneo del filamento 3d',
    media: featureMedia(colorImage, 'Los filamentos PLA de la empresa print3x son de un color totalmente homogéneo printex printec print3c'),
    html: '<p>Las propiedades del filamento PLA que agregan&nbsp;los complejantes (aditivos para darle el color, otorgarle protección contra el UV y la hidrólisis) están&nbsp;completamente&nbsp;<strong>homogéneos&nbsp;</strong>(repartidos uniformemente) a lo largo del filamento.</p>',
    expectedWidth: 1500,
    expectedHeight: 999,
    reverse: false,
    imageWidth: 'small',
    contentPosition: 'middle',
  },
  {
    heading: 'Anti-Atascos del filamento 3d',
    media: featureMedia(extruderImage, 'Extrusor atascado producto de filamento de baja calidad | print3x printex printec print3c'),
    html: '<p>Gracias uno de los aditivos introducidos en su elaboración, se previenen la mayoría de los atascos producto de autolimpieza del nozzle.</p><p>Con una temperatura de trabajo de 200 a 220 °C</p>',
    expectedWidth: 1500,
    expectedHeight: 993,
    reverse: true,
    imageWidth: 'medium',
    contentPosition: 'middle',
  },
  {
    heading: 'Temperatura de Extrusión del 3d filamento',
    media: featureMedia(temperatureImage, 'Las temperaturas de extrusión para los filamentos PLA de print3x son 205 a 220 °C printex printec print3c'),
    html: '<p>La temperatura de extrusión se encuentra entre 205 a 220° C<br>¿Por qué esta diferencia? Depende de la cercanía del sensor de temperatura con el boquilla-Nozzle.</p><p><strong>T° de extrusión:</strong>&nbsp;205 a 220 °C</p>',
    expectedWidth: 1500,
    expectedHeight: 1169,
    reverse: false,
    imageWidth: 'medium',
    contentPosition: 'top',
  },
  {
    heading: 'Cero Burbujas del material impresora 3d',
    media: featureMedia(bubblesImage, 'Filamento con burbujas producto de una mala fabricación '),
    html: '<p>Las burbujas son pequeñas bolsas de aire que quedan el el proceso de fabricación del plástico, al momento de derretir el plástico&nbsp;a alta temperatura, la burbuja se expande por el calor y genera pequeñas explosiones&nbsp;de&nbsp;plásticos y estropean su impresión.<br>En Print3x nos encargamos de seleccionar un proveedor que ha logrado llegar al nivel de&nbsp;<strong>CERO BURBUJAS</strong>&nbsp;para que no tengas esos problemas.</p>',
    expectedWidth: 1500,
    expectedHeight: 1080,
    reverse: true,
    imageWidth: 'medium',
    contentPosition: 'top',
  },
  {
    heading: 'Materiales impresora 3d No Toxico',
    media: featureMedia(checkImage, 'El Filamento PLA de Print3x es no toxico | printex printec print3c'),
    html: '<p>Nos hemos asegurado de que, en el caso poco probable de que se coma un poco de nuestro PLA, éste no le ocasione ningún tipo de indigestión</p><p>Pd: lo hemos comido. :D</p>',
    expectedWidth: 1500,
    expectedHeight: 901,
    reverse: false,
    imageWidth: 'medium',
    contentPosition: 'top',
  },
  {
    heading: '3dfilamento Inocuo',
    media: featureMedia(inocuousImage, 'El filamento PLA es inocuo con los alimentos print3x printex printec print3c'),
    html: '<p>El PLA es de origen vegetal, de la hoja del maíz, y&nbsp;<strong>no reacciona</strong>&nbsp;con los alimentos ni materiales biológicos&nbsp;como la piel.<br>Los complejantes&nbsp;(aditivos para darle el color, otorgarle protección contra el UV y la hidrólisis) que ocupa el proveedor seleccionado tambien son inocuos con alimentos y objetos biologicos.</p>',
    expectedWidth: 1500,
    expectedHeight: 1099,
    reverse: true,
    imageWidth: 'medium',
    contentPosition: 'top',
  },
  {
    heading: 'filamento3d Sin Auto-quiebre',
    media: featureMedia(brokenImage, 'Filamento PLA quebrado por una mala fabricación | print3x printex printec print3c'),
    html: '<p>Existen en el mercado filamentos de baja calidad que se quiebran solos, uno los deja quietos y se quiebra el material.</p><p>El Auto-Quiebre es especialmente grave cuando se esta imprimiendo ya que se pierden horas valiosas de impresión. Con nuestro filamento eso no te pasara 😎</p>',
    expectedWidth: 1500,
    expectedHeight: 946,
    reverse: false,
    imageWidth: 'medium',
    contentPosition: 'top',
  },
  {
    heading: '¿ Material PLA Biodegradable ?',
    media: featureMedia(biodegradableImage, 'El Filamento PLA de print3x es biodegradable printex printec print3c'),
    html: '<p>Hay bacterias en la tierra que se comen nuestro PLA, el PLA es un&nbsp;&nbsp;polímero biodegradable desde su origen en las plantas de maíz.<br><br>¿Cuánto se demora en degradarse?<br>Al Aire libre: 75 años.<br>Enterrado en tierra y molido: 2 años.</p>',
    expectedWidth: 1500,
    expectedHeight: 900,
    reverse: true,
    imageWidth: 'medium',
    contentPosition: 'top',
  },
  {
    heading: 'Impresoras 3D Filamentos Estandarizados',
    media: featureMedia(filamentCollectionImage, 'Filamentos PLA de la mejor marca Print3x printex printec print3c'),
    html: '<p>Un grabe problema con los filamentos baratos, es que su grosor no esta estandarizado, es decir, que puede aumentar o disminuir aleatoriamente.<br>Si aumenta su grosor, genera presión&nbsp;en el extrusor y puede arruinar los engranajes internos, y estropear la impresión.<br>Si disminuye el grosor no tiene el ancho para que el engranaje&nbsp;los puedan empujar.<br>Nos aseguramos de que nuestros filamentos estén&nbsp;<strong>estandarizados</strong>&nbsp;con una precisión de variación&nbsp;menor a 0,05mm.</p>',
    expectedWidth: 1500,
    expectedHeight: 665,
    reverse: false,
    imageWidth: 'medium',
    contentPosition: 'top',
  },
  {
    heading: 'Dimensiones del Rollo de PLA 1 kg',
    media: featureMedia(dimensionsImage, 'Rollo de filamento pla print3x printex printec print3c con las dimensiones de sus diámetro externo, diámetro interno y ancho'),
    html: '<p>Las dimensiones del rollo de PLA son de</p><p>20 cm de diámetro del rollo<br>6 cm del agujero interno<br>6,5 cm de ancho del carrete de PLA</p><p>Diámetro del PLA: 1.75 mm ± 0.05<br>Cantidad de Metros: 335 mt de filamento por rollo</p>',
    expectedWidth: 1500,
    expectedHeight: 1858,
    reverse: true,
    imageWidth: 'medium',
    contentPosition: 'top',
  },
  {
    heading: 'Sin Olor el filamentos pla 3d',
    media: featureMedia(catImage, 'Filamento PLA que al ser impreso no emite olores | print3x printex printec print3c'),
    html: '<p>Durante la impresión, otros filamentos arrojan un olor que en acumulación puede ocasionar&nbsp;dolor de cabeza.<br><br>Nuestro filamento&nbsp;<strong>no emite</strong>&nbsp;ningún&nbsp;tipo de olor durante la impresión.</p>',
    expectedWidth: 1500,
    expectedHeight: 1125,
    reverse: false,
    imageWidth: 'medium',
    contentPosition: 'top',
  },
  {
    heading: 'Protección UV del filamento pla chile',
    media: featureMedia(sunImage, 'El filamento PLA de Print3x resiste más frente a los rayos UV del sol printex printec print3c'),
    html: '<p>Seleccionamos un proveedor que utiliza un complejante que protege un 30% más el plástico de los quiebres generados por la exposición a rayos UV del sol.</p><p>De todas maneras, sí la exposición es prolongada, el plástico PLA puede perder sus propiedades.</p>',
    expectedWidth: 1500,
    expectedHeight: 951,
    reverse: true,
    imageWidth: 'medium',
    contentPosition: 'top',
  },
  {
    heading: '¿ Es reciclable el filamento pla 3d?',
    media: featureMedia(recyclingImage, 'El filamento PLA de print3x es reciclable printex printec print3c'),
    html: '<p>Nuestro PLA es totalmente&nbsp;<strong>reciclable&nbsp;</strong>y te pedimos que recicles todo el material de sobra de&nbsp;una impresión 3D.</p>',
    expectedWidth: 1500,
    expectedHeight: 876,
    reverse: false,
    imageWidth: 'medium',
    contentPosition: 'top',
  },
  {
    heading: 'Baja Hidrolisis del filamento pla 1.75',
    media: featureMedia(hydrolysisImage, 'El filamento PLA de print3x presenta una baja hidrolisis printex printec print3c'),
    html: '<p>La Hidrólisis&nbsp;es un proceso en el cual las moléculas&nbsp;de agua rompen los enlaces del&nbsp;polímero (el plástico). Para evitar este proceso que rompe el plástico, el filamento&nbsp;<strong>tiene aditivos</strong>&nbsp;que reaccionan&nbsp;antes con el agua para evitar que interactúe con el polímero&nbsp;del filamento.</p>',
    expectedWidth: 1500,
    expectedHeight: 735,
    reverse: true,
    imageWidth: 'medium',
    contentPosition: 'top',
  },
  {
    heading: 'Garantía completa del mejor pla',
    media: featureMedia(guaranteeImage, 'Filamento PLA con garantía de satisfacción total print3x printex printec'),
    html: '<p>En caso de que compres nuestros filamentos y tengas problemas con la calidad, o en alguno de los puntos mencionados, te lo cambiamos gratis, incluyendo el envío que también corre por nuestra cuenta</p>',
    expectedWidth: 1500,
    expectedHeight: 1182,
    reverse: false,
    imageWidth: 'medium',
    contentPosition: 'top',
  },
] as const;

export type PlaCollectionAccordionSection = {
  caption: string;
  heading: string;
  rows: readonly { heading: string; html: string; open?: boolean }[];
};

export const plaCollectionAccordionSections: readonly PlaCollectionAccordionSection[] = [
  {
    caption: 'PREGUNTAS QUE NOS HAN HECHO SOBRE:',
    heading: 'Compatibilidad con otras marcas de nuestro filamento pla para impresora 3d',
    rows: [
      { heading: 'Filamento Creality', html: '<p>Dado que el diámetro del <strong>filamento pla creality</strong> es el mismo de nuestro Filamento PLA, se puede ocupar indistintamente, lo que sí tienes que ver, es que nuestra temperatura de funcionamiento puede ser distinta que la de ese filamento.</p>' },
      { heading: 'Filamento pla Ender', html: '<p>Dado que el diámetro del <strong>filamento pla ender</strong> es el mismo de nuestro Filamento PLA, se puede ocupar indistintamente, lo que sí tienes que ver, es que nuestra temperatura de funcionamiento puede ser distinta que la de ese filamento.</p>' },
      { heading: 'Filamento pla Esun', html: '<p>Dado que el diámetro del <strong>filamento pla esun</strong> es el mismo de nuestro Filamento PLA, se puede ocupar indistintamente, lo que sí tienes que ver, es que nuestra temperatura de funcionamiento puede ser distinta que la de ese filamento.</p>' },
      { heading: 'Filamento pla Makerbot', html: '<p>Dado que el diámetro del <strong>Filamento pla Makerbot</strong> es el mismo de nuestro Filamento PLA, se puede ocupar indistintamente, lo que sí tienes que ver, es que nuestra temperatura de funcionamiento puede ser distinta que la de ese filamento.</p><p>Dependiendo del modelo de Makerbot que tengas, puede que haya que ocupar algún hack para poder usar filamentos no Makerbot, va a depender del modelo de  Makerbot que tengas. Dado que el ancho de nuestro rollo es mayor que el del delgado carrete Makerbot, vas a tener que usarlo desde afuera. </p><p>Hemos visto que usan el filamento en un soporte externo, al costado de la impresora Makerbot.</p>' },
      { heading: 'Filamento pla gst', html: '<p>Dado que el diámetro del <strong>filamento pla gst</strong> es el mismo de nuestro Filamento PLA, se puede ocupar indistintamente, lo que sí tienes que ver, es que nuestra temperatura de funcionamiento puede ser distinta que la de ese filamento.</p>' },
      { heading: 'Filamento pla Sakata', html: '<p>Dado que el diámetro del Filamento pla Sakata es el mismo de nuestro Filamento PLA, se puede ocupar indistintamente, lo que sí tienes que ver, es que nuestra temperatura de funcionamiento puede ser distinta que la de ese filamento.</p>' },
    ],
  },
  {
    caption: 'Preguntas sobre el envío de nuestro:',
    heading: 'Filamento PLA 1.75 Chile',
    rows: [
      { heading: 'Se envía Filamento PLA a todo Chile', html: '<p>Confirmado: Se envía Filamento PLA a todas partes de Chile, por más remoto que sea, nuestro filamento llegará</p>', open: true },
      { heading: 'Filamento pla Antofagasta', html: '<p>Sí, llegamos con nuestro Filamento PLA a Antofagasta</p>' },
      { heading: 'Filamento pla Viña del Mar', html: '<p>Sí, llegamos con nuestro Filamento PLA a Viña del Mar</p>' },
      { heading: 'Filamento pla Concepción', html: '<p>Sí, llegamos con nuestro Filamento PLA a Concepción</p>' },
      { heading: 'Filamento pla Santiago Chile', html: '<p>Sí, llegamos con nuestro Filamento PLA a todas partes de Santiago de Chile</p>' },
      { heading: 'Filamento pla Iquique', html: '<p>Sí, llegamos con nuestro Filamento PLA a Iquique</p>' },
      { heading: 'Filamento pla Ñuble', html: '<p>Sí, llegamos con nuestro Filamento PLA a Ñuble</p>' },
    ],
  },
];

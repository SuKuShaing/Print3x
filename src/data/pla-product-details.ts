export type PlaAccordion = {
  title: string;
  content: string;
};

export type PlaProductDetails = {
  heading: string;
  accordions: readonly PlaAccordion[];
};

export const plaProductDetails: Record<string, PlaProductDetails> = {
  filamento_pla_amarillo: {
    heading: 'Características del pla amarillo',
    accordions: [
      {
        title: 'Diámetro del filamento amarillo',
        content: 'El diametro del Filamento PLA Amarillo es de 1.75 mm ± 0.05Estandarizado a lo largo de todo el filamento',
      },
      {
        title: 'pla yellow 1kg',
        content: 'Cada rollo de Filamento PLA Amarillo contiene 1 kg de filamento, teniendo un pesos de 1,1 kg la suma del filamento y el rollo que porta al filamento.',
      },
      {
        title: '¿ cuántos metros tiene el pla amarillo ?',
        content: 'Nuestro Filamento PLA Amarillo tiene 335,29 mt de largo enrollados en el carrete',
      },
      {
        title: 'Temperatura de trabajo del filamento amarillo',
        content: 'La temperatura del Filamento PLA Amarillo en la cual funciona óptimamente es desde los 210 hasta los 220 °C',
      },
      {
        title: 'Mescla del pla yellow',
        content: 'El color del Filamento PLA Amarillo está distribuido de manera homogénea y con los aditivos adecuados para una impresión sin termocoloración (sin cambio de tonos dentro de la misma figura impresa).',
      },
      {
        title: 'Cero Burbujas en el pla amarillo',
        content: 'El Filamento PLA Amarillo está libre de burbujas de aíre',
      },
      {
        title: 'Baja Hidrolisis del filamento pla amarillo',
        content: 'Lo normal en los filamentos es que las moléculas de agua que flotan en el aire entran al material y generan hidrolisis en el plástico, lo que produce que el filamento sea más quebradizo.Sin embargo el Filamento PLA Amarillo contiene aditivos que vuelven más lenta la entrada del agua molecular ambiental, por ende dura más en el tiempo con su brillo y firmeza',
      },
      {
        title: 'Toxicidad del filamento amarillo',
        content: 'el Filamento PLA Amarillo está libre de toxicidad, puedes hasta comerlo.Advertencia: No ingerir más de 1/2 kg de pla al día.',
      },
      {
        title: 'Reactividad del pla yellow',
        content: 'El Filamento PLA Amarillo es inocuo (no reacciona con alimentos, ni materiales biológicos como la piel).Aunque a causa de la impresión 3d, la piezas impresas tiene microporos en los cuales pueden crecer bacterias, por ende no es recomendable para hacer contenedores de alimentos.',
      },
      {
        title: '¿ Contamina el pla amarillo ?',
        content: 'El Filamento PLA Amarillo es un material biodegradable, ademas es totalmente reciclable.',
      },
      {
        title: 'Emite olores el filamento pla amarillo',
        content: 'El Filamento PLA Amarillo no emite olores al ser impreso.',
      },
      {
        title: 'Protección UV del filamento amarillo',
        content: 'El Filamento PLA Amarillo es más resiste a la deformación por UV dado que tiene aditivos para evitar esto, de todas maneras se deforma, pero demora más en hacerlo.',
      },
    ],
  },
  filamento_pla_azul: {
    heading: 'Características del pla azul',
    accordions: [
      {
        title: 'Diámetro del filamento azul',
        content: 'El diametro del Filamento PLA Azul es de 1.75 mm ± 0.05Estandarizado a lo largo de todo el filamento',
      },
      {
        title: 'pla blue 1kg',
        content: 'Cada rollo de Filamento PLA Azul contiene 1 kg de filamento, teniendo un pesos de 1,1 kg la suma del filamento y el rollo que porta al filamento.',
      },
      {
        title: '¿ cuántos metros tiene el pla azul ?',
        content: 'Nuestro Filamento PLA Azul tiene 335,29 mt de largo enrollados en el carrete',
      },
      {
        title: 'Temperatura de trabajo del filamento azul',
        content: 'La temperatura del Filamento PLA Azul en la cual funciona óptimamente es desde los 210 hasta los 220 °C',
      },
      {
        title: 'Mescla del pla blue',
        content: 'El color del Filamento PLA Azul está distribuido de manera homogénea y con los aditivos adecuados para una impresión sin termocoloración (sin cambio de tonos dentro de la misma figura impresa).',
      },
      {
        title: 'Cero Burbujas en el filamento pla azul',
        content: 'El Filamento PLA Azul está libre de burbujas de aíre',
      },
      {
        title: 'Baja Hidrolisis del pla azul',
        content: 'Lo normal en los filamentos es que las moléculas de agua que flotan en el aire entran al material y generan hidrolisis en el plástico, lo que produce que el filamento sea más quebradizo.Sin embargo el Filamento PLA Azul contiene aditivos que vuelven más lenta la entrada del agua molecular ambiental, por ende dura más en el tiempo con su brillo y firmeza',
      },
      {
        title: 'Toxicidad del filamento azul',
        content: 'el Filamento PLA Azul está libre de toxicidad, puedes hasta comerlo.Advertencia: No ingerir más de 1/2 kg de pla al día.',
      },
      {
        title: 'Reactividad del pla blue',
        content: 'El Filamento PLA Azul es inocuo (no reacciona con alimentos, ni materiales biológicos como la piel).Aunque a causa de la impresión 3d, la piezas impresas tiene microporos en los cuales pueden crecer bacterias, por ende no es recomendable para hacer contenedores de alimentos.',
      },
      {
        title: '¿ Contamina el filamento pla azul ?',
        content: 'El Filamento PLA Azul es un material biodegradable, ademas es totalmente reciclable.',
      },
      {
        title: 'Emite olores el pla azul',
        content: 'El Filamento PLA Azul no emite olores al ser impreso.',
      },
      {
        title: 'Protección UV del filamento azul',
        content: 'El Filamento PLA Azul es más resiste a la deformación por UV dado que tiene aditivos para evitar esto, de todas maneras se deforma, pero demora más en hacerlo.',
      },
      {
        title: '¿ Me sirve sí ocupo esun blue ?',
        content: 'Dado que el diámetro del esun blue es el mismo que del Filamento PLA Azul se puede ocupar indistintamente, lo que sí tienes que ver, es que la temperatura de funcionamiento puede ser distinta que la de ese filamento.',
      },
      {
        title: '¿ Me sirve sí ocupo esun pla+ blue ?',
        content: 'Dado que el diámetro del esun pla+ blue es el mismo que del Filamento PLA Azul se puede ocupar indistintamente, lo que sí tienes que ver, es que nuestra temperatura de funcionamiento puede ser distinta que la de ese filamento.',
      },
    ],
  },
  filamento_pla_blanco: {
    heading: 'Características del filamento blanco pla',
    accordions: [
      {
        title: 'Diámetro del filamento pla 1.75 blanco',
        content: 'El diametro del Filamento PLA Blanco es de 1.75 mm ± 0.05Estandarizado a lo largo de todo el filamento',
      },
      {
        title: 'pla blanco 1 kg',
        content: 'Cada rollo de Filamento PLA Blanco contiene 1 kg de filamento, teniendo un pesos de 1,1 kg la suma del filamento y el rollo que porta al filamento.',
      },
      {
        title: '¿ cuántos metros tiene 1kg de pla blanco ?',
        content: 'Nuestro Filamento PLA Blanco tiene 335,29 mt de largo enrollados en el carrete',
      },
      {
        title: 'Temperatura de trabajo del pla blanco 1.75',
        content: 'La temperatura del Filamento PLA Blanco en la cual funciona óptimamente es desde los 210 hasta los 220 °C',
      },
      {
        title: 'Mescla del Color del pla white',
        content: 'El color del Filamento PLA Blanco está distribuido de manera homogénea y con los aditivos adecuados para una impresión sin termocoloración (sin cambio de tonos dentro de la misma figura impresa).',
      },
      {
        title: 'Cero Burbujas en el pla color hueso',
        content: 'El Filamento PLA Blanco está libre de burbujas de aíre',
      },
      {
        title: 'Baja Hidrolisis del filamento pla 1.75 1kg blanco',
        content: 'Lo normal en los filamentos es que las moléculas de agua que flotan en el aire entran al material y generan hidrolisis en el plástico, lo que produce que el filamento sea más quebradizo.Sin embargo el Filamento PLA Blanco contiene aditivos que vuelven más lenta la entrada del agua molecular ambiental, por ende dura más en el tiempo con su brillo y firmeza',
      },
      {
        title: 'Toxicidad del pla blanco 3d',
        content: 'el Filamento PLA Blanco está libre de toxicidad, puedes hasta comerlo.Advertencia: No ingerir más de 1/2 kg de pla al día.',
      },
      {
        title: 'Reactividad del filamento blanco pla',
        content: 'El Filamento PLA Blanco es inocuo (no reacciona con alimentos, ni materiales biológicos como la piel).Aunque a causa de la impresión 3d, la piezas impresas tiene microporos en los cuales pueden crecer bacterias, por ende no es recomendable para hacer contenedores de alimentos.',
      },
      {
        title: '¿ Contamina el pla blanco ?',
        content: 'El Filamento PLA Blanco es un material biodegradable, ademas es totalmente reciclable.',
      },
      {
        title: 'Emite olores el filamento pla 1.75 1kg blanco',
        content: 'El Filamento PLA Blanco no emite olores al ser impreso.',
      },
      {
        title: 'Protección UV del filamento pla 1.75 blanco',
        content: 'El Filamento PLA Blanco es más resiste a la deformación por UV dado que tiene aditivos para evitar esto, de todas maneras se deforma, pero demora más en hacerlo.',
      },
      {
        title: '¿ Me sirve sí ocupo esun pla+ white ?',
        content: 'Dado que el diámetro del esun pla+ white es el mismo que del Filamento PLA Blanco se puede ocupar indistintamente, lo que sí tienes que ver, es que nuestra temperatura de funcionamiento puede ser distinta que la de ese filamento.',
      },
      {
        title: '¿ Me sirve sí ocupo esun white pla ?',
        content: 'Dado que el diámetro del esun pla white es el mismo que del Filamento PLA Blanco se puede ocupar indistintamente, lo que sí tienes que ver, es que nuestra temperatura de funcionamiento puede ser distinta que la de ese filamento.',
      },
      {
        title: '¿ Me sirve sí ocupo sunlu pla+ white ?',
        content: 'Dado que el diámetro del sunlu pla+ white es el mismo que del Filamento PLA Blanco se puede ocupar indistintamente, lo que sí tienes que ver, es que nuestra temperatura de funcionamiento puede ser distinta que la de ese filamento.',
      },
    ],
  },
  filamento_pla_celeste: {
    heading: 'Características del pla celeste',
    accordions: [
      {
        title: 'Diámetro del filamento celeste',
        content: 'El diametro del Filamento PLA Celeste es de 1.75 mm ± 0.05Estandarizado a lo largo de todo el filamento',
      },
      {
        title: 'pla calipso 1kg',
        content: 'Cada rollo de Filamento PLA Celeste contiene 1 kg de filamento, teniendo un pesos de 1,1 kg la suma del filamento y el rollo que porta al filamento.',
      },
      {
        title: '¿ cuántos metros tiene el pla celeste ?',
        content: 'Nuestro Filamento PLA Celeste tiene 335,29 mt de largo enrollados en el carrete',
      },
      {
        title: 'Temperatura de trabajo del filamento celeste',
        content: 'La temperatura del Filamento PLA Celeste en la cual funciona óptimamente es desde los 210 hasta los 220 °C',
      },
      {
        title: 'Mescla del pla calipso',
        content: 'El color del Filamento PLA Celeste está distribuido de manera homogénea y con los aditivos adecuados para una impresión sin termocoloración (sin cambio de tonos dentro de la misma figura impresa).',
      },
      {
        title: 'Cero Burbujas en el filamento pla celeste',
        content: 'El Filamento PLA Celeste está libre de burbujas de aíre',
      },
      {
        title: 'Baja Hidrolisis del pla celeste',
        content: 'Lo normal en los filamentos es que las moléculas de agua que flotan en el aire entran al material y generan hidrolisis en el plástico, lo que produce que el filamento sea más quebradizo.Sin embargo el Filamento PLA Celeste contiene aditivos que vuelven más lenta la entrada del agua molecular ambiental, por ende dura más en el tiempo con su brillo y firmeza',
      },
      {
        title: 'Toxicidad del filamento celeste',
        content: 'el Filamento PLA Celeste está libre de toxicidad, puedes hasta comerlo.Advertencia: No ingerir más de 1/2 kg de pla al día.',
      },
      {
        title: 'Reactividad del pla calipso',
        content: 'El Filamento PLA Celeste es inocuo (no reacciona con alimentos, ni materiales biológicos como la piel).Aunque a causa de la impresión 3d, la piezas impresas tiene microporos en los cuales pueden crecer bacterias, por ende no es recomendable para hacer contenedores de alimentos.',
      },
      {
        title: '¿ Contamina el filamento pla celeste ?',
        content: 'El Filamento PLA Celeste es un material biodegradable, ademas es totalmente reciclable.',
      },
      {
        title: 'Emite olores el pla celeste',
        content: 'El Filamento PLA Celeste no emite olores al ser impreso.',
      },
      {
        title: 'Protección UV del filamento celeste',
        content: 'El Filamento PLA Celeste es más resiste a la deformación por UV dado que tiene aditivos para evitar esto, de todas maneras se deforma, pero demora más en hacerlo.',
      },
    ],
  },
  filamento_pla_gris: {
    heading: 'Características del pla gris',
    accordions: [
      {
        title: 'Diámetro del pla gray',
        content: 'El diametro del Filamento PLA Gris es de 1.75 mm ± 0.05Estandarizado a lo largo de todo el filamento',
      },
      {
        title: 'pla gray 1kg',
        content: 'Cada rollo de Filamento PLA Gris contiene 1 kg de filamento, teniendo un pesos de 1,1 kg la suma del filamento y el rollo que porta al filamento.',
      },
      {
        title: '¿ cuántos metros tiene el filamento gris ?',
        content: 'Nuestro Filamento PLA Gris tiene 335,29 mt de largo enrollados en el carrete',
      },
      {
        title: 'Temperatura de trabajo del pla gris',
        content: 'La temperatura del Filamento PLA Gris en la cual funciona óptimamente es desde los 210 hasta los 220 °C',
      },
      {
        title: 'Mescla del filamento pla gris',
        content: 'El color del Filamento PLA Gris está distribuido de manera homogénea y con los aditivos adecuados para una impresión sin termocoloración (sin cambio de tonos dentro de la misma figura impresa).',
      },
      {
        title: 'Cero Burbujas en el pla gray',
        content: 'El Filamento PLA Gris está libre de burbujas de aíre',
      },
      {
        title: 'Baja Hidrolisis del filamento gris',
        content: 'Lo normal en los filamentos es que las moléculas de agua que flotan en el aire entran al material y generan hidrolisis en el plástico, lo que produce que el filamento sea más quebradizo.Sin embargo el Filamento PLA Gris contiene aditivos que vuelven más lenta la entrada del agua molecular ambiental, por ende dura más en el tiempo con su brillo y firmeza',
      },
      {
        title: 'Toxicidad del pla gris',
        content: 'el Filamento PLA Gris está libre de toxicidad, puedes hasta comerlo.Advertencia: No ingerir más de 1/2 kg de pla al día.',
      },
      {
        title: 'Reactividad del filamento gris',
        content: 'El Filamento PLA Gris es inocuo (no reacciona con alimentos, ni materiales biológicos como la piel).Aunque a causa de la impresión 3d, la piezas impresas tiene microporos en los cuales pueden crecer bacterias, por ende no es recomendable para hacer contenedores de alimentos.',
      },
      {
        title: '¿ Contamina el pla gris ?',
        content: 'El Filamento PLA Gris es un material biodegradable, ademas es totalmente reciclable.',
      },
      {
        title: 'Emite olores el filamento pla gris',
        content: 'El Filamento PLA Gris no emite olores al ser impreso.',
      },
      {
        title: 'Protección UV del pla gray',
        content: 'El Filamento PLA Gris es más resiste a la deformación por UV dado que tiene aditivos para evitar esto, de todas maneras se deforma, pero demora más en hacerlo.',
      },
      {
        title: '¿ Me sirve sí ocupo esun pla+ grey ?',
        content: 'Dado que el diámetro del esun pla+ grey es el mismo que del Filamento PLA Gris se puede ocupar indistintamente, lo que sí tienes que ver, es que la temperatura de funcionamiento puede ser distinta que la de ese filamento.',
      },
      {
        title: '¿ Me sirve sí ocupo esun pla+ gray ?',
        content: 'Dado que el diámetro del esun pla+ gray es el mismo que del Filamento PLA Gris se puede ocupar indistintamente, lo que sí tienes que ver, es que nuestra temperatura de funcionamiento puede ser distinta que la de ese filamento.',
      },
      {
        title: '¿ Me sirve sí ocupo esun gray pla+ ?',
        content: 'Dado que el diámetro del esun gray pla+ es el mismo que del Filamento PLA Gris se puede ocupar indistintamente, lo que sí tienes que ver que nuestra temperatura de funcionamiento puede ser distinta que la de ese filamento.',
      },
    ],
  },
  filamento_pla_negro: {
    heading: 'Características del filamento negro pla',
    accordions: [
      {
        title: 'Diámetro del pla negro',
        content: 'El diametro del Filamento PLA Negro es de 1.75 mm ± 0.05Estandarizado a lo largo de todo el filamento',
      },
      {
        title: 'filamento pla 1.75 1kg negro',
        content: 'Cada rollo de Filamento PLA Negro contiene 1 kg de filamento, teniendo un pesos de 1,1 kg la suma del filamento y el rollo que porta al filamento.',
      },
      {
        title: '¿ cuántos metros tiene el filamento pla 1.75 negro ?',
        content: 'Nuestro Filamento PLA Negro tiene 335,29 mt de largo enrollados en el carrete',
      },
      {
        title: 'Temperatura de trabajo del pla black',
        content: 'La temperatura del Filamento PLA Negro en la cual funciona óptimamente es desde los 210 hasta los 220 °C',
      },
      {
        title: 'Mescla del pla color carbon',
        content: 'El color del Filamento PLA Negro está distribuido de manera homogénea y con los aditivos adecuados para una impresión sin termocoloración (sin cambio de tonos dentro de la misma figura impresa).',
      },
      {
        title: 'Cero Burbujas en el pla negro 1 kg',
        content: 'El Filamento PLA Negro está libre de burbujas de aíre',
      },
      {
        title: 'Baja Hidrolisis del pla negro 1.75',
        content: 'Lo normal en los filamentos es que las moléculas de agua que flotan en el aire entran al material y generan hidrolisis en el plástico, lo que produce que el filamento sea más quebradizo.Sin embargo el Filamento PLA Negro contiene aditivos que vuelven más lenta la entrada del agua molecular ambiental, por ende dura más en el tiempo con su brillo y firmeza',
      },
      {
        title: 'Toxicidad del pla negro 3d',
        content: 'el Filamento PLA Negro está libre de toxicidad, puedes hasta comerlo.Advertencia: No ingerir más de 1/2 kg de pla al día.',
      },
      {
        title: 'Reactividad del pla black',
        content: 'El Filamento PLA Negro es inocuo (no reacciona con alimentos, ni materiales biológicos como la piel).Aunque a causa de la impresión 3d, la piezas impresas tiene microporos en los cuales pueden crecer bacterias, por ende no es recomendable para hacer contenedores de alimentos.',
      },
      {
        title: '¿ Contamina el pla negro ?',
        content: 'El Filamento PLA Negro es un material biodegradable, ademas es totalmente reciclable.',
      },
      {
        title: 'Emite olores el filamento negro pla',
        content: 'El Filamento PLA Negro no emite olores al ser impreso.',
      },
      {
        title: 'Protección UV del filamento pla 1.75 1kg negro',
        content: 'El Filamento PLA Negro es más resiste a la deformación por UV dado que tiene aditivos para evitar esto, de todas maneras se deforma, pero demora más en hacerlo.',
      },
    ],
  },
  filamento_pla_oro: {
    heading: 'Características del filamento pla oro',
    accordions: [
      {
        title: 'Diámetro del pla dorado',
        content: 'El diametro del Filamento PLA Dorado es de 1.75 mm ± 0.05Estandarizado a lo largo de todo el filamento',
      },
      {
        title: 'pla gold 1kg',
        content: 'Cada rollo de Filamento PLA Dorado contiene 1 kg de filamento, teniendo un pesos de 1,1 kg la suma del filamento y el rollo que porta al filamento.',
      },
      {
        title: '¿ cuántos metros tiene el pla oro ?',
        content: 'Nuestro Filamento PLA Dorado tiene 335,29 mt de largo enrollados en el carrete',
      },
      {
        title: 'Temperatura de trabajo del filamento dorado pla',
        content: 'La temperatura del Filamento PLA Dorado en la cual funciona óptimamente es desde los 210 hasta los 220 °C',
      },
      {
        title: 'Mescla del filamento dorado',
        content: 'El color del Filamento PLA Dorado está distribuido de manera homogénea y con los aditivos adecuados para una impresión sin termocoloración (sin cambio de tonos dentro de la misma figura impresa).',
      },
      {
        title: 'Cero Burbujas en el pla dorado',
        content: 'El Filamento PLA Dorado está libre de burbujas de aíre',
      },
      {
        title: 'Baja Hidrolisis del pla gold',
        content: 'Lo normal en los filamentos es que las moléculas de agua que flotan en el aire entran al material y generan hidrolisis en el plástico, lo que produce que el filamento sea más quebradizo.Sin embargo el Filamento PLA Dorado contiene aditivos que vuelven más lenta la entrada del agua molecular ambiental, por ende dura más en el tiempo con su brillo y firmeza',
      },
      {
        title: 'Toxicidad del pla oro',
        content: 'el Filamento PLA Dorado está libre de toxicidad, puedes hasta comerlo.Advertencia: No ingerir más de 1/2 kg de pla al día.',
      },
      {
        title: 'Reactividad del filamento dorado pla',
        content: 'El Filamento PLA Dorado es inocuo (no reacciona con alimentos, ni materiales biológicos como la piel).Aunque a causa de la impresión 3d, la piezas impresas tiene microporos en los cuales pueden crecer bacterias, por ende no es recomendable para hacer contenedores de alimentos.',
      },
      {
        title: '¿ Contamina el filamento dorado ?',
        content: 'El Filamento PLA Dorado es un material biodegradable, ademas es totalmente reciclable.',
      },
      {
        title: 'Emite olores el filamento pla oro',
        content: 'El Filamento PLA Dorado no emite olores al ser impreso.',
      },
      {
        title: 'Protección UV del filamento dorado pla',
        content: 'El Filamento PLA Dorado es más resiste a la deformación por UV dado que tiene aditivos para evitar esto, de todas maneras se deforma, pero demora más en hacerlo.',
      },
      {
        title: '¿ Me sirve sí ocupo esun gold pla ?',
        content: 'Dado que el diámetro del esun gold pla es el mismo que del Filamento PLA Dorado se puede ocupar indistintamente, lo que sí tienes que ver, es que nuestra temperatura de funcionamiento puede ser distinta que la de ese filamento.',
      },
      {
        title: '¿ Me sirve sí ocupo esun gold ?',
        content: 'Dado que el diámetro del esun gold es el mismo que del Filamento PLA Dorado se puede ocupar indistintamente, lo que sí tienes que ver, es que la temperatura de funcionamiento puede ser distinta que la de ese filamento.',
      },
    ],
  },
  filamento_pla_transparente: {
    heading: 'Características del filamento transparente pla',
    accordions: [
      {
        title: 'Diámetro del pla translucido',
        content: 'Diametro del Filamento PLA Transparente es de 1.75 mm ± 0.05Estandarizado a lo largo de todo el filamento',
      },
      {
        title: 'pla transparente 1 kg',
        content: 'Cada rollo de Filamento PLA Transparente contiene 1 kg de filamento, teniendo un pesos de 1,1 kg la suma del filamento y el rollo que porta al filamento.',
      },
      {
        title: '¿ cuántos metros tiene 1kg de filamento pla translucido ?',
        content: 'Nuestro Filamento PLA Transparente tiene 335,29 mt de largo enrollados en el carrete',
      },
      {
        title: 'Temperatura de trabajo del filamento transparente impresora 3d',
        content: 'La temperatura del Filamento PLA Transparente en la cual funciona óptimamente es desde los 210 hasta los 220 °C',
      },
      {
        title: 'Mescla del Color del pla natural',
        content: 'El Filamento PLA Transparente no contiene aditivos que sean colorantes, es decir, es del color natural del PLA, cristal pla, el cual, es de un resultado translucido en la impresión resultante.',
      },
      {
        title: 'Cero Burbujas en el pla glass',
        content: 'El Filamento PLA Transparente está libre de burbujas de aíre',
      },
      {
        title: 'Baja Hidrolisis del pla cristal',
        content: 'Lo normal en los filamentos es que las moléculas de agua que flotan en el aire entran al material y generan hidrolisis en el plástico, lo que produce que el filamento sea más quebradizo.Sin embargo el Filamento PLA Transparente contiene aditivos que vuelven más lenta la entrada del agua molecular ambiental, por ende dura más en el tiempo con su brillo y firmeza',
      },
      {
        title: 'Toxicidad del filamento translucido',
        content: 'el Filamento PLA Transparente está libre de toxicidad, puedes hasta comerlo.Advertencia: No ingerir más de 1/2 kg de pla al día.',
      },
      {
        title: 'Reactividad del filamento 3d transparente',
        content: 'El Filamento PLA Transparente es inocuo (no reacciona con alimentos, ni materiales biológicos como la piel).Aunque a causa de la impresión 3d, la piezas impresas tiene microporos en los cuales pueden crecer bacterias, por ende no es recomendable para hacer contenedores de alimentos.',
      },
      {
        title: '¿ Contamina el filamento transparente 3d ?',
        content: 'El Filamento PLA Transparente es un material biodegradable, ademas es totalmente reciclable.',
      },
      {
        title: 'Emite olores el filamento 3d translucido',
        content: 'El Filamento PLA Transparente no emite olores al ser impreso.',
      },
      {
        title: 'Protección UV del filamento transparente para impresora 3d',
        content: 'El Filamento PLA Transparente es más resiste a la deformación por UV dado que tiene aditivos para evitar esto, de todas maneras se deforma, pero demora más en hacerlo.',
      },
    ],
  },
  filamento_pla_verde: {
    heading: 'Características del pla verde',
    accordions: [
      {
        title: 'Diámetro del pla green',
        content: 'El diametro del Filamento PLA Verde es de 1.75 mm ± 0.05Estandarizado a lo largo de todo el filamento',
      },
      {
        title: 'filamento verde 1kg',
        content: 'Cada rollo de Filamento PLA Verde contiene 1 kg de filamento, teniendo un pesos de 1,1 kg la suma del filamento y el rollo que porta al filamento.',
      },
      {
        title: '¿ cuántos metros tiene el pla verde 3d ?',
        content: 'Nuestro Filamento PLA Verde tiene 335,29 mt de largo enrollados en el carrete',
      },
      {
        title: 'Temperatura de trabajo del filamento pla verde',
        content: 'La temperatura del Filamento PLA Verde en la cual funciona óptimamente es desde los 210 hasta los 220 °C',
      },
      {
        title: 'Mescla del pla verde',
        content: 'El color del Filamento PLA Verde está distribuido de manera homogénea y con los aditivos adecuados para una impresión sin termocoloración (sin cambio de tonos dentro de la misma figura impresa).',
      },
      {
        title: 'Cero Burbujas en el pla green',
        content: 'El Filamento PLA Verde está libre de burbujas de aíre',
      },
      {
        title: 'Baja Hidrolisis del filamento verde',
        content: 'Lo normal en los filamentos es que las moléculas de agua que flotan en el aire entran al material y generan hidrolisis en el plástico, lo que produce que el filamento sea más quebradizo.Sin embargo el Filamento PLA Verde contiene aditivos que vuelven más lenta la entrada del agua molecular ambiental, por ende dura más en el tiempo con su brillo y firmeza',
      },
      {
        title: 'Toxicidad del pla verde 3d',
        content: 'el Filamento PLA Verde está libre de toxicidad, puedes hasta comerlo.Advertencia: No ingerir más de 1/2 kg de pla al día.',
      },
      {
        title: 'Reactividad del pla verde',
        content: 'El Filamento PLA Verde es inocuo (no reacciona con alimentos, ni materiales biológicos como la piel).Aunque a causa de la impresión 3d, la piezas impresas tiene microporos en los cuales pueden crecer bacterias, por ende no es recomendable para hacer contenedores de alimentos.',
      },
      {
        title: '¿ Contamina el filamento pla green ?',
        content: 'El Filamento PLA Verde es un material biodegradable, ademas es totalmente reciclable.',
      },
      {
        title: 'Emite olores el filamento verde',
        content: 'El Filamento PLA Verde no emite olores al ser impreso.',
      },
      {
        title: 'Protección UV del pla verde 3d',
        content: 'El Filamento PLA Verde es más resiste a la deformación por UV dado que tiene aditivos para evitar esto, de todas maneras se deforma, pero demora más en hacerlo.',
      },
      {
        title: '¿ Me sirve sí ocupo esun green ?',
        content: 'Dado que el diámetro del esun green es el mismo que del Filamento PLA Verde se puede ocupar indistintamente, lo que sí tienes que ver, es que la temperatura de funcionamiento puede ser distinta que la de ese filamento.',
      },
      {
        title: '¿ Me sirve sí ocupo esun pla+ green ?',
        content: 'Dado que el diámetro del esun pla+ green es el mismo que del Filamento PLA Verde se puede ocupar indistintamente, lo que sí tienes que ver, es que nuestra temperatura de funcionamiento puede ser distinta que la de ese filamento.',
      },
    ],
  },
  pla_pantera_rosa: {
    heading: 'Características del pla pantera rosa',
    accordions: [
      {
        title: 'Diámetro del pla rosa',
        content: 'El diametro del Filamento PLA Rosado es de 1.75 mm ± 0.05Estandarizado a lo largo de todo el filamento',
      },
      {
        title: 'pla pink 1kg',
        content: 'Cada rollo de Filamento PLA Rosado contiene 1 kg de filamento, teniendo un pesos de 1,1 kg la suma del filamento y el rollo que porta al filamento.',
      },
      {
        title: '¿ cuántos metros tiene el rosa pla ?',
        content: 'Nuestro Filamento PLA Rosado tiene 335,29 mt de largo enrollados en el carrete',
      },
      {
        title: 'Temperatura de trabajo del filamento rosa',
        content: 'La temperatura del Filamento PLA Rosado en la cual funciona óptimamente es desde los 210 hasta los 220 °C',
      },
      {
        title: 'Mescla del pla pink panther',
        content: 'El color del Filamento PLA Rosado está distribuido de manera homogénea y con los aditivos adecuados para una impresión sin termocoloración (sin cambio de tonos dentro de la misma figura impresa).',
      },
      {
        title: 'Cero Burbujas en el pla rosado',
        content: 'El Filamento PLA Rosado está libre de burbujas de aíre',
      },
      {
        title: 'Baja Hidrolisis del pla pantera rosa',
        content: 'Lo normal en los filamentos es que las moléculas de agua que flotan en el aire entran al material y generan hidrolisis en el plástico, lo que produce que el filamento sea más quebradizo.Sin embargo el Filamento PLA Rosado contiene aditivos que vuelven más lenta la entrada del agua molecular ambiental, por ende dura más en el tiempo con su brillo y firmeza',
      },
      {
        title: 'Toxicidad del pla rosa',
        content: 'el Filamento PLA Rosado está libre de toxicidad, puedes hasta comerlo.Advertencia: No ingerir más de 1/2 kg de pla al día.',
      },
      {
        title: 'Reactividad del pla pink',
        content: 'El Filamento PLA Rosado es inocuo (no reacciona con alimentos, ni materiales biológicos como la piel).Aunque a causa de la impresión 3d, la piezas impresas tiene microporos en los cuales pueden crecer bacterias, por ende no es recomendable para hacer contenedores de alimentos.',
      },
      {
        title: '¿ Contamina el filamento rosa pla ?',
        content: 'El Filamento PLA Rosado es un material biodegradable, ademas es totalmente reciclable.',
      },
      {
        title: 'Emite olores el filamento rosa',
        content: 'El Filamento PLA Rosado no emite olores al ser impreso.',
      },
      {
        title: 'Protección UV del filamento pla rosado',
        content: 'El Filamento PLA Rosado es más resiste a la deformación por UV dado que tiene aditivos para evitar esto, de todas maneras se deforma, pero demora más en hacerlo.',
      },
    ],
  },
  pla_rojo: {
    heading: 'Características del pla rojo',
    accordions: [
      {
        title: 'Diámetro del filamento rojo 3d',
        content: 'El diametro del Filamento PLA Rojo es de 1.75 mm ± 0.05Estandarizado a lo largo de todo el filamento',
      },
      {
        title: 'pla red 1kg',
        content: 'Cada rollo de Filamento PLA Rojo contiene 1 kg de filamento, teniendo un pesos de 1,1 kg la suma del filamento y el rollo que porta al filamento.',
      },
      {
        title: '¿ cuántos metros tiene el filamento rojo ?',
        content: 'Nuestro Filamento PLA Rojo tiene 335,29 mt de largo enrollados en el carrete',
      },
      {
        title: 'Temperatura de trabajo del filamento pla rojo 3d',
        content: 'La temperatura del Filamento PLA Rojo en la cual funciona óptimamente es desde los 210 hasta los 220 °C',
      },
      {
        title: 'Mescla del rojo 3d filamentos',
        content: 'El color del Filamento PLA Rojo está distribuido de manera homogénea y con los aditivos adecuados para una impresión sin termocoloración (sin cambio de tonos dentro de la misma figura impresa).',
      },
      {
        title: 'Cero Burbujas en el pla rojo',
        content: 'El Filamento PLA Rojo está libre de burbujas de aíre',
      },
      {
        title: 'Baja Hidrolisis del pla red',
        content: 'Lo normal en los filamentos es que las moléculas de agua que flotan en el aire entran al material y generan hidrolisis en el plástico, lo que produce que el filamento sea más quebradizo.Sin embargo el Filamento PLA Rojo contiene aditivos que vuelven más lenta la entrada del agua molecular ambiental, por ende dura más en el tiempo con su brillo y firmeza',
      },
      {
        title: 'Toxicidad del filamento rojo 3d',
        content: 'el Filamento PLA Rojo está libre de toxicidad, puedes hasta comerlo.Advertencia: No ingerir más de 1/2 kg de pla al día.',
      },
      {
        title: 'Reactividad del filamento rojo',
        content: 'El Filamento PLA Rojo es inocuo (no reacciona con alimentos, ni materiales biológicos como la piel).Aunque a causa de la impresión 3d, la piezas impresas tiene microporos en los cuales pueden crecer bacterias, por ende no es recomendable para hacer contenedores de alimentos.',
      },
      {
        title: '¿ Contamina el filamento pla rojo 3d ?',
        content: 'El Filamento PLA Rojo es un material biodegradable, ademas es totalmente reciclable.',
      },
      {
        title: 'Emite olores el filamento pla rojo',
        content: 'El Filamento PLA Rojo no emite olores al ser impreso.',
      },
      {
        title: 'Protección UV del pla rojo',
        content: 'El Filamento PLA Rojo es más resiste a la deformación por UV dado que tiene aditivos para evitar esto, de todas maneras se deforma, pero demora más en hacerlo.',
      },
    ],
  },
};

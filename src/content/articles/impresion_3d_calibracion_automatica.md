---
slug: impresion_3d_calibracion_automatica
blog: curso_impresion_3d
title: Impresión 3D con Calibración Automática
sourceUrl: https://www.print3x.cl/blogs/curso_impresion_3d/impresion_3d_calibracion_automatica
sourceRetrieved: '2026-07-30'
status: published
tags: [impresion-3d, calibracion]
media:
  - status: pending
    sourceReference: 'Miniatura_autoleveling_1.jpg, Miniatura_Autoleveling_2.jpg, Miniatura_Autoleveling_3.jpg y Diagrama_de_Conexion.jpg'
    use: 'Portadas de video y diagrama de conexión'
    expectedDimensions: '3840px de ancho en la fuente; alto no disponible'
    aspectRatio: 'pendiente: alto no disponible en la fuente'
    reason: 'No existe copia local aprobada; los videos se conservan como enlaces revisados.'
---

## Impresora 3D con Calibración Automática

Las ventajas que este sistema tiene, es que nunca mas tendrás que volver a calibrar con la mano la impresora, se hace una sola vez y quedo, es casi magia

## Primera parte: Conectar electronica

<div class="editorial-media-pending" data-media-status="pending"><strong>Video y portada pendientes: conectar electrónica</strong><span>Fuente: Miniatura_autoleveling_1.jpg · Uso: portada del video · Proporción esperada: pendiente de alto en la fuente.</span></div>

[Ver video](https://youtu.be/HSaMxLdqlrI)

## Diagrama de conexión para obtener tu impresora 3d con nivelación automática

A la izquierda de la imagen, se encuentra la fuente de poder y la placa Ramps, a la derecha están los cables del sensor

<div class="editorial-media-pending" data-media-status="pending"><strong>Media pendiente: diagrama de conexión</strong><span>Fuente: Diagrama_de_Conexion.jpg · Uso: esquema de conexión · Proporción esperada: pendiente de alto en la fuente.</span></div>

## Recursos adicionales para obtener tu impresora 3d con nivelación automática

Pieza de la tobera (imprimir sin soportes)

[Pieza de la Tobera](https://bit.ly/DescargarTobera)

Piezas de la puntas de la cama

[Puntas de la cama](https://bit.ly/DescargarPuntasCama)

Modelos de Sensores a color en tu maquina

**Sensor Capacitivo**:

Tiene menor fidelidad en la distancia de detección, pero detecta todo tipo de superficies.

Recomendado el: LJC18A3-B-Z/BX NPN

**Sensor inductivo** (recomendamos ésta opción):

Sensor inductivo, mayor fidelidad en la detección, siempre detecta la misma distancia, pero solo detecta metales magneticos.

Ojo: el Aluminio no es un metal magnetico

El que recomendamos y usamos en nuestra maquinas es el "LJ12A3-4-Z/BX NPN"

**NPN o PNP**:

NPN: normalmente cerrado, está apagado, cuando detecta inducción, se prende o dispara la señal

PNP: normalmente abierto, siempre está encendido y cuando detecta, se apaga o termina la señal

Segun el tipo de lazo, abierto o cerrado, tendras que configurar la logica en el Marlin o invertirla.

## Segunda parte: Modificar el Firmware

<div class="editorial-media-pending" data-media-status="pending"><strong>Video y portada pendientes: firmware</strong><span>Fuente: Miniatura_Autoleveling_2.jpg · Uso: portada del video · Proporción esperada: pendiente de alto en la fuente.</span></div>

[Ver video](https://youtu.be/0v7mVu4zT-c)

Previo a modificar el codigo de tu Marlin, recuerda guardar un respaldo de tu versión estable de Marlin

## Tercera parte: Modificar el Gcode

<div class="editorial-media-pending" data-media-status="pending"><strong>Video y portada pendientes: Gcode</strong><span>Fuente: Miniatura_Autoleveling_3.jpg · Uso: portada del video · Proporción esperada: pendiente de alto en la fuente.</span></div>

[Ver video](https://youtu.be/LLit5ohZNTQ)

## G-Code para tener la impresora 3d con calibración automática

El código Gcode son las instrucciones que lee la impresora 3D para hacer tu pieza, y para aplicar las mejoras que hemos hecho tenemos que colocar los siguientes códigos, al inicio y al final, tal como se muestra en el video

**Star G-Code (codigo inicial)**

```text
M109 S170 ; fija temperatura (espera hasta llegar a ella y deja pasar los movimientos)
M104 S225 ; calienta hasta la temperatura (permitiendo movimientos)
G28 ; lleva al origen
G29 ; sondea la cama (Mejora hecha por Sebastián Sanhueza de print3x.cl)
G1 X100 Y100 Z15 F5000 ; fija posición de espera
```

**End G-code (codigo Final)**

```text
M104 S0 ; Enfria el hotend
G28 X0 ; home X axis
G1 Y180.000 ; Entrega la pieza (Mejora hecha por Sebastián Sanhueza de print3x.cl)
M84 ; disable motor
M107 ; Apaga ventilador
```

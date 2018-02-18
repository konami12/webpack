# **Curso de WebPack**

Webpack es una libreria que nos permite realizar un bundle de todos los assets  
que contenga nuestra aplicacion, posiblemente esto de principio no quede muy
claro ya que para poder entender **WebPack** es necesario comprender.

## **AMD (Asynchronous module definition)**

Este patron de diseno nos pertime realizar la carga asyncrona de librerias y modulos
que se pueden utilizar dentro de nuesta aplicacion, por ejemplo supongaos el siguiente
esenario.

Tenemos una aplicacion en la cual estamos utilizando las librerias de **jquery**, **flexbox.js**
y dentro de nuestra aplicacion no siempre son utilizadas estas 2 librerias solo en ciertas ocaciones 
en ese punto es donde entra **AMD** ya que nos permite realizar la llamada de estas librerias conforme 
las utilizemos dentro de la applicacion  esto quiere decir que nuestra aplicacion de entrada solo cargara
un solo archivo **JS**, el problema que esto presenta en que conforme se realizan peticiones estaremos cargando
estps archivos de manera dinamuca.

## **COMMONJS**

El funcionamiento es un poco similar al de **AMD** solo que en este caso nuestro archivo principal 
se arma de la misma manera que en **AMD** solo que en este caso pasara por un proceso de transpilacion
en el cual todas las dependencias estaran integradas en un solo archivo con lo que en ves de realizar 
multiples llamadas de archivos solo tendremos que realizar una.

## **WEBPACK**

Al tener claro los conceptos anteriores podemos decir lo siguiente **webpack** es la combinacion
de ambas tecnicas en una sola herramienta, es importante enteder los siguientes puntos 

- **entry points : ** Modulo principal, de donde se parte a importar los demas modulos. este es el 
archivo que leera **weback** para generar nuestro bundle.

- **outputs : ** Lugar donde terminara nuestro archivo resultante ya que podremos tener nuestro bundle
asi como los archivos en los que trabajamos dia a dia.

- **loadres : ** nos permitira cargar todo tipo de archivos asi como imagnees, fuentes y hasta dialectos
js. jsx .css. less, scss, stylus etc.

- **plugins : ** Nos ayudaran a extender las caracterisitcas de **webpack**, como comprimir archivos
usando uglify o dividir nuestros modulos en chunks mas pequenos para que nuestra aplicacion cargue mas rapido. 


## Dentro de las carpetas del repo existen ejemplos, el nombre de la carpeta es referente a lo que se desea realizar :)
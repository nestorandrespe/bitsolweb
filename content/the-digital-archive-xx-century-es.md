# El archivo digital del siglo XXI y los memes

#### Néstor Andrés Peña
#### May 3, 2023

En esta nueva era, los archivos digitales se volverán cada vez más cruciales como medio para preservar y acceder a nuestra información cultural e histórica. Sin embargo, el enfoque tradicional para construir y catalogar estos archivos puede que ya no sea suficiente para mantenerse al día con el paisaje tecnológico en rápida evolución. Para aprovechar plenamente el potencial de los archivos digitales, es esencial aprovechar los desarrollos tecnológicos recientes y adoptar nuevas estrategias para construir y organizar estos repositorios de memorias. En este texto, exploraremos la necesidad de repensar el enfoque tradicional de los archivos digitales y examinaremos los posibles beneficios de nuevos enfoques para la preservación y accesibilidad de la información cultural e histórica en la era digital.

![eclipse](/images/archihub/age-01.gif)

## Contexto

Durante la última década, el mundo ha experimentado cambios significativos, especialmente en el ámbito de la tecnología digital, que tiene impactos directos e inevitables en nuestra sociedad. Estos son fácilmente evidentes, con la aceleración del consumo y la producción de información siendo uno de los aspectos sobre los que vamos a hablar.

En la era actual, los remixes de TikTok y los compartidos en Twitter se han convertido en un medio de expresión que ahora es una parte esencial de nuestro paisaje cultural. Nuestros patrones de comunicación también han sido transformados por las herramientas tecnológicas que empleamos. Por ejemplo, el teléfono inteligente ha hecho que los mensajes de texto sean una característica omnipresente al comunicarnos con alguien, y las notas de voz son una forma conveniente de compartir contenido en formato de audio. Además, con la llegada de los LLMs, esto está comenzando a ser cierto también para la forma en que hablamos con nuestras máquinas. Además, los podcasts y la producción de video se han vuelto más accesibles para una audiencia más amplia, lo que permite a cualquiera crear contenido de calidad profesional por sí mismo. A medida que el ciclo de consumo y producción de información continúa expandiéndose, se vuelve importante repensar nuestras decisiones sobre cómo preservamos nuestros recuerdos y qué significan esos recuerdos.

![social network](/images/archihub/age-02.gif)

## ¿Qué guardar?

```
The answer, my friend, is blowin’ in the wind
The answer is blowin’ in the wind

Bob Dylan, Blowin’ in the wind
```

En mi experiencia reciente como desarrollador en el Museo de la Memoria y la Comisión de la Verdad en Colombia, noté algo mientras trabajaba con archivistas digitales. Aunque se enfatizaba en preservar archivos creados por varias instituciones, se prestaba poca atención a preservar lo que considero un elemento crucial de la cultura contemporánea: los fragmentos que circulan en las redes sociales.

Una razón por la cual este contenido a menudo se pasa por alto es que el archivo fuente generalmente está muy comprimido, lo cual va en contra de las reglas y pasos de preservación definidos para los archivos digitales. Esto me lleva a mi argumento inicial: deberíamos explorar la opción de preservar estos archivos incluso si difieren significativamente del original. Nuestras formas de comunicación están en constante evolución. Ya no documentamos nuestras historias únicamente en libros; ahora lo hacemos a través de tweets y artículos de blogs. En lugar de crear álbumes físicos de nuestras fotos, las publicamos en Instagram. Ya no solo salimos a las calles para expresar nuestras opiniones; ahora, usamos tendencias en las redes sociales.

Debemos ver esto como un nuevo tipo de documento: el meme como un recurso en el archivo digital.

```
The answer, my friend, is blowin’ in the memes
The answer is blowin’ in the memes
```

Primero, necesitamos establecer un tema principal para documentar, como el panorama político de un país por ejemplo. A continuación, determinamos los actores principales cuyas interacciones en redes sociales nos interesan, el contenido más relevante para las principales tendencias, los portales de noticias más relevantes y las interacciones para un conjunto específico de artículos de Wikipedia. Todo este contenido es lo que llamaremos “contenido descubierto”.

Existen diversos enfoques que podemos utilizar para obtener y organizar el contenido descubierto. Basándome en mi experiencia, intentaré explicar cada uno de ellos.

Para empezar, debemos identificar una lista de figuras públicas clave, organizaciones y empresas que sean significativas para el tema de interés. Una vez identificados, podemos configurar un sistema automatizado para recuperar sus publicaciones e interacciones públicas, así como las interacciones de los usuarios generadas por esas publicaciones, incluidos comentarios y métricas como me gusta, retweets y compartidos. Debe realizarse una evaluación de las redes sociales en las que tenemos interés. Por ejemplo, para algunos temas, sitios web como Reddit o HackerNews podrían ser relevantes. Otro enfoque necesario es lo que me gusta llamar “instantáneas de tendencias”. Dado un intervalo de tiempo fijo (por ejemplo, 15 minutos), el objetivo es registrar el orden de las tendencias populares con una muestra de publicaciones para ese tema. Sin embargo, la recuperación de esta información es solo el primer paso, como veremos más adelante en este texto, podemos aprovechar nuevas posibilidades para la clasificación automatizada de ese contenido utilizando LLMs y una interfaz de usuario accesible para que los investigadores experimenten con nuevas formas de clasificar y obtener información de esos datos.

Estamos creando un nuevo tipo de archivo digital que me gusta llamar el archivo del siglo XXI. Esto no significa que estemos descartando la forma tradicional de seleccionar y organizar contenido. Más bien, estamos ampliando nuestra visión de lo que puede incluirse en el archivo, dándonos más contenido para trabajar junto con nuestros documentos tradicionales. Por ejemplo, cuando agregamos recursos al archivo, también podemos realizar un seguimiento de sus interacciones, compartidos y comentarios en las redes sociales. En lugar de aislar estas interacciones de nuestro contenido, podemos incorporarlas y hacerlas parte de esa memoria una vez que reconozcamos su valor. Junto con nuestros documentos, podemos tener una visión general de sus interacciones en las redes sociales y las noticias.

Para construir un archivo completo, es importante incluir recursos como artículos de noticias y blogs. Al igual que con las redes sociales, es esencial seleccionar cuidadosamente portales de noticias relevantes que reflejen diferentes puntos de vista y opiniones sobre el tema de interés. Pero incluso desde el mismo medio podemos tener artículos con un propósito engañoso y uno informativo. Esta distinción es importante y se abordará cuando hablemos sobre el proceso de automatización. También es importante distinguir entre los diferentes tipos de publicaciones, incluidos editoriales y opiniones de colaboradores si vamos a realizar un seguimiento de ellos.

Esta lista de diferentes orígenes puede ayudarnos a rastrear noticias en una línea de tiempo relacionada con nuestro principal interés de investigación, y también puede ser útil para identificar noticias falsas con la ayuda de agentes de inteligencia artificial, como hablaré más adelante en este texto. Podemos recopilar datos monitoreando páginas de redes sociales para ver las últimas publicaciones e interacciones de los usuarios, así como rastreando la posición de los artículos en la página principal, lo que puede ser útil para la visualización de datos ya que la posición desde la parte superior revela la importancia del tema dado para ese artículo en particular.

Wikipedia es un recurso útil no solo por la información en sus artículos, sino también por la manera en que esos artículos cambian con el tiempo. Podemos hacer un seguimiento de las diferentes versiones de artículos específicos que son relevantes para nuestros intereses de investigación. La premisa es simple: si podemos visualizar las ediciones de un artículo cronológicamente, ¿qué puede decirnos eso sobre el tema abordado en ese artículo? Si trazamos una línea de tiempo con las ediciones, ¿será posible encontrar patrones que revelen otras cosas que el artículo en sí no muestra? [Podemos profundizar un poco más en un experimento sobre el artículo sobre el conflicto armado en Colombia.](https://medium.com/@nstorandrspea/visualizando-las-revisiones-de-los-art%C3%ADculos-en-wikipedia-d8e2586c34fa)

The other subset of our meme category is what we refer to as “given content”. To capture this type of content, we need to first understand the tools that are commonly used by communities on site and leverage them effectively.

El otro subconjunto de nuestra categoría de memes es lo que llamamos “contenido dado”. Para capturar este tipo de contenido, primero necesitamos entender las herramientas que son comúnmente utilizadas por las comunidades en el sitio y aprovecharlas de manera efectiva.

Tengo tres experiencias en Colombia que me gustaría compartir. La primera está relacionada con el Museo de la Memoria. Mientras trabajábamos en el laboratorio digital del museo, intentábamos recopilar las opiniones de los visitantes sobre diversos temas relacionados con la verdad, el perdón y la memoria. El objetivo era que los visitantes leyeran opiniones de diferentes individuos sobre el mismo tema, facilitando así las conexiones entre personas con puntos de vista diferentes. Desarrollamos lo que llamamos, de manera muy original, “el bot”. Utilizamos WhatsApp como plataforma para esta interacción, ya que es la aplicación de mensajería principal utilizada en Colombia y es familiar para la mayoría de las personas. Al visitante se le permitía elegir un concepto, dar su opinión al respecto y, a cambio, recibir otra opinión sobre el mismo tema de otra persona. Al principio, no estaba al tanto del beneficio adicional de usar una aplicación para smartphone: la experiencia narrativa era más personal e íntima porque los visitantes estaban en su propio espacio personal con sus dispositivos. Puedes ver la presentación completa del trabajo realizado en el museo aquí.

El segundo es muy similar y se realizó con el equipo de IDARTES (Instituto Distrital de las Artes). Utilizando un bot de Telegram desarrollado internamente, lanzamos una radio en línea que reprodujo los mensajes de voz que cualquier persona enviaba en el chat. En 2022, mientras había protestas contra el gobierno en las calles de Colombia durante la pandemia, se inició una instancia del bot llamada “Radio Cacerola”, a través de la cual se le pedía a las personas que enviaran sus reportes en audio que luego se reproducían en línea. Esta implementación del “bot” permitió una amplificación de esas historias en lugar de una conversación, como era el caso anteriormente.

El ejemplo final y más reciente en el que participé fue nuevamente en un proyecto con IDARTES. Cuando me uní a un proyecto en curso que tiene como objetivo establecer una red de huertas urbanas en la ciudad, propuse un sistema para recopilar y mostrar diversos datos sobre cada huerta, como la humedad, la temperatura y la cantidad de luz. Sin embargo, durante nuestras discusiones, me di cuenta de que los participantes del proyecto no estaban interesados en registrar estos detalles técnicos. En cambio, querían documentar las historias, actividades y comunidades asociadas con cada huerta. Caí en cuenta de que sería más efectivo rediseñar el “bot” integrándolo en una herramienta de archivo. Esto me obligó primero a transcribir automáticamente el audio y a desarrollar un sistema para categorizar estas historias. Para lograrlo, utilicé modelos de IA y una interfaz de programación basada en nodos para modelos de lenguaje grandes (LLMs) que creé para este y otros proyectos de procesamiento de texto.

![social network](/images/archihub/age-03.webp)


![social network](/images/archihub/age-04.webp)

En los archivos tradicionales, siempre se han seguido ciertas prácticas. Sin embargo, al utilizar nuevas herramientas e interfaces, podemos expandir estas prácticas y explorar nuevas posibilidades. El objetivo principal es generar ideas que mejoren la investigación y proporcionen contenido útil para remezclar y publicar.

Hemos discutido los nuevos tipos de contenido que podrían incluirse en la categoría de memes. Ahora necesitamos averiguar cómo guardar estos nuevos recursos. ¿Qué herramientas deberíamos usar, en qué campos deberíamos enfocarnos y cómo podemos almacenarlo todo para que pueda ser fácilmente accesible?
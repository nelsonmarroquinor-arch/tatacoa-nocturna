# Guion del video (8 minutos)

Lo que está entre [corchetes] es lo que muestras en pantalla. Habla a unas 130 palabras por minuto.

## 1. Presentación (0:00 – 1:00)
[Sitio publicado abierto en el computador, en el hero]

Hola, soy Nelson Marroquín, estudiante de Ingeniería de Software de la FET. Les presento **Tatacoa Nocturna**, la landing page de un emprendimiento ficticio de tours de astronomía, senderismo y astrofotografía en el Desierto de la Tatacoa, en Villavieja. Está pensada para jóvenes y familias de 18 a 40 años y para turistas que visitan el Huila, y su propósito es mostrar los tours, resolver dudas y recibir solicitudes de reserva.

[README, tabla de la paleta]
Apliqué la regla 60-30-10: el 60 % es arena, un color cálido del desierto, para el fondo; el 30 % es azul noche, que representa el cielo, en el hero, en “Nosotros” y en el pie; y el 10 % es terracota, el color de la tierra roja de El Cuzco, solo en los botones y llamados a la acción. Tengo además verde para éxito, rojo para error y ámbar para advertencia. Todas las combinaciones pasan el contraste de 4.5 a 1. Usé solo dos fuentes: Sora para los títulos y Nunito Sans para el texto.

## 2. Lo investigado (1:00 – 2:00)
[Informe PDF: Eje 1 y Eje 3]

De mi investigación destaco tres ideas. Primera: Tailwind es utility-first; en vez de inventar clases como “botón-reservar”, combino clases pequeñas como `px-5`, `rounded-full` o `bg-terracota`. Además, Tailwind escanea mis archivos como texto y solo genera el CSS de las clases que uso; por eso mi CSS final pesa unos 27 kilobytes.
Segunda: la versión 4 cambió mucho. La configuración ya no va en un archivo JavaScript sino en el CSS con `@theme`, y el modo oscuro por clase se activa con `@custom-variant`. También aprendí que el Play CDN es solo para desarrollo; por eso compilé con Tailwind CLI.
Tercera: la IA ayuda, pero hay que revisarla. Un estudio encontró que cerca del 40 % del código generado por Copilot en escenarios de seguridad era vulnerable, y otro mostró que quienes usan asistentes tienden a confiar demasiado en su código.

## 3. Prompt maestro (2:00 – 3:00)
[README, sección 6, prompt completo y legible]

Este es mi prompt maestro, con sus cinco partes. En el **rol** le pido a la IA que actúe como desarrollador frontend senior experto en Tailwind 4 y accesibilidad. En el **contexto** explico el negocio, el público y el objetivo. En las **tareas** listo las siete secciones en orden y lo que debe hacer cada una: menú hamburguesa, filtro de tours, acordeón, validación y toast. En las **restricciones** pongo los límites: Tailwind CLI y no Play CDN, mis colores exactos en `@theme`, dos fuentes, mobile-first y contraste de 4.5 a 1. Y en el **formato de salida** pido tres archivos separados con comentarios en español.

## 4. Iteraciones (3:00 – 4:00)
[README, sección 7, tabla de la bitácora]

Después de la primera versión probé el sitio y pedí cinco ajustes, uno por problema. Uno: dos tarjetas tenían la misma imagen, así que pedí una ilustración distinta para “Planetas y Luna”. Dos: en el navbar no se sabía en qué sección estaba; ahora se resalta el enlace activo con `aria-current`. Tres: el aviso de confirmación no se podía cerrar; le agregamos un botón, y ahí apareció un error de la IA: el botón invisible seguía recibiendo clics, y lo corregimos. Cuatro: se podía enviar el formulario dos veces; ahora el botón dice “Enviando…” y se deshabilita. Cinco: en el celular, el menú ahora se cierra al tocar fuera. También revisé que la IA no usara la sintaxis de Tailwind 3.

## 5. Demostración (4:00 – 6:00)
[Computador: recorrer el sitio. Luego celular o F12 en modo responsive]

Aquí está el sitio publicado. Arriba el navbar fijo; al bajar, se resalta la sección en la que estoy. Este es el botón de modo oscuro [clic]: todo cambia a la paleta nocturna y, si recargo, se mantiene.
En tours tengo seis tarjetas; en computador se ven en tres columnas. El filtro es mi componente extra [clic en Fotografía]: muestra solo dos tours y el texto lo anuncia. Si toco “Reservar” en una tarjeta, me lleva al formulario con ese tour ya elegido.
Las preguntas frecuentes funcionan como acordeón [abrir y cerrar], también con el teclado.
Ahora el formulario. Si lo envío vacío [clic], aparece un mensaje debajo de cada campo y el cursor va al primer error. Si escribo un correo mal, me lo dice. Lo lleno bien [llenar]… “Enviando…” y aparece el toast verde con mi nombre, el tour y la fecha, que puedo cerrar.
[Celular] En el celular las tarjetas pasan a una columna, y el menú hamburguesa abre y se cierra al tocar un enlace o fuera de él.

## 6. Explicación del código (6:00 – 7:30)
[VS Code: mostrar los tres cambios y luego `index.html` / `input.css`]

Estos son mis tres cambios manuales, hechos sin IA. [Explicar cada uno: qué cambié, en qué archivo y cómo se ve antes y después.]
Y cinco clases de Tailwind que uso: `grid sm:grid-cols-2 lg:grid-cols-3` en la lista de tours, que pasa de una a dos y a tres columnas según la pantalla; `md:hidden` en el botón hamburguesa, que lo oculta desde 768 píxeles; `bg-terracota`, que sale del token que definí en `@theme`; `dark:bg-noche-900`, que solo se aplica cuando el html tiene la clase dark; y `focus-visible:outline-2`, que dibuja el contorno cuando se navega con teclado, por accesibilidad.

## 7. Conclusión (7:30 – 8:00)
[Volver al hero del sitio]

Aprendí que Tailwind es una forma ordenada de llevar un sistema de diseño al código, y que la IA acelera mucho el trabajo, pero solo sirve si uno entiende y prueba lo que entrega. Si volviera a empezar, definiría primero todos los tokens y probaría la accesibilidad desde la primera versión. Para mí, la IA debe ser el asistente y no el autor. Gracias.

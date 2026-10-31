# Tatacoa Nocturna 🌌

Landing page de un emprendimiento **ficticio** de tours de astronomía, senderismo y astrofotografía en el Desierto de la Tatacoa (Villavieja, Huila). Es la parte práctica del trabajo *“Investigación y desarrollo de un sitio web con Tailwind CSS e inteligencia artificial”*.

- **Autor:** Nelson Steven Marroquín Ortiz, Ingeniería de Software, Fundación Escuela Tecnológica de Neiva Jesús Oviedo Pérez (FET)
- **Asignatura:** Seminario en Gestión de Software Ágil Asistido por Inteligencia Artificial
- **Docente:** Camilo Morales Vargas
- **Sitio publicado:** https://nelsonmarroquinor-arch.github.io/tatacoa-nocturna/
- **Repositorio:** https://github.com/nelsonmarroquinor-arch/tatacoa-nocturna
- **Video:** _pegar aquí el enlace de YouTube_


## 1. Planificación

| Elemento | Decisión |
|---|---|
| Temática | Agencia de turismo astronómico en el Desierto de la Tatacoa |
| Público objetivo | Jóvenes y familias de 18 a 40 años, turistas nacionales y estudiantes que visitan el Huila |
| Propósito | Mostrar los tours, resolver dudas frecuentes y recibir solicitudes de reserva |
| Mapa del sitio | Navbar → Hero → Tours (tarjetas + filtro) → Nosotros → Preguntas frecuentes (acordeón) → Formulario de reserva → Pie de página |

### Paleta (regla 60-30-10) definida con `@theme`

| Rol | Token | HEX | Uso | Contraste verificado |
|---|---|---|---|---|
| 60 % dominante | `arena` | `#FBF6EE` | Fondo general | Texto `tierra` #2B1D14 → 15.15:1 |
| 30 % secundario | `noche` | `#1E1B4B` | Hero, “Nosotros”, pie | Texto `luna` #F3EDE4 → 13.74:1 |
| 10 % acento | `terracota` | `#C2410C` | Botones y llamados a la acción | Blanco sobre terracota → 5.18:1 |
| Acento modo oscuro | `brasa` | `#FB923C` | Botones en modo oscuro | Sobre `noche-900` → 8.14:1 |
| Éxito | `exito` | `#15803D` | Toast de confirmación | Blanco → 5.02:1 |
| Error | `error` | `#B91C1C` | Mensajes de validación | Sobre blanco → 6.47:1 |
| Advertencia | `advertencia` | `#B45309` | Reservado para avisos | Blanco → 5.02:1 |

**Fuentes (máximo 2, Google Fonts):** Sora para títulos y Nunito Sans para el texto.

## 2. Tecnologías

- HTML5 semántico
- Tailwind CSS 4 compilado con **Tailwind CLI** (no se usa el Play CDN porque la documentación oficial indica que es solo para desarrollo)
- JavaScript puro, sin librerías
- Ilustraciones SVG propias (sin imágenes con derechos de autor)

## 3. Funcionalidades

- Navbar fija con **menú hamburguesa** en celular (se cierra con un enlace, con Escape o tocando fuera) y resaltado de la sección activa
- **Modo oscuro** con botón, guardado en `localStorage` y sin destello al recargar
- Tarjetas de tours con grid de 1, 2 y 3 columnas (`sm:` y `lg:`) y **filtro por categoría** (componente extra)
- **Acordeón** de preguntas frecuentes accesible (`aria-expanded`, `aria-controls`, teclado)
- **Formulario** con etiquetas, validación en JavaScript (obligatorios, correo, celular, fecha futura, personas de 1 a 10), mensajes de error junto a cada campo, estado “Enviando…” y **toast** de confirmación
- Accesibilidad: enlace “Saltar al contenido”, textos alternativos, foco visible, `aria-live` en el toast y en el conteo de tours, `prefers-reduced-motion`

> El formulario es una demostración frontend: no hay servidor y **no se envía ningún correo real**.

## 4. Instalación y ejecución

```bash
# 1. Instalar Tailwind CLI (necesita Node.js 20 o superior)
npm install

# 2. Compilar el CSS mientras se trabaja
npm run dev

# 3. Compilar la versión final minificada
npm run build
```

Luego abre `index.html` en el navegador (o usa la extensión *Live Server* de VS Code).

## 5. Estructura

```
tatacoa-nocturna/
├── index.html          → estructura de la página
├── src/input.css       → @import "tailwindcss", @theme y modo oscuro
├── dist/output.css     → CSS compilado (se sube al repositorio para GitHub Pages)
├── js/main.js          → menú, modo oscuro, filtro, acordeón, formulario y toast
├── assets/img/         → ilustraciones SVG
└── docs/               → capturas, pruebas y guía de cambios manuales
```

## 6. Prompt maestro

> **Rol:** Actúa como desarrollador frontend senior especializado en Tailwind CSS 4, accesibilidad web (WCAG 2.2 nivel AA) y JavaScript sin librerías.
>
> **Contexto:** Estoy creando la landing page de “Tatacoa Nocturna”, un emprendimiento (ficticio, para un trabajo universitario) de tours de astronomía, senderismo y astrofotografía en el Desierto de la Tatacoa, Villavieja (Huila). El público son jóvenes y familias de 18 a 40 años y turistas que visitan el Huila. El sitio debe mostrar los tours, resolver dudas y recibir solicitudes de reserva. La personalidad visual es “noche del desierto”: cálida, tranquila y confiable.
>
> **Tareas:** Construye una sola página con estas secciones en orden:
> 1. Navbar fija con logo en texto e ícono de estrella, enlaces a Tours, Nosotros y Preguntas, botón “Reservar” y botón de modo oscuro; en celular un menú hamburguesa que se abra y cierre con JavaScript.
> 2. Hero en dos columnas (una en celular) con antetítulo, H1, párrafo, dos botones (“Ver tours” y “Reservar una noche”), tres datos cortos y una ilustración del cielo.
> 3. Sección de tours con 6 tarjetas (imagen, categoría y duración, título, descripción, precio en COP y botón “Reservar”), grid de 1 columna en celular, 2 en tablet y 3 en computador, y un filtro por categoría (Todos, Astronomía, Senderismo, Fotografía) que muestre cuántos tours hay visibles.
> 4. Sección “Nosotros” con imagen y texto en dos columnas.
> 5. Preguntas frecuentes en acordeón (4 preguntas) accesible con teclado.
> 6. Formulario de reserva con nombre, correo, celular opcional, tour (select), fecha, número de personas (1 a 10), comentarios y casilla de aceptación. Valida con JavaScript los obligatorios, el formato del correo, que la fecha no sea pasada y el rango de personas; muestra el error debajo de cada campo y lleva el foco al primer error. Si todo está bien, muestra un toast verde que desaparezca a los 5 segundos.
> 7. Pie de página con descripción, punto de encuentro, horario y redes.
>
> **Restricciones:** Usa HTML5 semántico, Tailwind CSS 4 compilado con Tailwind CLI (no Play CDN) y JavaScript puro. Define la paleta con `@theme`: arena #FBF6EE (60 %), noche #1E1B4B (30 %), terracota #C2410C (10 %), éxito #15803D, error #B91C1C y advertencia #B45309. Fuentes: Sora para títulos y Nunito Sans para texto, nada más. Modo oscuro por clase con `@custom-variant`. Diseño mobile-first con los prefijos sm, md y lg. Contraste mínimo de 4.5:1, textos alternativos, etiquetas en todos los campos y foco visible. No uses imágenes con derechos de autor ni inventes datos reales del negocio.
>
> **Formato de salida:** Entrega `index.html`, `src/input.css` y `js/main.js` por separado, con código indentado y comentarios en español que separen cada sección. Al final, explica en una lista corta cómo compilar el CSS y qué partes debería personalizar.

## 7. Bitácora de prompts

La versión 1 se generó con el prompt maestro. Después probé el sitio en escritorio, tablet y celular (pruebas automáticas con Playwright y revisión visual) y pedí los ajustes uno por uno.

| # | Prompt de ajuste enviado | Problema que buscaba resolver | Resultado obtenido | ¿Funcionó? |
|---|---|---|---|---|
| 1 | “Las tarjetas ‘Noche de estrellas’ y ‘Planetas y Luna’ usan la misma imagen. Crea una ilustración SVG distinta para ‘Planetas y Luna’ con la Luna y Saturno, y actualiza su texto alternativo.” | Imagen repetida: dos productos diferentes se veían iguales | Nueva ilustración `tour-luna.svg` con alt propio | Sí |
| 2 | “En el navbar no se sabe en qué sección estoy. Resalta el enlace de la sección visible usando IntersectionObserver y `aria-current`, con un estilo en Tailwind para claro y oscuro.” | Visibilidad del estado del sistema (heurística 1 de Nielsen) | El enlace activo cambia de color y fondo al hacer scroll; se usa la variante `aria-[current=true]:` | Sí |
| 3 | “El toast no se puede cerrar antes de los 5 segundos. Agrega un botón para cerrarlo con nombre accesible.” | Control y libertad del usuario | Botón “Cerrar notificación”; además el toast deja de capturar clics cuando está oculto | Sí (se corrigió un detalle: el botón invisible podía recibir clics) |
| 4 | “Si se hace doble clic en ‘Enviar’ puede repetirse el envío. Muestra un estado ‘Enviando…’ con el botón deshabilitado y luego restáuralo.” | Prevención de errores y retroalimentación | El botón se deshabilita, cambia el texto y vuelve a la normalidad al mostrar el toast | Sí |
| 5 | “En celular el menú hamburguesa solo se cierra con la X o un enlace. Haz que también se cierre al tocar fuera del menú.” | Comportamiento esperado en móviles | El menú se cierra al tocar cualquier parte fuera de él | Sí |

**Puntos que revisé en el código de la IA:** que el modo oscuro usara la sintaxis de Tailwind 4 (`@custom-variant dark (&:where(.dark, .dark *));` en el CSS) y no la de la versión 3 (`darkMode: 'class'` en `tailwind.config.js`), que ninguna clase se construyera de forma dinámica (por ejemplo `bg-${color}`), porque Tailwind no las detecta, y que los contrastes reales cumplieran 4.5:1.

## 8. Pruebas

Ver [`docs/pruebas.md`](docs/pruebas.md). Resumen: 24 pruebas funcionales automáticas superadas (menú, modo oscuro, filtro, acordeón, validación, toast, responsive en 375, 768 y 1366 px).

## 9. Cambios manuales

Ver [`docs/cambios_manuales.md`](docs/cambios_manuales.md).

## 10. Créditos

Ilustraciones SVG hechas para este proyecto. Fuentes: Google Fonts (licencia SIL Open Font License). Desarrollado con apoyo de IA (Claude, de Anthropic); todo el código fue revisado y probado.

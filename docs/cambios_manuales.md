# Cambios manuales (sin IA)

La guía pide **mínimo tres cambios hechos a mano** y explicarlos en el video. Aquí están tres propuestas con el archivo, el lugar exacto y cómo comprobar que funcionó. Hazlos tú en VS Code y luego llena la tabla del final.

> Después de cada cambio en clases de Tailwind ejecuta `npm run build` (o deja corriendo `npm run dev`) para que se regenere `dist/output.css`.

---

## Cambio 1 · Diseño de las tarjetas de tours (Tailwind)

- **Archivo:** `index.html`, sección `<!-- TOURS -->`, en cada `<article ...>` de las 6 tarjetas.
- **Concepto:** clases de borde, sombra y estados `hover:`.
- **Qué cambiar:** por ejemplo, agrega un borde superior de color acento y haz que la sombra aparezca al pasar el mouse:
  - Agrega `border-t-4 border-t-terracota dark:border-t-brasa` al `<article>`.
  - Cambia `hover:-translate-y-1` por `hover:-translate-y-2` y `hover:shadow-xl` por `hover:shadow-2xl`.
- **Cómo comprobar:** recarga la página; las tarjetas deben tener una franja naranja arriba y “subir” un poco más al pasar el mouse.

## Cambio 2 · Nueva sección o contenido (HTML + Tailwind)

- **Archivo:** `index.html`, justo antes de `<!-- PREGUNTAS FRECUENTES -->`.
- **Concepto:** Grid responsive (`grid`, `sm:grid-cols-3`, `gap-6`) y jerarquía H2 / párrafo.
- **Qué cambiar:** crea una sección “Opiniones” con 3 tarjetas de testimonios **ficticios marcados como de ejemplo**, o una sección “Cómo llegar” con 3 pasos. Usa `<section id="opiniones" class="py-16">`, un `<h2 class="font-titulo text-3xl font-bold">` y un contenedor `grid gap-6 sm:grid-cols-3`. Si quieres que aparezca en el menú, agrega el enlace `<a href="#opiniones">` en el navbar y en el menú móvil.
- **Cómo comprobar:** en celular se ve una columna; desde 640 px se ven tres.

## Cambio 3 · Comportamiento con JavaScript

- **Archivo:** `js/main.js`, bloque `/* ---------- 5. Formulario ---------- */`, objeto `reglas`.
- **Concepto:** funciones de validación que devuelven un mensaje de error o `''`.
- **Qué cambiar (elige uno):**
  - Que el nombre solo acepte letras y espacios: usa una expresión regular como `/^[a-záéíóúñ\s]+$/i`.
  - Que no se puedan reservar fechas a más de 6 meses.
  - Que el acordeón cierre las demás preguntas cuando se abre una (en el bloque `4. Acordeón`).
- **Cómo comprobar:** escribe un nombre con números (`Laura2`) y verifica que aparece tu nuevo mensaje de error.

---

## Registro de mis cambios

| # | Qué cambié | Archivo y líneas | Clase o concepto que usé | Captura antes / después |
|---|---|---|---|---|
| 1 |  |  |  |  |
| 2 |  |  |  |  |
| 3 |  |  |  |  |

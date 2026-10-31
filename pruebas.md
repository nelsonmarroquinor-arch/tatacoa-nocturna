# Pruebas del sitio

Fecha: 30/10/2026. Herramienta: Playwright con Chromium (pruebas automáticas) + revisión visual de capturas.

## 1. Pruebas funcionales (24/24 superadas)

| Área | Prueba | Resultado |
|---|---|---|
| Filtro | “Fotografía” muestra 2 tarjetas y el texto “Mostrando 2 tours” | ✅ |
| Acordeón | Abre y cierra con clic; abre con Enter desde el teclado; `aria-expanded` cambia | ✅ |
| Formulario | Al enviar vacío aparecen 6 mensajes de error y el foco va al campo “Nombre” | ✅ |
| Formulario | Detecta correo inválido (`laura@gmail`), celular inválido (`12345`) y más de 10 personas | ✅ |
| Formulario | El botón “Reservar” de una tarjeta deja ese tour elegido en el select | ✅ |
| Formulario | Con datos válidos: estado “Enviando…”, toast verde con nombre, tour y fecha en DD/MM/AAAA | ✅ |
| Toast | Se cierra con su botón y solo a los 5 s si no se toca | ✅ |
| Modo oscuro | Se activa, `aria-pressed="true"` y se mantiene al recargar | ✅ |
| Menú móvil (375 px) | Oculto al inicio, abre, `aria-expanded="true"`, se cierra con enlace, con Escape y tocando fuera | ✅ |
| Navbar | El enlace de la sección visible recibe `aria-current="true"` | ✅ |
| Responsive | Sin scroll horizontal en 375 px; 2 columnas en 768 px; 3 columnas en 1366 px | ✅ |
| Consola | Sin errores de JavaScript | ✅ |

## 2. Revisión de accesibilidad automática (script propio)

| Revisión | Claro | Oscuro |
|---|---|---|
| Imágenes sin `alt` | 0 | 0 |
| Campos sin `<label>` | 0 | 0 |
| Botones o enlaces sin nombre | 0 | 0 |
| IDs duplicados | 0 | 0 |
| Un solo H1 y sin saltos de nivel de título | Sí | Sí |
| `lang="es"` | Sí | Sí |
| Texto con contraste menor a 4.5:1 | 0 reales* | 0 |

\* El script marcó el navbar en modo claro, pero fue un **falso positivo**: el fondo del navbar usa `bg-arena/95` y Chrome lo devuelve en formato `oklab(... / 0.95)`, que el script no sabía leer. El contraste real es #5C4A3D sobre #FBF6EE = 7.8:1.

## 3. Pendiente de hacer en tu navegador (no disponible en el entorno donde se programó)

- [ ] **W3C Validator:** abrir https://validator.w3.org/#validate_by_upload, subir `index.html` y guardar la captura.
- [ ] **Lighthouse:** en Chrome, F12 → pestaña *Lighthouse* → categoría *Accessibility* → *Analyze page load*. Meta: 90 o más. Guardar la captura en `docs/`.
- [ ] Probar el enlace publicado desde un celular real.

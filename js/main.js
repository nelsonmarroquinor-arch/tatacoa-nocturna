/* =========================================================
   Tatacoa Nocturna · Interacción con JavaScript puro
   1. Menú hamburguesa   2. Modo oscuro   3. Filtro de tours
   4. Acordeón           5. Formulario + validación + toast
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {
  /* ---------- 1. Menú hamburguesa ---------- */
  const btnMenu = document.getElementById('btn-menu');
  const menuMovil = document.getElementById('menu-movil');
  const iconoAbrir = document.getElementById('icono-abrir');
  const iconoCerrar = document.getElementById('icono-cerrar');

  function cambiarMenu(abrir) {
    menuMovil.classList.toggle('hidden', !abrir);
    iconoAbrir.classList.toggle('hidden', abrir);
    iconoCerrar.classList.toggle('hidden', !abrir);
    btnMenu.setAttribute('aria-expanded', String(abrir));
    btnMenu.setAttribute('aria-label', abrir ? 'Cerrar menú' : 'Abrir menú');
  }

  btnMenu.addEventListener('click', () => {
    const estaAbierto = btnMenu.getAttribute('aria-expanded') === 'true';
    cambiarMenu(!estaAbierto);
  });

  // Cerrar el menú al elegir un enlace
  document.querySelectorAll('.enlace-movil').forEach((enlace) => {
    enlace.addEventListener('click', () => cambiarMenu(false));
  });

  // Cerrar el menú si se toca fuera de él (iteración 5)
  document.addEventListener('click', (e) => {
    const abierto = btnMenu.getAttribute('aria-expanded') === 'true';
    if (abierto && !menuMovil.contains(e.target) && !btnMenu.contains(e.target)) cambiarMenu(false);
  });

  // Cerrar con la tecla Escape y devolver el foco al botón
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && btnMenu.getAttribute('aria-expanded') === 'true') {
      cambiarMenu(false);
      btnMenu.focus();
    }
  });

  // Si la ventana crece a tamaño escritorio, se cierra el menú móvil
  window.matchMedia('(min-width: 48rem)').addEventListener('change', (e) => {
    if (e.matches) cambiarMenu(false);
  });

  /* ---------- 2. Modo oscuro ---------- */
  const btnTema = document.getElementById('btn-tema');
  const raiz = document.documentElement;

  function pintarBotonTema() {
    const oscuro = raiz.classList.contains('dark');
    btnTema.setAttribute('aria-pressed', String(oscuro));
    btnTema.setAttribute('aria-label', oscuro ? 'Activar modo claro' : 'Activar modo oscuro');
  }

  btnTema.addEventListener('click', () => {
    const oscuro = raiz.classList.toggle('dark');
    try { localStorage.setItem('tema', oscuro ? 'oscuro' : 'claro'); } catch (e) { /* modo privado */ }
    pintarBotonTema();
  });
  pintarBotonTema();

  // Resalta en el navbar la sección que se está viendo (iteración 2)
  const enlacesNav = document.querySelectorAll('.nav-link');
  const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
      if (!entrada.isIntersecting) return;
      enlacesNav.forEach((a) => {
        const activo = a.getAttribute('href') === `#${entrada.target.id}`;
        if (activo) a.setAttribute('aria-current', 'true');
        else a.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  ['inicio', 'tours', 'nosotros', 'preguntas', 'reservar'].forEach((id) => observador.observe(document.getElementById(id)));

  /* ---------- 3. Filtro de tours ---------- */
  const filtros = document.querySelectorAll('.filtro');
  const tarjetas = document.querySelectorAll('#lista-tours .tarjeta');
  const conteo = document.getElementById('conteo-tours');

  filtros.forEach((boton) => {
    boton.addEventListener('click', () => {
      const categoria = boton.dataset.filtro;
      filtros.forEach((b) => b.setAttribute('aria-pressed', String(b === boton)));

      let visibles = 0;
      tarjetas.forEach((tarjeta) => {
        const mostrar = categoria === 'todos' || tarjeta.dataset.categoria === categoria;
        tarjeta.hidden = !mostrar;
        if (mostrar) visibles++;
      });
      conteo.textContent = `Mostrando ${visibles} ${visibles === 1 ? 'tour' : 'tours'}`;
    });
  });

  // Los botones "Reservar" de cada tarjeta dejan el tour elegido en el formulario
  const selectTour = document.getElementById('tour');
  document.querySelectorAll('.btn-reservar').forEach((boton) => {
    boton.addEventListener('click', () => {
      selectTour.value = boton.dataset.tour;
      limpiarError(selectTour);
    });
  });

  /* ---------- 4. Acordeón de preguntas frecuentes ---------- */
  document.querySelectorAll('.acordeon-btn').forEach((boton) => {
    boton.addEventListener('click', () => {
      const abierto = boton.getAttribute('aria-expanded') === 'true';
      const panel = document.getElementById(boton.getAttribute('aria-controls'));
      boton.setAttribute('aria-expanded', String(!abierto));
      panel.hidden = abierto;
      boton.querySelector('.icono-acordeon').classList.toggle('rotate-180', !abierto);
    });
  });

  /* ---------- 5. Formulario: validación y toast ---------- */
  const form = document.getElementById('form-reserva');
  const campos = {
    nombre: document.getElementById('nombre'),
    correo: document.getElementById('correo'),
    telefono: document.getElementById('telefono'),
    tour: document.getElementById('tour'),
    fecha: document.getElementById('fecha'),
    personas: document.getElementById('personas'),
    acepto: document.getElementById('acepto'),
  };

  // No se puede reservar en una fecha que ya pasó
  const hoy = new Date();
  const hoyTexto = new Date(hoy.getTime() - hoy.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
  campos.fecha.min = hoyTexto;

  const btnEnviar = document.getElementById('btn-enviar');
  const textoBoton = btnEnviar.textContent;

  const regexCorreo = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
  const regexCelular = /^3\d{9}$/; // celular colombiano: 10 dígitos que empiezan por 3

  // Cada función devuelve el mensaje de error, o '' si el campo está bien
  const reglas = {
    nombre: (v) => (v.trim().length < 3 ? 'Escribe tu nombre completo (mínimo 3 letras).' : ''),
    correo: (v) => {
      if (!v.trim()) return 'Escribe tu correo electrónico.';
      return regexCorreo.test(v.trim()) ? '' : 'El correo no es válido. Ejemplo: nombre@gmail.com';
    },
    telefono: (v) => (v.trim() && !regexCelular.test(v.trim()) ? 'El celular debe tener 10 dígitos y empezar por 3.' : ''),
    tour: (v) => (v ? '' : 'Selecciona el tour que quieres reservar.'),
    fecha: (v) => {
      if (!v) return 'Elige la fecha del tour.';
      return v < hoyTexto ? 'La fecha no puede ser anterior a hoy.' : '';
    },
    personas: (v) => {
      const n = Number(v);
      if (!v) return 'Indica cuántas personas van.';
      return Number.isInteger(n) && n >= 1 && n <= 10 ? '' : 'Debe ser un número entre 1 y 10.';
    },
    acepto: (_, campo) => (campo.checked ? '' : 'Debes aceptar para que podamos contactarte.'),
  };

  function mostrarError(campo, mensaje) {
    const error = document.getElementById(`error-${campo.id}`);
    error.textContent = mensaje;
    error.classList.remove('hidden');
    campo.setAttribute('aria-invalid', 'true');
  }

  function limpiarError(campo) {
    const error = document.getElementById(`error-${campo.id}`);
    if (!error) return;
    error.textContent = '';
    error.classList.add('hidden');
    campo.removeAttribute('aria-invalid');
  }

  function validarCampo(nombre) {
    const campo = campos[nombre];
    const mensaje = reglas[nombre](campo.value, campo);
    if (mensaje) mostrarError(campo, mensaje);
    else limpiarError(campo);
    return !mensaje;
  }

  // Validación al salir de cada campo y limpieza mientras se corrige
  Object.keys(campos).forEach((nombre) => {
    const campo = campos[nombre];
    campo.addEventListener('blur', () => validarCampo(nombre));
    campo.addEventListener('input', () => {
      if (campo.getAttribute('aria-invalid') === 'true') validarCampo(nombre);
    });
    campo.addEventListener('change', () => {
      if (campo.getAttribute('aria-invalid') === 'true') validarCampo(nombre);
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const resultados = Object.keys(campos).map(validarCampo);
    const primerError = Object.keys(campos).find((n, i) => !resultados[i]);

    if (primerError) {
      campos[primerError].focus(); // lleva al usuario al primer campo con error
      return;
    }

    // Demostración frontend: no hay servidor, así que no se envía ningún correo real
    const nombre = campos.nombre.value.trim().split(' ')[0];
    const tour = campos.tour.value;
    const [anio, mes, dia] = campos.fecha.value.split('-');

    // Estado de "enviando" para evitar doble envío (iteración 4)
    btnEnviar.disabled = true;
    btnEnviar.textContent = 'Enviando…';
    setTimeout(() => {
      mostrarToast(`¡Listo, ${nombre}! Recibimos tu solicitud para “${tour}” el ${dia}/${mes}/${anio}. Te contactaremos para confirmar.`);
      form.reset();
      Object.values(campos).forEach(limpiarError);
      btnEnviar.disabled = false;
      btnEnviar.textContent = textoBoton;
    }, 900);
  });

  /* ---------- Toast ---------- */
  const toast = document.getElementById('toast');
  const toastTexto = document.getElementById('toast-texto');
  let temporizador;

  function mostrarToast(mensaje) {
    toastTexto.textContent = mensaje;
    toast.classList.remove('opacity-0', 'translate-y-4', 'pointer-events-none');
    toast.classList.add('opacity-100', 'translate-y-0');
    clearTimeout(temporizador);
    temporizador = setTimeout(ocultarToast, 5000);
  }

  function ocultarToast() {
    toast.classList.add('opacity-0', 'translate-y-4', 'pointer-events-none');
    toast.classList.remove('opacity-100', 'translate-y-0');
  }
  document.getElementById('toast-cerrar').addEventListener('click', () => {
    clearTimeout(temporizador);
    ocultarToast();
  });

  /* ---------- Año actual en el pie de página ---------- */
  document.getElementById('anio').textContent = new Date().getFullYear();
});

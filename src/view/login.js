import { navigateTo } from '../main.js';

export function loginView() {
    // Contenedor general
    const generalContainer = document.createElement('div');
    generalContainer.classList.add('general-container');

    // Titulo principal
    const title = document.createElement('h2');
    title.textContent = 'Bienvenido';
    title.classList.add('title-general');

    // Contenedor para las dos columnas (row)
    const row = document.createElement('div');
    row.classList.add('row-container');

    // Columna izquierda (imagen)
    const leftCol = document.createElement('div');
    leftCol.classList.add('col-left');
    const img = document.createElement('img');
    img.src = './assets/banner-inicio.svg';
    img.alt = 'Ilustracion Login';
    img.classList.add('login-image');
    leftCol.appendChild(img);

    // Columna derecha (formulario)
    const rightCol = document.createElement('div');
    rightCol.classList.add('col-right');

    const form = document.createElement('form');
    form.classList.add('login-form');

    // Label + Input: Email
    const emailLabel = document.createElement('label');
    emailLabel.textContent = 'Correo electrónico';
    emailLabel.setAttribute('for', 'input-email');

    const email = document.createElement('input');
    email.placeholder = 'ejemplo@correo.com';
    email.classList.add('input-email');
    email.type = 'email';
    email.id = 'input-email';

    // Label + Input: Clave
    const passLabel = document.createElement('label');
    passLabel.textContent = 'Clave';
    passLabel.setAttribute('for', 'input-pass');

    const password = document.createElement('input');
    password.placeholder = 'Tu clave';
    password.classList.add('input-pass');
    password.type = 'password';
    password.id = 'input-pass';

  // Label de rol
const roleLabel = document.createElement('p');
roleLabel.textContent = 'Selecciona tu rol:';
roleLabel.classList.add('role-label');

// Contenedor de radios
const roleContainer = document.createElement('div');
roleContainer.classList.add('role-container');

// Crear radios
['usuario', 'administrador', 'empresa'].forEach(r => {
  const radioWrapper = document.createElement('label');
  radioWrapper.classList.add('role-option');

  const radio = document.createElement('input');
  radio.type = 'radio';
  radio.name = 'role';
  radio.value = r;

  // Por defecto seleccionamos "usuario"
  if (r === 'usuario') radio.checked = true;

  const span = document.createElement('span');
  span.textContent = r.charAt(0).toUpperCase() + r.slice(1);

  radioWrapper.appendChild(radio);
  radioWrapper.appendChild(span);
  roleContainer.appendChild(radioWrapper);
});

    // Botón
    const button = document.createElement('button');
    button.textContent = 'Ingresar';
    button.classList.add('login-button');
    button.type = 'submit';

    // Validación de email
    const esEmailValido = (correo) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(correo);
    };

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const correo = email.value.trim();
  const clave = password.value.trim();
  const rol = form.querySelector('input[name="role"]:checked')?.value;

  if (!correo || !clave) {
    alert('Por favor, completa todos los campos.');
    return;
  }

  if (!esEmailValido(correo)) {
    alert('Por favor, ingresa un correo electrónico válido.');
    return;
  }

  localStorage.setItem('userEmail', correo);
  localStorage.setItem('userPass', clave);
  localStorage.setItem('userRole', rol);

  // Redirige según el rol
  if (rol === 'usuario') {
    navigateTo('/user'); 
  } else if (rol === 'administrador') {
    navigateTo('/admin');
  } else if (rol === 'empresa') {
    navigateTo('/empresa');
  }
});


    // Estructura del form
    form.appendChild(emailLabel);
    form.appendChild(email);
    form.appendChild(passLabel);
    form.appendChild(password);
    form.appendChild(roleLabel);
form.appendChild(roleContainer);
    form.appendChild(button);

    rightCol.appendChild(form);

    // Titulo segundario
    const title2 = document.createElement('h2');
    title2.textContent = 'Información';
    title2.classList.add('title-general2');

    // --- Segundo row ---
    const secondRow = document.createElement('div');
    secondRow.classList.add('row-container', 'second-row');

    // Parrafo
    const paragraph = document.createElement('p');
    paragraph.textContent = '¡Bienvenido! \n Registrate ahora en nuestra aplicacion y forma parte de la comunidad que contribuye a un entorno mas limpio y sostenible.\n\n •Si eres usuario, podras solicitar y gestionar la recoleccion de tus residuos de manera facil y rapida.\n •Si eres una empresa recolectora, tendras acceso a nuevas oportunidades para conectar con usuarios y optimizar tu servicio.\n\n ¡Crea tu cuenta y empieza a hacer la diferencia hoy mismo!'


    // Contenedor para los botones
    const buttonGroup = document.createElement('div');
    buttonGroup.classList.add('button-group');

    const registerBtn = document.createElement('button');
    registerBtn.textContent = 'Registrarse';
    registerBtn.classList.add('secondary-button');

    const homeBtn = document.createElement('button');
    homeBtn.textContent = 'Inicio';
    homeBtn.classList.add('secondary-button');

    // Agregar botones al contenedor
    buttonGroup.appendChild(registerBtn);
    buttonGroup.appendChild(homeBtn);

    // Armar estructura
    row.appendChild(leftCol);
    row.appendChild(rightCol);
    secondRow.appendChild(paragraph);
    secondRow.appendChild(buttonGroup);

    generalContainer.appendChild(title);
    generalContainer.appendChild(row);
    generalContainer.appendChild(title2);
    generalContainer.appendChild(secondRow);

    return generalContainer;
}

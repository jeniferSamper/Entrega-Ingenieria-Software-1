import { loginView } from './view/login.js';
import { userView } from './view/user.js';
import { adminView } from './view/admin.js';
import { companyView } from './view/company.js';
import { inorganicView } from './view/inorganic.js';
import { hazardousView } from './view/hazardous.js';
import { userReportView } from './view/userReport.js';


const root = document.getElementById('root');

// Mapa de rutas
const routes = {
  '/': loginView,
  '/user': userView,
  '/admin': adminView,
  '/company': companyView,
  '/inorganic': inorganicView,
  '/hazardous': hazardousView,
  '/report': userReportView,
};

// Cambiar de vista (SPA)
export function navigateTo(pathname) {
  window.history.pushState({}, pathname, window.location.origin + pathname);
  renderView(pathname);
}

// Mostrar la vista correspondiente
function renderView(pathname) {
  const view = routes[pathname] || routes['/'];
  root.replaceChildren(view());
}

// Manejar botón atrás/adelante del navegador
window.onpopstate = () => {
  renderView(window.location.pathname);
};

// Mostrar la vista correcta al cargar la página
window.addEventListener('load', () => {
  renderView(window.location.pathname);
});

// Interceptar clics en enlaces con data-link
document.addEventListener('click', (e) => {
  const link = e.target.closest('a[data-link]');
  if (link) {
    e.preventDefault();
    const path = link.getAttribute('href');
    navigateTo(path);
  }
});

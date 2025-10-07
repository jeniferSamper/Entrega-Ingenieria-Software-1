

export function userView() {
  const logo = new URL('../assets/user-ico-2.svg', import.meta.url).href;
  const camion = new URL('../assets/logo-recoleccion-2.svg', import.meta.url).href;

  const container = document.createElement('div');
  container.classList.add('user-container');

  container.innerHTML = `
    <div class="title">
      <h1 class="user-title">Usuarios</h1>
    </div>
     <div class="total-content">
    <div class="sidebar">
      <div class="profile">
        <div class="avatar">
          <img src="${logo}" alt="Usuario" />
        </div>
        <h2>¡Hola!</h2>
      </div>
      <ul class="menu">
        <li><a href="#">Perfil</a></li>
        <li><a href="/inorganic" data-link>Residuos Inorganicos</a></li>
        <li><a href="/hazardous" data-link>Residuos Peligrosos</a></li>
        <li><a href="/report" data-link>Reporte de Usuario</a></li>
        <li><a href="#">Puntos</a></li>
        <li><a href="/" data-link>Salir</a></li>
      </ul>
    </div>

    <div class="content">
      <div class="card">
        <img src="${camion}" alt="Camion de recoleccion" />
        <div class="overlay">
          <button class="btn">Rutas</button>
          <button class="btn">Tipos de residuos</button>
        </div>
      </div>
    </div>
    </div>
  `;

  return container;
}



export function userView() {
  const container = document.createElement('div');
  container.classList.add('user-container');

  container.innerHTML = `
      <div class="title">
   <h1 class="user-title">Usuarios</h1>
      </div>
    <div class="sidebar">
      <div class="profile">
        <div class="avatar">
        <img src="/assets/logo-desktop.png" alt="Usuario" />
        </div>
        <h2>¡Hola!</h2>
      </div>
      <ul class="menu">
        <li><a href="#">Perfil</a></li>
        <li><a href="#">Residuos Inorganicos</a></li>
        <li><a href="#">Residuos Peligrosos</a></li>
        <li><a href="#">Reporte de Usuario</a></li>
        <li><a href="#">Puntos</a></li>
        <li><a href="/login" data-link>Salir</a></li>
      </ul>
    </div>

    <div class="content">
      <div class="card">
        <img src="../assets/logo-recoleccion-2.svg" alt="Camion de recoleccion" />
        <div class="overlay">
          <button class="btn">Rutas</button>
          <button class="btn">Tipos de residuos</button>
        </div>
      </div>
    </div>
  `;

  return container;
}

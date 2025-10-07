import { navigateTo } from '../main.js';

export function userReportView() {
  const container = document.createElement('div');
  container.classList.add('report-container');

  container.innerHTML = `
    <h1>Reporte del Usuario</h1>
    <div class="report-card">
      <h2>Usuario: Ana Torres</h2>
      <p><strong>Direccion:</strong> Calle 45 #12-30</p>
      <p><strong>Correo:</strong> ana.torres@example.com</p>
      <p><strong>Numero de recogidas realizadas en 2025:</strong> 3</p>
      <table class="report-table">
        <thead>
          <tr>
            <th>Tipo de Residuo</th>
            <th>Direccion</th>
            <th>Fecha</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Plastico</td>
            <td>Calle 45 #12-30</td>
            <td>15/02/2025</td>
            <td>Completada</td>
          </tr>
          <tr>
            <td>Vidrio</td>
            <td>Calle 45 #12-30</td>
            <td>13/05/2025</td>
            <td>Completada</td>
          </tr>
          <tr>
            <td>Peligrosos (Aceites usados)</td>
            <td>Calle 45 #12-30</td>
            <td>05/09/2025</td>
            <td>Completada</td>
          </tr>
        </tbody>
      </table>

      <p class="summary">
        ♻️ Gracias a estas entregas, Ana ha contribuido con el reciclaje de 18 kg de residuos durante el año.
      </p>

      <button id="backBtn">Volver</button>
    </div>
  `;

  // Boton volver al panel de usuario
  container.querySelector('#backBtn').addEventListener('click', () => navigateTo('/user'));

  return container;
}

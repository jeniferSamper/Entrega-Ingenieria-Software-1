import { navigateTo } from '../main.js';

export function hazardousView() {
  const container = document.createElement('div');
  container.classList.add('hazardous-container');

  container.innerHTML = `
    <h1>Programar recogida de residuos peligrosos</h1>
    <form id="hazardousForm">
      <label for="tipo">Tipo de residuo:</label>
      <select id="tipo" required>
        <option value="">Selecciona un tipo</option>
        <option value="baterias">Baterias</option>
        <option value="aceites">Aceites usados</option>
        <option value="quimicos">Productos quimicos</option>
        <option value="electronicos">Desechos electronicos</option>
      </select>

      <label for="direccion">Direccion de recogida:</label>
      <input type="text" id="direccion" placeholder="Ej. Calle 10 #25-30" required />

      <label for="fecha">Fecha de recogida:</label>
      <input type="date" id="fecha" required />

      <div class="btn-group">
        <button type="submit">Programar</button>
        <button type="button" id="backBtn">Volver</button>
      </div>
    </form>
  `;

  // Obtener elementos
  const fechaInput = container.querySelector('#fecha');
  const form = container.querySelector('#hazardousForm');

  // Limitar la fecha al mes actual
  const hoy = new Date();
  const primerDia = new Date(hoy.getFullYear(), hoy.getMonth(), 1).toISOString().split('T')[0];
  const ultimoDia = new Date(hoy.getFullYear(), hoy.getMonth() + 1, 0).toISOString().split('T')[0];
  fechaInput.min = primerDia;
  fechaInput.max = ultimoDia;

  // Boton de volver
  container.querySelector('#backBtn').addEventListener('click', () => navigateTo('/user'));

  // Revisar si ya hay una recogida programada este mes
  const mesActual = `${hoy.getFullYear()}-${hoy.getMonth() + 1}`;
  const recogidaGuardada = localStorage.getItem(`hazardous-${mesActual}`);

  if (recogidaGuardada) {
    const { tipo, direccion, fecha } = JSON.parse(recogidaGuardada);
    const confirmar = confirm(`Ya tienes una recogida programada para el ${fecha} (${tipo}). ¿Deseas reprogramarla?`);
    if (!confirmar) {
      navigateTo('/user');
      return container;
    }
    // Si confirma, se borra la anterior para permitir una nueva
    localStorage.removeItem(`hazardous-${mesActual}`);
  }

  // Evento submit (siempre activo)
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const tipo = form.querySelector('#tipo').value;
    const direccion = form.querySelector('#direccion').value;
    const fecha = fechaInput.value;

    if (!tipo || !direccion || !fecha) {
      alert('Por favor completa todos los campos.');
      return;
    }

    // Guardar en localStorage
    localStorage.setItem(`hazardous-${mesActual}`, JSON.stringify({ tipo, direccion, fecha }));
    alert(`Recogida de residuos peligrosos programada para el ${fecha}.`);
    navigateTo('/user');
  });

  return container;
}

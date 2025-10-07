import { navigateTo } from '../main.js';

export function inorganicView() {
  const container = document.createElement('div');
  container.classList.add('inorganic-container');

  container.innerHTML = `
    <h1>Programar recogida de residuos inorganicos</h1>
    <form id="pickupForm">
      <label for="direccion">Direccion de recogida:</label>
      <input 
        type="text" 
        id="direccion" 
        placeholder="Ej. Calle 45 #23-10, Barrio Las Flores" 
        required 
      />

      <label for="residuo">Tipo de residuo:</label>
      <input 
        type="text" 
        id="residuo" 
        placeholder="Ej. plastico, vidrio, metal" 
        required 
      />

      <label for="fecha">Fecha de recogida:</label>
      <input type="date" id="fecha" required />

      <label for="hora">Hora:</label>
      <input type="time" id="hora" required />

      <div class="btn-group">
        <button type="submit">Programar</button>
        <button type="button" id="backBtn">Volver</button>
      </div>
    </form>
  `;

  // Boton para volver al userView
  container.querySelector('#backBtn').addEventListener('click', () => navigateTo('/user'));

  // Simular envio
  container.querySelector('#pickupForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const direccion = container.querySelector('#direccion').value.trim();
    const residuo = container.querySelector('#residuo').value.trim();
    const fecha = container.querySelector('#fecha').value;
    const hora = container.querySelector('#hora').value;

    if (!direccion || !residuo || !fecha || !hora) {
      alert('Por favor completa todos los campos antes de continuar.');
      return;
    }

    alert(`Recogida programada con exito!\n
    Direccion: ${direccion}\n
    Residuo: ${residuo}\n
    Fecha: ${fecha}\n
    Hora: ${hora}`);

    navigateTo('/user');
  });

  return container;
}

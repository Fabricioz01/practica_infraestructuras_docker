
import './style.css';

(async () => {
  const response = await fetch('http://localhost:3000/api/cliente');
  const data = await response.json();

  let divTable = `<table>`;
  divTable += `<tr><th>Id</th><th>Nombre</th><th>Apellido</th><th>Correo</th><th>Teléfono</th><th>Dirección</th><th>Ciudad</th><th>Código Postal</th><th>País</th><th>Acciones</th></tr>`;
  data.forEach((cliente: ICliente) => {
    divTable += `<tr><td>${cliente.id}</td><td>${cliente.nombre}</td><td>${cliente.apellido}</td><td>${cliente.correo}</td><td>${cliente.telefono}</td><td>${cliente.direccion}</td><td>${cliente.ciudad}</td><td>${cliente.codigoPostal}</td><td>${cliente.pais}</td><td><button class="btn btn-delete">Eliminar</button></td><td><button class="btn btn-update">Actualizar</button></td></tr>`;
  });
  divTable += `</table>`;

  document.querySelector<HTMLDivElement>('#app')!.innerHTML = divTable;

  const divButton = `<button class="btn btn-primary" >Agregar</button>`;
  document.querySelector<HTMLDivElement>('#app')!.innerHTML += divButton;

  const btnAgregar = document.querySelector<HTMLButtonElement>('.btn-primary');
  btnAgregar?.addEventListener('click', () => {
    const divForm = `<form>
      <div class="mb-3">
        <label for="nombre" class="form-label">Nombre</label>
        <input type="text" class="form-control" id="nombre" aria-describedby="nombre">
      </div>
      <div class="mb-3">
        <label for="apellido" class="form-label">Apellido</label>
        <input type="text" class="form-control" id="apellido">
      </div>
      <div class="mb-3">
        <label for="correo" class="form-label">Correo</label>
        <input type="text" class="form-control" id="correo">
      </div>
      <div class="mb-3">
        <label for="telefono" class="form-label">Teléfono</label>
        <input type="text" class="form-control" id="telefono">
      </div>
      <div class="mb-3">
        <label for="direccion" class="form-label">Dirección</label>
        <input type="text" class="form-control" id="direccion">
      </div>
      <div class="mb-3">
        <label for="ciudad" class="form-label">Ciudad</label>
        <input type="text" class="form-control" id="ciudad">
      </div>
      <div class="mb-3">
        <label for="codigoPostal" class="form-label">Código Postal</label>
        <input type="text" class="form-control" id="codigoPostal">
      </div>
      <div class="mb-3">
        <label for="pais" class="form-label">País</label>
        <input type="text" class="form-control" id="pais">
      </div>
      <button type='button' class="btn btn-save">Guardar</button>
      <button type='submit' class="btn btn-cancel">Cancelar</button>
    </form>`;
    document.querySelector<HTMLDivElement>('#app')!.innerHTML = divForm;

    const btnSave = document.querySelector<HTMLButtonElement>('.btn-save');
    btnSave?.addEventListener('click', async (e) => {
      e.preventDefault();
      const nombre = document.querySelector<HTMLInputElement>('#nombre')!.value;
      const apellido = document.querySelector<HTMLInputElement>('#apellido')!.value;
      const correo = document.querySelector<HTMLInputElement>('#correo')!.value;
      const telefono = document.querySelector<HTMLInputElement>('#telefono')!.value;
      const direccion = document.querySelector<HTMLInputElement>('#direccion')!.value;
      const ciudad = document.querySelector<HTMLInputElement>('#ciudad')!.value;
      const codigoPostal = document.querySelector<HTMLInputElement>('#codigoPostal')!.value;
      const pais = document.querySelector<HTMLInputElement>('#pais')!.value;

      const response = await fetch('http://localhost:3000/api/cliente', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre,
          apellido,
          correo,
          telefono,
          direccion,
          ciudad,
          codigoPostal,
          pais,
        }),
      });
      const data = await response.json();
      console.log(data);
      location.reload();
    });
  });

  document.querySelectorAll<HTMLButtonElement>('.btn-delete').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const id = btn.parentElement?.parentElement?.firstElementChild?.textContent;
      await fetch(`http://localhost:3000/api/cliente/${id}`, {
        method: 'DELETE',
      });
      location.reload();
    });
  });

  document.querySelectorAll<HTMLButtonElement>('.btn-update').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const id = btn.parentElement?.parentElement?.firstElementChild?.textContent;
      const response = await fetch(`http://localhost:3000/api/cliente/${id}`);
      const data = await response.json();

      const btnCancel = `<button class="btn btn-cancel">Cancelar</button>`;
      const divForm = `<form>
        <div class="mb-3">
          <label for="nombre" class="form-label">Nombre</label>
          <input type="text" class="form-control" id="nombre" aria-describedby="nombre" value="${data.nombre}">
        </div>
        <div class="mb-3">
          <label for="apellido" class="form-label">Apellido</label>
          <input type="text" class="form-control" id="apellido" value="${data.apellido}">
        </div>
        <div class="mb-3">
          <label for="correo" class="form-label">Correo</label>
          <input type="text" class="form-control" id="correo" value="${data.correo}">
        </div>
        <div class="mb-3">
          <label for="telefono" class="form-label">Teléfono</label>
          <input type="text" class="form-control" id="telefono" value="${data.telefono}">
        </div>
        <div class="mb-3">
          <label for="direccion" class="form-label">Dirección</label>
          <input type="text" class="form-control" id="direccion" value="${data.direccion}">
        </div>
        <div class="mb-3">
          <label for="ciudad" class="form-label">Ciudad</label>
          <input type="text" class="form-control" id="ciudad" value="${data.ciudad}">
        </div>
        <div class="mb-3">
          <label for="codigoPostal" class="form-label">Código Postal</label>
          <input type="text" class="form-control" id="codigoPostal" value="${data.codigoPostal}">
        </div>
        <div class="mb-3">
          <label for="pais" class="form-label">País</label>
          <input type="text" class="form-control" id="pais" value="${data.pais}">
        </div>
        <button type='submit' class="btn btn-save">Guardar</button>
        ${btnCancel}
      </form>`;
      document.querySelector<HTMLDivElement>('#app')!.innerHTML = divForm;

      const btnSave = document.querySelector<HTMLButtonElement>('.btn-save');
      btnSave?.addEventListener('click', async (e) => {
        e.preventDefault();
        const nombre = document.querySelector<HTMLInputElement>('#nombre')!.value;
        const apellido = document.querySelector<HTMLInputElement>('#apellido')!.value;
        const correo = document.querySelector<HTMLInputElement>('#correo')!.value;
        const telefono = document.querySelector<HTMLInputElement>('#telefono')!.value;
        const direccion = document.querySelector<HTMLInputElement>('#direccion')!.value;
        const ciudad = document.querySelector<HTMLInputElement>('#ciudad')!.value;
        const codigoPostal = document.querySelector<HTMLInputElement>('#codigoPostal')!.value;
        const pais = document.querySelector<HTMLInputElement>('#pais')!.value;

        const response = await fetch(`http://localhost:3000/api/cliente/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            nombre,
            apellido,
            correo,
            telefono,
            direccion,
            ciudad,
            codigoPostal,
            pais,
          }),
        });
        const data = await response.json();
        console.log(data);
        location.reload();
      });
    });
  });
})();

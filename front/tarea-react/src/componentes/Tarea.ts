/* eslint-disable @typescript-eslint/no-inferrable-types */
let idTarea: number = 0;
export default class Tarea {
  id: number = 0;
  nombre: string = "";
  completado: boolean = false;
}

export async function insertarActualizarDatos() {
  const nombre = document.getElementById("nombre") as HTMLInputElement;
  const completado = document.getElementById("completado") as HTMLInputElement;

  if (!nombre.value) {
    const txtMensaje = document.getElementById("txtMensaje");
    if (txtMensaje) txtMensaje.innerHTML = "Ingrese los datos de la Tarea";
    return;
  }

  let urlServer: string = "http://localhost:8080/tarea/create";
  let metodo: string = "POST";
  const tarea: Tarea = new Tarea();
  if (idTarea > 0) {
    tarea.id = idTarea;
    urlServer = "http://localhost:3000/tarea/update";
    metodo = "PUT";
  }
  tarea.id = idTarea;
  tarea.nombre = nombre.value;
  if (completado.value == "true") {
    tarea.completado = true;
  } else {
    tarea.completado = false;
  }
  const response = await fetch(urlServer, {
    method: metodo,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(tarea),
  });

  response.json().then((data) => {
    const txtMensaje = document.getElementById("txtMensaje");
    if (txtMensaje) txtMensaje.innerHTML = data.message;
  });
  async function editarTarea(id: number) {
    idTarea = id;
    const urlServer = " http://localhost:8080/tarea/update/" + id;
    const response = await fetch(urlServer, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      mode: "cors",
    });
    const nombre = document.getElementById("nombre") as HTMLInputElement;
    const completado = document.getElementById(
      "completado"
    ) as HTMLInputElement;

    const tarea: Tarea = (await response.json()) as Tarea;
    nombre.value = tarea.nombre.toString();
    completado.value = tarea.completado.toString();
  }
}

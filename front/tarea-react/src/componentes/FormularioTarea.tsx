import React, { useRef, FormEvent, useState } from "react";
import { Form, Button } from "react-bootstrap";
import Tarea from "./Tarea";

interface Props {
  onSubmit: (values: { nombre: string; completado: boolean }) => void;
  tarea: any;
  setTarea: (tarea: any) => void;
}

const FormularioTarea = ({ onSubmit, tarea, setTarea }: Props) => {
  const [nombre, setNombre] = useState("");
  const [completado, setCompletado] = useState(false);

  const handleNombreChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (tarea) {
      const newTarea = { ...tarea, nombre: event.target.value };
      setTarea(newTarea);
    } else {
      setNombre(event.target.value);
    }
  };

  const handleCompletadoChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.checked;
    tarea ? setTarea({ ...tarea, completado: value }) : setCompletado(value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    {
      tarea
        ? onSubmit({ nombre: tarea.nombre, completado: !!tarea.completado })
        : onSubmit({ nombre, completado });
    }
    setNombre("");
    setCompletado(false);
    setTarea(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>{tarea ? "Editar" : "Nueva Tarea"}</h3>
      <div>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          value={tarea ? tarea.nombre : nombre}
          onChange={handleNombreChange}
        />
      </div>
      <div>
        <input
          type="checkbox"
          id="completado"
          checked={tarea ? tarea.completado : completado}
          onChange={handleCompletadoChange}
        />
        <label htmlFor="completado">Completado</label>
      </div>
      <button type="submit">
        {tarea ? "Guardar cambios" : "Agregar tarea"}
      </button>
      {tarea && (
        <button type="button" onClick={() => setTarea(null)}>
          Cancelar
        </button>
      )}
    </form>
  );
};

export default FormularioTarea;

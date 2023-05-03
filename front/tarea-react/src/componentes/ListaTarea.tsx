import React from "react";
import Tarea from "./Tarea";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faTrash,
  faCheckCircle,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
type Props = {
  tarea: Tarea[];
  onDelete: (tarea: Tarea) => void;
  onEdit: (tarea: any) => void;
};

const ListaTarea = ({ tarea: tareas, onDelete, onEdit }: Props) => {
  return (
    <>
      <h3 className="mb-3">Mi lista de tareas</h3>
      {tareas.map((tarea) => (
        <div key={tarea.id} className="mb-3 border rounded p-3">
          <div className="d-flex justify-content-between mb-1">
            <div className="fw-bold">{tarea.nombre}</div>
            <div className="text-mute small">
              <FontAwesomeIcon
                icon={faEdit}
                className="cursor-pointer"
                onClick={() => onEdit(tarea)}
              />
              <FontAwesomeIcon
                icon={faTrash}
                className="cursor-pointer ms-2"
                onClick={() => onDelete(tarea)}
              />
            </div>
          </div>
          <div>
            {tarea.completado ? (
              <div>
                <FontAwesomeIcon icon={faCheckCircle} /> Completado
              </div>
            ) : (
              <div>
                <FontAwesomeIcon icon={faClock} /> Pendiente
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default ListaTarea;

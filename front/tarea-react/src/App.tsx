import { useEffect, useState } from "react";
import "./App.css";
import { Container, Row, Col } from "reactstrap";
import ListaTarea from "./componentes/ListaTarea";
import axios from "axios";
import FormularioTarea from "./componentes/FormularioTarea";
import Tarea from "./componentes/Tarea";

function App() {
  const [tareas, setTareas] = useState([]);
  const [tarea, setTarea] = useState<Tarea>();
  const cargarTareas = () => {
    axios
      .get("http://localhost:8080/tarea/lista")
      .then(({ data }) => setTareas(data));
  };
  useEffect(cargarTareas, []);

  const onSubmit = (values: any) => {
    if (tarea) {
      console.log("http://localhost:8080/tarea/update/" + tarea.id, values);
      axios
        .put("http://localhost:8080/tarea/update/" + tarea.id, values)
        .then(() => {
          cargarTareas();
        });
    } else {
      console.log("http://localhost:8080/tarea/create", values);
      axios
        .post("http://localhost:8080/tarea/create", values)
        .then(() => cargarTareas());
    }
  };
  const eliminarTarea = (tarea: Tarea) => {
    axios
      .delete("http://localhost:8080/tarea/delete/" + tarea.id)
      .then(() => cargarTareas());
  };

  return (
    <>
      <Container>
        <Row>
          <Col md={6}>
            <ListaTarea
              tarea={tareas}
              onDelete={eliminarTarea}
              onEdit={(tarea) => setTarea(tarea)}
            />
          </Col>
          <Col md={6}>
            <FormularioTarea
              onSubmit={onSubmit}
              tarea={tarea}
              setTarea={setTarea}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;

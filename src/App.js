import React, { useState } from 'react';
import './App.css';

function App() {
  const [tareas, setTareas] = useState([]);

  const agregarTarea = (evento) => {
    evento.preventDefault();
    const texto = evento.target.texto.value.trim();
    if (texto !== "") {
      setTareas([...tareas, texto]);
      evento.target.reset();
    }
  };
  const eliminarTarea = (index) => {
    let confirmacion = window.confirm("¿Seguro que deseas eliminar esta tarea?");
    if (confirmacion) {
      const nuevasTareas = [...tareas];
      nuevasTareas.splice(index, 1);
      setTareas(nuevasTareas);
    }
  };
  return (
    <div className="todos">
      <h1>Bienvenido</h1>
      <form onSubmit={agregarTarea}>
        <label htmlFor="texto">Ingresa tus tareas</label>
        <br />
        <div className="divinput">
          <input id="texto" type="text" placeholder="Escribe tu tarea" />
        </div>
        <br />
      </form>
      <ul id="lista">
        {tareas.map((tarea, index) => (
          <li key={index}>
            {tarea}
            <button onClick={() => eliminarTarea(index)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;

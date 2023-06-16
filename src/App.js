import React, { useState } from 'react';

function App() {
  const [nombreEquipo1, setNombreEquipo1] = useState('Equipo 1');
  const [nombreEquipo2, setNombreEquipo2] = useState('Equipo 2');
  const [nombreEquipo3, setNombreEquipo3] = useState('Equipo 3');
  const [puntosEquipo1, setPuntosEquipo1] = useState(0);
  const [puntosEquipo2, setPuntosEquipo2] = useState(0);
  const [puntosEquipo3, setPuntosEquipo3] = useState(0);

  const sumarPunto = (equipo, setPuntosEquipo) => {
    if (equipo < 30) {
      setPuntosEquipo(equipo + 1);
    }
  };

  const reiniciarPuntos = () => {
    setPuntosEquipo1(0);
    setPuntosEquipo2(0);
    setPuntosEquipo3(0);
  };

  const handleChangeNombreEquipo1 = (event) => {
    setNombreEquipo1(event.target.value);
  };

  const handleChangeNombreEquipo2 = (event) => {
    setNombreEquipo2(event.target.value);
  };

  const handleChangeNombreEquipo3 = (event) => {
    setNombreEquipo3(event.target.value);
  };

  return (
    <div>
      <h1>Truco Argentino - Anotador de Puntos</h1>
      <div>
        <label>
          Nombre Equipo 1:
          <input type="text" value={nombreEquipo1} onChange={handleChangeNombreEquipo1} />
        </label>
      </div>
      <div>
        <label>
          Nombre Equipo 2:
          <input type="text" value={nombreEquipo2} onChange={handleChangeNombreEquipo2} />
        </label>
      </div>
      <div>
        <label>
          Nombre Equipo 3:
          <input type="text" value={nombreEquipo3} onChange={handleChangeNombreEquipo3} />
        </label>
      </div>
      <div className="puntos">
        <div className="equipo">
          <h2>{nombreEquipo1}</h2>
          <p>Puntos: {puntosEquipo1}</p>
          <button onClick={() => sumarPunto(puntosEquipo1, setPuntosEquipo1)} disabled={puntosEquipo1 >= 30}>
            Sumar Punto
          </button>
        </div>
        <div className="equipo">
          <h2>{nombreEquipo2}</h2>
          <p>Puntos: {puntosEquipo2}</p>
          <button onClick={() => sumarPunto(puntosEquipo2, setPuntosEquipo2)} disabled={puntosEquipo2 >= 30}>
            Sumar Punto
          </button>
        </div>
        <div className="equipo">
          <h2>{nombreEquipo3}</h2>
          <p>Puntos: {puntosEquipo3}</p>
          <button onClick={() => sumarPunto(puntosEquipo3, setPuntosEquipo3)} disabled={puntosEquipo3 >= 30}>
            Sumar Punto
          </button>

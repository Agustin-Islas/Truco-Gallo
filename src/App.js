import React, { useState } from 'react';
import './App.css';

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

  const restarPunto = (equipo, setPuntosEquipo) => {
    if (equipo > 0) {
      setPuntosEquipo(equipo - 1);
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
    <div className="container">
      <h1 className="title">TRUCO GALLO - Anotador de Puntos</h1>
      <div className="team-container">
        <div className="team">
          <label className="team-label">
            Nombre Equipo 1:
            <input className="team-input" type="text" value={nombreEquipo1} onChange={handleChangeNombreEquipo1} />
          </label>
          <div className="team-score">
            <h2 className="team-name">{nombreEquipo1}</h2>
            <p className="points">Puntos: {puntosEquipo1}</p>
            <div className="buttons">
              <button className="btn" onClick={() => sumarPunto(puntosEquipo1, setPuntosEquipo1)} disabled={puntosEquipo1 >= 30}>
                Sumar Punto
              </button>
              <button className="btn" onClick={() => restarPunto(puntosEquipo1, setPuntosEquipo1)} disabled={puntosEquipo1 <= 0}>
                Restar Punto
              </button>
            </div>
          </div>
        </div>
        <div className="team">
          <label className="team-label">
            Nombre Equipo 2:
            <input className="team-input" type="text" value={nombreEquipo2} onChange={handleChangeNombreEquipo2} />
          </label>
          <div className="team-score">
            <h2 className="team-name">{nombreEquipo2}</h2>
            <p className="points">Puntos: {puntosEquipo2}</p>
            <div className="buttons">
            <button className="btn" onClick={() => sumarPunto(puntosEquipo2, setPuntosEquipo2)} disabled={puntosEquipo2 >= 30}>
                Sumar Punto
              </button>
              <button className="btn" onClick={() => restarPunto(puntosEquipo2, setPuntosEquipo2)} disabled={puntosEquipo2 <= 0}>
                Restar Punto
              </button>
            </div>
          </div>
        </div>
        <div className="team">
          <label className="team-label">
            Nombre Equipo 3:
            <input className="team-input" type="text" value={nombreEquipo3} onChange={handleChangeNombreEquipo3} />
          </label>
          <div className="team-score">
            <h2 className="team-name">{nombreEquipo3}</h2>
            <p className="points">Puntos: {puntosEquipo3}</p>
            <div className="buttons">
              <button className="btn" onClick={() => sumarPunto(puntosEquipo3, setPuntosEquipo3)} disabled={puntosEquipo3 >= 30}>
                Sumar Punto
              </button>
              <button className="btn" onClick={() => restarPunto(puntosEquipo3, setPuntosEquipo3)} disabled={puntosEquipo3 <= 0}>
                Restar Punto
              </button>
            </div>
          </div>
        </div>
      </div>
      <button className="reset-btn" onClick={reiniciarPuntos}>Reiniciar</button>
    </div>
  );
}

export default App;


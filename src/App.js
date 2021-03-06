import React, { Fragment, useState, useEffect } from 'react';
import Form from './components/Form';
import Cita from './components/Cita';

function App() {

  //Citas en el LocalStorage
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if(!citasIniciales) {
    citasIniciales = [];
  }

  //Arreglo de citas
  const [ citas, guardarCitas ] = useState([citasIniciales]);

  //UseEffect para realizar ciertas operaciones cuando el state cambia
  useEffect( () => {
    let citasIniciales = JSON.parse(localStorage.getItem('citas'));

    if(citasIniciales) {
      localStorage.setItem( 'citas', JSON.stringify(citas))
    } else {
      localStorage.setItem( 'citas', JSON.stringify([]));
    }
  }, [citas] );

  //Funcion que tome las citas actuales y agregue citas nuevas
  const crearCita = cita => {
    guardarCitas([ ...citas, cita ]);
  }

  // Funcion que eliminara citas por su ID
  const eliminarCita = id => {
    const nuevasCitas = citas.filter( cita => cita.id !== id );
    guardarCitas(nuevasCitas);
  }

  //Mensaje condicional
  const titulo = citas.length === 0 ? 'No hay citas' : 'Administra tus citas';

  return (
    <Fragment>
        <h1>Administrador de pacientes</h1>

        <div className="container">
          <div className="row">
            <div className="one-half column">
              <Form 
                crearCita={crearCita}
              />
            </div>
            <div className="one-half column">
              <h2>{titulo}</h2>
              {citas.map( cita => (
                <Cita
                key={cita.id}
                cita={cita}
                eliminarCita={eliminarCita}
                />
              ))}
            </div>
          </div>
        </div>

    </Fragment>
  );
}

export default App;

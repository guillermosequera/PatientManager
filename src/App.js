import React, { Fragment, useState } from 'react';
import Form from './components/Form';


function App() {

  //Arreglo de citas
  const [ citas, guardarCitas ] = useState([]);

  //Funcion que tome las citas actuales y agregue citas nuevas
  const crearCita = cita => {
    console.log(cita);
    guardarCitas([ ...citas, cita ]);
  }

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
              2
            </div>
          </div>
        </div>

    </Fragment>
  );
}

export default App;

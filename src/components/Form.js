import React, { Fragment, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Form = ({crearCita}) => {

    //creando el State para las citas
    const [ cita, actualizarCita ] = useState({
        mascota: '',
        propietario: '',
        id: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });

    const [ error, actualizarError ] = useState(false)

    // funcion que se ejecutara cada vez que el usuario escribe en el input para validar lo que hace
    const actualizarState = e => {
        console.log("actualizarState")
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value,
            id: uuidv4()
        })
    }

    // Extraer los valores de cita
    const { mascota, propietario, fecha, hora, sintomas } = cita;

    // Cuando el usuario envia el formulario y asignamos ID
    const submitCita = e => {
        e.preventDefault();
        console.log("submitCita")
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value,
            id: uuidv4()
        })

        crearCita(cita);
        
        // Validacion

        if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === ''){
            actualizarError(true);
            actualizarError(false);
            return;
        }
    }

    // Eliminando el mensaje previo
    // actualizarError(false);

    //Crear la cita
    // crearCita(cita);
    

    return (
        <Fragment>

        <h2> Crear Cita </h2>

        { error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null }

        <form
            onSubmit={e => submitCita(e)}
        >
            <label>Nombre Mascota</label>
            <input
                type="text"
                name="mascota"
                className="u-full-width"
                placeholder="Nombre Mascota"
                onChange={e => actualizarState(e)}
                value={mascota}
            />

            <label>Nombre Dueño </label>
            <input
                type="text"
                name="propietario"
                className="u-full-width"
                placeholder="Nombre dueño de la mascota"
                onChange={e => actualizarState(e)}
                value={propietario}
            />

            <label>Fecha </label>
            <input
                type="date"
                name="fecha"
                className="u-full-width"
                onChange={e => actualizarState(e)}
                value={fecha}
            />

            <label>Hora </label>
            <input
                type="time"
                name="hora"
                className="u-full-width"
                placeholder="Nombre dueño de la mascota"
                onChange={e => actualizarState(e)}
                value={hora}
            />

            <label>Sintomas</label>
            <textarea
                className="u-full-width"
                name="sintomas"
                onChange={e => actualizarState(e)}
                value={sintomas}
            ></textarea>

            <button
                type="submit"
                className="u-full-width button-primary"
            >Agregar Cita</button>


        </form>
        </Fragment>
    )
}

export default Form;

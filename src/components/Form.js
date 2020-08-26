import React, { Fragment, useState } from 'react'

const Form = () => {

    //creando el State para las citas
    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });

    // funcion que se ejecutara cada vez que el usuario escribe en el input para validar lo que hace
    const actualizarState = e => {
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }

    // Extraer los valores de cita
    const { mascota, propietario, fecha, hora, sintomas } = cita;

    // Cuando el usuario envia el formulario
    const submitCita = () => {
        alert('Enviando')
    }

    return (
        <Fragment>

        <h2> Crear Cita </h2>

        <form
            onSubmit={submitCita}
        >
            <label>Nombre Mascota</label>
            <input
                type="text"
                name="mascota"
                className="u-full-width"
                placeholder="Nombre Mascota"
                onChange={actualizarState}
                value={mascota}
            />

            <label>Nombre Dueño </label>
            <input
                type="text"
                name="propietario"
                className="u-full-width"
                placeholder="Nombre dueño de la mascota"
                onChange={actualizarState}
                value={propietario}
            />

            <label>Fecha </label>
            <input
                type="date"
                name="fecha"
                className="u-full-width"
                onChange={actualizarState}
                value={fecha}
            />

            <label>Hora </label>
            <input
                type="time"
                name="hora"
                className="u-full-width"
                placeholder="Nombre dueño de la mascota"
                onChange={actualizarState}
                value={hora}
            />

            <label>Sintomas</label>
            <textarea
                className="u-full-width"
                name="sintomas"
                onChange={actualizarState}
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

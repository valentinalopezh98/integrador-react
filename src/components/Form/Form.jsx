import React from 'react'
import { FormContainer } from './FormStyles'

export const Form = () => {
  return (
    <FormContainer>
        <label htmlFor="name">
            <input type="text" id="name" placeholder="Nombre"/>
        </label>

        <label htmlFor="apellido">
            <input type="text" id="apellido" placeholder="Apellido"/>
        </label>

        <label htmlFor="email">
            <input type="email" id="email" placeholder="E-mail"/>
        </label>

        <textarea id="comentarios" name="comentarios" form="contact-right" cols="50" rows="4" placeholder="Ingrese su consulta aqui..."></textarea>

        <input type="submit" className='btn'></input>
    </FormContainer>
  )
}

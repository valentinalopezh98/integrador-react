import React from 'react'
import { ErrorMessageStyled, InputContainer, Input } from './InputStyles';

export const InputElement = ({label, type, name, isError, ...rest}) => {

  return (
    <InputContainer>
        <label htmlFor={label}>
            <Input type={type} id={label} placeholder={label} name={name} error={isError} {...rest}/>
        </label>

        {isError && <ErrorMessageStyled>Este campo es obligatorio</ErrorMessageStyled>}
    </InputContainer>
  )
}

export const TextArea = ({name, isError, value, onChange, ...rest}) => {

    return (
        <>
           <textarea 
            id="comentarios" 
            name={name} 
            form="contact-right" 
            cols="50" 
            rows="4" 
            placeholder="Ingrese su consulta aqui..."
            value={value} 
            onChange={onChange} 
            {...rest} 
            />

            {isError && <ErrorMessageStyled>Este campo es obligatorio</ErrorMessageStyled>}
        </>
     
    )
  }
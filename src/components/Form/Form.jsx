import React, { useState } from 'react'
import { FormContainer } from './FormStyles'
import { InputElement, TextArea } from './Input'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { MessageSent } from '../../pages/Contact/MessageSent'

const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const validationSchema = Yup.object({
  name: Yup.string().trim().required("Este campo es requerido"),
  lastname: Yup.string().trim().required("Este campo es requerido"),
  email: Yup.string().email("Email inválido").required("Este campo es requerido"),
  comments: Yup.string().max(200, "El máximo de caracteres es de 200").required("Este campo es requerido")
})


export const Form = () => {
  
  const [show, setShow] = useState(false)

  const {values, handleChange, handleSubmit, errors, touched} = useFormik({
    initialValues: {
      name: '',
      lastname: '',
      email: '',
      comments: '',
    },
    onSubmit: (values, {resetForm}) => {
      console.log(values);
      resetForm();
      setShow(true);
      const timer = setTimeout(() => {
        setShow(false);
      }, 1500);
    },
    validationSchema,
  })

  return (
    <>
    <FormContainer onSubmit={handleSubmit}>
        <InputElement
          label='Nombre' 
          type='text'
          name='name'
          isError={errors.name && touched.name}
          value= {values.name}
          onChange={handleChange} 
        />

        <InputElement 
          label='Apellido' 
          type='text'
          name='lastname'
          isError={errors.lastname && touched.lastname}
          value= {values.lastname}
          onChange={handleChange} 
        />

        <InputElement
          label='Email'  
          type='email'
          name='email'
          isError={errors.email && touched.email}
          value= {values.email}
          onChange={handleChange} 
        />
       
        <TextArea
          name='comments'
          isError={errors.comments && touched.comments}
          value= {values.comments}
          onChange = {handleChange}
        />

        <input type="submit" className='btn'></input>
    </FormContainer>

    <MessageSent show={show}/>
    </>
  )
}

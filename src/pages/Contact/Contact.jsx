import React from 'react'
import { ContactContainerStyled, ContactLeftStyled, ContactSectionStyled } from './ContactStyles'
import Title from '../../components/UI/Title/Title'
import Social from '../../components/UI/Social/Social'
import { Form } from '../../components/Form/Form'



const Contact = () => {
  return (
    <ContactSectionStyled>
      <Title>Contactanos</Title>

      <ContactContainerStyled>

        <ContactLeftStyled>
            <p>Direccion: Av. Gral. Las Heras 1749, CABA</p>
            <p>Telefono: +11 23456789</p>
            <p>E-mail: info@groovevinilos.com</p> 

            <Social></Social>
        </ContactLeftStyled>
              
        <ContactLeftStyled>
            <p>Ante cualquier duda no dudes en consultarnos!</p>

            <Form/>            
        </ContactLeftStyled>

      </ContactContainerStyled>
    </ContactSectionStyled>
  )
}

export default Contact
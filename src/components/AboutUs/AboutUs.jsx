import React from 'react'
import { AboutUsBackgroundContainerStyled, AboutUsTextContainerStyled } from './AboutUsStyles'
import {Title} from "../UI/Title/Title"
import {Button} from '../UI/Button/Button'

export const AboutUs = () => {
  return (
    <AboutUsBackgroundContainerStyled>
        <Title>Nosotros</Title>

        <AboutUsTextContainerStyled>
            <div>
                <p>En Groove Vinilos, nos apasiona la música y creemos en el poder de los vinilos para brindar una experiencia auditiva excepcional. Nos enorgullece ofrecer una amplia selección de vinilos de alta calidad, que abarcan géneros musicales de todas las épocas y estilos.</p>
            </div>

            <div>
                <p>Agradecemos tu apoyo a nuestra tienda y esperamos que disfrutes explorando nuestra colección de vinilos. Nos apasiona compartir nuestra pasión por la música contigo y ayudarte a construir una colección que te emocione. ¡Gracias por ser parte de la comunidad de Groove Vinilos!</p>
            </div>

        </AboutUsTextContainerStyled>

        <Button color={false}>Ver más!</Button>
    </AboutUsBackgroundContainerStyled>
  )
}

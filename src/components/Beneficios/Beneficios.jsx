import React from 'react'
import { BeneficiosCardContainerStyled, BeneficiosContainerStyled } from './BeneficiosStyles'
import Title from '../UI/Title/Title'
import { BenefitCard } from '../UI/BenefitCard/BenefitCard'
import {BsTruck} from 'react-icons/bs'
import {LiaPiggyBankSolid} from 'react-icons/lia'
import {PiVinylRecordLight} from 'react-icons/pi'


export const Beneficios = () => {
  return (
    <BeneficiosContainerStyled>
        <Title>Beneficios</Title>

        <BeneficiosCardContainerStyled>
            <BenefitCard text="Envios a todo el pais"><BsTruck size={50} color='var(--secondary-color)'/></BenefitCard>

            <BenefitCard text="Mejores precios del mercado"><LiaPiggyBankSolid size={50} color='var(--secondary-color)'/></BenefitCard>

            <BenefitCard text="Amplia variedad de vinilos"><PiVinylRecordLight size={50} color='var(--secondary-color)'/></BenefitCard>
        </BeneficiosCardContainerStyled>
    </BeneficiosContainerStyled>
  )
}

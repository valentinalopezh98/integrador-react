import React from 'react'
import { BenefitCardContainer } from './BenefitCardStyles'

export const BenefitCard = ({children, text}) => {
  return (
    <BenefitCardContainer>
        <div>{children}</div>
        <p>{text}</p>
    </BenefitCardContainer>
  )
}

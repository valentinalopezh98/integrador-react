import React from 'react'
import { CategorieCardStyled } from './CategorieCardStyles'

export const CategorieCard = ({name}) => {
  return (
    <CategorieCardStyled>
        <h3>{name}</h3>
        <div></div>
    </CategorieCardStyled>
  )
}

export default CategorieCard
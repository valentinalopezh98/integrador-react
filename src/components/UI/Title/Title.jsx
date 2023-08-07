import React from 'react'
import { TitleStyled } from './TitleStyles'

export const Title = ({children}) => {
  return (
    <TitleStyled>{children}</TitleStyled>
  )
}

export default Title
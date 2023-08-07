import React from 'react'
import { StyledButton } from './ButtonStyled'

export const Button = ({
    children,
    color = true}) => {
  return (
    <StyledButton 
        whileTap={{scale: 0.98}}
        color={color}>
            {children}
    </StyledButton>
  )
}

export default Button
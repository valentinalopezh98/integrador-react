import React from 'react'
import { StyledButton } from './ButtonStyled'

export const Button = ({
    onClick,
    children,
    color = true,
    disabled}) => {
  return (
    <StyledButton 
        onClick={onClick}
        whileTap={{scale: 0.98}}
        color={color}
        disabled={disabled}
        >
            {children}
    </StyledButton>
  )
}

export default Button
import React from 'react'
import { LinksContainerStyled, MenuWrapperStyled } from './MenuStyles'
import { useContext } from 'react';
import { Contexto } from '../../context/context'
import { NavLink } from 'react-router-dom'

export const Menu = () => {

    const {contextState} = useContext(Contexto);

    return (
        <MenuWrapperStyled showmenu={contextState.showmenu}>
            <LinksContainerStyled>
            <ul>
                <li><NavLink to='/'>Inicio</NavLink></li>
                <li><NavLink to='nosotros'>Nosotros</NavLink></li>
                <li><NavLink to='productos'>Productos</NavLink></li>
                <li><NavLink to='contacto'>Contacto</NavLink></li>
            </ul>
            </LinksContainerStyled>
        </MenuWrapperStyled>
  )
}

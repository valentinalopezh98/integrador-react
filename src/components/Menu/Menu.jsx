import React from 'react'
import { LinksContainerStyled, MenuWrapperStyled } from './MenuStyles'
import { useContext } from 'react';
import { Contexto } from '../../context/context'

export const Menu = () => {

    const {contextState} = useContext(Contexto);

    return (
        <MenuWrapperStyled showmenu={contextState.showmenu}>
            <LinksContainerStyled>
            <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Nosotros</a></li>
                <li><a href="#">Productos</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
            </LinksContainerStyled>
        </MenuWrapperStyled>
  )
}

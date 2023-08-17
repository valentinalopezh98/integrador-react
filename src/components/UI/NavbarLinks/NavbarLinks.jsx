import React from 'react'
import {NavbarLinksStyled} from "./NavbarLinksStyled"
import { NavLink } from 'react-router-dom'

export const NavbarLinks = () => {
  return (
    <NavbarLinksStyled>

    <ul>
      <li><NavLink to='/'>Inicio</NavLink></li>
      <li><NavLink to='nosotros'>Nosotros</NavLink></li>
      <li><NavLink to='productos'>Productos</NavLink></li>
      <li><NavLink to='contacto'>Contacto</NavLink></li>
    </ul>

  </NavbarLinksStyled>
  )
}

export default NavbarLinks

import React from 'react'
import { FooterStyled } from './FooterStyled'
import logoblanco from "../../img/logo-blanco.png"
import Social from "../UI/Social/Social"
import NavbarLinks from "../UI/NavbarLinks/NavbarLinks"

const Footer = () => {
  return (
    <FooterStyled>
        <a href="#"><img src={logoblanco} alt="" /></a>
        <Social/>
        <NavbarLinks/>
        <p>Groove Vinilos ©</p>
    </FooterStyled>
  )
}

export default Footer
import React from 'react'
import { LinksContainerStyled, NavbarContainerStyled, LoginContainerStyled, MenuContainerStyled } from './NavbarStyles'
import {AiOutlineUser} from "react-icons/ai"
import {HiMenu} from 'react-icons/hi'
import {motion} from "framer-motion";
import logoblanco from "../../img/logo-blanco.png"
import NavbarLinks from "../UI/NavbarLinks/NavbarLinks"



const Navbar = () => {
  return (
    <NavbarContainerStyled>

      <div>
        <a href="#">
          <img src={logoblanco} alt="logo" />
        </a>
      </div>

      <LinksContainerStyled>
          
        <NavbarLinks/>

        <LoginContainerStyled>

          <a href="#">Ingresar</a>
          <AiOutlineUser/>
  
        </LoginContainerStyled>

        <motion.div whileTap={{scale: 0.95}}>

          <MenuContainerStyled>
            <HiMenu size={35}/>
          </MenuContainerStyled>

        </motion.div>

      </LinksContainerStyled>

    </NavbarContainerStyled> 
  )
}

export default Navbar
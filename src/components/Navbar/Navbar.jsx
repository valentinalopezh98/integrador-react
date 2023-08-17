import React from 'react'
import { LinksContainerStyled, NavbarContainerStyled, LoginContainerStyled, MenuContainerStyled, OverlayStyled } from './NavbarStyles'
import {AiOutlineUser} from "react-icons/ai"
import {HiMenu} from 'react-icons/hi'
import {motion} from "framer-motion";
import logoblanco from "../../img/logo-blanco.png"
import NavbarLinks from "../UI/NavbarLinks/NavbarLinks"
import { Menu } from '../Menu/Menu';
import {useContext} from 'react'
import { Contexto } from '../../context/context'
import { Link } from 'react-router-dom';


const Navbar = () => {

  const {contextState, toggleMenu} = useContext(Contexto);

  return (
    <NavbarContainerStyled>

      <div>
        <Link to='/'>
          <img src={logoblanco} alt="logo" />
        </Link>
      </div>

      <LinksContainerStyled>
          
        <NavbarLinks/>

        <LoginContainerStyled>

          <a href="#">Ingresar</a>
          <AiOutlineUser/>
  
        </LoginContainerStyled>

        <motion.div whileTap={{scale: 0.95}} onClick={toggleMenu}>

          <MenuContainerStyled>
            <HiMenu size={35}/>
          </MenuContainerStyled>

        </motion.div>

      </LinksContainerStyled>

      <Menu/>
      <OverlayStyled showmenu={contextState.showMenu} onClick={toggleMenu}/>
    </NavbarContainerStyled> 
  )
}

export default Navbar
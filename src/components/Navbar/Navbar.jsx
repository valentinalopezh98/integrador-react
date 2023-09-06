import React from 'react'
import { LinksContainerStyled, NavbarContainerStyled, LoginContainerStyled, MenuContainerStyled, OverlayStyled, CartIconContainer } from './NavbarStyles'
import {AiOutlineUser} from "react-icons/ai"
import {HiMenu} from 'react-icons/hi'
import {motion} from "framer-motion";
import {BsCart2} from 'react-icons/bs'
import logoblanco from "../../img/logo-blanco.png"
import NavbarLinks from "../UI/NavbarLinks/NavbarLinks"
import { Menu } from '../Menu/Menu';
import {useContext} from 'react'
import { Contexto } from '../../context/context'
import { Link } from 'react-router-dom';
import { Cart } from '../Cart/Cart';


const Navbar = () => {

  const {contextState, toggleMenu, toggleCart, toggleOverlay} = useContext(Contexto);

  return (
    <NavbarContainerStyled>

      <div>
        <Link to='/'>
          <img src={logoblanco} alt="logo" />
        </Link>
      </div>

      <LinksContainerStyled>
          
        <NavbarLinks/>

        <motion.div whileTap={{scale: 0.95}} onClick={toggleCart}>

          <CartIconContainer>
            <BsCart2 size={24}/>
          </CartIconContainer>

        </motion.div>

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

      <Cart/>
      <Menu/>
      <OverlayStyled showmenu={contextState.showMenu} onClick={toggleOverlay} showCart={contextState.showCart}/>
    </NavbarContainerStyled> 
  )
}

export default Navbar
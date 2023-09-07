import React from 'react'
import { LinksContainerStyled, NavbarContainerStyled, LoginContainerStyled, MenuContainerStyled, OverlayStyled, CartIconContainer, CartBubble } from './NavbarStyles'
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
import { useSelector } from 'react-redux';


const Navbar = () => {

  const totalItems = useSelector(state => state.cart.totalItems)

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
            <CartBubble>{totalItems}</CartBubble>
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
      <OverlayStyled showmenu={contextState.showmenu} onClick={toggleOverlay} showcart={contextState.showcart}/>
    </NavbarContainerStyled> 
  )
}

export default Navbar
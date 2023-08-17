import React, { useEffect } from 'react'
import { LayoutWrapper } from './LayoutStyles'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { useLocation } from 'react-router-dom'

const Layout = ({children}) => {

  const {pathname} = useLocation();

  useEffect(() => {
    window.scrollTo(0,0);
  },[pathname]);
  
  return (
    <>
    <Navbar/>
    <LayoutWrapper>
        {children}
    </LayoutWrapper>
    <Footer/>
    </>
  )
}

export default Layout
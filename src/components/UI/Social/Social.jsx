import React from 'react'
import {BsTwitter, BsInstagram} from "react-icons/bs"
import {FaFacebookF} from "react-icons/fa"
import { SocialStyled } from './SocialStyles'

export const Social = () => {
  return (
   <>
   <SocialStyled>
        <a href="#"><BsTwitter size={25}/></a>
        
        <a href="#"><FaFacebookF size={25}/></a>
        
        <a href="#"><BsInstagram size={25}/></a>
   </SocialStyled>
   </> 
  )
}

export default Social
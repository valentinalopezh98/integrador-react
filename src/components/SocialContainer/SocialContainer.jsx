import React from 'react'
import { SocialContainerStyled } from './SocialContainerStyles'
import {Social} from "../UI/Social/Social"

const SocialContainer = () => {
  return (
    <>
    <SocialContainerStyled>
      <Social/>
      <p>Groove Vinilos ®</p>
    </SocialContainerStyled>
    </>
  )
}

export default SocialContainer
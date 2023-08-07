import React from 'react'
import { HeroLeftStyled, HeroRightStyled, HeroWrapperStyled } from './HeroStyles'
import Button from "../UI/Button/Button"
import heroimg from "../../img/hero.png"

const Hero = () => {
  return (
    <>
    <HeroWrapperStyled>
        
        <HeroLeftStyled>
            <h1>La música en su forma <span>más pura!</span></h1>
            <p>Viví una experiencia auditiva excepcional.</p>
            <Button>
                Explorar
            </Button>
        </HeroLeftStyled>

        <HeroRightStyled>
            <img src={heroimg} alt="Hero image" />
        </HeroRightStyled>
        
    </HeroWrapperStyled>
    </>
  )
}

export default Hero
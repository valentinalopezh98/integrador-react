import React from 'react'
import { HeroLeftStyled, HeroRightStyled, HeroWrapperStyled } from './HeroStyles'
import Button from "../UI/Button/Button"
import heroimg from "../../img/hero.png"
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <>
    <HeroWrapperStyled>
        
        <HeroLeftStyled>
            <h1>La música en su forma <span>más pura!</span></h1>
            <p>Viví una experiencia auditiva excepcional.</p>
            <Link to='productos'>
                 <Button> Explorar </Button>
            </Link>
        </HeroLeftStyled>

        <HeroRightStyled>
            <img src={heroimg} alt="Hero image" />
        </HeroRightStyled>
        
    </HeroWrapperStyled>
    </>
  )
}

export default Hero
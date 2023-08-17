import React from 'react'
import { NotFoundContainerStyled } from './NotFoundStyles'
import vinilo from '../../img/vinilo11.png'
import { Link } from 'react-router-dom'
import Button from '../../components/UI/Button/Button'

export const NotFound = () => {
  return (
    <NotFoundContainerStyled>
        <img src={vinilo} alt=""/>
        <div className='centered'>
            <h2><span>Error 404</span><br/>página no encontrada</h2>
            <Link to='/'>
              <Button color={false}>Inicio</Button>
            </Link>
        </div>
    </NotFoundContainerStyled>
  )
}

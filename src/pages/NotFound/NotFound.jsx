import React from 'react'
import { NotFoundContainerStyled } from './NotFoundStyles'
import vinilo from '../../img/vinilo11.png'

export const NotFound = () => {
  return (
    <NotFoundContainerStyled>
        <img src={vinilo} alt=""/>
        <div className='centered'>
            <h2><span>Error 404</span><br/>página no encontrada</h2>
        </div>
    </NotFoundContainerStyled>
  )
}

import React from 'react'
import { ButtonDeleteStyled, CartTotal, CartWrapperStyled, DividerStyled } from './CartStyles'
import { useContext } from 'react';
import { Contexto } from '../../context/context'
import {Button} from '../UI/Button/Button'
import { CartItem } from './CartItem';

export const Cart = () => {

    const {contextState} = useContext(Contexto);

    return (
        <CartWrapperStyled showCart={contextState.showCart}>
                <h3>Tus discos</h3>

                <CartItem></CartItem>

                <DividerStyled/>

                <CartTotal>
                    <p>Total:</p>
                    <span>$5678</span>
                </CartTotal>

                <Button>Comprar</Button>

                <ButtonDeleteStyled>Vaciar carrito</ButtonDeleteStyled>
        </CartWrapperStyled>
  )
}

import React from 'react'
import { ButtonDeleteStyled, CartTotal, CartWrapperStyled, DividerStyled } from './CartStyles'
import { useContext } from 'react';
import { Contexto } from '../../context/context'
import {Button} from '../UI/Button/Button'
import { CartItem } from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, finalizarCompra } from '../../redux/cart/cartSlice';
import { Modal } from '../Modal/Modal';

export const Cart = () => {

    const dispatch = useDispatch();

    const {cartItems, shippingCost} = useSelector(state => state.cart)

    const {contextState} = useContext(Contexto);

    const totalPrice = cartItems.reduce((acc, item) => {
        return (acc += item.price * item.quantity)
    }, 0)

    return <>
        <CartWrapperStyled showcart={contextState.showcart}>
                <h3>Tus discos</h3>

                {
                    cartItems.length ? (
                        cartItems.map((item) => {
                            return <CartItem key={item.id} {...item}/>
                        })
                    ) : (
                        <p>El carrito está vacío</p>
                    )
                }

                <DividerStyled/>

                <CartTotal>
                    <p>Total:</p>
                    <span>${totalPrice}</span>
                </CartTotal>

                <Button
                    onClick={() => dispatch(finalizarCompra())}
                     disabled={cartItems.length === 0}
                >Comprar</Button>

                <ButtonDeleteStyled 
                    onClick={() => dispatch(clearCart())}
                    disabled={cartItems.length === 0}
                    >Vaciar carrito</ButtonDeleteStyled>
        </CartWrapperStyled>

        <Modal/>
    </>
}

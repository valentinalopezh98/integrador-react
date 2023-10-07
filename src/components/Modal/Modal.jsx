import React, { useEffect } from 'react'
import { ModalStyled } from './ModalStyled'
import { useDispatch, useSelector } from 'react-redux'
import { hideModal } from '../../redux/cart/cartSlice'

export const Modal = () => {

    const dispatch = useDispatch()

    const { show, message } = useSelector(state => state.cart.modal)

    useEffect(() => {

      if (show) {
        const timer = setTimeout(() => {
          dispatch(hideModal());
        }, 1500);
  
        return () => {
          clearTimeout(timer);
        };
      }
    }, [show, dispatch]);
    
    return (
    <ModalStyled show={show}>
        {message}
    </ModalStyled>
  )
}

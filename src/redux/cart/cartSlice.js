import { createSlice } from "@reduxjs/toolkit";
import { addItemToCart, removeItemFromCart, resetShippingCost } from "./cartUtils";
import { SHIPPING_COST } from '../../utils/constants'
const INITIAL_STATE = {
    cartItems: [],
    shippingCost: 0,
    totalItems: 0,
    modal: {
        show: false,
        message:''
    }
    //showCart: false
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: INITIAL_STATE,
    reducers: {
        addToCart: (state, action) => {
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload),
                shippingCost: SHIPPING_COST,
                totalItems: state.totalItems + 1,
                modal: {
                    show: true,
                    message: "Se ha agregado el producto al carrito",
                }
            }
        },
        removeFromCart: (state, action) => {
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload),
                shippingCost: resetShippingCost(state.cartItems, SHIPPING_COST),
                totalItems: state.totalItems - 1,
                modal: {
                    show: true,
                    message: "Se ha quitado el producto del carrito",
                }
            }
        },
        clearCart: (state) => {
            return {
                ...state,
                cartItems: [],
                shippingCost: 0,
                totalItems: 0,
                modal: {
                    show: true,
                    message: "Se ha vaciado el carrito",
                }
            }
        },
        toggleCart: (state) => {
            return {
                ...state,
                showCart: !showCart,
            }
        },
        finalizarCompra: (state, action) => {
            return {
                ...state,
                cartItems: [],
                shippingCost: 0,
                totalItems: 0,
                modal: {
                    show: true,
                    message: "Se ha finalizado la compra",
                }
            }    
        },
        hideModal: (state) => {
            return {
                ...state,
                modal: {
                    show: false,
                    message: ""
                }   
            }
        }
    }
})

export const {
    addToCart,
    clearCart,
    removeFromCart,
    toggleCart,
    finalizarCompra,
    hideModal
} = cartSlice.actions

export default cartSlice.reducer

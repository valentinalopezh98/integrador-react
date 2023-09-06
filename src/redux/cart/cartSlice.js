import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    cartItems: [],
    shippingCost: 0,
    showCart: false
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: INITIAL_STATE,
    reducers: {
        addToCart: (state, action) => {
            return {
                ...state,
                
            }
        }
    }
})
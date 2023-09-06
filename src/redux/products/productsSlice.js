import { createSlice } from "@reduxjs/toolkit";
import { productsData, totalProducts } from "../../data/products";

const INITIAL_STATE = {
    products: productsData,
    totalProducts : totalProducts
}
export const productsSlice = createSlice({
    name: "products",
    initialState: INITIAL_STATE,
    reducers: {
        getProducts: state => {
            return state;
        }
    }
})

export const {
    getProducts
} = productsSlice.actions;

export default productsSlice.reducer
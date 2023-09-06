import { createSlice } from "@reduxjs/toolkit";
import { featuredProductsData } from "../../data/featured";

const INITIAL_STATE = {
    featuredProducts: featuredProductsData,
}

export const featuredSlice = createSlice({
    name: "featured",
    initialState: INITIAL_STATE,
    reducers: {
        getFeaturedProducts: state => {
            return state;
        }
    }
})

export const {
    getFeaturedProducts
} = featuredSlice.actions;

export default featuredSlice.reducer
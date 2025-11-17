// for every feature there is a slice
// A slice is a collection of reducer logic and actions for a single feature in your app, typically defined in a single file.

import { createSlice , createSelector } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'Cart',
    initialState: [],
    reducers : {
        addItem: (state, action)=>{
            state.push(action.payload);
        },
    }
})

export const getItemsSelector = createSelector(
    (state) => state.cart,
    (state) => state
);

export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;
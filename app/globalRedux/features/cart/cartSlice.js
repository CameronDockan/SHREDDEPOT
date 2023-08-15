'use client'

import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cartItems: [],
    totalQuantity: 0,
    totalPrice: 0,
}

const cartSlice = createSlice({
    name: 'products',
    // initialState: initialState,
    initialState, // es6
    reducers: {
        addToCart: (state, action) => {
            // updating items
            const itemIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id
            );
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].quantity += 1;
                state.cartItems[itemIndex].calculatedPrice = state.cartItems[itemIndex].price * state.cartItems[itemIndex].quantity;
            } else {
                state.cartItems.push({...action.payload, calculatedPrice: action.payload.price})
            }

            //updating totalQuantity
            const qSum = state.cartItems.reduce(
                (accumulator, currentValue) => accumulator + currentValue.quantity,
                0,
              );
              state.totalQuantity = qSum
            //updating totalAmount
            const pSum = state.cartItems.reduce(
                (accumulator, currentValue) => accumulator + currentValue.calculatedPrice,
                0,
            )
            state.totalPrice = pSum
            
        },
        removeFromCart: (state, action) => {
            const itemIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id
            );
            if (itemIndex >= 0 && state.cartItems[itemIndex].quantity > 1) {
                state.cartItems[itemIndex].quantity -= 1;
                state.cartItems[itemIndex].calculatedPrice = state.cartItems[itemIndex].price * state.cartItems[itemIndex].quantity;
            } else {
                state.cartItems.splice(itemIndex, 1);
            }

            //updating totalQuantity
            const qSum = state.cartItems.reduce(
                (accumulator, currentValue) => accumulator + currentValue.quantity,
                0,
                );
                state.totalQuantity = qSum
            //updating totalAmount
            const pSum = state.cartItems.reduce(
                (accumulator, currentValue) => accumulator + currentValue.calculatedPrice,
                0,
            )
            state.totalPrice = pSum

        },
        completeRemoval: (state, action) => {
            const itemIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id
            );
            state.cartItems.splice(itemIndex, 1);

            //updating totalQuantity
            const qSum = state.cartItems.reduce(
                (accumulator, currentValue) => accumulator + currentValue.quantity,
                0,
                );
                state.totalQuantity = qSum
            //updating totalAmount
            const pSum = state.cartItems.reduce(
                (accumulator, currentValue) => accumulator + currentValue.calculatedPrice,
                0,
            )
            state.totalPrice = pSum
        },
    },
})

export default cartSlice.reducer
export const { addToCart, removeFromCart, completeRemoval } = cartSlice.actions
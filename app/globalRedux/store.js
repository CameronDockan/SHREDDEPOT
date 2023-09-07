'use client'

import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "./features/cart/cartSlice"

import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import thunk from "redux-thunk"

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, cartReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
})

export const persistor = persistStore(store)










// export const store = configureStore({
//     reducer: {
//         cart: cartReducer,
//     }
// })

/*
In the modification to the store above, 
we also included the Thunk middleware, 
which will intercept and stop non-serializable values in action before they get to the reducer. 
When using Redux Persist without using the Thunk middleware, 
we‘d get an error in the browser’s console reading a non-serializable value was detected in the state.
*/
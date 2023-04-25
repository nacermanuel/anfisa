import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit/dist/createAction";
import { modelItemCarrito } from "@/models/modelItemCarrito";

interface GlobalState{
    cart: modelItemCarrito[]
}

const initialState: GlobalState = {
    cart: [],
}

const appSlice = createSlice({
    name: 'AppSlice',
    initialState,
    reducers: {
        addToCart: (state, action : PayloadAction<modelItemCarrito>) => {
            state.cart = [...state.cart, action.payload]
        },
        removeItem: (state, action:PayloadAction<modelItemCarrito> ) => {
            state.cart = [ ...state.cart.filter( e => e.id !== action.payload.id) ]
        }

        // FALTA AGREGAR LAS ACCIONES PARA ACTUALIZAR EL CARRITO
    }
})

export const { addToCart, removeItem } = appSlice.actions ;
export default appSlice.reducer ;

import { configureStore } from '@reduxjs/toolkit' ;
import appSliceReducer from './reduxSlice' ;

export const store = configureStore({
    reducer:{
        AppSlice: appSliceReducer,
    },
    devTools: true,
});

export type RootState = ReturnType<typeof store.getState> ;
export type AppDispatch = typeof store.dispatch ;
import { loginSlice } from '@/slices/LoginSlice';
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
    reducer:{
        login: loginSlice.reducer
    }
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
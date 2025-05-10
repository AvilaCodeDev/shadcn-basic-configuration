import LoginReducer, { loginStore } from '@/slices/LoginSlice';
import { combineReducers, configureStore } from '@reduxjs/toolkit'



export const AppReducer = combineReducers({
    login: LoginReducer
})


export const store = configureStore({
    reducer: AppReducer,
    // devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
                serializableCheck: false
            }),
});

export const useLoginStore = () => loginStore();
import { createSlice } from "@reduxjs/toolkit";

interface LoginState {
    isLogged: boolean,
}

const initialState: LoginState= {
    isLogged: false
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers:{
        login: ( state ) =>{
            state.isLogged = true;
        }
    }
})
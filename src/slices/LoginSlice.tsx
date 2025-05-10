import VerificaIngreso from "@/functions/verificaIngreso";
import { loginTypes } from "@/interfaces/interfaces";
import { createSlice } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

interface LoginState {
    isLogged: boolean,
    loginError: String|null,
}

const initialState: LoginState= {
    isLogged: false,
    loginError: null
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers:{
        setLogin: ( state, action ) =>{
            state.isLogged = action.payload;
        },
        setLoginError: ( state, action) => {
            state.loginError = action.payload
        }
    }
})

const {
    setLogin,
    setLoginError
} = loginSlice.actions;

const startLogin = ( data: loginTypes ) => {
    return async( dispatch ) => {
        dispatch( setLoginError('') );
       const ingresa = await VerificaIngreso({ data});
        if( ingresa.acceso ){
            setLogin(ingresa.acceso);
        }else{
            // dispatch( setLoginError(body.msg) );
        }
    }
}

export function loginStore(){
    const dispatch = useDispatch();
    const isLogged = useSelector( state => state.login.isLogged );
    return {
        isLogged,
        setLogin: ( data :loginTypes) => dispatch( startLogin(data) )
    };
}

export default loginSlice.reducer;
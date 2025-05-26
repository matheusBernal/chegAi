import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    login:false,
    register:false,
    recoveringPassword:false,
    path:''
}

export const introductionSlice = createSlice({
    name:'introduction',
    initialState,
    reducers:{
        openLogin: (state) => {
            state.login = !state.login;//Aqui eu quero mudar o valor do login de false para true e vice-versa
        },
        openRegister: (state) => {
            state.register = !state.register;//Aqui eu quero mudar o valor de register de false para true e vice-versa
        },
        openRecoveringPassword:(state) => {
            state.recoveringPassword = !state.recoveringPassword
        },
        setPath:(state,action)=> {
            state.path = action.payload;
        }
    }
})

export const {openLogin,openRegister,openRecoveringPassword} = introductionSlice.actions;

export default introductionSlice.reducer
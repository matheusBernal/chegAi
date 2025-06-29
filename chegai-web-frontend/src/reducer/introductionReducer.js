import { createSlice } from "@reduxjs/toolkit";

// 🔁 Recupera do localStorage se existir (senão usa valores padrão)
const persistedState = JSON.parse(localStorage.getItem("introState"));

const initialState = persistedState || {
    login: false,
    register: false,
    recoveringPassword: false,
};

export const introductionSlice = createSlice({
    name: 'introduction',
    initialState,
    reducers: {
        openLogin: (state) => {
            state.login = true;
            state.register = false;
            state.recoveringPassword = false;
        },
        closeLogin: (state) => {
            state.login = false;
        },
        openRegister: (state) => {
            state.register = true;
            state.login = false;
            state.recoveringPassword = false;
        },
        closeRegister: (state) => {
            state.register = false;
        },
        openRecoveringPassword: (state) => {
            state.recoveringPassword = true;
            state.login = false;
            state.register = false;
        },
        closeRecoveringPassword: (state) => {
            state.recoveringPassword = false;
        }
    }
});

// 🔐 Salva automaticamente no localStorage sempre que muda
const saveToLocalStorage = (storeAPI) => (next) => (action) => {
    const result = next(action);
    const stateToPersist = storeAPI.getState().introduction;
    localStorage.setItem("introState", JSON.stringify(stateToPersist));
    return result;
};

export const {
    openLogin, closeLogin,
    openRegister, closeRegister,
    openRecoveringPassword, closeRecoveringPassword
} = introductionSlice.actions;

export const introductionReducer = introductionSlice.reducer;
export const introductionMiddleware = saveToLocalStorage;

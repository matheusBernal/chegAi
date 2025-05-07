import {configureStore} from '@reduxjs/toolkit'
import introductionReducer from './reducer/introductionReducer'

export const store = configureStore({
    reducer:{
        introduction:introductionReducer
    }
})
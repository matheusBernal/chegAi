import {configureStore} from '@reduxjs/toolkit'
import introductionReducer from './reducer/introductionReducer'
import homepageReducer from './reducer/homepageReducer'

export const store = configureStore({
    reducer:{
        introduction:introductionReducer,
        homepage: homepageReducer
    }
})
import {configureStore} from '@reduxjs/toolkit'
import introductionReducer from './reducer/introductionReducer'
import homelayoutReducer from './reducer/homelayoutReducer'

export const store = configureStore({
    reducer:{
        introduction:introductionReducer,
        homelayout: homelayoutReducer
    }
})
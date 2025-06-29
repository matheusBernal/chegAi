import { configureStore } from '@reduxjs/toolkit';
import { introductionReducer, introductionMiddleware } from './reducer/introductionReducer';
import homelayoutReducer from './reducer/homelayoutReducer';
import homepageReducer from './reducer/homepageReducer';

export const store = configureStore({
    reducer: {
        introduction: introductionReducer,
        homelayout: homelayoutReducer,
        homepage: homepageReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(introductionMiddleware)
});

import { configureStore } from '@reduxjs/toolkit';
import translateReducer from './features/translate/translateSlice';

export const store = configureStore({
    reducer:{
        translate: translateReducer,
    }
})
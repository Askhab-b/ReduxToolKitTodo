import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/counterReducer';


export const store = configureStore({
    reducer: todoReducer
});
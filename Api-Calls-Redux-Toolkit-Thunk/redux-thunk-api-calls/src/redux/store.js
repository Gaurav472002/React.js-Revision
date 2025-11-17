import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './slice/todo.js';

const store = configureStore({
    reducer: {
        todo: todoReducer // we can name this anything
    }
});

export default store;
 
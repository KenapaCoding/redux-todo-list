/** @format */

import { configureStore } from '@reduxjs/toolkit';
import { todosReducer } from './slices/todoSlice';


const store = configureStore({
	reducer: {
		todos: todosReducer,
	},
});

export { store };

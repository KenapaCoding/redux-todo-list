import { createSlice } from '@reduxjs/toolkit';
import { fetchTodos } from './thunks/fetchTodos';
import { addTodo } from './thunks/addTodo';
import { removeTodo } from './thunks/removeTodo';
import { editTodo } from './thunks/editTodo';

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    isLoading: false,
    data: [],
    error: null,
  },
  extraReducers(builder) {
    builder.addCase(fetchTodos.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchTodos.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });

    builder.addCase(addTodo.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(addTodo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data.push(action.payload);
    });
    builder.addCase(addTodo.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
    builder.addCase(editTodo.fulfilled, (state,action) => {
      state.data = state.data.map(todo => {
        if (todo.id === action.payload.id) {
          return {...todo, ...action.payload}
        }
        return todo
      })
    })

    builder.addCase(removeTodo.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(removeTodo.fulfilled, (state, action) => {
      state.isLoading = false;
      console.log(action.payload)
      state.data = state.data.filter((todo) => {
        return todo.id !== action.payload;
      });
    });
    builder.addCase(removeTodo.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export const todosReducer = todosSlice.reducer;

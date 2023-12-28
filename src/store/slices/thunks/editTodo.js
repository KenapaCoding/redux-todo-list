import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const editTodo = createAsyncThunk('todos/edit', async (todo) => {
  console.log(todo)
  const response = await axios.put(`http://127.0.0.1:3005/todos/${todo.id}`, todo);

  return response.data;
});

export { editTodo };

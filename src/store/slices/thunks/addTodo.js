import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const addTodo = createAsyncThunk('users/add', async (todo) => {
  const response = await axios.post('http://127.0.0.1:3005/todos', todo);

  return response.data;
});

export { addTodo };

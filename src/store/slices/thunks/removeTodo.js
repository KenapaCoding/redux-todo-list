import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const removeTodo = createAsyncThunk('todos/remove', async (id) => {
  console.log(id)
  await axios.delete(`http://127.0.0.1:3005/todos/${id}`);

  return id;
});

export { removeTodo };

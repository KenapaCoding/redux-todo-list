import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchTodos = createAsyncThunk('todos/fetch', async () => {
  const response = await axios.get('http://127.0.0.1:3005/todos');

  // DEV ONLY!!!
  await pause(1000);

  return response.data;
});

// DEV ONLY!!!
const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

export { fetchTodos };

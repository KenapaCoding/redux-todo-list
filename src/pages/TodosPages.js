/** @format */

import React, { useState } from 'react';
import TodoHeader from '../components/TodoHeader';
import TodoList from '../components/TodoList';
import { useEffect } from 'react';
import { fetchTodosApi, createTodoApi,editTodoApi,deleteTodoApi } from '../api/todos';

const TodosPages = () => {
	const [todos, setTodos] = useState([]);
	const fetchTodos = async () => {
		const response = await fetchTodosApi();
		setTodos(response.data);
	};
	const editTodoById = async (data) => {
		const editedTodo = {...data, completed: !data.completed }
		const response = await editTodoApi(data.id,editedTodo)
		const updatedTodos = todos.map((todo) => {
		  if (todo.id === data.id) {
			return { ...todo, ...response.data };
		  }
	
		  return todo;
		});
		setTodos(updatedTodos);
	  };
	  const onCreateTodos = async (text) => {
		const todo = {text: text, completed : false}
		const response = await createTodoApi(todo)
		setTodos([
		  ...todos,
		  response.data
		]);
	  };
	  const onDeleteTodos = async (id) => {
		await deleteTodoApi(id)
		const updatedTodos = todos.filter((todo) => {
		  return todo.id !== id;
		});
		setTodos(updatedTodos);
	  };
	useEffect(() => {
		fetchTodos();
	}, []);
	return (
		<div>
			<TodoHeader addTodo={onCreateTodos} />
			<TodoList todos={todos} editTodo={editTodoById} deleteTodo={onDeleteTodos} />
		</div>
	);
};

export default TodosPages;

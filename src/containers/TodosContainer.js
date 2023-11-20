/** @format */

import React, { useState } from 'react';
import TodoTextInput from '../components/TodoTextInput';
import TodoList from '../components/TodoList';

const TodosContainer = () => {
	const [todos, setTodos] = useState([]);
	const onCreate = (todo) => {
		setTodos([
			...todos,
			{
				id: Math.round(Math.random() * 1998),
				text: todo,
				completed: false,
			},
		]);
	};
	const handleComplete = (id) => {
		const updatedTodos = todos.map((todo) => {
			if (todo.id === id) {
				return { ...todo, completed: !todo.completed };
			}

			return todo;
		});
		setTodos(updatedTodos);
	};
	const deleteTodo = (id) => {
		const updatedTodos = todos.filter((prod) => {
			return prod.id !== id;
		});
		setTodos(updatedTodos);
	};
	return (
		<div>
			<TodoTextInput onCreate={onCreate} />
			<TodoList
				handleComplete={handleComplete}
				todos={todos}
				deleteTodo={deleteTodo}
			/>
		</div>
	);
};

export default TodosContainer;

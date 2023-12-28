/** @format */

import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/slices/thunks/addTodo';

const TodoHeader = () => {
	const dispatch = useDispatch()
	const [todoInput, setTodoInput] = useState('');
	const handleChange = (e) => {
		setTodoInput(e.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		const todo = {text: todoInput, completed : false}
		dispatch(addTodo(todo))
		setTodoInput('')
	};
	return (
		<>
			<header>
				<h1>To Do List</h1>
				<form onSubmit={handleSubmit}>
					<input
						type='text'
						placeholder='Add Todo'
						value={todoInput}
						onChange={handleChange}
					/>
					<input
					type='submit'
					value='Submit'
					class='addBtn'
					id='add_button'/>
				
				</form>
				
			</header>
		</>
	);
};

export default TodoHeader;

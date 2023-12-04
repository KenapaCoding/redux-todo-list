/** @format */

import React from 'react';
import { useState } from 'react';

const TodoHeader = ({ addTodo }) => {
	const [todoInput, setTodoInput] = useState('');
	const handleChange = (e) => {
		setTodoInput(e.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		addTodo(todoInput);
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
						// autoFocus={true}
						// value={this.state.text}
						// onBlur={this.handleBlur}
						// onChange={this.handleChange}
						// onKeyDown={this.handleSubmit}
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

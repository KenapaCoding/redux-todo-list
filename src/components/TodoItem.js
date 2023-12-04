/** @format */

import React from 'react';
import { GrClose } from "react-icons/gr";

const TodoItem = ({ todo, editTodo, deleteTodo }) => {
	const handleClick = () => {
		editTodo(todo);
	};
	return (
		<li className= {`todo-item ${todo.completed ? 'checked' : ''}`}  >
			<div
				onClick={handleClick}
				className='todo-text'
				>
				{todo.text}
			</div>
			<div className='todo-delete' onClick={() => deleteTodo(todo.id)}><GrClose/></div>
		</li>
	);
};

export default TodoItem;

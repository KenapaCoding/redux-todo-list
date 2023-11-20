/** @format */

import React from 'react';

const TodoItem = ({ todo, handleComplete, deleteTodo }) => {
	const handleClick = () => {
		handleComplete(todo.id);
	};
	return (
		<li className= {`todo-item ${todo.completed ? 'checked' : ''}`}  >
			<div
				onClick={handleClick}
				>
				{todo.text}
			</div>
			<div onClick={() => deleteTodo(todo.id)}>close</div>
		</li>
	);
};

export default TodoItem;

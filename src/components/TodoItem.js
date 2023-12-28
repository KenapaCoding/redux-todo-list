/** @format */

import React from 'react';
import { GrClose } from "react-icons/gr";
import { editTodo } from '../store/slices/thunks/editTodo';
import { removeTodo } from '../store/slices/thunks/removeTodo';
import { useDispatch } from 'react-redux';

const TodoItem = ({ todo }) => {
	const dispatch = useDispatch()
	const handleClick = () => {
		const editedTodo = {...todo, completed: !todo.completed }
		console.log(editedTodo)
		dispatch(editTodo(editedTodo));
	};
	return (
		<li className= {`todo-item ${todo.completed ? 'checked' : ''}`}  >
			<div
				onClick={handleClick}
				className='todo-text'
				>
				{todo.text}
			</div>
			<div className='todo-delete' onClick={() => dispatch(removeTodo(todo.id))}><GrClose/></div>
		</li>
	);
};

export default TodoItem;

/** @format */

import React, { useEffect } from 'react';
// import TodoItem from './TodoItem';
import TodoItem from '../containers/TodoItem';

const TodoList = ({ todos, getTodos }) => {
	useEffect(() => {
		getTodos()
	}, [])
	return (
		<ul className='todo-list'>
			{todos.map((todo) => {
				return <TodoItem  key={todo.id} todo={todo}/>;
			})}
		</ul>
	);
};

export default TodoList;

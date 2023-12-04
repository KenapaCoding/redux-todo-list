/** @format */

import React, { useEffect } from 'react';
import TodoItem from '../components/TodoItem';

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

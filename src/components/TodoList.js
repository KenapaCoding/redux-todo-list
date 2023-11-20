/** @format */

import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, handleComplete, deleteTodo }) => {
	return (
		<ul className='todo-list'>
			{todos.map((todo) => {
				return <TodoItem  key={todo.id} todo={todo} handleComplete={handleComplete} deleteTodo={deleteTodo}/>;
			})}
		</ul>
	);
};

export default TodoList;

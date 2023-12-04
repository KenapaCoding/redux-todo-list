/** @format */

import React from 'react';
import TodoItem from '../components/TodoItem';

const TodoList = ({ todos, editTodo, deleteTodo}) => {
	return (
		<ul className='todo-list'>
			{todos.map((todo) => {
				return <TodoItem  key={todo.id} todo={todo} editTodo={editTodo} deleteTodo={deleteTodo}/>;
			})}
		</ul>
	);
};

export default TodoList;

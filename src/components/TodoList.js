/** @format */

import React, { useEffect } from 'react';
import TodoItem from '../components/TodoItem';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from '../store/slices/thunks/fetchTodos';

const TodoList = () => {
	const dispatch = useDispatch()
	const todos = useSelector((state) => {
		return state.todos.data
	})
	useEffect(()=> {
		dispatch(fetchTodos())
	}, [])
	return (
		<ul className='todo-list'>
			{todos.map((todo) => {
				return <TodoItem  key={todo.id} todo={todo} />;
			})}
		</ul>
	);
};

export default TodoList;

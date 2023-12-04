import React, { useState } from "react";
import TodoHeader from '../containers/TodoHeader';
import TodoList from '../containers/TodoList';

const TodosPages = () => {
	return (
		<div>
			<TodoHeader />
			<TodoList/>
		</div>
	);
};

export default TodosPages;

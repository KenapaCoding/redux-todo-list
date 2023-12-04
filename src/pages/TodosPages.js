import React, { useState } from "react";
import TodoHeader from '../components/TodoHeader';
import TodoList from '../components/TodoList';
import { useEffect } from "react";

const TodosPages = () => {
	return (
		<div>
			<TodoHeader />
			<TodoList/>
		</div>
	);
};

export default TodosPages;

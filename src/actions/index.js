import * as types from '../constants/ActionTypes'
import { createTodoApi, editTodoApi, fetchTodosApi, deleteTodoApi } from '../api/todos'

export const addTodo = text => async (dispatch) => {
    try {
        const todo = {text: text, completed : false}
        const res = await createTodoApi(todo)
        dispatch({
            type: types.ADD_TODO, payload: res.data
        })
    } catch (error) {
        console.log(error)
    }
}
export const deleteTodo = id => async (dispatch) => {
    try {
        await deleteTodoApi(id)
        dispatch({ type: types.DELETE_TODO, id })
    }
    catch (error) {
        console.log(error)
    }
}
export const editTodo = (todo) => async(dispatch) => {
    try {
        const editedTodo = {...todo, completed: !todo.completed }
        const res = await editTodoApi(todo.id, editedTodo) 
        dispatch({ type: types.EDIT_TODO, payload: res.data })
    } catch (error) {
        
    }
}
export const getTodos = () => async(dispacth) => {
    try {
        const res = await fetchTodosApi()
        dispacth({type: types.GET_TODOS, payload: res.data})
    } catch (error) {
        console.log(error)
    }
}

import axios from "axios";

export const fetchTodosApi = async() => {
    const response = await axios.get('http://127.0.0.1:3005/todos')
    return response
}
export const createTodoApi = async(Todo) => {
    const response = await axios.post('http://127.0.0.1:3005/todos', Todo)
    return response
}
export const editTodoApi = async(id,data) => {
    const response = await axios.put(`http://127.0.0.1:3005/todos/${id}`, data)
    return response
}
export const deleteTodoApi = async(id) => {
    await axios.delete(`http://127.0.0.1:3005/todos/${id}`)
}
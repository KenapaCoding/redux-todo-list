import {connect} from 'react-redux'
import TodoItem from '../components/TodoItem'
import { deleteTodo, editTodo } from '../actions'

export default connect(null, {editTodo, deleteTodo}) (TodoItem)
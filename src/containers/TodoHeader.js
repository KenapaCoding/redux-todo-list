import {connect} from 'react-redux'
import TodoHeader from '../components/TodoHeader'
import { addTodo } from '../actions'

export default connect(null,{addTodo})(TodoHeader)
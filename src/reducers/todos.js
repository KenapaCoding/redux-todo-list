import {
    ADD_TODO,
    DELETE_TODO,
    EDIT_TODO,
    COMPLETE_TODO,
    COMPLETE_ALL_TODOS,
    CLEAR_COMPLETED,
    GET_TODOS
  } from '../constants/ActionTypes'
  
  const initialState = []
  
  export default function todos(state = initialState, action) {
    const {type, payload} = action
    switch (type) {
      case GET_TODOS:
        return payload
      case ADD_TODO:
        return [
          ...state,
          payload
        ]
  
      case DELETE_TODO:
        return state.filter(todo =>
          todo.id !== action.id
        )
  
      case EDIT_TODO:
        return state.map(todo =>
          todo.id === payload.id ?
          { ...todo, ...payload } :
            todo
        )
  
      case COMPLETE_TODO:
        return state.map(todo =>
          todo.id === action.id ?
            { ...todo, completed: !todo.completed } :
            todo
        )
  
      case COMPLETE_ALL_TODOS:
        const areAllMarked = state.every(todo => todo.completed)
        return state.map(todo => ({
          ...todo,
          completed: !areAllMarked
        }))
  
      case CLEAR_COMPLETED:
        return state.filter(todo => todo.completed === false)
  
      default:
        return state
    }
  }
  
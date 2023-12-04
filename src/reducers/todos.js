import {
    ADD_TODO,
    DELETE_TODO,
    EDIT_TODO,
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
      default:
        return state
    }
  }
  
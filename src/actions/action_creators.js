import { ADD_TODO, DELETE_TODO } from './action_constants';

export const addTodo = (payload) => ({
    type: ADD_TODO, 
    payload
})

export const deleteToDo = (payload) => ({
    type: DELETE_TODO,
    payload
})
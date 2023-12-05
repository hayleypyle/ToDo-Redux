import { ADD_TODO, DELETE_TODO,TOGGLE_TODO } from './action_constants';

export const addTodo = (payload) => ({
    type: ADD_TODO, 
    payload:{
        ...payload,
        completed: false,
    }
})

export const deleteTodo = (payload) => ({
    type: DELETE_TODO,
    payload,
})

export const toggleTodo =(payload) => ({
    type: TOGGLE_TODO,
    payload,
})
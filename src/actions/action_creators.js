import { ADD_TODO, DELETE_TODO,TOGGLE_TODO, ALL_TODO,COMPLETE_TODO,INCOMPLETE_TODO } from './action_constants';

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

export const showAllTodos = (payload) => ({
    type: ALL_TODO,
    payload})

export const showCompleteTodos = (payload) => ({
    type: COMPLETE_TODO,
    payload})

export const showIncompleteTodos = (payload) => ({
    type: INCOMPLETE_TODO,
    payload})
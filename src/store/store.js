import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../reducers/todoReducer';


const initialState = {
    todos: [],
    nextTodoId: 1
    }

const rootReducer = (state = initialState, action) =>
    todoReducer(state, action);

const store = configureStore({reducer: rootReducer});

export default store;

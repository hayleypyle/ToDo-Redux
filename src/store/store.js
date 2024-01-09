import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../reducers/todoReducer';

const initialState = {
todos: [
    { todoName: 'Go to store', completed: false, id: 1 },
    { todoName: 'Fold Laundry', completed: false, id: 2 },
    { todoName: 'Do Homework', completed: false, id: 3 }
],
    nextTodoId: 4
};

const store = configureStore({
reducer: {
    todos: todoReducer
},
preloadedState: initialState.todos
});

export default store;
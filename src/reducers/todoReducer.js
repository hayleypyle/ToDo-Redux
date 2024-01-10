import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, ALL_TODO, COMPLETE_TODO, INCOMPLETE_TODO } from "../actions/action_constants";
const initialState = {
    todos: [
        { todoName: 'Go to store', completed: false, id: 1 },
        { todoName: 'Fold Laundry', completed: false, id: 2 },
        { todoName: 'Do Homework', completed: false, id: 3 }
    ],
    nextTodoId: 4
};
export default function todoReducer(state = initialState, action){

    
    if (action.type === ADD_TODO){
        const newTodo =[
        ...state.todos,
        {...action.payload, id:state.nextTodoId}
        ];
        return{
        todos: newTodo,
        nextTodoId: state.nextTodoId + 1,
        }
    } 
    else if (action.type === DELETE_TODO){

        const newTodo = state.todos.filter(todo =>
        todo.id != action.payload.id);
        return{
            todos: newTodo,
            nextTodoId: state.nextTodoId
        }

    } else if (action.type === TOGGLE_TODO){

        const updatedTodos = state.todos.map((todo) =>
    todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo
    );
    return {
        ...state,
    todos: updatedTodos,
    };
    } 
    else if (action.type === COMPLETE_TODO) {
        const completedTodos = state.todos.filter((todo) => todo.completed);
        return {
            ...state,
            filteredTodos: completedTodos
        };
    } else if (action.type === INCOMPLETE_TODO) {
        const incompleteTodos = state.todos.filter((todo) => !todo.completed);
        return {
            ...state,
            filteredTodos: incompleteTodos
        };
    } else if (action.type === ALL_TODO) {
        return {
            ...state,
            filteredTodos: state.todos
        };
    }
    return state;}

import { ADD_TODO, DELETE_TODO } from "../actions/action_constants";

export default function todoReducer(state, action){

    
    if (action.type === ADD_TODO){
        const newTodo =[
        ...state.todos,
        {...action.payload, id:state.nextTodoId}
        ];
        return{
        todos: newTodo,
        nextTodoId: state.nextTodoId + 1,
        }
    } else if (action.type === DELETE_TODO){
        console.log(state.todos)
        const newTodo = state.todos.filter(todo =>
        todo.id != action.payload.id);
        console.log(newTodo);
        return{
            todos: newTodo,
            nextTodoId: state.nextTodoId
        }
    }

    return state;}
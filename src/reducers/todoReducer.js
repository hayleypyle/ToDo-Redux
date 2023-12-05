import { ADD_TODO, DELETE_TODO } from "../actions/action_constants";

export default function todoReducer(state, action){
    if (action.type === ADD_TODO){
        const newTodo =[
        ...state.todo,
        {...action.payload, id:state.nextTodoId}
        ];
        return{
        todo: newTodo,
        nextTodoId: state.nextTodoId + 1,
        }
    } else if (action.type === DELETE_TODO){
        const newTodo = state.todo.filter(todo =>
            todo.id != action.payload.id);
        return{
            todo: newTodo,
            nextTodoId: state.nextTodoId
        }
    }

    return state;}
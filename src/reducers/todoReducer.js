import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from "../actions/action_constants";
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

        const newTodo = state.todos.filter(todo =>
        todo.id != action.payload.id);
        return{
            todos: newTodo,
            nextTodoId: state.nextTodoId
        }
    } else if (action.type === TOGGLE_TODO){
        const filteredTodos = state.todos.map((todo)=> 
        todo.id === action.payload.id
        ?{...todo, completed: !todo.completed}
        :todo
        )
        return{
            ...state,
            todos:filteredTodos,
        }
    }

    return state;}


import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, ALL_TODO, COMPLETE_TODO, INCOMPLETE_TODO } from "../actions/action_constants";
export default function todoReducer(state = [], action){

    
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
    console.log(state.todos);
    console.log(action)
        const toggleTodo = state.todos.filter((todo) => 
        todo.id == action.payload.id ? {...todo, completed: !todo.completed}: todo
        )
        console.log(toggleTodo);
        return toggleTodo;
      } 
      else if (action.type === ALL_TODO){

    } 
    else if (action.type === COMPLETE_TODO){

    } 
    else if (action.type === INCOMPLETE_TODO){

    }

    return state;}
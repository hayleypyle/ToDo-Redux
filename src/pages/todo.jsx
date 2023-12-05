import React, {useRef} from 'react'
import { addTodo, deleteTodo } from '../actions/action_creators'
import { useDispatch } from 'react-redux'

export default function ToDo() {
    const userInput = useRef(null);
    const dispatch = useDispatch();
    
    const handleSubmit = (event) =>{
        dispatch(addTodo({
            todoName: userInput.current.value
        }));
        userInput.current.value ="";
    }
    return (
        <div>
            <h1>To Do List</h1>
            <h3>Add to your list:</h3>
            <input type="text"
            name="todoName"
            ref={userInput}
            required>
            </input>
            <button type="button">Add</button>
        </div>
)
}

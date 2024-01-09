import React, { useRef, useState, useEffect } from 'react';
import { addTodo } from '../actions/action_creators';
import { deleteTodo } from '../actions/action_creators';
import { toggleTodo } from '../actions/action_creators';
import { showAllTodos } from '../actions/action_creators';
import { showCompleteTodos } from '../actions/action_creators';
import { showIncompleteTodos } from '../actions/action_creators';
import { useDispatch, useSelector } from 'react-redux';

export default function ToDo(props) {
const userInput = useRef(null);
const [checkboxes, setCheckboxes] = useState({});

const todos = useSelector((state) => state.todos.filteredTodos || state.todos.todos);
const dispatch = useDispatch();

useEffect(() => {
    // Update local state when todos change
    const updatedCheckboxes = todos.reduce((acc, todo) => {
        acc[todo.id] = todo.completed;
        return acc;
    }, {});
    setCheckboxes(updatedCheckboxes);
}, [todos]);

const handleAdd = () => {
    dispatch(addTodo({
        todoName: userInput.current.value,
    }));
    userInput.current.value = '';
};

const handleDelete = (event) => {
    dispatch(deleteTodo({ id: event.currentTarget.dataset.id }));
};

const handleToggle = (event) => {
    const todoId = parseInt(event.currentTarget.dataset.id, 10);
    setCheckboxes((prevCheckboxes) => ({
        ...prevCheckboxes,
        [todoId]: !prevCheckboxes[todoId],
    }));
    dispatch(toggleTodo({ id: todoId }));
};

const showAll = (event) => {
    dispatch(showAllTodos({}));
};

const showComplete = (event) => {
    dispatch(showCompleteTodos({}));
};

const showIncomplete = (event) => {
    dispatch(showIncompleteTodos({}));
};

const todoList = todos.map((todo) => (
    <div key={todo.id}>
        <input
        type="checkbox"
        onChange={handleToggle}
        data-id={todo.id}
        checked={checkboxes[todo.id] || false}
        />
    {todo.todoName}
        <button onClick={handleDelete} data-id={todo.id}>
        Delete
        </button>
    </div>
));

return (
    <>
    <div>
        <h1>To Do List</h1>
        <h3>Add to your list:</h3>
        <input type="text" name="todoName" ref={userInput} required />
        <button type="button" onClick={handleAdd}>
            Add
        </button>
    </div>

    <div>{todoList}</div>

    <div>
        <button onClick={showComplete}>Completed</button>
        <button onClick={showIncomplete}>Incomplete</button>
        <button onClick={showAll}>View All</button>
    </div>
    </>
);
}
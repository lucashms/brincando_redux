import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from '../../actions/actions';

function Todos() {
    const dispatch = useDispatch();

    const todos = useSelector(state => state.todosReducer.todos);
    const [todoText, setTodoText] = useState('');

    const handleAddTodo = (e) => {
        e.preventDefault();
        dispatch(ADD_TODO(todoText));
        setTodoText('');
    };

    const loadPendingTodos = () => {
        return todos.map(todo =>
            !todo.done ? (
                <li key={todo.id} id={todo.id}>{todo.text} -
                    <button onClick={() => dispatch(TOGGLE_TODO(todo.id))}>Concluído</button> -
                    <button onClick={() => dispatch(REMOVE_TODO(todo.id))}>Excluir</button>
                </li>
            ) : ''
        )
    };

    const loadDoneTodos = () => {
        return todos.map(todo =>
            todo.done ? (
                <li key={todo.id} id={todo.id}>{todo.text}  -
                    <button onClick={() => dispatch(TOGGLE_TODO(todo.id))}>Pendente</button> -
                    <button onClick={() => dispatch(REMOVE_TODO(todo.id))}>Excluir</button>
                </li>
            ) : ''
        )
    }

    return (
        <div>
            <form>
                <input type="text" value={todoText} onChange={(e) => setTodoText(e.target.value)} />
                <button type="submit" onClick={handleAddTodo}>INCLUIR</button>
            </form>
            <h3>Pendentes:</h3>
            <ul>
                {loadPendingTodos()}
            </ul>
            <h3>Concluídos:</h3>
            <ul>
                {loadDoneTodos()}
            </ul>
        </div>
    );
}

export default Todos;
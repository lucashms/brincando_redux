import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from '../../actions/actions';

function Todos() {
    const dispatch = useDispatch();

    const todos = useSelector(state => state.todosReducer.todos);
    const [todoText, setTodoText] = useState('');
    const [pendingTodos, setPendingTodos] = useState([]);
    const [doneTodos, setDoneTodos] = useState([]);

    useEffect(() => {
        const pTodos = [];
        const dTodos = [];
        todos.forEach(todo => {
            if (!todo.done) {
                pTodos.push(todo);
            } else {
                dTodos.push(todo);
            }
        });
        setPendingTodos(pTodos);
        setDoneTodos(dTodos);
    }, [todos]);

    const handleAddTodo = (e) => {
        e.preventDefault();
        dispatch(ADD_TODO(todoText));
        setTodoText('');
    };


    return (
        <div>
            <form>
                <input type="text" value={todoText} onChange={(e) => setTodoText(e.target.value)} />
                <button type="submit" onClick={handleAddTodo}>INCLUIR</button>
            </form>
            <h3>Pendentes:</h3>
            <ul>
                {pendingTodos.length ? pendingTodos.map(todo =>
                    <li key={todo.id} id={todo.id}>{todo.text} -
                        <button onClick={() => dispatch(TOGGLE_TODO(todo.id))}>Concluído</button> -
                        <button onClick={() => dispatch(REMOVE_TODO(todo.id))}>Excluir</button>
                    </li>
                ) : <li>Sem TODOS pendentes.</li>}
            </ul>
            <h3>Concluídos:</h3>
            <ul>
                {doneTodos.length ? doneTodos.map(todo =>
                    <li key={todo.id} id={todo.id}>{todo.text} -
                        <button onClick={() => dispatch(TOGGLE_TODO(todo.id))}>Concluído</button> -
                        <button onClick={() => dispatch(REMOVE_TODO(todo.id))}>Excluir</button>
                    </li>
                ) : <li>Sem TODOS concluídos.</li>}
            </ul>
        </div>
    );
}

export default Todos;
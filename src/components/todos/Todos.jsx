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
            <form style={{ textAlign: 'center', marginBottom: '10px ', backgroundColor: 'yellow', padding: '10px', width: '830px', margin: 'auto' }}>
                <input type="text" value={todoText} onChange={(e) => setTodoText(e.target.value)} />
                <button type="submit" onClick={handleAddTodo}>INCLUIR</button>
            </form>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{
                    flexBasis: '400px',
                    backgroundColor: 'red',
                    padding: '10px',
                    margin: '5px'
                }}>
                    <h3>Pendentes:</h3>
                    <ul>
                        {pendingTodos.length ? pendingTodos.map(todo => (
                            <li key={todo.id} id={todo.id} style={{ clear: 'both' }}>
                                <span>{todo.text}</span>
                                <span style={{ float: 'right' }}>
                                    <button onClick={() => dispatch(TOGGLE_TODO(todo.id))}>Concluído</button>
                                    <button onClick={() => dispatch(REMOVE_TODO(todo.id))}>Excluir</button>
                                </span>
                            </li>)
                        ) : <li>Sem TODOS pendentes.</li>}
                    </ul>
                </div>
                <div style={{
                    flexBasis: '400px',
                    backgroundColor: 'green',
                    padding: '10px',
                    margin: '5px'
                }}>
                    <h3>Concluídos:</h3>
                    <ul>
                        {doneTodos.length ? doneTodos.map(todo => (
                            <li key={todo.id} id={todo.id} style={{ clear: 'both' }}>
                                <span>{todo.text}</span>
                                <span style={{ float: 'right' }}>
                                    <button onClick={() => dispatch(TOGGLE_TODO(todo.id))}>Pendente</button>
                                    <button onClick={() => dispatch(REMOVE_TODO(todo.id))}>Excluir</button>
                                </span>
                            </li>)
                        ) : <li>Sem TODOS concluídos.</li>}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Todos;
import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { todosActions } from '../../reduxSlices/todosSlice'

function Todos() {
    const dispatch = useDispatch();

    const todos = useSelector(state => state.todos.todos);
    const [todoText, setTodoText] = useState('');
    const [pendingTodos, setPendingTodos] = useState([]);
    const [doneTodos, setDoneTodos] = useState([]);

    const todoInput = useRef();

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
        todoInput.current.focus();
        dispatch(todosActions.addTodo(todoText));
        setTodoText('');
    };

    const formStyle = {
        textAlign: 'center',
        marginBottom: '10px ',
        backgroundColor: 'yellow',
        padding: '10px',
        width: '830px',
        margin: 'auto'
    };

    return (
        <div>
            <form style={formStyle}>
                <input type="text" ref={todoInput} value={todoText} onChange={(e) => setTodoText(e.target.value)} />
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
                                    <button onClick={() => dispatch(todosActions.toggleTodo(todo.id))}>Concluído</button>
                                    <button onClick={() => dispatch(todosActions.removeTodo(todo.id))}>Excluir</button>
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
                                    <button onClick={() => dispatch(todosActions.toggleTodo(todo.id))}>Pendente</button>
                                    <button onClick={() => dispatch(todosActions.removeTodo(todo.id))}>Excluir</button>
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
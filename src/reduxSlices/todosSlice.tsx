import { createSlice } from '@reduxjs/toolkit';


const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: []
    },
    reducers: {
        addTodo: (state, action) => {
            if (action.payload.trim().length === 0) return state;
            state.todos.push({
                id: Date.now().toString(),
                text: action.payload,
                done: false
            })
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        },
        toggleTodo: (state, action) => {
            state.todos.forEach((todo, index, todos) => {
                if (todo.id === action.payload) {
                    todos[index].done = !todos[index].done;
                }
            })
        },
    }
});

export const todosActions = todosSlice.actions;

export default todosSlice;
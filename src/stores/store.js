import { createStore } from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';
import reducers from '../reducers';

const slice = createSlice({
    name: 'todos',
    initialState: {},
    reducers: {
        addTodo: (state) => { return state },
        remoteTodo: (state) => { return state },
        toggleTodo: (state) => { return state },
    }
})


const store = configureStore({
    reducer: {
        todos: slice.reducer
    }
})

// const store = createStore(reducers);

export default store;
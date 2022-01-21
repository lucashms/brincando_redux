import { configureStore } from '@reduxjs/toolkit';
import slices from '../reduxSlices'

const store = configureStore({
    reducer: {
        todos: slices.todosSlice.reducer,
        counter: slices.counterSlice.reducer
    }
})

export default store;
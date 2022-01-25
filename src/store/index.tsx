import { configureStore } from '@reduxjs/toolkit';
import { sortAndDeduplicateDiagnostics } from 'typescript';
import slices from '../reduxSlices'

const store = configureStore({
    reducer: {
        todos: slices.todosSlice.reducer,
        counter: slices.counterSlice.reducer
    }
})

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

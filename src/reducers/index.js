import { combineReducers } from 'redux';
import counterReducer from './counter';
import todosReducer from './todos';

const reducers = combineReducers({ counterReducer, todosReducer });

export default reducers;
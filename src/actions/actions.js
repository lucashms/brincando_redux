import actionTypes from "./actionTypes";

export const INCREMENT = () => ({
    type: actionTypes.INCREMENT
});

export const DECREMENT = () => ({
    type: actionTypes.DECREMENT
});


/*#######################################3*/

export const ADD_TODO = (todo) => ({
    type: actionTypes.ADD_TODO,
    payload: todo
});

export const REMOVE_TODO = (todo_id) => ({
    type: actionTypes.REMOVE_TODO,
    payload: todo_id
});

export const TOGGLE_TODO = (todo_id) => ({
    type: actionTypes.TOGGLE_TODO,
    payload: todo_id
});


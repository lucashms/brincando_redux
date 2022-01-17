import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DECREMENT, INCREMENT } from '../../actions/actions';

function Counter() {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counterReducer.counter);

    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={() => dispatch(INCREMENT())}>INCREMENT</button>
            <button onClick={() => dispatch(DECREMENT())}>DECREMENT</button>
        </div>
    );
}

export default Counter;
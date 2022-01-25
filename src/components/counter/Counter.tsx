import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { counterActions } from '../../reduxSlices/counterSlice';

function Counter() {
    const dispatch = useDispatch();
    const counter = useSelector((state: RootState) => state.counter.counter);

    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={() => dispatch(counterActions.increment())}>INCREMENT</button>
            <button onClick={() => dispatch(counterActions.decrement())}>DECREMENT</button>
        </div>
    );
}

export default Counter;
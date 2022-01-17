import actionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
    counter: 0
}

const counterReducer = function (state = INITIAL_STATE, action) {

    switch (action.type) {
        case actionTypes.INCREMENT:
            return {
                counter: ++state.counter
            }
        case actionTypes.DECREMENT:
            return {
                counter: --state.counter
            }
        default:
            return state;
    }
};

export default counterReducer;
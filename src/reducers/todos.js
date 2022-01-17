import actionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
    todos: []
}

const todosReducer = function (state = INITIAL_STATE, action) {

    switch (action.type) {
        case actionTypes.ADD_TODO:
            if (action.payload.trim() === '') return state;
            const newTodo = {
                id: Date.now(),
                text: action.payload,
                done: false
            };
            return {
                todos: [...state.todos, newTodo]
            }
        case actionTypes.REMOVE_TODO:
            return {
                todos: state.todos.filter(todo => todo.id !== action.payload)
            }
        case actionTypes.TOGGLE_TODO:
            const newTodos = [...state.todos];
            console.log('newtodos', newTodos);
            newTodos.forEach((todo, index, todos) => {
                if (todo.id === action.payload) {
                    todos[index].done = !todos[index].done;
                }
            })
            console.log(newTodos);
            return {
                todos: newTodos
            }
        default:
            return state;
    }
};

export default todosReducer;
import {initialState} from "../Store";
import {ActionTypes} from "../ActionTypes";

export const TodoReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ActionTypes.ADD_TODO:
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state, action.payload];
        case ActionTypes.DELETE_TODO:
            localStorage.setItem('tasks', JSON.stringify(state));
            return state.filter(todo => todo.id !== action.payload);
        case ActionTypes.CHECK_TODO:
            localStorage.setItem('tasks', JSON.stringify(state));
            state.map((todo) => {
                if (todo.id === action.payload) {
                    return {...todo, checked: !todo.checked};
                }
                return todo;
            })
            localStorage.setItem('tasks', JSON.stringify(state));
            return state;
        default:
            return state;
    }
};
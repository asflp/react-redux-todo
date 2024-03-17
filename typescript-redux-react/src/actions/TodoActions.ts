import {ActionTypes} from "../ActionTypes";

export interface TodoItem {
    id: number;
    name: string;
    description: string;
    checked: boolean;
}

export const addTodo = (todo: TodoItem) => {
    return {
        type: ActionTypes.ADD_TODO,
        payload: todo,
    };
};

export const deleteTodo = (id: number) => {
    return {
        type: ActionTypes.DELETE_TODO,
        payload: id,
    };
};

export const checkTodo = (id: number) => {
    return {
        type: ActionTypes.CHECK_TODO,
        payload: id,
    };
};
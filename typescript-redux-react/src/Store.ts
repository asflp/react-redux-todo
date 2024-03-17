import {createStore} from "redux";
import {TodoReducer} from "./reducers/TodoReducer";
import {TodoItem} from "./actions/TodoActions";

export const initialState: TodoItem[] = JSON.parse(localStorage.getItem('tasks') || '[]');
export const Store = createStore(TodoReducer);

export type StoreDispatch = typeof Store.dispatch;
export type StoreState = ReturnType<typeof Store.getState>;

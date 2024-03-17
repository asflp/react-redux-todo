import React, {ChangeEvent} from "react";
import './Todo.css';
import {ButtonAdd} from "../ButtonAdd/ButtonAdd";
import {useDispatch} from "react-redux";
import {addTodo} from "../../actions/TodoActions"

const defaultTodo = {
    name: '',
    description: ''
};
export type Todo = {
    id: number;
    name: string;
    description: string;
    checked: boolean;
}

export const Todo = () => {

    const [todo, setTodo] = React.useState(defaultTodo);
    const dispatch = useDispatch();

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target
        setTodo({...todo, [name]: value})
    }


    const onClick = () => {
        const newTodo = {
            id: Math.random(),
            name: todo.name,
            description: todo.description,
            checked: false
        }

        dispatch(addTodo(newTodo))

        setTodo(defaultTodo)
    }

    return (
        <div className="container">
            <form>
                <label>
                    Название задачи
                    <input type='text' id='name' value={todo.name} name='name' placeholder="Название задачи" className={"first"} onChange={onChange}/>
                </label>

                <label>
                    Описание задачи
                    <input type='text' id='description' value={todo.description} name='description' placeholder="Описание задачи" className={"second"} onChange={onChange}/>
                </label>

                <ButtonAdd color={'blue'} onClick={onClick}>
                    Добавить
                </ButtonAdd>
            </form>
        </div>
    );
}
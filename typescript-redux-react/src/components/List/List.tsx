import {FC} from "react";
import "./List.css"
import {Todo} from "../Todo/Todo";
import {ListItem} from "./ListItem/ListItem";

interface ListProps {
    todos: Todo[];
}

export const List: FC<ListProps> = ({todos}) => {

    const sortTodo = (todos: Todo[]) => {
        return (todos.filter((todo) => !todo.checked).concat(todos.filter((todo) => todo.checked)));
    };

    return (
        <div className={"container_list"}>

            <div className={"label_list"}>{todos.length == 0 ? "Список задач пуст" : "Список задач:"}</div>

            {sortTodo(todos).map((todo) => (
                <ListItem key={todo.id} todo={todo}/>
            ))}

        </div>
    )
}
import {FC} from "react";
// @ts-ignore
import imgEmptyCheck from "../../../assets/circle.png"
// @ts-ignore
import imgFillCheck from "../../../assets/check-circle.png"
import "./ListItem.css"
import {Todo} from "../../Todo/Todo";
import {ButtonAdd} from "../../ButtonAdd/ButtonAdd";
import {useDispatch} from "react-redux";
import {checkTodo, deleteTodo} from "../../../actions/TodoActions"


interface ListItemProps {
    todo: Todo;
}
export const ListItem: FC<ListItemProps> = ({ todo}) => {

    const dispatch = useDispatch();

    return (
        <div className={"item_container"}>
            <div className={"item_container__text"}>
                <div className={"item_container__text__name"}>
                    <img src={todo.checked ? imgFillCheck : imgEmptyCheck} className={"item_container__text__name"}
                        onClick={() => dispatch(checkTodo(todo.id))}/>

                    <div
                         style={{
                             opacity: todo.checked ? 0.5 : 1,
                             textDecoration: todo.checked ? 'line-through' : 'none'
                         }}
                         onClick={() => dispatch(checkTodo(todo.id))}
                    >
                        {todo.name}
                    </div>
                </div>

                <div className={"item_container__text__description"}>
                    {todo.description}
                </div>
            </div>
            <div>
                <ButtonAdd color={'red'} onClick={() => dispatch(deleteTodo(todo.id))}>
                    Удалить
                </ButtonAdd>
            </div>
        </div>
    )
}
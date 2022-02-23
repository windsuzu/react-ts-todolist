import TodoItem from "./TodoItem";
import Todo from "../../models/Todo";

type TodoProps = {
    items: Todo[];
};

const Todos = (props: TodoProps) => {
    return (
        <ul>
            {props.items.map((item) => (
                <TodoItem key={item.id} text={item.text} />
            ))}
        </ul>
    );
};

export default Todos;

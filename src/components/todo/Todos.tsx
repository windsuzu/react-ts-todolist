import TodoItem from "./TodoItem";
import Todo from "../../models/Todo";
import styled from "styled-components";

const TodoList = styled.ul`
    list-style: none;
    margin: 2rem auto;
    padding: 0;
    width: 40rem;
`;

type TodoProps = {
    items: Todo[];
    onRemoveTodo: (id: string) => void;
};

const Todos = (props: TodoProps) => {
    return (
        <TodoList>
            {props.items.map((item) => (
                <TodoItem
                    key={item.id}
                    text={item.text}
                    onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}
                />
            ))}
        </TodoList>
    );
};

export default Todos;

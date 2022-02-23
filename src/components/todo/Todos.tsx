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
};

const Todos = (props: TodoProps) => {
    return (
        <TodoList>
            {props.items.map((item) => (
                <TodoItem key={item.id} text={item.text} />
            ))}
        </TodoList>
    );
};

export default Todos;

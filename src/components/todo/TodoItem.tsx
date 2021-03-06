import styled from "styled-components";

const Item = styled.li`
    margin: 1rem 0;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
    padding: 1rem;
    background-color: #f7f5ef;
    cursor: pointer;
`;

type todoItemProps = {
    text: string;
    onRemoveTodo: () => void;
};

const TodoItem = (props: todoItemProps) => {
    return <Item onClick={props.onRemoveTodo}>{props.text}</Item>;
};

export default TodoItem;

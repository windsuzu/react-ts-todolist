type todoItemProps = {
    text: string;
};

const TodoItem = (props: todoItemProps) => {
    return <li>{props.text}</li>;
};

export default TodoItem;

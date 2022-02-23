import { useRef } from "react";
import { FormEvent } from "react";
import Input from "../ui/Input";

type newTodoProps = {
    onAddTodo: (text: string) => void;
};

const NewTodo = (props: newTodoProps) => {
    const todoInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: FormEvent) => {
        event.preventDefault();

        const enteredTodo = todoInputRef.current?.value || "";
        if (!enteredTodo.trim().length) {
            return;
        }
        props.onAddTodo(enteredTodo);
    };

    return (
        <form onSubmit={submitHandler}>
            <Input id="text" label="Todo Text" type="text" ref={todoInputRef} />
            <button>Add Todo</button>
        </form>
    );
};

export default NewTodo;

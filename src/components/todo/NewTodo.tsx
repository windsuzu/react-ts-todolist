import { useRef } from "react";
import { FormEvent } from "react";
import styled from "styled-components";
import Button from "../ui/Button";
import Input from "../ui/Input";

const Form = styled.form`
    width: 40rem;
    margin: 2rem auto;

    label {
        display: block;
        font-weight: bold;
        margin-bottom: 0.5rem;
    }

    input {
        display: block;
        width: 100%;
        font: inherit;
        font-size: 1.5rem;
        padding: 0.5rem;
        border-radius: 4px;
        background-color: #f7f5ef;
        border: none;
        border-bottom: 2px solid #494844;
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
        margin-bottom: 0.5rem;
    }
`;

type newTodoProps = {
    onAddTodo: (text: string) => void;
};

const NewTodo = (props: newTodoProps) => {
    const todoInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: FormEvent) => {
        event.preventDefault();

        const enteredTodo = todoInputRef.current!.value;
        if (!enteredTodo.trim().length) {
            return;
        }
        todoInputRef.current!.value = "";
        props.onAddTodo(enteredTodo);
    };

    return (
        <Form onSubmit={submitHandler}>
            <Input id="text" label="Todo Text" type="text" ref={todoInputRef} />
            <Button>Add Todo</Button>
        </Form>
    );
};

export default NewTodo;

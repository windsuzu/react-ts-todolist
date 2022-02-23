import { forwardRef } from "react";

type InputProps = {
    id: string;
    label: string;
    type: "text" | "number";
};

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    return (
        <>
            <label htmlFor={props.id}>{props.label}</label>
            <input ref={ref} type={props.type} id={props.id} />
        </>
    );
});

export default Input;

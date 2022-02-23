import { ReactNode } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    font: inherit;
    background-color: #ebb002;
    border: 1px solid #ebb002;
    color: #201d0f;
    padding: 0.5rem 1.5rem;
    border-radius: 4px;
    cursor: pointer;

    &:hover,
    &:active {
        background-color: #ebc002;
        border-color: #ebc002;
    }
`;

type ButtonProps = {
    children: ReactNode;
};

const Button = (props: ButtonProps) => (
    <StyledButton>{props.children}</StyledButton>
);

export default Button;

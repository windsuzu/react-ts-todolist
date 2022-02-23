import { useState } from "react";
import "./App.css";
import NewTodo from "./components/todo/NewTodo";
import Todos from "./components/todo/Todos";
import Todo from "./models/Todo";

function App() {
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodoHandler = (text: string) => {
        setTodos((prev) => [...prev, new Todo(text)]);
    };

    return (
        <>
            <NewTodo onAddTodo={addTodoHandler} />
            <Todos items={todos} />
        </>
    );
}

export default App;

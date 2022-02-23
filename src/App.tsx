import { useState } from "react";
import NewTodo from "./components/todo/NewTodo";
import Todos from "./components/todo/Todos";
import Todo from "./models/Todo";

function App() {
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodoHandler = (text: string) => {
        setTodos((prev) => [...prev, new Todo(text)]);
    };

    const removeTodoHandler = (id: string) => {
        setTodos((prev) => prev.filter((todo) => todo.id !== id));
    };

    return (
        <>
            <NewTodo onAddTodo={addTodoHandler} />
            <Todos items={todos} onRemoveTodo={removeTodoHandler} />
        </>
    );
}

export default App;

import { useEffect, useReducer } from "react";
import NewTodo from "./components/todo/NewTodo";
import Todos from "./components/todo/Todos";
import useHttp from "./hooks/use-http";
import Todo from "./models/Todo";

const initTodoState: { items: Todo[] } = {
    items: [],
};

type ActionType =
    | { type: "LOAD"; payload: Todo[] }
    | { type: "ADD"; payload: Todo }
    | { type: "DEL"; payload: string };

const todoReducer = (state: typeof initTodoState, action: ActionType) => {
    switch (action.type) {
        case "LOAD":
            return { items: action.payload };

        case "ADD":
            return { items: [...state.items, action.payload] };

        case "DEL":
            return {
                items: state.items.filter(
                    (item: Todo) => item.id !== action.payload
                ),
            };

        default:
            return initTodoState;
    }
};

function App() {
    const [state, dispatch] = useReducer(todoReducer, initTodoState);
    const { isLoading, error, sendRequest: fetchTodos } = useHttp();
    const { sendRequest: addTodo } = useHttp();
    const { sendRequest: removeTodo } = useHttp();

    const addTodoHandler = (text: string) => {
        const id = Date.now().toString();

        dispatch({
            type: "ADD",
            payload: new Todo(id, text),
        });

        addTodo(
            {
                url: `https://test-e9746-default-rtdb.firebaseio.com/todos/${id}.json`,
                method: "PUT",
                body: { text },
            },
            null
        );
    };

    const removeTodoHandler = (id: string) => {
        dispatch({ type: "DEL", payload: id });

        removeTodo(
            {
                url: `https://test-e9746-default-rtdb.firebaseio.com/todos/${id}.json`,
                method: "DELETE",
            },
            null
        );
    };

    useEffect(() => {
        const loadData = (data: { id: string; text: string }[]) => {
            let loadedData: Todo[] = [];
            for (const id in data) {
                loadedData.push(new Todo(id, data[id].text));
            }
            dispatch({ type: "LOAD", payload: loadedData });
        };

        fetchTodos(
            {
                url: "https://test-e9746-default-rtdb.firebaseio.com/todos.json",
            },
            loadData
        );
    }, [fetchTodos]);

    if (isLoading) return <p className="centered">Loading Todos...</p>;
    if (error)
        return <p className="centered">{error || "Failed to get Todos."}</p>;

    return (
        <>
            <NewTodo onAddTodo={addTodoHandler} />
            <Todos items={state.items} onRemoveTodo={removeTodoHandler} />
        </>
    );
}

export default App;

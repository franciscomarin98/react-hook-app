import {Todo} from "./interfaces/todo";
import {useEffect, useReducer} from "react";
import TodoList from "./todo-components/TodoList";
import TodoForm from "./todo-components/TodoForm";
import {todoReducer} from "./reducer/todo-reducer";

import '../todo-app.css';

const INITIAL_STATE: Todo[] = []
const init = () => JSON.parse(localStorage.getItem('todos') || '[]');


const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, INITIAL_STATE, init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleAddTodo = (newTodo: Todo) => {
        dispatch({
            type: 'add-todo',
            payload: newTodo
        });
    }

    const handleComplete = (todo: Todo) => {
        dispatch({
            type: "todo-completed",
            payload: todo
        });
    }

    const handleDelete = (todo: Todo) => {
        dispatch({
            type: "delete-todo",
            payload: todo
        });
    }

    return (
        <div className={'container my-5'}>
            <div className="row">
                <div className="col-7">
                    <h5>TODOs</h5>
                    <hr/>
                    <TodoList
                        todos={todos}
                        handleDelete={handleDelete}
                        handleComplete={handleComplete}
                    />
                </div>
                <div className="col-4">
                    <h5>Agregar TODO</h5>
                    <hr/>
                    <TodoForm handleAddTodo={handleAddTodo}/>
                </div>
            </div>

        </div>
    );
};

export default TodoApp;

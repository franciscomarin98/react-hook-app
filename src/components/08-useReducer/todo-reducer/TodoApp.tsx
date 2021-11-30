import {useEffect, useReducer} from "react";
import {todoReducer} from "./reducer/todo-reducer";
import {useForm} from "../../../hooks/useForm";
import {Todo} from "./interfaces/todo";
import TodoList from "./todo-components/TodoList";

import '../todo-app.css';


const INITIAL_STATE: Todo[] = []
const init = () => JSON.parse(localStorage.getItem('todos') || '[]');


const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, INITIAL_STATE, init);
    const {formState, handleInputChange, reset} = useForm({
        description: ''
    });

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleDelete = (todo: Todo) => {
        dispatch({
            type: "delete-todo",
            payload: todo
        });
    }

    const handleComplete = (todo: Todo) => {
        dispatch({
            type: "todo-completed",
            payload: todo
        });
    }

    function handleSubmit(e: any) {
        e.preventDefault();

        if (!formState.description) {
            return;
        }

        dispatch({
            type: 'add-todo',
            payload: {
                id: new Date().getTime(),
                desc: formState.description,
                done: false
            }
        });
        reset();
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
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="description"
                            value={formState.description}
                            className="form-control"
                            placeholder="Write sometime..."
                            autoComplete="off"
                            onChange={handleInputChange}
                        />

                        <div className="d-grid gap-2">

                            <button type={'submit'} className="btn btn-primary mt-2 "> Agregar</button>

                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default TodoApp;

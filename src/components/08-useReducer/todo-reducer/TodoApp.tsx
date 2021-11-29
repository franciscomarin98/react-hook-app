import {useReducer} from "react";
import {todoReducer} from "./reducer/todo-reducer";
import {Todo} from "./interfaces/todo";

import '../todo-app.css';


const INITIAL_STATE: Todo[] = [
    {
        id: new Date().getTime(),
        desc: 'Learn React',
        done: false
    }
]


const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, INITIAL_STATE);

    function handleSubmit(e: any) {
        e.preventDefault();
        dispatch({
            type: 'add-todo',
            payload: {
                id: new Date().getTime(),
                desc: 'Learn useReducer',
                done: false
            }
        });
    }

    return (
        <div className={'container my-5'}>
            <div className="row">
                <div className="col-7">
                    <h5>TODOs</h5>
                    <hr/>
                    <ul className={'list-group list-group-flush'}>
                        {
                            todos.map((todo: Todo, i: number) => (
                                <li key={todo.id} className={'list-group-item'}>
                                    <p>{i + 1}.- {todo.desc}</p>
                                    <button className={'btn btn-danger btn-sm'}>
                                        Borrar
                                    </button>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="col-4">
                    <h5>Agregar TODO</h5>
                    <hr/>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="description"
                            className="form-control"
                            placeholder="Write sometime..."
                            autoComplete="off"
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

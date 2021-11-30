import {Todo} from "../interfaces/todo";

interface TodoItemProps {
    todo: Todo;
    i: number;
    handleDelete: (todo: Todo) => void;
    handleComplete: (todo: Todo) => void;
}

const TodoItem = ({todo, i, handleComplete, handleDelete}: TodoItemProps) => {
    return (
        <li
            key={todo.id}
            className={'list-group-item'}
        >
            <p
                className={todo.done ? 'complete' : ''}
                onClick={() => handleComplete(todo)}
            >
                {i + 1}.- {todo.desc}
            </p>
            <button
                onClick={() => handleDelete(todo)}
                className={'btn btn-danger btn-sm'}
            >
                Borrar
            </button>
        </li>
    );
};

export default TodoItem;

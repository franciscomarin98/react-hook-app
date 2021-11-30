import {Todo} from "../interfaces/todo";
import TodoItem from "./TodoItem";

interface TodoListProps {
    todos: Todo[];
    handleDelete: (todo: Todo) => void;
    handleComplete: (todo: Todo) => void;
}

const TodoList = ({todos, handleDelete, handleComplete}: TodoListProps) => {
    return (
        <ul className={'list-group list-group-flush'}>
            {
                todos.map((todo: Todo, i: number) => (
                    <TodoItem
                        todo={todo}
                        i={i}
                        handleComplete={handleComplete}
                        handleDelete={handleDelete}
                        key={i}
                    />
                ))
            }
        </ul>
    );
}


export default TodoList;

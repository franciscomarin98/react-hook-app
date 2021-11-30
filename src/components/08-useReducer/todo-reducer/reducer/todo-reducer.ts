import {TodoAction} from "../actions/todo-actions";
import {Todo} from "../interfaces/todo";


export const todoReducer = (state: Todo[], action: TodoAction): Todo[] => {

    switch (action.type) {
        case 'add-todo':
            return [...state, action.payload];
        case "delete-todo":
            return state.filter(todo => todo.id !== action.payload.id)
        case "todo-completed":
            return state.map(todo => (todo.id === action.payload.id) ? {...todo, done: !todo.done} : todo);
        default:
            return state;
    }

}
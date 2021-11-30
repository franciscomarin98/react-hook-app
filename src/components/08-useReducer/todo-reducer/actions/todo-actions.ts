import {Todo} from "../interfaces/todo";

export type TodoAction = { type: 'add-todo', payload: Todo } | { type: 'delete-todo', payload: Todo }
import {useForm} from "../../../../hooks/useForm";
import {Todo} from "../interfaces/todo";

interface TodoFormProps {
    handleAddTodo: (todo: Todo) => void;
}

const TodoForm = ({handleAddTodo}: TodoFormProps) => {

    const {formState, handleInputChange, reset} = useForm({
        description: ''
    });

    function handleSubmit(e: any) {
        e.preventDefault();

        if (!formState.description) {
            return;
        }

        handleAddTodo({
            id: new Date().getTime(),
            desc: formState.description,
            done: false
        });

        reset();
    }

    return (
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
    );
};

export default TodoForm;

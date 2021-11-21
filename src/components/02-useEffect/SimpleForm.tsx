import './simple-form.css'
import Message from "./Message";
import {useEffect} from "react";
import {useForm} from "../../hooks/useForm";

interface FormData {
    name: string;
    email: string;
}

const SimpleForm = () => {

    useEffect(() => {
        console.log('Hey!!!');
    }, [])

    const {formState, handleInputChange} = useForm<FormData>({
        name: 'Francisco',
        email: 'frank@email.com'
    });

    const {name, email} = formState;

    const handleSubmit = (e:any) => {
        e.preventDefault();
        console.log(formState)
    }


    return (
        <form onSubmit={handleSubmit}>
            <h1>Simple Form</h1>
            <hr/>

            <div className="form-group p-2">
                <input
                    type="text"
                    name="name"
                    className={'form-control'}
                    placeholder="Name"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-group p-2">
                <input
                    type="email"
                    name="email"
                    className={'form-control'}
                    placeholder="Email"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />
            </div>


            {(name === 'Francis') && <Message/>}

            <button type="submit" className={'btn btn-primary'}>Send</button>
        </form>
    );
};
export default SimpleForm;
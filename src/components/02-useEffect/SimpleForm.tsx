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


    return (
        <>
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


            {(name === 'Francisco') && <Message/>}
        </>
    );
};
export default SimpleForm;
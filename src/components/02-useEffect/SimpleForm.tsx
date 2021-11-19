import './simple-form.css'
import {useEffect, useState} from "react";

interface User {
    name: string;
    email: string;
}

const SimpleForm = () => {

    const [formState, setFormState] = useState<User>({
        name: '',
        email: ''
    });

    const {name, email} = formState;

    useEffect(() => {
        console.log('Hey!!!');
    }, [])

    function handleInputChange(e: any) {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

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
        </>
    );
};
export default SimpleForm;
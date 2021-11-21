import {ChangeEvent, useState} from "react";


export const useForm = <T extends Object>(initialState: T) => {

    const [formState, setFormState] = useState(initialState);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

    return {
        formState,
        handleInputChange
    }


}
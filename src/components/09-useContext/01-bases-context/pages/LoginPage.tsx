import React, {useContext} from 'react';
import {UserContext} from "../context/UserContext";

const LoginPage = () => {

    // @ts-ignore
    const {setUser} = useContext(UserContext);

    return (
        <div>
            <h1>Login Page</h1>
            <hr/>
            <button className="btn btn-primary" onClick={() => setUser({id: 1, name: 'Francisco'})}>
                Login
            </button>
        </div>
    );
};

export default LoginPage;

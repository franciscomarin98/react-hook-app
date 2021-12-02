import React, {useContext} from 'react';
import {UserContext} from "../context/UserContext";

const AboutPage = () => {

    // @ts-ignore
    const {user, setUser} = useContext(UserContext);

    return (
        <div>
            <h1>About Page</h1>
            <hr/>
            <pre>
                {JSON.stringify(user, null, 2)}
            </pre>

            <button className="btn btn-danger" onClick={() => setUser({})}>
                Logout
            </button>
        </div>
    );
};

export default AboutPage;

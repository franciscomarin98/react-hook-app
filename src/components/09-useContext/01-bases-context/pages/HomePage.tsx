import React, {useContext} from 'react';
import {UserContext} from "../context/UserContext";

const HomePage = () => {

    // @ts-ignore
    const {user} = useContext(UserContext);

    return (
        <div className="container">
            <h1>HomePage</h1>
            <hr/>
            <pre>
                {JSON.stringify(user, null, 2)}
            </pre>
        </div>
    );
};

export default HomePage;

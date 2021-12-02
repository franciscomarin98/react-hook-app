import AppRouter from "./router/AppRouter";
import {UserContext} from "./context/UserContext";
import {useState} from "react";

const MainApp = () => {

    const [user, setUser] = useState({});

    return (
        <UserContext.Provider value={{
            user,
            setUser
        }}>
            < AppRouter/>
        </UserContext.Provider>
    )

};

export default MainApp;

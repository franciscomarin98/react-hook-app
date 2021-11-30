import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import LoginPage from "../pages/LoginPage";

import Navbar from "../components/Navbar";

import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";

const AppRouter = () => {
    return (
        <Router>
            <Navbar/>
            <div className="container my-3">
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/about" element={<AboutPage/>}/>
                    <Route path="*" element={<Navigate replace to="/"/>}/>
                </Routes>
            </div>
        </Router>
    );
};

export default AppRouter;

import React from "react";
import {
        BrowserRouter,
        Routes,
        Route,
        Link
} from "react-router-dom";


import LoginScreen from '../views/LoginScreen';
import HomeScreen from '../views/HomeScreen';



function Navigation() {
        return (
                <BrowserRouter>
                        <Routes>
                                <Route path="/home" element={<HomeScreen/>}/>
                                <Route path="/" element={ <LoginScreen />}/>
                        </Routes>
                </BrowserRouter>
        )
}

export default Navigation;

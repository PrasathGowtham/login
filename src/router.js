import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Homepage from './Components/Home';
import Register from './Components/Register';
import Loginpage from "./Components/login";

function Routercomponent() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Loginpage />} />
                    <Route path="/signup" element={<Register />} />
                    <Route path="/home" element={<Homepage />} />
                </Routes>
            </BrowserRouter>
        </>

    )
}
export default Routercomponent;
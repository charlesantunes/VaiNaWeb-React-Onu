import React from "react";
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";

import Home from '../Components/Pages/Home/index'
import Error from '../Components/Pages/Error/index'

export default function Routas() {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/error" element={<Error />} />
            </Routes>
        </Router>
    )
}

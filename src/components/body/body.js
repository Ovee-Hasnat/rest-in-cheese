import React from "react";
import Menu from "./menu";
import Home from "./home";
import Contact from "./contact";
import About from "./about";
import { Routes, Route } from 'react-router-dom'

const Body = () => {
    return (
        <div>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/menu" exact element={<Menu />} />
                <Route path="/about" exact element={<About />} />
                <Route path="/contact" exact element={<Contact />} />
            </Routes>

        </div>
    )
}

export default Body;
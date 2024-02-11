import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Card from "./components/Card";

function App() {
    return(
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={ <Home /> }></Route>
                <Route path="/about" element={ <About /> }></Route>
                <Route path="/contact" element={ <Contact /> }></Route>
                <Route path="/:user" element={ <Card /> }></Route>
            </Routes> 
        </div> 
    );
}

export default App;
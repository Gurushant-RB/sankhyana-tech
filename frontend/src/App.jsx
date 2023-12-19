import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
const App = () => {
  return (
    <div>
    <BrowserRouter>
    <Home/>
      <Routes>
        <Route path="/log" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
};

export default App;

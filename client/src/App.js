import React, { createContext, useReducer } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Signup from "./components/Signup";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ErrorPage from "./components/ErrorPage";
import Logout from "./components/Logout";
import userReducer, { initailState } from "./reducer/userReducer";

export const UserContext = createContext(initailState);

const App = () => {
  const [state, dispatch] = useReducer(userReducer, initailState);

  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </UserContext.Provider>
    </>
  );
};

export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen/HomeScreen.jsx";
import AboutUs from "./Screens/About/About.jsx";
import NotFound from "./Screens/NotFound/NotFound.jsx";
import Login from "./Screens/Login/Login.jsx";
import Register from "./Screens/Register/Register.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;

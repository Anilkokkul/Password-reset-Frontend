import "./App.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import SinghUp from "./components/SignUp";
import Login from "./components/Login";
import PasswordReset from "./components/PasswordReset";
import ForgotPassword from "./components/ForgotPassword";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";

export const instance = axios.create({
  withCredentials: true,
  baseURL: process.env.REACT_APP_BASE_URL,
});

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SinghUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/resetPassword" element={<PasswordReset />} />
        <Route path="/reset" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;

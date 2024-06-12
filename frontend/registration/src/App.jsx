import "./App.css";
import { Login } from "./pages/Login/Login";
import Register from "./pages/Register/register";
import Home from "./pages/hero/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route> 
          <Route path="/register" element={<Register />}></Route> 
          <Route path="/login" element={<Login />}></Route> 
          
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

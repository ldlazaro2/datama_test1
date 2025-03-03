import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"; // Import the App.css file

import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Wrapper from "./pages/Wrapper";

function App() {
  return (
    <BrowserRouter>
      {/* Apply the styles globally */}
      <div className="App">
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* Register */}
          <Route path="/register" element={<Register />} />

          {/* Login */}
          <Route path="/login" element={<Login />} />

          {/* Dashboard */}
          <Route
            path="/dashboard"
            element={
              <Wrapper>
                <Dashboard />
              </Wrapper>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

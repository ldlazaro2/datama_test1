import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // Ensure Login.css exists and is correctly imported

function Login() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/dashboard"); // Redirect to Dashboard after clicking Log in
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Employee ID" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Log in</button>
      </form>
      <p>Demo only. No actual authentication.</p>
    </div>
  );
}

export default Login;


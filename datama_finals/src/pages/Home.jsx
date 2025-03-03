import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Import the Home-specific CSS file

function Home() {
  return (
    <div className="home-container">
      {/* Header Section */}
      <header className="home-header">
        <h1>Welcome to Shell Gas Company</h1>
        <p>Fueling Your Journey with Excellence</p>
      </header>

      {/* Main Content Section */}
      <main className="home-main">
        <div className="home-buttons">
          <Link to="/register" className="home-button register-button">
            Register
          </Link>
          <Link to="/login" className="home-button login-button">
            Login
          </Link>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="home-footer">
        <p>&copy; 2023 Shell Gas Company. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
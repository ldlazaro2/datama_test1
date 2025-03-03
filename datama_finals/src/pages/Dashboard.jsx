import React from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css"; // Ensure you have this file for styling

function Dashboard() {
  const navigate = useNavigate();

  // Fixed gas prices in PHP
  const gasPrices = [
    { id: 1, fuel_type: "Unleaded", price: 65.25 },
    { id: 2, fuel_type: "Diesel", price: 58.75 },
    { id: 3, fuel_type: "Premium", price: 72.50 },
  ];

  // Handle sign out
  const signOut = () => {
    navigate("/login"); // Redirects to Login page
  };

  // Handle order (Demo only)
  const handleOrder = (fuelType, price) => {
    alert(`Ordered ${fuelType} at ₱${price.toFixed(2)}`);
  };

  return (
    <div className="dashboard-container">
      <h1>Welcome! You are logged in.</h1>

      <h2>Current Gas Prices (PHP)</h2>
      <table className="gas-table">
        <thead>
          <tr>
            <th>Fuel Type</th>
            <th>Price per Liter</th>
            <th>Order</th>
          </tr>
        </thead>
        <tbody>
          {gasPrices.map((gas) => (
            <tr key={gas.id}>
              <td>{gas.fuel_type}</td>
              <td>₱{gas.price.toFixed(2)}</td>
              <td>
                <button onClick={() => handleOrder(gas.fuel_type, gas.price)}>
                  Order
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className="logout-button" onClick={signOut}>Sign out</button>
    </div>
  );
}

export default Dashboard;

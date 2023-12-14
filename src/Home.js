// src/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Generic Medicine Store</h1>
      <p>Find affordable generic medicines for your health needs.</p>
      <Link to="/medicines">
        <button className="view-button">View Medicines</button>
      </Link>
    </div>
  );
};

export default Home;
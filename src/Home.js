// src/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import the CSS file for styling

const Home = () => {
  const handleScrollToSection = () => {
    const section = document.getElementById('why-generic-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Welcome to the Generic Medicine Store</h1>
        <p>Find affordable generic medicines for your health needs.</p>
        <button className="view-button" onClick={handleScrollToSection}>
          Why Generic Medicine
        </button>
        <Link to="/medicines" className="view-button">
          View Medicines
        </Link>
      </div>

      <div className="home-images">
        <img
          src="https://assets.pharmeasy.in/apothecary/images/medicine_ff.webp?dim=720x0"
          alt="Medicine Bottle 1"
          className="medicine-image"
        />
        <img
          src="https://assets.pharmeasy.in/apothecary/images/health_blogs_ff.webp?dim=720x0"
          alt="Medicine Bottle 2"
          className="medicine-image"
        />
        <img
          src="https://assets.pharmeasy.in/apothecary/images/value_store.png?dim=720x0"
          alt="Medicine Bottle 3"
          className="medicine-image"
        />
      </div>

      {/* Search box */}
      <div className="search-box">
        <input type="text" placeholder="Search for medicines..." className="search-input" />
        <button className="search-button">Search</button>
      </div>


      {/* Video section */}
      <div className="video-section">
        <h2>Explore Our Services</h2>
        <video controls width="480" height="400">
          <source
            src={process.env.PUBLIC_URL + '/Video_20231211_202116_303_1.mp4'} // Update the video file name
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        </div>

      {/* Section on why generic medicines */}
      <div id="why-generic-section" className="why-generic-section">
        <h2>Why Choose Generic Medicines?</h2>
        <p>
          Generic medicines are cost-effective alternatives to brand-name drugs. They contain the
          same active ingredients, ensuring the same quality and effectiveness.
        </p>
        <p>
          Doctors often recommend generic medicines as they provide the same therapeutic benefits
          at a lower cost, making healthcare more accessible.
        </p>
        {/* Add more information as needed */}
      </div>

      <div className="home-buttons">
        <button className="dummy-button">Browse Categories</button>
        <button className="dummy-button">Special Offers</button>
      </div>
    </div>
  );
};

export default Home;

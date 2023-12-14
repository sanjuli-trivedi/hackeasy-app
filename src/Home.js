// src/Home.js
import React,  { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Home.css'; // Import the CSS file for styling

const Home = () => {
  const navigate = useNavigate();

  const handleScrollToSection = () => {
    const section = document.getElementById('why-generic-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const allMedicineSuggestions = ['Medicine 1', 'Medicine 2', 'Medicine 3', 'Medicine 4'];

  const [searchInput, setSearchInput] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

  const handleInputChange = (e) => {
    const userInput = e.target.value;
    setSearchInput(userInput);

    // Filter suggestions based on user input
    const filtered = allMedicineSuggestions.filter((medicine) =>
      medicine.toLowerCase().includes(userInput.toLowerCase())
    );

    setFilteredSuggestions(filtered);
  };

  const handleSearch = () => {
    // Redirect to the detail page for the selected medicine
    if (filteredSuggestions.length > 0) {
      const selectedMedicine = filteredSuggestions[0]; // Assume the first suggestion is selected
      const medicineId = allMedicineSuggestions.indexOf(selectedMedicine) + 1; // Index starts from 0
      navigate(`/medicineDetails/${medicineId}`); // Use backticks and ${} for proper interpolation
    }
  };

  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Welcome to the Generic Medicine Store</h1>
        <p>Want to save on your monthly expense on medicines?.</p>
        <h1>Generic is Here!</h1>
        <button className="view-button" onClick={handleScrollToSection}>
          Why Generic Medicine
        </button>
        <Link to="/medicines" className="view-button">
          View Medicines
        </Link>
      </div>

      <div className="home-images">
        <img
          src={process.env.PUBLIC_URL + '/sample-1 1.png'}
          alt="Medicine Bottle 1"
          className="medicine-image"
        />
      </div>

      <p style={{ color: 'black' }}>Compare price of generic alternates of your medicine</p>
      {/* Search box */}
      <div className="search-box">
        <input
          type="text"
          placeholder="Search for medicines..."
          className="search-input"
          value={searchInput}
          onChange={handleInputChange}
          list="medicine-suggestions"
        />
        <datalist id="medicine-suggestions">
          {filteredSuggestions.map((medicine, index) => (
            <option key={index} value={medicine} />
          ))}
        </datalist>
        <button className="search-button" onClick={handleSearch}>Search</button>
      </div>

      <div className="comparison-image">
        <h2 style={{ color: 'black' }}>Here’s a quick comparison</h2>
        <img
          src={process.env.PUBLIC_URL + '/Comparison.png'}
          alt="Comparison Image"
          className="comparison-image"
        />
      </div>

      {/* Video section */}
      <div className="video-section">
        <h2>Listen to our GxPerts talking about Generic Medicines</h2>
        <video controls width="420" height="250">
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
        <img
          src={process.env.PUBLIC_URL + '/Frame 54933 (1).png'}
          alt="generic section image"
          className="why-generic-section-image"
        />
        {/* Add more information as needed */}
      </div>

      {/* <div className="home-buttons">
        <button className="dummy-button">Browse Categories</button>
        <button className="dummy-button">Special Offers</button>
      </div> */}
    </div>
  );
};

export default Home;

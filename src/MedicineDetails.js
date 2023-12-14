// src/MedicineDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import './MedicineDetails.css';

const MedicineDetails = () => {
  const { id } = useParams(); // Get the medicine ID from the URL

  // Dummy data for medicine details
  const medicineDetails = {
    1: { name: 'Medicine 1', description: 'Description for Medicine 1' },
    2: { name: 'Medicine 2', description: 'Description for Medicine 2' },
    // Add more details for other medicines as needed
  };

  // Dummy data for generic medicine details
  const genericMedicineDetails = {
    1: { name: 'Generic Medicine 1', description: 'Description for Generic Medicine 1' },
    2: { name: 'Generic Medicine 2', description: 'Description for Generic Medicine 2' },
    // Add more details for other generic medicines as needed
  };

  const medicineImages = {
    1: 'https://cdn01.pharmeasy.in/dam/products_otc/H62199/everherb-pharmeasy-moringa-drum-stick-immunity-booster-capsules-natural-multivitamin-bottle-of-60-2-1687237313.jpg?dim=700x0&dpr=1&q=100',
    2: 'https://cdn01.pharmeasy.in/dam/products_otc/T18833/everherb-by-pharmeasy-amla-immunity-booster-capsules-natural-vitamin-c-bottle-of-60-2-1661863079.jpg?dim=700x0&dpr=1&q=100',
    // Add more image URLs as needed
  };

  const selectedMedicine = medicineDetails[id];
  const correspondingGenericMedicine = genericMedicineDetails[id];

  const medicineImage = medicineImages[id];
  const genericImage = medicineImages[2];

  if (!selectedMedicine || !correspondingGenericMedicine) {
    // Handle the case where the medicine with the provided ID is not found
    return <div>Medicine not found</div>;
  }

  return (
    <div>
      <h2>{selectedMedicine.name}</h2>
      <p>{selectedMedicine.description}</p>

      <div className="comparison-box-container">
        <div className="comparison-box">
          <h3>Selected Medicine</h3>
          <div className="comparison-box-details">
          <img src={medicineImage} alt={`Medicine ${id}`} className="medicine-image" />
            <p>Name: {selectedMedicine.name}</p>
            <p>Description: {selectedMedicine.description}</p>
            {/* Add more details as needed */}
          </div>
        </div>
        <div className="comparison-box">
          <h3>Corresponding Generic Medicine</h3>
          <div className="comparison-box-details">
          <img src={genericImage} alt={`Medicine ${id}`} className="medicine-image" />
            <p>Name: {correspondingGenericMedicine.name}</p>
            <p>Description: {correspondingGenericMedicine.description}</p>
            {/* Add more details as needed */}
          </div>
        </div>
      </div>

         {/* Thin banner for scrolling to the appointment section */}
         <div className="scroll-banner">
        <a href="#appointment-section">
          <img
            src={process.env.PUBLIC_URL + '/Frame 54942 (1).png'}
            alt="Scroll Below for Appointment"
            className="banner-image"
          />
        </a>
      </div>

      {/* Form for booking an appointment section */}
      <div id="appointment-section">
        {/* Add your appointment form components here */}
      </div>
    </div>
  );
};

export default MedicineDetails;

// src/MedicineList.js
import React from 'react';
import './Medicine.css'; // Import the CSS file for styling

const MedicineList = () => {
  // Hardcoded data for now
  const medicines = [
    { id: 1, name: 'Medicine 1', price: 10, imageUrl: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Medicine 2', price: 20, imageUrl: 'https://via.placeholder.com/150' },
    // Add more medicines as needed
  ];

  return (
    <div className="medicine-list-container">
      <h2>Generic Medicines</h2>
      <div className="medicine-cards">
        {medicines.map((medicine) => (
          <div key={medicine.id} className="medicine-card">
            <img src={medicine.imageUrl} alt={medicine.name} className="medicine-image" />
            <h3>{medicine.name}</h3>
            <p>${medicine.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MedicineList;

// MedicineList.js
import React from 'react';
import './Medicine.css'

const MedicineList = () => {
  // Hardcoded data for now
  const medicines = [
    { id: 1, name: 'Medicine 1', price: 10 },
    { id: 2, name: 'Medicine 2', price: 20 },
    // Add more medicines as needed
  ];

  return (
    <div className="medicine-list-container">
      <h2>Generic Medicines</h2>
      <ul>
        {medicines.map((medicine) => (
          <li key={medicine.id}>
            {medicine.name} - ${medicine.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MedicineList;

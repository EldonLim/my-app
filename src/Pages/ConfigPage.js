import React from 'react';
import logo from '../Assets/icon.png';
import { useState } from 'react';
import '../ConfigPage.css'

const ConfigPage = () => {
    // State to store the selected distance range
    const [selectedDistance, setSelectedDistance] = useState('');

    // State to store selected cuisine types
    const [selectedCuisines, setSelectedCuisines] = useState([]);

    // Options for distance range
    const distanceOptions = [
        { value: '0.2', label: '0.2 kilometres' },
        { value: '0.5', label: '0.5 kilometres' },
        { value: '1', label: '1 kilometres' },
        // Add more options as needed
    ];

    // Options for cuisine types
    const cuisineOptions = [
        'Indian',
        'Chinese',
        'Malay',
        'Thai',
        'Korean',
        'Japanese',
        // Add more options as needed
    ];

    // Function to handle distance selection
    const handleDistanceChange = (event) => {
        setSelectedDistance(event.target.value);
    };

    // Function to handle cuisine selection
    const handleCuisineChange = (event) => {
        const value = event.target.value;
        setSelectedCuisines((prevSelectedCuisines) => {
            if (prevSelectedCuisines.includes(value)) {
                // If cuisine is not selected, remove it
                return prevSelectedCuisines.filter((cuisine) => cuisine !== value);
            } else {
                // If cuisine is already selected, add it
                return [...prevSelectedCuisines, value];
            }
        });
    };

    // Function to be called when the button is clicked
    const handleButtonClick = () => {
        // Your logic goes here
        console.log('Button clicked!');
        // Call other functions or perform actions
    }

    return (
        // <div className="App" style={{ backgroundImage: `url(${logo})`, backgroundSize: 'cover', minHeight: '100vh' }}>
        <div className="App">
            <div className="display-section">
                <div>
                    <h1>Welcome to FeastFinder!</h1>
                    <p>Discover delicious feasts near LocationName.</p>
                </div>

                <div>
                    {/* Distance Range Dropdown */}
                    <label htmlFor="distance">Choose your distance range:</label>
                    <select
                        id="distance"
                        value={selectedDistance}
                        onChange={handleDistanceChange}
                    >
                        <option value="" disabled>
                            Select distance
                        </option>
                        {distanceOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div>  

                <div>
                    {/* Cuisine Type Checkboxes */}
                    <fieldset>
                        <legend>Choose Cuisine Types:</legend>
                        {cuisineOptions.map((cuisine) => (
                            <div key={cuisine}>
                                <input
                                    type="checkbox"
                                    id={cuisine}
                                    value={cuisine}
                                    checked={selectedCuisines.includes(cuisine)}
                                    onChange={handleCuisineChange}
                                />
                                <label htmlFor={cuisine}>{cuisine}</label>
                            </div>
                        ))}
                    </fieldset>
                </div>

                <div>
                    {/* Button triggering the function */}
                    <button onClick={handleButtonClick}>
                        Foodie Pick
                    </button>

                    <section id="section-id">
                    {/* Section content goes here */}
                    </section>
                </div>
             </div>
        </div>
    );
}

export default ConfigPage;
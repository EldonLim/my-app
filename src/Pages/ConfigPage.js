import React, { useContext } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../Styles/ConfigPage.css'
import { WheelDataContext } from '../context';
import { useNavigate } from 'react-router-dom';


const ConfigPage = () => {
    const navigate = useNavigate();
    // State to store the selected distance range
    const [selectedDistance, setSelectedDistance] = useState('');

    // State to store selected cuisine types
    const [selectedCuisines, setSelectedCuisines] = useState([]);

    const {wheelData, setWheelData} = useContext(WheelDataContext);

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

    // get place id from HomePage
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const serializedData = params.get('data');

    // Deserialize the data (assuming it's JSON)
    const place_id = JSON.parse(decodeURIComponent(serializedData));

    // Now you can use 'data' in your React component

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

    const handleClick = () => {
        console.log("selectedDistance:", selectedDistance);
        console.log("selectedCuisines:", selectedCuisines);
        setWheelData({
            distance: selectedDistance,
            cuisines: selectedCuisines
        });

        navigate('/WheelPage');   
    }

    // Function to be called when the button is clicked
    // const handleButtonClick = () => {
    //     // Send the distance and cuisine to server 
    //     if (selectedDistance != '0.2' && selectedCuisines != []){
    //         fetch('http://localhost:3001/send-preferences', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({ distance: selectedDistance, cuisines:selectedCuisines}),
    //         })
    //         .then(response => response.json())
    //         .then(data => {
    //             // Handle the response data
    //             console.log(data);
    //             //setPlaces(data);
    //         })
    //         .catch(error => console.error('Error:', error));
    //     }

    // }

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
                    <button onClick={handleClick}>
                        Foodie Pick
                    </button>

                    {/* <a href='WheelPage'>
                        <button onClick={MyComponent}>
                        Foodie Pick
                        </button>
                    </a> */}
                    
                    <section id="section-id">
                    {/* Section content goes here */}
                    </section>
                </div>
             </div>
        </div>
    );
}

export default ConfigPage;
import React, { useState } from 'react';
import '../Styles/HomePage.css'

const HomePage = () => {

  const [newInput, setNewInput] = useState('');
  const [places, setPlaces] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  function debounce(func, delay) {
    let timeoutId;

    return function (...args) {
      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  }


  // handling predictions
  const handleUpdateInput = (events) => {
    const updatedInput = events.target.value
    setNewInput(updatedInput);

    if (updatedInput !== '') {
      debounce(fetch_prediction(updatedInput), 2000)
    }
  }

  const fetch_prediction = (input) => {
    fetch('http://localhost:3001/send-input', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data: input }),
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response data
        console.log(data);

        // Filter suggestions based on input value
        const filteredSuggestions = data.predictions.filter(item =>
          item.description.toLowerCase().includes(input.toLowerCase())
        );

        // // Set suggestions based on filtered results
        setSuggestions(filteredSuggestions.map(item => item.description))

        // // Set places with the entire data
        // setPlaces(data);

        console.log('suggestions', suggestions)
      })
      .catch(error => console.error('Error:', error));
  }

  // Handle suggestion click
  const handleSuggestionClick = (selectedValue) => {
    setNewInput(selectedValue);
    setSuggestions([]);
  };

  return (
    <header>
      <h1>FeastFinder</h1>
      <p>
        <b>Cant decide what to eat?</b><br />
        Find your location, Select your preferences, Spin the wheel
      </p>

      <form>
        <input
          value={newInput}
          onChange={handleUpdateInput}
          placeholder="Type to search..."
        />
        <button>Submit</button>
      </form>

      <ul className="dropdown-list">
        {suggestions.map((suggestion, index) => (
          <li key={index} className="dropdown-item" onClick={() => handleSuggestionClick(suggestion)}>
            {suggestion}
          </li>
        ))}
      </ul>
    </header>
  )
}

export default HomePage;

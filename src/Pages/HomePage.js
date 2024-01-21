import React, { useState } from 'react';
import '../Styles/HomePage.css'

const HomePage = () => {

  const [newInput, setNewInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState('');
  
  console.log(process.env.GOOGLE_API_KEY);

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
        // Handle the response data - place id to be used for wheelpage api call
        const filteredSuggestions = data.predictions.map(item => ([item.description, item.place_id]));

        // // Set suggestions based on filtered results
        setSuggestions(filteredSuggestions);

      })
      .catch(error => console.error('Error:', error));
  };

  // Handle suggestion click
  const handleSuggestionClick = (suggestion) => {
    const name = suggestion[0];
    const place_id = suggestion[1];
    setNewInput(name);
    setSelectedPlace(place_id);
    setSuggestions([]);
    
  };

  // submit form, passing 
  const handleSubmit = (event) => {
    event.preventDefault();
    const placeIDs = JSON.stringify(selectedPlace);
    window.location.href = `/configpage?data=${placeIDs}`;
  }

  return (
    <header>
      <h1>FeastFinder</h1>
      <p>
        <b>Cant decide what to eat?</b><br />
        Find your location, Select your preferences, Spin the wheel
      </p>

      <form onSubmit={handleSubmit}>
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
            {suggestion[0]}
          </li>
        ))}
      </ul>
    </header>
  )
}

export default HomePage;

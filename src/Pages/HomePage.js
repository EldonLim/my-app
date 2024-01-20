import React, { useState} from 'react';

const HomePage = () => {

    const [newInput, setNewInput] = useState('');
    const [places, setPlaces] = useState([]);

    const handleUpdateInput = (events) => {
        const updatedInput = events.target.value;
        setNewInput(updatedInput);

        if (updatedInput !== ''){
            fetch('http://localhost:3001/send-string', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ data: updatedInput }),
            })
            .then(response => response.json())
            .then(data => {
                // Handle the response data
                setPlaces(data);
            })
            .catch(error => console.error('Error:', error));
        }
        
    }

    return (
        <header>
            <h1>FeastFinder</h1>
            <p>
                <b>Cant decide what to eat?</b><br/>
                Find your location, Select your preferences, Spin the wheel
            </p>
            <form>
                <input value = {newInput} onChange = {handleUpdateInput}/>
                <button>Submit</button>

            </form>
        </header>
    )
}

export default HomePage;
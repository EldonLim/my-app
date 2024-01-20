import React, { useState} from 'react';

const HomePage = () => {

    const [newInput, setNewInput] = useState('');
    const [places, setPlaces] = useState([]);

    const handleUpdateInput = (events) => {
        const updatedInput = events.target.value;
        setNewInput(updatedInput);
        
        /* fetch(`/autocomplete?input=${encodeURIComponent(updatedInput)}`)
            .then(response => response.json())
            .then(data => {
            console.log(data.predictions);
            })
        .catch(error => console.error('Error:', error));  */

        /* var responseClone; // 1
        fetch(`/autocomplete/json?input=${encodeURIComponent(updatedInput)}`)
        .then(function (response) {
            responseClone = response.clone(); // 2
            return response.json();
        })
        .then(function (data) {
            // Do something with data
        }, function (rejectionReason) { // 3
            console.log('Error parsing JSON from response:', rejectionReason, responseClone); // 4
            responseClone.text() // 5
            .then(function (bodyText) {
                console.log('Received the following instead of valid JSON:', bodyText); // 6
            });
        }); */

        console.log(fetch(`/autocomplete/json?input=${encodeURIComponent(updatedInput)}`))
        


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
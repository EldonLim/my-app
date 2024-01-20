import React, { useState } from 'react';

const HomePage = () => {

    const [newInput, setNewInput] = useState('');

    const handleUpdateInput = (events) => {
        const updatedInput = events.target.value;
        setNewInput(updatedInput);
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
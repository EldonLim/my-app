require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

const APIKey = process.env.GOOGLE_API_KEY;

app.use(express.json());
app.use(cors());

// receives user input in Home Page
app.post('/send-input', async (req, res) => {
    const { data } = req.body;

    try {
        const response = await axios.post(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${data}&components=country:sg&key=${APIKey}`, {
            data: data
        });

        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching data from external API');
    }
});

// receives user preferences from Config Page
app.post('/send-preferences', async (req, res) => {
    const { distance, cuisines } = req.body;

    try {
        const response = await axios.post(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${data}&components=country:sg&key=${APIKey}`, {
            distance: distance,
            cuisines: cuisines
        });

        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching data from external API');
    } 
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
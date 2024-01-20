const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

const GOOGLE_API_KEY = 'AIzaSyAgR361k-fk4tp3dp_pbZT1_6NE8lYERtA'; // Store your API Key here

app.use(express.json());
app.use(cors());

app.get('/autocomplete', async (req, res) => {
    const input = encodeURIComponent(req.query.input);

    console.log(input)

    if (!input) {
        return res.status(400).send('Input query is required');
    }

    try {
        const response = await axios.get(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${input}&key=${GOOGLE_API_KEY}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error fetching data from Google Places API');
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
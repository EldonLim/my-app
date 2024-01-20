const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

const GOOGLE_API_KEY = 'AIzaSyAgR361k-fk4tp3dp_pbZT1_6NE8lYERtA'; // Store your API Key here

app.use(express.json());
app.use(cors());

app.post('/send-string', async (req, res) => {
    const { data } = req.body;

    try {
        const response = await axios.post(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${data}&components=country:sg&key=${GOOGLE_API_KEY}`, {
            data: data
        });

        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching data from external API');
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
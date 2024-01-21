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

app.post('/send-nearby-input', async (req, res) => {
    const { place_id, dist, cuisines } = req.body;

    try {
        const response = await axios.post(`https://maps.googleapis.com/maps/api/geocode/json?place_id=${place_id}&key=${APIKey}`, {
            place_id: place_id, 
            dist: int(dist) * 1000, 
            cuisines: cuisines
        });

        const lat = response.results.geometry.location.lat;
        const long = response.results.geometry.location.long;

        console.log(lat, long)

        const nearby_response = await axios.post('https://places.googleapis.com/v1/places:searchNearby', {
            includedTypes: ["restaurant"],
            maxResultCount: 12,
            locationRestriction: {
                circle: {
                    center: {
                        latitude: lat,
                        longitude: long
                    },
                    radius: dist
                }
            }
        }, {
            headers: {
                'Content-Type': 'application/json',
                'X-Goog-Api-Key': APIKey, // Replace with your API key
                'X-Goog-FieldMask': 'places.displayName'
            }
        });

        res.json(nearby_response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching data from external API');
    }
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
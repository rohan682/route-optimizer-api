require('dotenv').config(); // ✅ Load environment variables

const axios = require('axios');
const RouteRequest = require('../models/RouteRequest');

const GOOGLE_API_KEY = process.env.GOOGLE_MAPS_API_KEY;

exports.optimizeRoute = async (req, res) => {
  const { origin, destinations } = req.body;

  if (!origin || !destinations || !Array.isArray(destinations)) {
    return res.status(400).json({ error: 'Invalid input data' });
  }

  try {
    console.log("Using Google API Key:", GOOGLE_API_KEY);

    const response = await axios.get('https://maps.googleapis.com/maps/api/distancematrix/json', {
      params: {
        origins: origin,
        destinations: destinations.join('|'),
        key: GOOGLE_API_KEY,
      }
    });

    // DEBUG: Log full response from Google API
    console.log('Google API response:', JSON.stringify(response.data, null, 2));

    // Defensive checks before accessing data
    if (!response.data.rows || !response.data.rows[0] || !response.data.rows[0].elements) {
      return res.status(400).json({ error: 'No distance data found for the given addresses.' });
    }

    const distances = response.data.rows[0].elements;

    const combined = destinations.map((address, index) => {
      const element = distances[index];
      if (element.status !== 'OK') {
        throw new Error(`Google Maps API returned status '${element.status}' for destination '${address}'`);
      }
      return {
        address,
        distance: element.distance.value,
        duration: element.duration.value
      };
    });

    const sorted = combined.sort((a, b) => a.distance - b.distance);

    const route = {
      origin,
      optimizedRoute: sorted.map(loc => loc.address),
      timestamp: new Date()
    };

    await RouteRequest.create(route);

    res.json({
      origin,
      optimizedRoute: route.optimizedRoute
    });
  } catch (error) {
    console.error('Error optimizing route:', error.message);
    res.status(500).json({ error: 'Failed to optimize route', details: error.message });
  }
};
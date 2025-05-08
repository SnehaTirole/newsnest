require("dotenv").config();
const express = require('express');
const fetch = require('node-fetch'); // Use version 2
const router = express.Router();

const API_KEY =process.env.API_KEY ;


router.get('/', async (req, res) => {
  const query = req.query.q || 'india';
  try {
   // const response = await axios.get(`${NEWS_API_URL}?q=${query}&apiKey=${NEWS_API_KEY}`);
    const response = await fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`);
    const data = await response.json();
    
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch news' });
  }
});

module.exports = router;


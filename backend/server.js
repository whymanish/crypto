const express = require('express');
const cors = require('cors'); // Import the cors package
const axios = require('axios');

const app = express();
const PORT = 3001;

app.use(cors()); // Use the cors middleware

app.get('/api/coinData', async (req, res) => {
    try {
      const response = await axios.get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en'
      );
      res.json(response.data);
    } catch (error) {
      console.error('Error fetching data from CoinGecko:', error);
      res.status(500).json({ error: 'Error fetching data' });
    }
  });
  

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

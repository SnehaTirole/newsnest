const express = require('express');
const cors = require('cors');
const newsRoutes = require('./routes/news');

const app = express();

app.use(cors());
app.use('/api/news', newsRoutes);

app.listen(5000, () => {
  console.log('Server running at http://localhost:5000');
});

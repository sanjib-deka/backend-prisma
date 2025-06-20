const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'Backend is running',
    timestamp: new Date()
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
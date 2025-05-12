const express = require('express');
const app = express();

// Basic route
app.get('/', (req, res) => {
  res.status(200).send('Hello, world!');
});

// Server setup
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;  // Export the app for testing


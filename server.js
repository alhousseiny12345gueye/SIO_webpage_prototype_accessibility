// server.js
const express = require('express');

// Create an express application
const app = express();

// Specify the port to listen on
const port = 80;

// Define a route for the root path
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/app/index.html'));
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

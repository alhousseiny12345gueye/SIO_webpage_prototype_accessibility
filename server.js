// server.js
const express = require('express');
const path = require('path'); // Import the path module

// Create an express application
const app = express();

// Specify the port to listen on
const port = 80;

// Define the route for the root path
app.get('/', (req, res) => {
  // Replace 'public/index.html' with the actual path to your HTML file
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

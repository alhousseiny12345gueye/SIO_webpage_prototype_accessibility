const express = require('express');

// Create an express application
const app = express();

// Specify the port to listen on
const port = 80;

// Define the route for the root path
app.get('/', (req, res) => {
  // Since index.html is in the same directory as your server.js file, you can reference it directly
  res.sendFile(__dirname + '/index.html');
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

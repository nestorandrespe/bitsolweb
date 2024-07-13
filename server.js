const express = require('express');
const app = express();
const port = 4000;

// Serve static files from the root directory
app.use(express.static('.'));

// Define a route for the home page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html'); // Assuming there's an index.html in the root directory
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
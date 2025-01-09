const express = require('express');
const app = express();

// Use the port provided by Azure, or default to 8080
const port = process.env.PORT || 8080;

// Middleware to parse JSON data from the request body
app.use(express.json());

// Basic route for the root URL
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Sample POST route
app.post('/data', (req, res) => {
  const { name, age } = req.body;
  res.json({
    message: `Hello ${name}, you are ${age} years old!`,
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

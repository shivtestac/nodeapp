const express = require('express');
const app = express();
const port = 3000;

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

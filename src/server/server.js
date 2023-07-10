const express = require('express');
const app = express();
const path = require('path');

// Serve the static files in the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve the 'db.json' file
app.get('/api/data', (req, res) => {
  res.sendFile(path.join(__dirname, 'db.json'));
});

// Start the server
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

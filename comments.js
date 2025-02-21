// Create web server
const express = require('express');
const app = express();
// Create a static server
app.use(express.static('public'));
// Create a route
app.get('/comments', (req, res) => {
    // Get the query string
    let query = req.query;
    // Get the value of the query string
    let value = query.value;
    // Output the value
    res.send(`The value of the query string is: ${value}`);
});
// Listen on port 3000
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
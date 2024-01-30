const express = require("express");
const path = require("path");
const app = express();
require("./db/conn");
const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "../public");

app.use(express.static(static_path));

// Use middleware to parse incoming POST data
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'dashboard.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.get('/QandA', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'QandA.html'));
});

// Handle form submissions
app.post('/', (req, res) => {
    // Process the form data here
    console.log(req.body); // This will log the submitted form data
    res.send('Form submitted successfully!');
});

// Start the server
app.listen(port, '0.0.0.0', () => {
    console.log(`Server is running on http://localhost:${port}`);
});

// index.js
const express = require('express');
const cors = require('cors');
const { validateFile } = require('./utils/fileHandler');

const app = express();
app.use(cors());
app.use(express.json());

// POST /bfhl Endpoint
app.post('/bfhl', (req, res) => {
    const { data, file_b64 } = req.body;

    // Extract numbers and alphabets
    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => /^[a-zA-Z]$/.test(item));
    const highestLowercase = alphabets
        .filter(char => char === char.toLowerCase())
        .sort()
        .pop() || '';

    // File validation
    const fileDetails = validateFile(file_b64);

    // Response object as per requirements
    const response = {
        is_success: true,
        user_id: 'your_name_ddmmyyyy', // Replace with your actual format e.g., 'john_doe_17091999'
        email: 'your_email@example.com', // Replace with your actual email
        roll_number: 'YourRollNumber', // Replace with your actual roll number
        numbers,
        alphabets,
        highest_lowercase_alphabet: highestLowercase ? [highestLowercase] : [],
        ...fileDetails
    };

    res.json(response);
});

// GET /bfhl Endpoint
app.get('/bfhl', (req, res) => {
    res.json({ operation_code: 1 });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

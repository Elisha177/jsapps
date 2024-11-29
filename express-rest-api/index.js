const express = require('express');
const app = express();

// Sample users data
const users = [
    { id: 1, name: "Elisha", email: "Elisha@example.com" },
    { id: 2, name: "Mahesh", email: "mahesh@example.com" },
    { id: 3, name: "NTR", email: "ntr@example.com" }
];

// Define the /users endpoint
app.get('/users', (req, res) => {
    res.json(users);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

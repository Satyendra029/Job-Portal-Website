const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Dummy user data for demonstration
const users = [
    { email: 'user@example.com', password: 'password123' }, // Example user
];

// Sign-in endpoint
app.post('/api/signin'), (req, res) => {
    const { email, password } = req.body;

    // Check if user exists
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
        return res.status(200).json({ message: 'Sign in'})
    }
}
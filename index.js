const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;


app.use(bodyParser.json());


app.get('/signup', (req, res) => {
    const { username, email, password, dateOfBirth } = req.body;


    if (!username) {
        return res.status(400).json({ error: "Username cannot be empty" });
    }

   
    if (!email) {
        return res.status(400).json({ error: "Email cannot be empty" });
    }

    if (!password) {
        return res.status(400).json({ error: "Password cannot be empty" });
    }
    if (password.length < 8 || password.length > 16) {
        return res.status(400).json({ error: "Password must be between 8 and 16 characters" });
    }

   
    if (!dateOfBirth) {
        return res.status(400).json({ error: "Date of Birth cannot be empty" });
    }

  
    return res.status(201).json({ message: "User  signed up successfully!" });
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
const express = require('express');

require('dotenv').config()

const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello');
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${port}`);
});
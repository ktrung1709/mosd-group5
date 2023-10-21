const express = require('express');
require('dotenv').config();
const port = process.env.PORT || 3000;
const app = express();
app.use(express.json());

app.get('/healthcheck', (req, res) => {
    res.json({'message': 'ok'});
});

app.listen(port, '0.0.0.0', () => {
    console.log(`App is listening at http://localhost:${port}`)
});
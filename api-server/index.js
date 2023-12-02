const express = require('express');
const {SERVER} = require('./src/configs/main.config');
const db = require('./src/configs/db.config');
const session = require('express-session');

const authRoute = require('./src/routes/authentication.route');
const accountRoute = require('./src/routes/account.route');

const {verifyToken} = require('./src/utils/account.util');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/ping', (req, res) => {
    res.json({'status': 'ok'});
});

app.get('/ping-auth', verifyToken, (req, res) => {
    res.json({'status': 'ok'});
});

app.use('/auth', authRoute);
app.use('/api', accountRoute);

const port = SERVER.PORT || 3000;
app.listen(port, '0.0.0.0', () => {
    console.log(`App is listening at http://localhost:${port}`)
});
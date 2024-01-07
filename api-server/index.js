const express = require('express');
const {SERVER} = require('./src/configs/main.config');
const db = require('./src/configs/db.config');
const {verifyToken} = require('./src/utils/account.util');

const authRoute = require('./src/routes/authentication.route');
const userInfoRoute = require('./src/routes/userInfo.route');
const accountRoute = require('./src/routes/account.route');
const movieRoute = require('./src/routes/movie.route');
const feedbackRoute = require('./src/routes/feedback.route');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, Authorization');
    next();
});


app.get('/ping', (req, res) => {
    res.json({'status': 'ok'});
});

app.get('/ping-auth', verifyToken, (req, res) => {
    res.json({'status': 'ok'});
});

app.use('/auth', authRoute);
app.use('/account', accountRoute);
app.use('/movie', movieRoute);
app.use('/feedback', verifyToken, feedbackRoute);

app.use('/user', verifyToken, userInfoRoute);

const port = SERVER.PORT || 3000;
app.listen(port, '0.0.0.0', () => {
    console.log(`App is listening at http://localhost:${port}`)
});
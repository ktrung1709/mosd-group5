const accountUtils = require('../utils/account.util');
const accountService = require("../services/account.service");
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken');
const {SECRET_KEY} = require('../configs/main.config');
const { username } = require('../configs/account.config');


exports.signup = async (req, res) => {
    let username = req.body.username;
    let email = req.body.email;
    let password = req.body.password;
    const errorMsg = [];

    await accountUtils.checkIfUsernameExists(username, errorMsg);
    accountUtils.validateUsername(username, errorMsg);

    await accountUtils.checkIfEmailExists(email, errorMsg);
    accountUtils.validateEmail(email, errorMsg);

    accountUtils.validatePassword(password, errorMsg);

    if (errorMsg.length > 0) {
        res.status(400).json({status: "fail", message: errorMsg})
        return
    }

    try {
        await accountUtils.createUnactivatedUser(username, email, password);
        await accountUtils.sendActivationEmail(username, email);
        res.status(200).json({status: "ok", message: "Account created"});
    } catch (err) {
        res.status(500).json({status: "fail", message: ["Internal server error"]});
    }
}

exports.signin = async (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    console.log(`EMAIL: ${email}`)
    await accountService.getUserByUsername(username).then(user => {
        if(!user){
            res.status(400).json({ message: 'Invalid email or password' });
        }else {
            bcrypt.compare(password, user.password).then(result => {
                    if (result) {
                        console.log("Login successful!");
                        const token = jwt.sign({ id: user.id, username: user.email }, SECRET_KEY, { expiresIn: '2 days' });
                        res.status(200).json({user: {
                            email: user.email,
                            token: token,
                        }});
                    } else {
                        console.log('Invalid email or password');
                        res.status(400).json({ message: 'Invalid email or password' });
                    }
                }).catch(error => console.error('Error comparing passwords:', error));
        }
    });


}

// use JWT to auth -> maybe blacklist token when logout (implement this later)
exports.logout = async(req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.send('Error logging out');
        }
        res.send('Logged out successfully');
    });
}

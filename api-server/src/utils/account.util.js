const fs = require('fs');
const { encode } = require('html-entities');

const encryptionUtil = require('./encryption.util')
const sendEmailUtil = require('./sendmail.util')
const accountService = require('../services/account.service')
const accountConfig = require('../configs/account.config')
const jwt = require('jsonwebtoken')
const { SERVER, SECRET_KEY } = require('../configs/main.config')
const jwt = require("jsonwebtoken");


exports.checkIfUsernameExists = async (username, errorMsg) => {
    const user = await accountService.getUserByUsername(username)
    if (user) {
        errorMsg.push(accountConfig.username.existErrMsg)
    }
};

exports.validateUsername = (username, errorMsg) => {
    if (username.length < accountConfig.username.minLength || username.length > accountConfig.username.maxLength) {
        errorMsg.push(accountConfig.username.lengthErrMsg)
    }
    if (!username.match(accountConfig.username.regex)) {
        errorMsg.push(accountConfig.username.regexErrMsg)
    }
};

exports.checkIfEmailExists = async (email, errorMsg) => {
    const user = await accountService.getUserByEmail(email)
    if (user) {
        errorMsg.push(accountConfig.email.existErrMsg)
    }
};

exports.validateEmail = (email, errorMsg) => {
    if (!email.match(accountConfig.email.regex)) {
        errorMsg.push(accountConfig.email.regexErrMsg)
    }
};

exports.validatePassword = (password, errorMsg) => {
    if (password.length < accountConfig.password.minLength) {
        errorMsg.push(accountConfig.password.lengthErrMsg)
    }
    if (password.match(accountConfig.password.invalidRegex)) {
        errorMsg.push(accountConfig.password.regexErrMsg)
    }
};

exports.createUnactivatedUser = async (username, email, password) => {
    const user = {
        username: username,
        email: email,
        password: await encryptionUtil.bcryptHash(password, accountConfig.password.hashRounds),
        activated: false
    }
    await accountService.saveUser(user);
    return { username: username, email: email }
}

exports.sendActivationEmail = async (username, email) => {
    function createActivationToken() {
        return encryptionUtil.encryptData(`${username}:${email}:${Date.now()}`)
    }

    function doSendActivationEmail(err, html) {
        if (err) {
            console.log(err);
            throw err;
        }

        if (!html.includes("${username}") || !html.includes("${activation_link}")) {
            throw new Error("Bad activation email template");
        }

        html = html.replaceAll('${username}', encode(username));

        let activateLink = `http://${SERVER.HOST}:${SERVER.PORT}/activate?token=${createActivationToken()}`;
        html = html.replaceAll('${activation_link}', encode(activateLink));

        sendEmailUtil.sendEmail(accountConfig.activation.fromEmail, email, accountConfig.activation.emailSubject, html);
    }

    fs.readFile('src/templates/activation-email.html', 'utf8', doSendActivationEmail)
}

exports.verifyToken = async (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Forbidden' });
        }
        accountService.getUserByUsername(user.username).then(userFound => {
            if (!userFound) {
                return res.status(400).json({ message: 'Not found user' });
            }
            req.user = userFound;
            next();
        }).catch(err => console.log(err))
    });
}


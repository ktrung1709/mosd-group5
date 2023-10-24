const fs = require('fs');

const encryptionUtil = require('./encryption.util')
const sendEmailUtil = require('./sendmail.util')
const accountService = require('../services/account.service')
const accountConfig = require('../configs/account.config')
const {SERVER} = require('../configs/main.config')
const {bcryptHash} = require("./encryption.util");

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
    if (username.match(accountConfig.username.regex)) {
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
    // TODO: create User model
    const user = new User({
        username: username,
        email: email,
        password: bcryptHash(password, accountConfig.password.hashRounds),
        activated: false
    })
    await user.save()
    return user
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

        if (!"${username}" in html || !"${activation_link}" in html) {
            throw new Error("Bad activation email template");
        }

        html = html.replace('${username}', username);

        let activateLink = `http://${SERVER.HOST}:${SERVER.PORT}/activate?token=${createActivationToken()}`;
        html = html.replace('${activation_link}', activateLink);

        sendEmailUtil.sendEmail(accountConfig.activation.fromEmail, email, accountConfig.activation.emailSubject, html);
    }

    fs.readFile('../templates/activation-email.html', 'utf8', doSendActivationEmail)
}


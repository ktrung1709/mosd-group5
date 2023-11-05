const accountUtils = require('../utils/account.util');
const accountConfig = require('../configs/account.config')
const {bcryptHash} = require("./encryption.util");

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
        return {status: "ok", message: ["Account created"]};
    } catch (err) {
        res.status(500).json({status: "fail", message: ["Internal server error"]});
    }
}

exports.signin = async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    const errorMsg = [];

    await accountUtils.checkIfEmailExists(email, errorMsg);

    if (errorMsg.indexOf(accountConfig.email.existErrMsg) < 0) {
        res.status(400).json({status: "fail", message: "Login failed"})
        return
    }

}

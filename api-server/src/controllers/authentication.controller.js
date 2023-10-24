accountUtils = require('../utils/account.util');


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
        res.status(400).json({message: errorMsg})
        return
    }

    try {
        await accountUtils.createUnactivatedUser(username, email, password);
        await accountUtils.sendActivationEmail(username, email);
    } catch (err) {
        res.status(500).json({message: ["Internal server error"]});
    }
}

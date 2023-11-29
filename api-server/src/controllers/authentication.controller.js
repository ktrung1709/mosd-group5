const accountUtils = require('../utils/account.util');
const accountConfig = require('../configs/account.config');
const accountService = require("../services/account.service");

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

    await accountService.checkPassword(email).then(user => {
        if(!user){
            res.status(400).json({ message: 'Invalid email or password' });
        }else {
            bcrypt.compare(password, user.password).then(result => {
                if (result) {
                    console.log("Login successful!");
                    res.status(200).json({user: {
                            email: user.email,
                            username: user.username,
                        }});
                } else {
                    console.log('Invalid email or password');
                    res.status(400).json({ message: 'Invalid email or password' });
                }
            }).catch(error => console.error('Error comparing passwords:', error));
        }
    });


}

const encryptionUtil = require("../utils/encryption.util");
const accountService = require("../services/account.service");
const accountConfig = require("../configs/account.config");

exports.activate = async (req, res) => {
    function checkDate(timestamp) {
        let diff = Date.now() - timestamp;
        return diff < accountConfig.activation.expireTime;
    }

    let token = req.body.token;
    let decryptedToken = encryptionUtil.decryptData(token);
    let [username, email, timestamp] = decryptedToken.split(":");
    let user = await accountService.getUserByUsernameAndEmail(username, email)
    if (!user || user.activated || !checkDate(timestamp)) {
        res.status(400).json({status: "fail", message: ["Invalid token"]});
        return;
    }
    user.activated = true
    await accountService.saveUser(user);

    return res.status(200).json({status: "ok", message: ["Account activated"]});
}


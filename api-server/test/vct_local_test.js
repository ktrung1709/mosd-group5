require('dotenv').config({path: `${__dirname}/../.env`})
const db = require('../src/configs/db.config');

const {validatePassword} = require("../src/utils/account.util");
const accountUtils = require("../src/utils/account.util");



function testValidatePassword() {
    const errorMsg = [];
    validatePassword("A123$4v56", errorMsg);
    console.log(errorMsg);
}

async function testCreateUnactivatedUser() {
    const user = {
        username: "testtt",
        email: "abc@abc.com",
        password: "A123$4v56"
    }
    const errorMsg = [];

    const {username, email, password} = user;

    await accountUtils.checkIfUsernameExists(username, errorMsg);
    accountUtils.validateUsername(username, errorMsg);

    await accountUtils.checkIfEmailExists(email, errorMsg);
    accountUtils.validateEmail(email, errorMsg);

    accountUtils.validatePassword(password, errorMsg);

    if (errorMsg.length > 0) {
        console.error({status: "fail", message: errorMsg})
        return
    }

    try {
        await accountUtils.createUnactivatedUser(username, email, password);
        await accountUtils.sendActivationEmail(username, email);
        return {status: "ok", message: ["Account created"]};
    } catch (err) {
        console.error({status: "fail", message: ["Internal server error"]});
    }
}

// nothing

testCreateUnactivatedUser().then(r => console.log(r));
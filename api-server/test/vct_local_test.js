require('dotenv').config({ path: `${__dirname}/../.env` })

const {validatePassword} = require("../src/utils/account.util");


function testValidatePassword() {
    const errorMsg = [];
    validatePassword("A123$4v56", errorMsg);
    console.log(errorMsg);
}

testValidatePassword();
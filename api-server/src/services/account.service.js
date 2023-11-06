let userModel = require("../models/user.model")

exports.saveUser = async (user) => {
    throw new Error("Not implemented");
};
exports.getUserByUsernameAndEmail = async (username, email) => {
    throw new Error("Not implemented");
};
exports.getUserByEmail = async (email) => {
    return userModel.findOne({email : email});
}
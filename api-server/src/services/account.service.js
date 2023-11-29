let userModel = require("../models/user.model")

exports.getUserByUsername = async username => {
    throw new Error("Not implemented");
};

exports.saveUser = (user) => {
    throw new Error("Not implemented");
};
exports.getUserByUsernameAndEmail = (username, email) => {
    throw new Error("Not implemented");
};
exports.getUserByEmail = async (email) => {
    return userModel.findOne({email : email});
}
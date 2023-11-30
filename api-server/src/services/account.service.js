let userModel = require("../models/user.model")

exports.saveUser = async (user) => {
    return await userModel.create(user);
};
exports.getUserByUsernameAndEmail = async (username, email) => {
    throw new Error("Not implemented");
};

exports.getUserByUsername = async(username) => {
    return await userModel.findOne({username: username});
}

exports.getUserByEmail = async (email) => {
    return await userModel.findOne({email : email});
}
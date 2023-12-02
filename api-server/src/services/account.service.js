let User = require("../models/user.model")

exports.getUserByUsername = async username => {
    return User.findOne({username: username});
};

exports.saveUser = (user) => {
    let newUser = new User(user);
    return newUser.save();
};
exports.getUserByUsername = (username) => {
    return User.findOne({username: username});
};
exports.getUserByEmail = async (email) => {
    return User.findOne({email: email});
}
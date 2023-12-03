let User = require("../models/user.model")

exports.getInfo = async (userId) => {
    return await User.findById(userId);
};

exports.getMovies = async(userId) => {
    await User.findById(userId).select("recent_view favorite watch_list").then(user => {
        return user;
    }).catch(error => console.log(error));
}

exports.getFavorite = async (userId) => {
    await User.findById(userId).select("favorite").then(user => {
        return user;
    }).catch(error => console.log(error));
};

exports.getRecent = async (userId) => {
    await User.findById(userId).select("recent_view").then(user => {
        return user;
    }).catch(error => console.log(error));
};

exports.getListInfo = async (userId, watchListName) => {
    await User.findById(userId).select('watch_list').where('watch_list.name').equals(watchListName).then(user => {
        return user;
    }).catch(error => console.log(error));
};

exports.getLists = async (userId) => {
    await User.findById(userId).select("watch_list.name").then(user => {
        return user;
    }).catch(error => console.log(error));
}
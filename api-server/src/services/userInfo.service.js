let User = require("../models/user.model")

exports.getInfo = async (userId) => {
    return await User.findById(userId).select("-password");
};

exports.getMovies = async (userId) => {
    return await User.findById(userId).select("recent_view favorite watch_list");
}

exports.getFavorite = async (userId) => {
    return await User.findById(userId).select("favorite");
};

exports.getRecent = async (userId) => {
    return await User.findById(userId).select("recent_view");
};

exports.getListInfo = async (userId, watchListName) => {
    return await User.findById(userId).select('watch_list').where('watch_list.list_name').equals(watchListName);
};

exports.getLists = async (userId) => {
    return await User.findById(userId).select("watch_list.list_name");
}

exports.addToFavorite = async (userId, movieId) => {
    const user = await User.findById(userId);

    if (!user) {
        throw new Error("User not found");
    }

    if (user.favorite.includes(movieId)) {
        throw new Error("Movie exist");
    }

    user.favorite.push(movieId);
    const updatedUser = await user.save();
    return updatedUser;
};

exports.addToRecent = async (userId, movieId) => {
    const user = await User.findById(userId);

    if (!user) {
        throw new Error("User not found");
    }

    if (user.recent_view.includes(movieId)) {
        throw new Error("Movie exist");
    }

    user.recent_view.push(movieId);
    const updatedUser = await user.save();
    return updatedUser;
}

exports.addToList = async (userId, movieId, listName) => {
    return await User.updateOne({
        _id: userId,
        'watch_list.list_name': listName,
    },
        {
            $addToSet: {
                'watch_list.$.movie_ids': movieId,
            },
        },
        { new: true });
}

exports.createList = async (userId, listName) => {
    return await User.findByIdAndUpdate(userId, { $push: { watch_list: { list_name: listName } } }, { new: true });
}

exports.deleteList = async (userId, listName) => {
    return await User.findByIdAndUpdate(userId, { $pull: { watch_list: { list_name: listName } } }, { new: true });
}

exports.deleteFromList = async (userId, movieId, listName) => {
    return await User.updateOne({
        _id: userId,
        'watch_list.list_name': listName,
    },
        {
            $pull: {
                'watch_list.$.movie_ids': movieId,
            },
        });
}

exports.deleteFromFavorite = async (userId, movieId) => {
    return await User.findByIdAndUpdate(userId, { $pull: { favorite: movieId } }, { new: true });
}
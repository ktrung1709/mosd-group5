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
    return await User.findById(userId).select({ 'watch_list': { '$elemMatch': { 'list_name': watchListName } } });
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
    try {
        const user = await User.findById(userId);

        if (!user) {
            return { success: false, message: "User not found" };
        }

        const list = user.watch_list.find((item) => item.list_name === listName);

        if (!list) {
            return { success: false, message: "List not found" };
        }

        if (list.movies.includes(movieId)) {
            return { message: "Movie already exists in the list" };
        }

        list.movies.push(movieId);
        await user.save();

        return { success: true };
    } catch (error) {
        console.error(error);
        return { success: false, message: "Internal Server Error" };
    }
};

exports.createList = async (userId, listName) => {
    try {
        const user = await User.findById(userId);

        if (!user) {
            return { success: false, message: "User not found" };
        }

        const list = user.watch_list
        console.log(list)

        if (list?.find(item => item.list_name === listName)) {
            return { message: "List exists already" };
        }
        await User.findByIdAndUpdate(userId, { $push: { watch_list: { list_name: listName } } }, { new: true });
        return { success: true };
    } catch (error) {
        console.error(error);
        return { success: false, message: "Internal Server Error" };
    }
}

exports.deleteList = async (userId, listName) => {
    return await User.findByIdAndUpdate(userId, { $pull: { watch_list: { list_name: listName } } }, { new: true });
}

exports.deleteFromList = async (userId, movieId, listName) => {
    try {
        const user = await User.findById(userId);

        if (!user) {
            return { success: false, message: "User not found" };
        }

        const list = user.watch_list.find((item) => item.list_name === listName);

        if (!list) {
            return { success: false, message: "List not found" };
        }

        if (!list.movies.includes(movieId)) {
            return { message: "Movie is not exists in the list" };
        }

        list.movies.pop(movieId);
        await user.save();

        return { success: true };
    } catch (error) {
        console.error(error);
        return { success: false, message: "Internal Server Error" };
    }
};

exports.deleteFromFavorite = async (userId, movieId) => {
    return await User.findByIdAndUpdate(userId, { $pull: { favorite: movieId } }, { new: true });
}


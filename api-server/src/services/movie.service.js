const Movie = require("../models/movie.model")

exports.getAllMovie = async () => {
    return Movie.find();
}

exports.searchMovieByTitlePartial = async (category) => {
    return Movie.find({name: {$regex: category}});
}

exports.searchMovieByGenre = async (category) => {
    return Movie.find({categories: category});
}

exports.searchMovieByAttributesPartial = async (options, limit, page) => {
    return Movie.find(options).limit(limit).skip((page - 1) * limit);
}
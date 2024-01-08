const Movie = require("../models/movie.model")


exports.getMovieInfo = async (movieId) => {
    return await Movie.findById(movieId);
}

exports.searchMovieByAttributesPartial = async (options, limit, page, sort) => {
    return Movie.find(options).sort(sort).limit(limit).skip((page - 1) * limit);
}
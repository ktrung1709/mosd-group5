let Movie = require("../models/movies.model")

exports.getMovieInfo = async (movieId) => {
    return await Movie.findById(movieId);
}


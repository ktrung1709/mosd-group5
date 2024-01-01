const movieService = require('../services/movie.service');

exports.getMovie = async (req, res) => {
    let name = req.query.name ?? null;
    let category = req.query.category ?? null;
    let year = req.query.year ?? null;
    // {
    //     title: {$regex: title},
    //     genre: genre,
    //     releaseDate: {
    //         $gte: new Date(year, 0, 1),
    //         $lte: new Date(year, 11, 31)
    //     }
    // }
    let options = {};
    if (name) {
        options.name = { $regex: name, $options: 'i' };
    }
    if (category) {
        options.categories = { $in: [new RegExp(`^${category}$`, 'i')] };
    }
    if (year) {
        options.year = year;
    }

    console.log("options: ", options)
    let movies = await movieService.searchMovieByAttributesPartial(options);
    res.json(movies);
}
const movieService = require('../services/movie.service');

exports.getMovie = async (req, res) => {
    let name = req.query.name ?? null;
    let category = req.query.category?? null;
    let year = req.query.year ?? null;
    let lang= req.query.lang ?? null;
    let before2012 = req.query.b2012 ?? null;
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
        options.name = {$regex: name, $options: 'i'};
    }
    if (category) {
        options.categories = {$in: RegExp(`^${category}$`, 'i')};
    }
    if (year) {
        options.year = year;
    }
    if (lang) {
        options.language = lang;
    }
    if (before2012) {
        options.year = {$lt: 2012};
    }
    let movies = await movieService.searchMovieByAttributesPartial(options);
    res.json(movies);
}
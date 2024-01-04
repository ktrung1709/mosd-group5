const movieService = require('../services/movie.service');

exports.getMovie = async (req, res) => {
    let name = req.query.name ?? null;
    let category = req.query.category ?? null;
    let year = req.query.year ?? null;
    let lang = req.query.language ?? null;
    let before2012 = req.query.b2012 ?? null;

    let limit = req.query.limit ?? 10;
    let page = req.query.page ?? 1;

    let getTopRate = req.query.top ?? null;
    let getLatest = req.query.latest ?? null;

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
    if (lang) {
        options.language = lang;
    }
    if (before2012) {
        options.year = { $lt: 2012 };
    }

    if (limit < 1 || limit > 100) {
        limit = 10;
    }
    if (page < 1) {
        page = 1;
    }

    let sort = {};
    if (getLatest) {
        sort.year = -1;
    }
    if (getTopRate) {
        sort.rate = -1;
    }

    let movies = await movieService.searchMovieByAttributesPartial(options, limit, page, sort);
    res.json(movies);
}

exports.getTopRate = async (req, res) => {
    req.query.top = true;
    req.query.limit = 6;
    this.getMovie(req, res);
};

exports.getLatest = async (req, res) => {
    req.query.latest = true;
    req.query.limit = 4;
    this.getMovie(req, res);
};
require('dotenv').config({path: `${__dirname}/../.env`})
const db = require('../src/configs/db.config');
const service = require('../src/services/movie.service');

async function testGetAllMovie() {
    const movies = await service.getAllMovie();
    console.log(movies);
}

async function testSearchMovieByName() {
    const movies = await service.searchMovieByTitlePartial("Inc");
    console.log(movies);
}

async function testSearchMovieByGenre() {
    const movies = await service.searchMovieByGenre("Action");
    console.log(movies);
}

async function testSearchMovieByAttributes() {
    let name = "Inc"
    let category = "Actio"
    let year = 2011
    let options = {};
    if (name) {
        options.name = {$regex: name};
    }
    if (category) {
        options.categories = {$in: RegExp(`^${category}$`, 'i')};
    }
    if (year) {
        options.releaseDate = {
            $gte: new Date(year, 0, 1),
            $lte: new Date(year, 11, 31)
        }
    }
    const movies = await service.searchMovieByAttributesPartial(options);
    console.log(movies);
}

// testSearchMovieByName()
// testSearchMovieByGenre()
// testGetAllMovie()
testSearchMovieByAttributes()
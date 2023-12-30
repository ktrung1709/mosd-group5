const movieService = require('../services/movie.service');
const express = require("express");
const bodyParser = require("body-parser")
const Movie = require("../models/movie.model")
const Feedback = require("../models/feedback.model")
const jwt = require('jsonwebtoken');
const jwtSecret = 'awuichaiuwchasasdwd123';

exports.getMovie = async (req, res) => {
    let name = req.query.name ?? null;
    let category = req.query.category?? null;
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
        options.name = {$regex: name, $options: 'i'};
    }
    if (category) {
        options.categories = {$in: RegExp(`^${category}$`, 'i')};
    }
    if (year) {
        options.year = year;
    }
    let movies = await movieService.searchMovieByAttributesPartial(options);
    res.json(movies);
}

/* exports.getComments = async (req, res) => {
    try {
      const movies = await Movie.find({ filmId: req.params.filmId });
      res.json(movies);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
};

exports.createMovieReview = async (req, res) => {
    const { rating, comment } = req.body;
    try {
        const movie = await Movie.findById(req.params.id);

        if(movie) {
            const review = {
                name: req.user.username,
                rating,
                comment,
            }
        movie.reviews.push(review);    
        
        await movie.save()
        res.status(201).json({
            message: "OK"
        })
        } else {
            res.status(404);
            throw new Error("Not found")
        }
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}
 */

exports.postFeedback = async (req, res) => {
    const { token } = req.cookies;
    const { movie, comment, rate } = req.body;
    jwt.verify(token, jwtSecret, {}, async (err, userData) => {
        if (err) {
            throw err;
        }
        const feedbackDoc = await Feedback.findOne({ movie: movie });
        if (feedbackDoc) {
            const updatedFeedbackDoc = await Feedback.findOneAndUpdate(
                { movie: movie },
                {
                    $push: {
                        feedback: {
                            user: userData.id,
                            comment,
                            rate,
                        },
                    },
                },
            );
            const feedbackCount = updatedFeedbackDoc.feedback.length;
            const newRating =
                (updatedFeedbackDoc.rating * feedbackCount + rate) /
                (feedbackCount + 1);
            updatedFeedbackDoc.rating = newRating;
            await updatedFeedbackDoc.save();
            res.json(updatedFeedbackDoc);
        } else {
            const newFeedbackDoc = await Feedback.create({
                movie: movie,
                rating: rate,
                feedback: {
                    user: userData.id,
                    comment,
                    rate,
                },
            });
            res.json(newFeedbackDoc);
        }
    });
}

exports.getFeedback = async (req, res) => {
    const { id } = req.params;
    res.json(
        await Feedback.find({ movie: id })
            .populate('movie')
            .populate('feedback.user'),
    );
}
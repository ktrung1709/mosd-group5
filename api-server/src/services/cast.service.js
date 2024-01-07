const Cast = require('../models/cast.model')

exports.getCastByFullName = async (fullName) => {
    try {
        const cast = await Cast.findOne({ fullName }).populate('films');
        return cast;
    } catch (error) {
        throw error;
    }
};
const castService = require('../services/cast.service');

exports.getCastByFullName = async (req, res) => {
    try {
        const fullName = req.body.fullName;
        const cast = await castService.getCastByFullName(fullName);

        if (!cast) {
            return res.status(404).json({ message: 'Cast not found' });
        }

        res.json(cast);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

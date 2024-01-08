import PropTypes from "prop-types"

export const moviePropTypes = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  rate: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  time: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  videoUrl: PropTypes.string.isRequired,
  cast: PropTypes.arrayOf(PropTypes.object).isRequired,
  comment: PropTypes.arrayOf(PropTypes.string),
  director: PropTypes.arrayOf(PropTypes.string).isRequired,
});

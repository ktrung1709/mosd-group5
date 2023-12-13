import PropTypes from "prop-types";

export const moviePropTypes = PropTypes.shape({
  image: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  time: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
});

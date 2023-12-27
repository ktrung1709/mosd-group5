import PropTypes from "prop-types"
import { Types } from "mongoose"; 

export const moviePropTypes = PropTypes.shape({
  _id: PropTypes.instanceOf(Types.ObjectId).isRequired,
  image: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  time: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
});

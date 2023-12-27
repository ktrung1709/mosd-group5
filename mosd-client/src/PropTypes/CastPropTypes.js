import PropTypes from "prop-types";
import { Types } from "mongoose"; 
import { moviePropTypes } from "./MoviePropTypes";

export const castPropTypes = PropTypes.shape({
  _id: PropTypes.instanceOf(Types.ObjectId).isRequired,
  image: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
  birth: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  nationality: PropTypes.string.isRequired,
  films: PropTypes.arrayOf(moviePropTypes.instanceOf).isRequired,
});

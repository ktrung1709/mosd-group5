import PropTypes from "prop-types";
import { Types } from "mongoose"; 

export const categoryPropTypes = PropTypes.shape({
  _id: PropTypes.instanceOf(Types.ObjectId).isRequired,
  title: PropTypes.string.isRequired,
  totalFilms: PropTypes.number.isRequired,
});
